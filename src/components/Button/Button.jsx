import "./Button.scss";

const Button = ({ children, ...props }) => {
  return (
    <button {...props}>
      <div>{children}</div>
    </button>
  );
};

export { Button };
