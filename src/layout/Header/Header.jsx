import "./Header.scss";
import burgerBtn from "../../assets/icons/burger-menu.svg";
import logo from "../../assets/img/Polygon3.png";
import { Link } from "react-router-dom";
import { Button } from "../../components";

const Header = () => {
  return (
    <header>
      <div className="box">
        <div className="logo">
          <Link to={"/"}>
            <div>
              <img src={logo} alt="" />
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
            <img src={burgerBtn} alt="" />
          </button>
        </div>
      </div>
    </header>
  );
};

export { Header };
