import ContactHero from "../components/ContactHero";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";
import ContactCTA from "../components/ContactCTA";
import { Helmet } from "react-helmet-async";

function Contact() {
  return (
    <>
      <Helmet>
        <title>Projects | Syed</title>
        <meta
          name="description"
          content="Explore React, MERN Stack and frontend development projects built by Syed."
        />
      </Helmet>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <ContactCTA />
    </>
  );
}

export default Contact;
