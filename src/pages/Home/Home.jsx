import "./Home.scss";
import {
  WelcomeSection,
  MissionSection,
  GuideSection,
  BenefitsSection,
  AgamiraSection,
} from "../components";

const Home = () => {
  return (
    <main id="home">
      <WelcomeSection />
      <MissionSection />
      <GuideSection />
      <BenefitsSection />
      <AgamiraSection />
    </main>
  );
};

export { Home };
