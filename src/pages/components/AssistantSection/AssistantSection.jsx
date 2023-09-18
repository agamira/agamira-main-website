import "./AssistantSection.scss";
import sphere from "../../../assets/img/sphere2.png?format=avif;webp;jpg&as=picture";
import { Button, Image } from "../../../components";

const AssistantSection = () => {
  return (
    <section className="assistant">
      <div className="section-info">
        <div className="container">
          <h3>{"Ai Assistant"}</h3>
          <h2>{"AGAMIRA AI: Empowering Intelligent Solutions"}</h2>
          <p>
            {`AGAMIRA integrates cutting-edge trained artificial intelligence,
              empowering you with intelligent solutions customized to your
              unique business needs, whether it's data analysis, process
              optimization, or innovative strategy development, ensuring
              reliable assistance at every step.`}
          </p>
        </div>
        <div className="image-box">
          <div className="container">
            <Image source={sphere} />
            <Button className={"btn--outline"}>More About AI</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { AssistantSection };
