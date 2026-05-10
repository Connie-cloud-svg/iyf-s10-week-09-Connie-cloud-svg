import { Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useLocalStorage from './hooks/useLocalStorage';

// Pages
import Home from './pages/Home';
import Posts from './pages/Posts';
import PostDetail from './pages/PostDetail';
import CreatePost from './pages/CreatePost';
import About from './pages/About';
import Login from './pages/Login';
import UserProfile from './pages/UserProfile';
import NotFound from './pages/NotFound';

// Shared components
import ProtectedRoute from './components/shared/ProtectedRoute';

// Exercise components
import Timer from './components/exercises/Timer';
import ApiSearch from './components/exercises/ApiSearch';
import Tabs from './components/exercises/Tabs';

import './App.css';

// ── Layout component (wraps all pages) ─────────────────
// Task 17.3 — uses NavLink which auto-adds "active" class
function Layout({ currentUser, onLogout, children }) {
  return (
    <div className="app">
      <header className="header">
        <div className="header-brand">
          <NavLink to="/">🌐 CommunityHub</NavLink>
        </div>

        <nav className="header-nav">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
          <NavLink to="/posts" className={({ isActive }) => isActive ? 'active' : ''}>Posts</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
          <NavLink to="/exercises" className={({ isActive }) => isActive ? 'active' : ''}>Exercises</NavLink>
        </nav>

        <div className="header-user">
          {currentUser ? (
            <>
              <NavLink to="/profile" className="user-greeting">👤 {currentUser}</NavLink>
              <button className="btn btn-secondary btn-small" onClick={onLogout}>Logout</button>
            </>
          ) : (
            <NavLink to="/login" className="btn btn-primary btn-small">Login</NavLink>
          )}
        </div>
      </header>

      <main className="main-wrapper">{children}</main>

      <footer className="footer">
        <div className="footer-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/posts">Posts</NavLink>
        </div>
        <p className="footer-copy">&copy; {new Date().getFullYear()} CommunityHub. All rights reserved.</p>
      </footer>
    </div>
  );
}

// ── Exercises page (all daily challenge demos) ──────────
function Exercises() {
  const tabData = [
    { label: 'Tab One',   content: <p>Content for Tab One 🎉</p> },
    { label: 'Tab Two',   content: <p>Content for Tab Two 🚀</p> },
    { label: 'Tab Three', content: <p>Content for Tab Three 🌊</p> },
  ];

  return (
    <div className="page exercises-page">
      <h1>📚 Week 9 Daily Challenges</h1>
      <div className="exercises-grid">
        <Timer />
        <ApiSearch />
        <Tabs tabs={tabData} />
      </div>
    </div>
  );
}

// ── Main App ────────────────────────────────────────────
function App() {
  // Task 18.1 — useLocalStorage: login persists across page refreshes
  const [currentUser, setCurrentUser] = useLocalStorage('currentUser', null);
  const [localPosts, setLocalPosts] = useState([]);

  const navigate = useNavigate();

  const handleLogin  = (username) => setCurrentUser(username);
  const handleLogout = () => { setCurrentUser(null); navigate('/'); };
  const handleCreatePost = (post) => setLocalPosts(prev => [post, ...prev]);

  return (
    <Layout currentUser={currentUser} onLogout={handleLogout}>
      <Routes>
        <Route path="/"          element={<Home />} />
        <Route path="/posts"     element={<Posts />} />
        <Route path="/posts/:postId" element={<PostDetail />} />
        <Route path="/about"     element={<About />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/login"     element={<Login onLogin={handleLogin} />} />

        {/* Day 4 — Protected route: redirects to /login if not logged in */}
        <Route path="/create" element={
          <ProtectedRoute isLoggedIn={!!currentUser}>
            <CreatePost onCreatePost={handleCreatePost} />
          </ProtectedRoute>
        } />

        <Route path="/profile" element={
          <ProtectedRoute isLoggedIn={!!currentUser}>
            <UserProfile currentUser={currentUser} />
          </ProtectedRoute>
        } />

        {/* 404 catch-all */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;