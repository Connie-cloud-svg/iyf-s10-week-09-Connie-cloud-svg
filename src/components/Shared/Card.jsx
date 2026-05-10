function Card({ children, title, variant = "default" }) {
  return (
    <div className={`card card-${variant}`}>
      {/* Conditional rendering: only shows header if title is provided */}
      {title && (
        <div className="card-header">
          <h3 className="card-title">{title}</h3>
        </div>
      )}
      <div className="card-body">{children}</div>
    </div>
  );
}

export default Card;