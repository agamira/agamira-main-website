import { Button, Card, CardIcon } from "../../../components";
import "./GuideSection.scss";
import wallet from "../../../assets/icons/empty-wallet.svg";
import money from "../../../assets/icons/money.svg";
import shoppingCart from "../../../assets/icons/shopping-cart.svg";

const GuideSection = () => {
  return (
    <section className="guide">
      <div className="container">
        <div className="text">
          <h3>Step by step guide</h3>
          <h2>Easy Steps to Success</h2>
          <p>
            Unleash the Potential of Agamira's Personal AI Financial Assistant:
          </p>
          <p>
            Empowering Informed Decision-making and Maximizing Investment
            Potential
          </p>
        </div>
        <div className="row">
          <Card
            icon={<CardIcon logo={wallet} />}
            title={"Advanced Data Analysis:"}
            text={
              "Agamira's virtual financial assistant utilizes advanced data analysis techniques to crunch vast amounts of financial data and extract valuable insights. "
            }
          />
          <Card
            icon={<CardIcon logo={money} />}
            title={"Dynamic Risk Management:"}
            text={
              "With Agamira's virtual financial assistant, take control of your risk management strategies. Benefit from intelligent risk assessment tools that continuously monitor and analyze market conditions"
            }
          />
          <Card
            icon={<CardIcon logo={shoppingCart} />}
            title={"Personalized Recommendations:"}
            text={
              "Agamira's assistant goes beyond generic advice by providing personalized investment insights and recommendations tailored to your specific financial goals and risk tolerance."
            }
          />
        </div>
        <Button className={"btn--outline btn--arrow-right"}>Learn More</Button>
      </div>
    </section>
  );
};

export { GuideSection };
