import "./WelcomeSection.scss";
import { Button, Image } from "../../../components";
import mira from "../../../assets/img/mira.png?format=avif;webp;jpg&as=picture";
import logo from "../../../assets/img/Polygon3.png?format=avif;webp;jpg&as=picture";

const WelcomeSection = () => {
  return (
    <section className="welcome">
      <div className="container">
        <div className="section-title">
          <h1>
            Welcome to AGAMIRA An artificial intelligence-powered platform
          </h1>
          <p>
            Designed to help individuals to build successful businesses without
            large investments
          </p>
          <div className="buttons">
            <Button className={"btn--outline btn--arrow-right"}>
              Learn More
            </Button>
            <Button className={"btn btn--primary"}>Get Started</Button>
          </div>
        </div>
        <div className="mira">
          <div className="box">
            <Image source={logo} className={"logo"} alt={"logo"} />
            <span>AGAMIRA</span>
            <Image source={mira} className={"mira-image"} alt={"mira"} />
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
