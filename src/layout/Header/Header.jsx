import "./Header.scss";
import burgerBtn from "../../assets/icons/burger-menu.svg";
import { Link } from "react-router-dom";
import { Logo } from "../../components";
import { useState } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";

const Header = () => {
  const matches = useMediaQuery("(min-width: 1000px)");
  const [burgerMenu, setBurgerMenu] = useState(matches);
  return (
    <header>
      <div className="box">
        <div className="wrapper">
          <div className="header-top">
            <Logo />
            <button
              onClick={() => setBurgerMenu((prev) => !prev)}
              className="burger-menu"
            >
              <img src={burgerBtn} alt={"burger-btn"} />
            </button>
          </div>
          {burgerMenu && (
            <nav>
              <ul>
                <li>
                  <Link>Home</Link>
                </li>
                <li>
                  <Link>Products</Link>
                </li>
                <li>
                  <Link>About Us</Link>
                </li>
                <li>
                  <Link>Contacts</Link>
                </li>
              </ul>
              <div className="buttons">
                <Link className="register-btn">Sign Up</Link>
                <Link className="login-btn">Log In</Link>
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export { Header };
