function PostCard ({ post, onLike, onDelete }) {
    const {id, title, exerpt, author, date, likes} = post;

    return (
        <article className="post-card">
            <div className="post-card-body">
                <h3 className="post-card-title">{title}</h3>
                <p className="post-card-exerpt">{exerpt}</p>
            </div>

            <div className="post-card-meta">
                <span>✍️ {author}</span>
                <span>📅 {date}</span>
            </div>

            <div className="post-card-actions">
                {/*like button on posts*/}
                <button className="btn btn-secondary btn-small" onClick={() => onLike(id)} >
                    ❤️ {likes} {likes === 1 ? "Like" : "Likes"}
                </button>

                {/*delete button */}
                {onDelete && (
                    <button
                    className="btn btn-danger btn-small"
                    onClick={() => onDelete(id)}
                    >
                         🗑️ Delete
                    </button>
                )}
            </div>
        </article>
    );
}

export default PostCard;