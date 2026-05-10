import { useNavigate } from 'react-router-dom';
import useForm from '../hooks/useForm';

// Validation function passed into useForm
function validate(values) {
  const errors = {};
  if (!values.title.trim()) errors.title = 'Title is required';
  if (values.title.length > 100) errors.title = 'Title must be under 100 characters';
  if (!values.body.trim()) errors.body = 'Content is required';
  if (values.body.length < 20) errors.body = 'Content must be at least 20 characters';
  return errors;
}

function CreatePost({ onCreatePost }) {
  // Task 17.3 — useNavigate for programmatic redirect after submit
  const navigate = useNavigate();

  // Task 18.1 — useForm hook manages all form state
  const { values, errors, touched, handleChange, handleBlur, reset, validateAll } =
    useForm({ title: '', author: '', body: '' }, validate);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateAll()) return; // Stop if validation fails

    const newPost = {
      id: Date.now(),
      title: values.title,
      excerpt: values.body.slice(0, 100) + '...',
      body: values.body,
      author: values.author || 'Anonymous',
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      likes: 0,
    };

    onCreatePost?.(newPost);
    reset();
    navigate('/posts'); // Redirect to posts list after submit
  };

  return (
    <div className="page create-post-page">
      <h1>Create New Post ✏️</h1>

      <form onSubmit={handleSubmit} className="create-post-form-wrapper">

        {/* Title field */}
        <div className="input-group">
          <label className="input-label" htmlFor="title">Title *</label>
          <input
            id="title"
            name="title"
            className={`input ${touched.title && errors.title ? 'input-error' : ''}`}
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Give your post a title"
          />
          {touched.title && errors.title && (
            <span className="field-error">{errors.title}</span>
          )}
        </div>

        {/* Author field */}
        <div className="input-group">
          <label className="input-label" htmlFor="author">Your Name (optional)</label>
          <input
            id="author"
            name="author"
            className="input"
            value={values.author}
            onChange={handleChange}
            placeholder="Anonymous"
          />
        </div>

        {/* Body field */}
        <div className="input-group">
          <label className="input-label" htmlFor="body">Content *</label>
          <textarea
            id="body"
            name="body"
            className={`input ${touched.body && errors.body ? 'input-error' : ''}`}
            value={values.body}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Write your post content here..."
            rows={6}
          />
          {touched.body && errors.body && (
            <span className="field-error">{errors.body}</span>
          )}
        </div>

        <div className="create-post-actions">
          <button type="submit" className="btn btn-primary">Publish Post</button>
          <button type="button" className="btn btn-secondary" onClick={() => navigate('/posts')}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreatePost;