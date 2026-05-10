import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Day 4 — Login page for the simulated auth system
function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim()) {
      setError('Please enter a username');
      return;
    }
    onLogin(username.trim()); // Store username in parent state
    navigate('/profile');     // Redirect to protected profile page
  };

  return (
    <div className="page login-page">
      <div className="login-box">
        <h1>Welcome Back 👋</h1>
        <p>Sign in to access your profile and create posts.</p>

        <form onSubmit={handleSubmit} className="create-post-form">
          <div className="input-group">
            <label className="input-label" htmlFor="username">Username</label>
            <input
              id="username"
              className="input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter any username"
              autoFocus
            />
            {error && <span className="field-error">{error}</span>}
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;