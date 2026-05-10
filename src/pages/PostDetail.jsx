import { useParams, Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import LoadingSpinner from '../components/shared/LoadingSpinner';
import ErrorMessage from '../components/shared/ErrorMessage';

function PostDetail() {
  // Task 17.3 — useParams pulls the :postId from the URL
  const { postId } = useParams();

  const { data: post, loading: postLoading, error: postError } =
    useFetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);

  const { data: comments, loading: commentsLoading } =
    useFetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);

  if (postLoading) return <LoadingSpinner text="Loading post..." />;
  if (postError) return <ErrorMessage message={postError} />;

  return (
    <div className="page post-detail-page">
      <Link to="/posts" className="back-link">← Back to Posts</Link>

      {post && (
        <article className="post-detail">
          <h1 className="post-detail-title">{post.title}</h1>
          <p className="post-detail-meta">👤 User {post.userId}</p>
          <p className="post-detail-body">{post.body}</p>
        </article>
      )}

      {/* Comments section */}
      <section className="comments-section">
        <h2>Comments</h2>

        {commentsLoading && <LoadingSpinner size="small" text="Loading comments..." />}

        {comments && (
          <div className="comments-list">
            {comments.map(comment => (
              <div key={comment.id} className="comment-card">
                <div className="comment-header">
                  <strong>{comment.name}</strong>
                  <span className="comment-email">{comment.email}</span>
                </div>
                <p>{comment.body}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default PostDetail;