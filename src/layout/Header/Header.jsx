import "./Header.scss";
import burgerBtn from "../../assets/icons/burger-menu.svg";
import logo from "../../assets/img/Polygon3.png?format=avif;webp;jpg&as=picture";
import { Link } from "react-router-dom";
import { Button, Image } from "../../components";

const Header = () => {
  return (
    <header>
      <div className="box">
        <div className="logo">
          <Link to={"/"}>
            <div>
              <Image source={logo} alt={"logo"} />
              <span>Agamira</span>
            </div>
          </Link>
        </div>
        <nav>
          <ul>
            <li></li>
          </ul>
        </nav>
        <div className="buttons">
          <Link className="register-btn">Sign Up</Link>
          <Button className="login-btn btn btn--outline">Log In</Button>
          <button className="burger-menu">
            <img src={burgerBtn} alt={"burger-btn"} />
          </button>
        </div>
      </div>
    </header>
  );
};

export { Header };
