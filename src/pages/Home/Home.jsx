import "./Home.scss";
import { Button } from "../../components";
import mira from "../../assets/img/mask-group-5.png";
import logo from "../../assets/img/Polygon3.png";

const Home = () => {
  return (
    <main>
      <section className="welcome">
        <div className="container">
          <h1>
            Welcome to AGAMIRA An artificial intelligence-powered platform
          </h1>
          <p>
            Designed to help individuals to build successful businesses without
            large investments
          </p>
          <div className="mira">
            {/* <p>AGAMIRA</p> */}
            <img className="logo" src={logo} alt="" />
            <img className="mira-image" src={mira} alt="" />
            <div className="buttons">
              <Button className={"btn--outline btn--arrow-right"}>
                Learn More
              </Button>
              <Button className={"btn btn--primary"}>Get Started</Button>
            </div>
          </div>
        </div>
      </section>
      <section className="mission">
        <div className="container">
          <h5>
            Welcome to Agamira - The Future of Secure Digital Transactions
          </h5>
          <div className="box">
            <div className="box--text"></div>
            <div className="box--image"></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export { Home };
