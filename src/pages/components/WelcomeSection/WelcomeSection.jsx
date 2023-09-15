import "./WelcomeSection.scss";
import { Button } from "../../../components";
import mira from "../../../assets/img/mira.png";
import logo from "../../../assets/img/Polygon3.png";

const WelcomeSection = () => {
  return (
    <section className="welcome">
      <div className="container">
        <h1>Welcome to AGAMIRA An artificial intelligence-powered platform</h1>
        <p>
          Designed to help individuals to build successful businesses without
          large investments
        </p>
        <div className="mira">
          <div className="box">
            <img className="logo" src={logo} alt="" />
            <span>AGAMIRA</span>
            <img className="mira-image" src={mira} alt="" />
          </div>
          <div className="buttons">
            <Button className={"btn--outline btn--arrow-right"}>
              Learn More
            </Button>
            <Button className={"btn btn--primary"}>Get Started</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { WelcomeSection };
