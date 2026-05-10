// Task 17.4 — Error state component with optional retry button
function ErrorMessage({ message, onRetry }) {
  return (
    <div className="error-message">
      <span className="error-icon">⚠️</span>
      <p>{message || 'Something went wrong.'}</p>
      {onRetry && (
        <button className="btn btn-secondary btn-small" onClick={onRetry}>
          Try Again
        </button>
      )}
    </div>
  );
}

export default ErrorMessage;