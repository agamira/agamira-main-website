import { Card, CardIcon } from "../../../components";
import "./WhyChooseUsSection.scss";
import activity from "../../../assets/icons/activity.svg";
import unlock from "../../../assets/icons/unlock.svg";
import bootstrap from "../../../assets/icons/bootstrap.svg";
import bitcoin from "../../../assets/icons/bitcoin-convert.svg";

const WhyChooseUsSection = () => {
  return (
    <section className="why-choose-us">
      <div className="container">
        <div className="section-info">
          <h3>Why Choose Us</h3>
          <h2>Safe, guaranteed, and easy to use</h2>
          <p>
            When it comes to choosing a partner for your investment journey,
            Agamira stands out from the crowd. With a proven track record of
            delivering exceptional results
          </p>
        </div>
        <div className="row">
          <Card
            icon={<CardIcon logo={unlock} />}
            title={"Safe and secure"}
            text={
              "At Agamira, we prioritize the safety and security of your investments. We understand the importance of protecting your financial assets and personal information. "
            }
          />
          <Card
            icon={<CardIcon logo={activity} />}
            title={"Good investment"}
            text={
              "Invest with confidence and unlock your potential for financial growth with Agamira. Our platform offers a range of carefully curated investment opportunities"
            }
          />
          <Card
            icon={<CardIcon logo={bootstrap} />}
            title={"Integrated app"}
            text={
              "Our intuitive interface allows you to easily execute trades, monitor your investments, and access comprehensive analytics at your fingertips."
            }
          />
          <Card
            icon={<CardIcon logo={bitcoin} />}
            title={"Multi Currency Support"}
            text={
              "Our platform allows you to invest and transact in various currencies, providing you with flexibility and convenience."
            }
          />
        </div>
      </div>
    </section>
  );
};

export { WhyChooseUsSection };
