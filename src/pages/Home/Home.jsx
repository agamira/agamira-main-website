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
  // FagSection,
  // SocialMediaSection,
  // AreYouReadySection,
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
      {/* <FaqSection/> */}
      {/* <SocialMediaSection/> */}
      {/* <AreYouReadySection/> */}
    </main>
  );
};

export { Home };
