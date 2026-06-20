import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ServicesSection from "../components/ServicesSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <>
      <Helmet>
        <title>Projects | Syed</title>
        <meta
          name="description"
          content="Explore React, MERN Stack and frontend development projects built by Syed."
        />
      </Helmet>
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <SkillsSection />
      <ServicesSection />
      <ContactSection />
    </>
  );
}

export default Home;
