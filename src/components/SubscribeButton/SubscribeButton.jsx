import "./SubscribeButton.scss";

const SubscribeButton = ({ children, ...props }) => {
  return <button id="subscribe-btn" {...props}>{children}</button>;
};

export { SubscribeButton };
