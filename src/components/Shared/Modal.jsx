import { useEffect } from 'react';

// Task 18.3 — Modal component using children prop
// Closes on Escape key or clicking the backdrop
function Modal({ isOpen, onClose, title, children }) {
  // Task 17.1 — useEffect for keyboard event listener with cleanup
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown); // Cleanup
  }, [isOpen, onClose]);

  // Conditional rendering: nothing rendered when closed
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      {/* Stop click from bubbling to backdrop */}
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>{title}</h3>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}

export default Modal;