import "./PartnersSection.scss";
import appStore from "../../../assets/icons/app-store.svg";
import apiary from "../../../assets/icons/apiary.svg";
import android from "../../../assets/icons/android.svg";
import airbnb from "../../../assets/icons/airbnb.svg";
import ibm from "../../../assets/icons/ibm.svg";
import basecamp from "../../../assets/icons/basecamp.svg";

const PartnersSection = () => {
  return (
    <section className="partners">
      <div className="container">
        <div className="section-title">
          <h3>Partners</h3>
          <h2>Explore Growth Opportunities through Our Partner Network</h2>
          <p>
            We focus on ergonomics and meeting you where you work. It's only a
            keystroke away.
          </p>
        </div>
        <div className="partners-logo">
          <ul>
            <li>
              <img src={appStore} alt="App Store" />
            </li>
            <li>
              <img src={apiary} alt="Apiary" />
            </li>
            <li>
              <img src={android} alt="Android" />
            </li>
            <li>
              <img src={airbnb} alt="Airbnb" />
            </li>
            <li>
              <img src={ibm} alt="IBM" />
            </li>
            <li>
              <img src={basecamp} alt="Basecamp" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export { PartnersSection };
