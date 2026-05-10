// Task 18.3 — Avatar component
// Shows a profile image or falls back to initials
function Avatar({ name = 'User', src, size = 'medium' }) {
  const initial = name.charAt(0).toUpperCase();

  return (
    <div className={`avatar avatar-${size}`}>
      {src ? (
        <img src={src} alt={name} className="avatar-img" />
      ) : (
        <span className="avatar-initial">{initial}</span>
      )}
    </div>
  );
}

export default Avatar;