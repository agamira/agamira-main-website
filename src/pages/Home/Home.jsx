import "./Home.scss";
import {
  WelcomeSection,
  MissionSection,
  GuideSection,
  BenefitsSection,
  AgamiraSection,
  WhyChooseUsSection,
} from "../components";

const Home = () => {
  return (
    <main id="home">
      <WelcomeSection />
      <MissionSection />
      <GuideSection />
      <BenefitsSection />
      <AgamiraSection />
      <WhyChooseUsSection />
    </main>
  );
};

export { Home };
