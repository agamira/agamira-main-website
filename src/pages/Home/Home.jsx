import "./Home.scss";
import { WelcomeSection, MissionSection, GuideSection } from "../components";
import { BenefitsSection } from "../components/BenefitsSection/BenefitsSection";

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
