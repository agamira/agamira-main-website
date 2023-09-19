import "./StartNowSection.scss";
import { SubscriptionForm } from "../../../components";

const StartNowSection = () => {
  return (
    <section className="start-now">
      <div className="container">
        <div className="section-title">
          <h3>Start Now</h3>
          <h2>Sign up to learn more</h2>
          <p>
            We will inform you about our latest news and updates, just once a
            week, no spam only useful tips and information.
          </p>
        </div>
        <div className="form">
          <SubscriptionForm />
        </div>
      </div>
    </section>
  );
};

export { StartNowSection };
