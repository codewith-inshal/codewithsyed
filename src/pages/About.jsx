import AboutHero from "../components/AboutHero";
import WhoIAm from "../components/WhoIAm";
import Journey from "../components/Journey";
import SkillsSnapshot from "../components/SkillsSnapshot";
import ContactSection from "../components/ContactSection";
import { Helmet } from "react-helmet-async";

function About() {
  return (
    <>
      <Helmet>
        <title>CodewithInshal | About Page</title>
        <meta
          name="description"
          content="Explore React, MERN Stack and frontend development projects built by Syed."
        />
      </Helmet>
      <AboutHero />
      <WhoIAm />
      <Journey />
      <SkillsSnapshot />
      <ContactSection />
    </>
  );
}

export default About;
