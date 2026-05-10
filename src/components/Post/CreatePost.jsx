import { useState } from "react";

function CreatePost ({ onCreatePost }) {
    const [formData, setFormData] = useState({
        title: "",
        content: "",
        author: ""
    });

    const [isOpen, setIsOpen] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.title.trim() || !formData.content.trim()) return;

        const newPost = {
            id: Date.now(),
            title: formData.title,
            excerpt: formData.content.slice(0, 100) + "...",
            author: formData.author || "Anonymous",
            date: new Date().toLocaleDateString ("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric"
            }),
            likes: 0,
        };

        onCreatePost(newPost);

        setFormData({ title: "", content: "", author: ""});
        setIsOpen(false);
    };

    return (
        <div className="create-post">
            {/* Toggle form visibility */}
            {!isOpen ? (
                <button className="btn btn-primary" onClick={() => setIsOpen(true)}>
                    ✏️ Create New Post
                </button>
            ) : (
                <div className="crete-post-form-wrapper">
                    <h3>New Post</h3>
                    <form onSubmit={handleSubmit} className="create-post-form">
                        <input
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="Post title"
                            className="input"
                            required
                        />
                        <input
                            name="author"
                            value={formData.author}
                            onChange={handleChange}
                            placeholder="Your name (optional"
                            className="input"
                        />
                        <textarea
                            name="content"
                            value={formData.content}
                            onChange={handleChange}
                            placeholder="Write your post content here..."
                            className="input"
                            rows={4}
                            required
                        />
                        <div className="create-post-actions">
                            <button type="submit" className="btn btn-primary">
                                Publish Post
                            </button>
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={() => setIsOpen(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}

export default CreatePost;