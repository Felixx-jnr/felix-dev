"use client";

import ContactGlow from "./ContactGlow";
import ContactHeader from "./ContactHeader";
import ContactContent from "./ContactContent";
import SocialLinks from "./SocialLinks";
import ContactFooter from "./ContactFooter";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-36 overflow-hidden"
    >
      {/* Background */}

      <ContactGlow />

      <div className="z-10 relative mx-auto px-6 lg:px-8 max-w-7xl">
        <ContactHeader />

        <ContactContent />

        <SocialLinks />

        <ContactFooter />
      </div>
    </section>
  );
}
