"use client";

import ContactGlow from "./ContactGlow";
import ContactHeader from "./ContactHeader";
import ContactContent from "./ContactContent";
import SocialLinks from "./SocialLinks";
import ContactFooter from "./ContactFooter";
import Header from "../Header";
import { FiMessageCircle } from "react-icons/fi";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-12 overflow-hidden"
    >
      <ContactGlow />

      <div className="z-10 relative mx-auto px-6 lg:px-8 max-w-7xl">
        <Header
          icon={<FiMessageCircle />}
          text=" Let's build something "
          header="Remarkable"
          label="Let's Connect"
          description="Have a project, opportunity, or idea in mind? Send me a message and let's discuss how we can bring it to life."
        />

        <ContactContent />

        <SocialLinks />

        <ContactFooter />
      </div>
    </section>
  );
}
