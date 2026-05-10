import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import LoadingSpinner from '../components/shared/LoadingSpinner';
import ErrorMessage from '../components/shared/ErrorMessage';

function Home() {
  // Fetch 6 recent posts for the home page preview
  const { data: posts, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=6'
  );

  return (
    <div className="page home-page">
      {/* Hero section */}
      <section className="hero">
        <h1>Welcome to CommunityHub 🌐</h1>
        <p>A place for developers to share ideas, ask questions, and grow together.</p>
        <div className="hero-actions">
          <Link to="/posts" className="btn btn-primary">Browse Posts</Link>
          <Link to="/create" className="btn btn-secondary">Create Post</Link>
        </div>
      </section>

      {/* Recent posts preview */}
      <section className="home-posts">
        <h2>Recent Posts</h2>

        {loading && <LoadingSpinner text="Fetching posts..." />}
        {error && <ErrorMessage message={error} />}

        {posts && (
          <div className="home-posts-grid">
            {posts.map(post => (
              <Link to={`/posts/${post.id}`} key={post.id} className="home-post-card">
                <h3>{post.title}</h3>
                <p>{post.body.slice(0, 80)}...</p>
              </Link>
            ))}
          </div>
        )}

        <Link to="/posts" className="btn btn-secondary home-see-all">
          See all posts →
        </Link>
      </section>
    </div>
  );
}

export default Home;