import "./Home.scss";
import { WelcomeSection, MissionSection, GuideSection } from "../components";

const Home = () => {
  return (
    <main>
      <WelcomeSection />
      <MissionSection />
      <GuideSection />
    </main>
  );
};

export { Home };
