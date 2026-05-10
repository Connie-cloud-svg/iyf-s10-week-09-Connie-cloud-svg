import { useState } from "react";
import PostCard from "./PostCard";

function PostList({ posts, onLike, onDelete }) {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter posts based on search term (checks title and excerpt)
  const filteredPosts = posts.filter((post) => {
    const term = searchTerm.toLowerCase();
    return (
      post.title.toLowerCase().includes(term) ||
      post.excerpt.toLowerCase().includes(term) ||
      post.author.toLowerCase().includes(term)
    );
  });

  return (
    <section className="post-list-section">
      {/* Bonus: Search/filter input */}
      <div className="post-list-search">
        <input
          type="text"
          placeholder="🔍 Search posts by title, content, or author..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      {/* Show count */}
      <p className="post-list-count">
        Showing {filteredPosts.length} of {posts.length} posts
      </p>

      {/* Conditional rendering: empty state vs post list */}
      {filteredPosts.length === 0 ? (
        <div className="empty-state">
          <p>😕 No posts match your search.</p>
          <button
            className="btn btn-secondary btn-small"
            onClick={() => setSearchTerm("")}
          >
            Clear search
          </button>
        </div>
      ) : (
        <div className="post-list">
          {filteredPosts.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              onLike={onLike}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default PostList;