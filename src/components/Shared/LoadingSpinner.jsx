// Reusable controlled input — accepts all common input props
function Input({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder = "",
  required = false,
  disabled = false,
}) {
  return (
    <div className="input-group">
      {/* Only render label if provided */}
      {label && (
        <label htmlFor={name} className="input-label">
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className="input"
      />
    </div>
  );
}

export default Input;