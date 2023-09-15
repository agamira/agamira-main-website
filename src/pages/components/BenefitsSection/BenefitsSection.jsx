import { Button } from "../../../components";
import "./BenefitsSection.scss";
import tabletGuy from "../../../assets/img/tablet-guy.png";

const BenefitsSection = () => {
  return (
    <section className="benefits">
      <div className="container">
        <div className="benefits-content">
          <div className="benefits-content__text">
            <h3>Benefits for Investors:</h3>
            <h2>
              Discover the Power of Agamira's Virtual Financial Assistant:
            </h2>
            <ol>
              <li>
                <span>
                  Enhanced Decision-making: Agamira's virtual financial
                  assistant empowers investors with data-driven insights,
                  enabling them to make informed decisions with confidence.
                </span>
              </li>
              <li>
                <span>
                  Optimize Portfolio Performance: Harness the power of Agamira's
                  advanced algorithms to optimize your investment portfolio.
                </span>
              </li>
              <li>
                <span>
                  Mitigate Risks Effectively: Agamira's virtual financial
                  assistant offers dynamic risk management tools, monitoring
                  market conditions and providing proactive risk assessments.
                </span>
              </li>
            </ol>
            <Button className={"btn btn--primary"}>Get Started</Button>
          </div>
          <div className="benefits-content__image">
            <img src={tabletGuy} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export { BenefitsSection };
