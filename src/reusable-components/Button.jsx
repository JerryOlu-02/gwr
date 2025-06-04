import "./styles/Button.scss";

export default function Button({ props, className, children, link }) {
  // This is a reusable button component
  // It can be used in different parts of the application

  const classes = `btn ${className}`;

  return (
    <a href={link} className="btn__link" target="_blank" rel="noreferrer">
      <button {...props} className={classes}>
        {children}
      </button>
    </a>
  );
}
