import "./Button.scss";

const Button = ({ children, ...props }) => {
  return (
    <button {...props}>
      <span>{children}</span>
    </button>
  );
};

export { Button };
