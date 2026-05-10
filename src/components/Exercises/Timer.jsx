import { useState, useEffect } from 'react';
import LoadingSpinner from '../shared/LoadingSpinner';

// API Search with debounce
function ApiSearch() {
  const [query, setQuery] = useState('');
  const [allUsers, setAllUsers] = useState([]);
  const [loading] = useState(false);
  const [debouncedQuery, setDebouncedQuery] = useState('');

  // Fetch all users once on mount
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setAllUsers(data));
  }, []);

  // Debounce: update debouncedQuery 400ms after user stops typing
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 400);

    return () => clearTimeout(timer);
  }, [query]);


  // Derive filtered list directly in render — no setState needed
  const filteredUsers = debouncedQuery.trim()
    ? allUsers.filter(user =>
        user.name.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(debouncedQuery.toLowerCase())
      )
    : allUsers;

  return (
    <div className="exercise-box">
      <h3>🔍 API Search — Day 2</h3>
      <input
        className="input"
        placeholder="Search users by name or email..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {loading && <LoadingSpinner size="small" text="Searching..." />}

      <ul className="api-search-results">
        {filteredUsers.map(user => (
          <li key={user.id} className="api-search-item">
            <strong>{user.name}</strong>
            <span>{user.email}</span>
          </li>
        ))}
        {!loading && filteredUsers.length === 0 && <li>No users found.</li>}
      </ul>
    </div>
  );
}

export default ApiSearch;