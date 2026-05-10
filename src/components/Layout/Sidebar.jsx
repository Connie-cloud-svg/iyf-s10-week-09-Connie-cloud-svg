function Sidebar({ posts = [] }) {
  // Pick the top 3 posts by likes for "Popular Posts"
  const popularPosts = [...posts]
    .sort((a, b) => b.likes - a.likes)
    .slice(0, 3);

  const tags = ["React", "JavaScript", "CSS", "Web Dev", "Tutorial", "Tips"];

  return (
    <aside className="sidebar">
      {/* About section */}
      <div className="sidebar-section">
        <h3>About CommunityHub</h3>
        <p>
          A place for developers to share ideas, ask questions, and learn
          together. Join our growing community!
        </p>
      </div>

      {/* Popular Posts section */}
      <div className="sidebar-section">
        <h3>🔥 Popular Posts</h3>
        {popularPosts.length > 0 ? (
          <ul className="sidebar-list">
            {popularPosts.map((post) => (
              <li key={post.id}>
                <span>{post.title}</span>
                <span className="sidebar-likes">❤️ {post.likes}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>No posts yet!</p>
        )}
      </div>

      {/* Tags section */}
      <div className="sidebar-section">
        <h3>🏷️ Tags</h3>
        <div className="tags-container">
          {tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;