import "./PageGeneratorSection.scss";
import { Button, Image } from "../../../components";
import cube from "../../../assets/img/cube.png?format=avif;webp;jpg&as=picture";

const PageGeneratorSection = () => {
  return (
    <section className="page-generator">
      <div className="container">
        <div className="section-content">
          <h3>landing page generator</h3>
          <h2>
            Join the AGAMIRA revolution and unlock the future of secure digital
            transactions today
          </h2>
          <p>{`Discover the transformative capabilities of Agamira's landing page tool, empowering you to automate and streamline your business processes. Effortlessly create captivating landing pages that capture your brand essence and engage your target audience. With our user-friendly interface, you can easily customize every element to align with your unique business needs.`}</p>
          <p>{`Experience the convenience of automated promotion as our tool seamlessly integrates with your marketing ecosystem. From lead generation to customer nurturing, our landing page tool automates key marketing activities, saving you valuable time and resources. Watch as your business reaches new heights through targeted promotional campaigns that convert prospects into loyal customers.`}</p>
          <p>{`Expand your business horizons with Agamira's partner network options. Join forces with like-minded entrepreneurs, tap into new markets, and leverage shared resources for mutual growth. Collaborate within our thriving community to amplify your brand's reach and maximize your business potential.`}</p>
          <p>{`Supercharge your business automation and unlock the power of automatic promotion with Agamira's intuitive landing page tool. Experience the efficiency, scalability, and growth opportunities it brings to your business operations.`}</p>
          <Button className={"btn btn--primary"}>Get Started</Button>
        </div>
        <div className="section-image">
          <Image source={cube} alt={"cube"} />
        </div>
      </div>
    </section>
  );
};

export { PageGeneratorSection };
