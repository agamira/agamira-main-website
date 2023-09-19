import "./SubscriptionFormBig.scss";
import { SubscribeButton } from "../";

const SubscriptionFormBig = () => {
  return (
    <form id="subscription-form-big">
      <div className="form-inputs">
        <label htmlFor="email-subscription-big-input">
          Subscribe to our newsletter
        </label>
        <input
          className="email-input"
          id="email-subscription-big-input"
          type="email"
          placeholder="Enter your email"
        />
        <SubscribeButton type="submit">Subscribe</SubscribeButton>
      </div>
    </form>
  );
};

export { SubscriptionFormBig };
