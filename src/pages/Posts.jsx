import { useState } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import LoadingSpinner from '../components/shared/LoadingSpinner';
import ErrorMessage from '../components/shared/ErrorMessage';

function Posts() {
  const [searchTerm, setSearchTerm] = useState('');

  // Task 17.2 — Fetch posts from JSONPlaceholder API
  const { data: posts, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/posts'
  );

  // Filter posts based on search term
  const filteredPosts = posts?.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.body.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  return (
    <div className="page posts-page">
      <div className="page-header">
        <h1>All Posts</h1>
        <Link to="/create" className="btn btn-primary btn-small">✏️ New Post</Link>
      </div>

      {/* Search input — Bonus feature */}
      <input
        className="search-input"
        type="text"
        placeholder="🔍 Search posts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {loading && <LoadingSpinner text="Loading posts..." />}
      {error && <ErrorMessage message={error} />}

      {posts && (
        <>
          <p className="post-list-count">
            Showing {filteredPosts.length} of {posts.length} posts
          </p>

          {filteredPosts.length === 0 ? (
            <div className="empty-state">
              <p>😕 No posts match your search.</p>
              <button className="btn btn-secondary btn-small" onClick={() => setSearchTerm('')}>
                Clear search
              </button>
            </div>
          ) : (
            <div className="post-list">
              {filteredPosts.map(post => (
                <article key={post.id} className="post-card">
                  <h3 className="post-card-title">
                    <Link to={`/posts/${post.id}`}>{post.title}</Link>
                  </h3>
                  <p className="post-card-excerpt">{post.body.slice(0, 120)}...</p>
                  <div className="post-card-meta">
                    <span>👤 User {post.userId}</span>
                    <Link to={`/posts/${post.id}`} className="btn btn-secondary btn-small">
                      Read more →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Posts;