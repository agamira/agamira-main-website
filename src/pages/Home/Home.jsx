import "./Home.scss";
import {
  WelcomeSection,
  MissionSection,
  GuideSection,
  BenefitsSection,
} from "../components";

const Home = () => {
  return (
    <main>
      <WelcomeSection />
      <MissionSection />
      <GuideSection />
      <BenefitsSection />
    </main>
  );
};

export { Home };
