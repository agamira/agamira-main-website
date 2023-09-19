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
