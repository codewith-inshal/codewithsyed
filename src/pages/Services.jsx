import ServicesHero from "../components/ServicesHero";
import ServicesIntro from "../components/ServicesIntro";
import ServicesGrid from "../components/ServicesGrid";
import WhyHireMe from "../components/WhyHireMe";
import Process from "../components/Process";
import ServicesCTA from "../components/ServicesCTA";

function Services() {
  return (
    <div className="bg-black text-white overflow-hidden">
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
