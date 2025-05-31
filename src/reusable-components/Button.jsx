import "./styles/Button.scss";

export default function Button({ props, className, children }) {
  // This is a reusable button component
  // It can be used in different parts of the application

  const classes = `btn ${className}`;

  return (
    <button {...props} className={classes}>
      {children}
    </button>
  );
}
