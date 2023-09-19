import "./SubscriptionForm.scss";
import { SubscribeButton } from "../";

const SubscriptionForm = () => {
  return (
    <form id="subscription-form">
      <div className="form-inputs">
        <input
          className="email-input"
          id="email-subscription-input"
          type="email"
          placeholder="Enter your email"
        />
        <SubscribeButton type="submit">Subscribe</SubscribeButton>
      </div>
    </form>
  );
};

export { SubscriptionForm };
