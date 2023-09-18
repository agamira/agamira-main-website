import "./OurProductsSection.scss";
import { Card, CardIcon, Image } from "../../../components";
import star from "../../../assets/img/star.png?format=avif;webp;jpg&as=picture";
import profile from "../../../assets/icons/profile.svg";
import likes from "../../../assets/icons/likes.svg";
import playMusic from "../../../assets/icons/play-music.svg";
import starIcon from "../../../assets/icons/star-icon.svg";

const OurProductsSection = () => {
  return (
    <section className="our-products">
      <div className="container">
        <div className="section-title">
          <h3>Our Products</h3>
          <h2>All you need is here</h2>
          <p>{`Comprehensive suite of tools and resources to fuel your business success. From our powerful landing page editor to seamless marketing automation integration and a thriving partner network, everything you need to grow your business is right here`}</p>
        </div>
        <div className="card-list">
          <div className="row">
            <Card
              icon={<CardIcon logo={profile} />}
              title={"Agamira Ai financial assistant that helps you earn money"}
              text={
                "Our landing page tool features an intuitive drag-and-drop editor that requires no coding skills. Easily create stunning landing pages by simply dragging and dropping elements"
              }
            />
            <Card
              icon={<CardIcon logo={likes} />}
              title={`Matrix Marketing Marketing Automation Integration:`}
              text={`Seamlessly integrate our landing page tool with your existing marketing automation platform. Automate lead capture, nurture campaigns, and follow-ups, ensuring a streamlined and efficient marketing process`}
            />
            <Card
              icon={<CardIcon logo={playMusic} />}
              title={`Landing page generator`}
              text={`Our landing page tool features an intuitive drag-and-drop editor that requires no coding skills. Easily create stunning landing pages by simply dragging and dropping elements onto the canvas, allowing you to design and customize your pages`}
            />
            <Card
              icon={<CardIcon logo={starIcon} />}
              title={`Guide by Experts 24/7 Live Support`}
              text={`Seamlessly integrate our landing page tool with your existing marketing automation platform. Automate lead capture, nurture campaigns, and follow-ups, ensuring a streamlined and efficient marketing process`}
            />
          </div>
        </div>
      </div>
      <Image source={star} />
    </section>
  );
};

export { OurProductsSection };
