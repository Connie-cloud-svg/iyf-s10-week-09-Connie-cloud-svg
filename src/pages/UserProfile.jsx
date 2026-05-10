import { useState } from 'react';
import useFetch from '../hooks/useFetch';
import LoadingSpinner from '../components/shared/LoadingSpinner';
import ErrorMessage from '../components/shared/ErrorMessage';
import Avatar from '../components/shared/Avatar';

// Day 5 — Full User Profile page with tabbed interface
// Fetches user data, posts, and todos from JSONPlaceholder
function UserProfile({ currentUser }) {
  const [activeTab, setActiveTab] = useState('posts');

  // Fetch a sample user (user 1) to show profile data
  const { data: user, loading: userLoading, error: userError } =
    useFetch('https://jsonplaceholder.typicode.com/users/1');

  const { data: posts, loading: postsLoading } =
    useFetch('https://jsonplaceholder.typicode.com/users/1/posts');

  const { data: todos, loading: todosLoading } =
    useFetch('https://jsonplaceholder.typicode.com/users/1/todos?_limit=10');

  const tabs = ['posts', 'todos'];

  if (userLoading) return <LoadingSpinner text="Loading profile..." />;
  if (userError) return <ErrorMessage message={userError} />;

  return (
    <div className="page profile-page">
      {/* User info card */}
      {user && (
        <div className="profile-header">
          <Avatar name={currentUser || user.name} size="large" />
          <div className="profile-info">
            <h1>{currentUser || user.name}</h1>
            <p className="profile-username">@{user.username}</p>
            <p className="profile-email">📧 {user.email}</p>
            <p className="profile-company">🏢 {user.company?.name}</p>
          </div>
        </div>
      )}

      {/* Tabs */}
      <div className="tabs">
        {tabs.map(tab => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? 'tab-active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Tab content — conditional rendering */}
      <div className="tab-content">
        {activeTab === 'posts' && (
          <div>
            {postsLoading && <LoadingSpinner size="small" text="Loading posts..." />}
            {posts && posts.map(post => (
              <div key={post.id} className="post-card">
                <h3 className="post-card-title">{post.title}</h3>
                <p className="post-card-excerpt">{post.body.slice(0, 100)}...</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'todos' && (
          <div>
            {todosLoading && <LoadingSpinner size="small" text="Loading todos..." />}
            {todos && (
              <ul className="todos-list">
                {todos.map(todo => (
                  <li key={todo.id} className={`todo-item ${todo.completed ? 'todo-done' : ''}`}>
                    <span>{todo.completed ? '✅' : '⬜'}</span>
                    <span>{todo.title}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default UserProfile;