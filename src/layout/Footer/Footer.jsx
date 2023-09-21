import { Link } from "react-router-dom";
import { Logo, SubscriptionFormBig } from "../../components";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="box">
          <div className="box__form">
            <Logo />
            <ul>
              <li>
                <Link>About Us</Link>
              </li>
              <li>
                <Link>Careers</Link>
              </li>
              <li>
                <Link>Blog</Link>
              </li>
              <li>
                <Link>Pricing</Link>
              </li>
            </ul>
            <SubscriptionFormBig />
          </div>
          <div className="box__pages-list">
            <ul>
              <div className="list-title">
                Pages
              </div>
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
                <Link>Contact</Link>
              </li>
            </ul>
            <ul>
              <div className="list-title">
                More
              </div>
              <li>
                <Link>Features</Link>
              </li>
              <li>
                <Link>Careers</Link>
              </li>
              <li>
                <Link>Careers single</Link>
              </li>
              <li>
                <Link>Request a demo</Link>
              </li>
              <li>
                <Link>Login</Link>
              </li>
              <li>
                <Link>Sign Up</Link>
              </li>
            </ul>
            <ul>
              <div className="list-title">
              Utility Pages
              </div>
              <li>
                <Link>Style guide</Link>
              </li>
              <li>
                <Link>Password protected</Link>
              </li>
              <li>
                <Link>404 Not found</Link>
              </li>
              <li>
                <Link>Licenses</Link>
              </li>
              <li>
                <Link>Changelog</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>
          Copyright © Product | Designed by <span>Agamira LTD</span>
        </p>
      </div>
    </footer>
  );
};

export { Footer };
