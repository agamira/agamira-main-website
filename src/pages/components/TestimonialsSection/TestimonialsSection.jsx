import { Card, CardIcon } from "../../../components";
import "./TestimonialsSection.scss";
import carlosMass from "../../../assets/img/carlos-mass.png";
import annaCole from "../../../assets/img/anna-cole.png";
import mikeHolland from "../../../assets/img/mike-holland.png";

const TestimonialsSection = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-title">
          <h3>Testimonials</h3>
          <h2>read what others have to say:</h2>
        </div>
        <div className="card-list">
          <div className="row">
            <Card
              icon={<CardIcon className={"user"} logo={carlosMass} />}
              title={"Carlos Mass"}
              text={`My dream of launching a tech startup came true with the help of MIRA's online courses. Through expert mentorship and access to a network of investors, I secured funding, built a talented team, and successfully brought my innovative product to market. ”`}
            />
            <Card
              icon={<CardIcon className={"user"} logo={annaCole} />}
              title={"Anna Cole"}
              text={`I have transformed my blog into a profitable online business with the help of MIRA. I learned how to monetize my content through MIRA and increased my income through affiliate marketing and sponsorship contracts. ”`}
            />
            <Card
              icon={<CardIcon className={"user"} logo={mikeHolland} />}
              title={"Mike Holland"}
              text={`I am now financially independent thanks to the use of MIRA. I implemented the knowledge from the financial management and investment modules to develop a personal finance strategy, leading to financial stability for myself and my family. ”`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { TestimonialsSection };
