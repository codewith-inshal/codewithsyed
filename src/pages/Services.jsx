import ServicesHero from "../components/ServicesHero";
import ServicesIntro from "../components/ServicesIntro";
import ServicesGrid from "../components/ServicesGrid";
import WhyHireMe from "../components/WhyHireMe";
import Process from "../components/Process";
import ServicesCTA from "../components/ServicesCTA";
import { Helmet } from "react-helmet-async";

function Services() {
  return (
    <div className="bg-black text-white overflow-hidden">
      <Helmet>
        <title>CodewithInshal | Services Page</title>
        <meta
          name="description"
          content="Explore React, MERN Stack and frontend development projects built by Syed."
        />
      </Helmet>
      <ServicesHero />
      <ServicesIntro />
      <ServicesGrid />
      <WhyHireMe />
      <Process />
      <ServicesCTA />
    </div>
  );
}

export default Services;
