function FormFeedback({ message, type }) {
  return (
    <p
      className={`feedback feedback-${type === 'success' ? 'exito' : 'error'}`}
      role={type === 'error' ? 'alert' : 'status'}
      aria-live="polite"
    >
      {message}
    </p>
  );
}

export default FormFeedback;
