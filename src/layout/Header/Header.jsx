import "./Header.scss";
import burgerBtn from "../../assets/icons/burger-menu.svg";
import { Link } from "react-router-dom";
import { Button, Logo } from "../../components";

const Header = () => {
  return (
    <header>
      <div className="box">
        <Logo />
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
