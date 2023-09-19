import "./Logo.scss";
import logo from "../../assets/img/Polygon3.png?format=avif;webp;jpg&as=picture";
import { Link } from "react-router-dom";
import { Image } from "../";

const Logo = () => {
  return (
    <div className="logo">
      <Link to={"/"}>
        <div>
          <Image source={logo} alt={"logo"} />
          <span>Agamira</span>
        </div>
      </Link>
    </div>
  );
};

export { Logo };
