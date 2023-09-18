import "./AgamiraSection.scss";
import logo from "../../../assets/img/Polygon3.png?format=avif;webp;jpg&as=picture";
import { Image } from "../../../components";

const AgamiraSection = () => {
  return (
    <section className="agamira">
      <div className="agamira--background"></div>
      <div className="box">
        <Image source={logo} className={"logo"} alt={"Agamira logo"} />
        <span>AGAMIRA</span>
      </div>
    </section>
  );
};

export { AgamiraSection };
