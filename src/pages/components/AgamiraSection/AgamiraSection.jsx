import "./AgamiraSection.scss";
import logo from "../../../assets/img/Polygon3.png";

const AgamiraSection = () => {
  return (
    <section className="agamira">
      <div className="box">
        <img className="logo" src={logo} alt="" />
        <span>AGAMIRA</span>
      </div>
    </section>
  );
};

export { AgamiraSection };
