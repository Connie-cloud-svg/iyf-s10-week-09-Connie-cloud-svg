import UserCard from "./UserCard";

function UserProfile({ user, posts = [] }) {
  // Filter to show only this user's posts
  const userPosts = posts.filter((post) => post.author === user?.name);

  // Conditional rendering: if no user, show a login prompt
  if (!user) {
    return (
      <div className="user-profile-empty">
        <p>Please log in to view your profile.</p>
      </div>
    );
  }

  return (
    <div className="user-profile">
      <UserCard user={{ ...user, postCount: userPosts.length }} />

      <div className="user-profile-posts">
        <h3>Posts by {user.name}</h3>

        {userPosts.length === 0 ? (
          <p>No posts yet. Create your first one!</p>
        ) : (
          <ul className="user-post-list">
            {userPosts.map((post) => (
              <li key={post.id}>
                <strong>{post.title}</strong> — {post.date}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
    );
}

export default UserProfile;