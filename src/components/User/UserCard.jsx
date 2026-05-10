function UserCard({ user }) {
  // Destructure with default values for safety
  const {
    name = "Anonymous",
    username = "unknown",
    bio = "No bio provided.",
    postCount = 0,
    joinDate = "Unknown",
    avatarInitial,
  } = user || {};

  return (
    <div className="user-card">
      {/* Avatar: uses first letter of name as placeholder */}
      <div className="user-avatar">
        {avatarInitial || name.charAt(0).toUpperCase()}
      </div>

      <div className="user-info">
        <h4 className="user-name">{name}</h4>
        <p className="user-username">@{username}</p>
        <p className="user-bio">{bio}</p>

        <div className="user-stats">
          <span>📝 {postCount} posts</span>
          <span>📅 Joined {joinDate}</span>
        </div>
      </div>
    </div>
  );
}

export default UserCard;