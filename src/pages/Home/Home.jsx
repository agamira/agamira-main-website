import "./Home.scss";
import {
  WelcomeSection,
  MissionSection,
  GuideSection,
  BenefitsSection,
  AgamiraSection,
  WhyChooseUsSection,
  AssistantSection,
  PageGeneratorSection,
  TestimonialsSection,
  OurProductsSection,
  StartNowSection,
  PartnersSection,
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
      <AssistantSection />
      <PageGeneratorSection />
      <TestimonialsSection />
      <OurProductsSection />
      <StartNowSection />
      <PartnersSection />
    </main>
  );
};

export { Home };
