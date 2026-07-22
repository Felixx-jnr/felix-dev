"use client";

import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function ContactContent() {
  return (
    <div className="gap-8 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr]">
      <ContactInfo />

      <ContactForm />
    </div>
  );
}
