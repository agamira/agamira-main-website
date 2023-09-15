import "./MissionSection.scss";
import { Button } from "../../../components";
import cube from "../../../assets/img/cube-cube.png";

const MissionSection = () => {
  return (
    <section className="mission">
      <div className="container">
        <h4>Welcome to Agamira - The Future of Secure Digital Transactions</h4>
        <div className="box">
          <div className="box--text">
            <h3>Mission</h3>
            <h2>Meet your personal assistant in financial crypto investment</h2>
            <p>
              Our mission is to empower aspiring entrepreneurs and provide them
              with the necessary tools, knowledge, and support to thrive in the
              digital landscape.
            </p>
            <p>
              We developed the online teacher MIRA, which will be your guide to
              the world of finance and teach you how to make money on the
              Internet simply
            </p>
            <Button className={"btn--outline"}>More About Us</Button>
          </div>
          <div className="box--image">
            <img src={cube} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export { MissionSection };
