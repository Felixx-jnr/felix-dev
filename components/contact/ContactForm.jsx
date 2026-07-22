"use client";

import { useRef, useState } from "react";
import { FiArrowUpRight, FiCheck, FiSend } from "react-icons/fi";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const formRef = useRef(null);

  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState("idle");

  useGSAP(
    () => {
      gsap.from(".contact-form-item", {
        opacity: 0,
        x: 40,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });
    },
    { scope: formRef },
  );

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setStatus("sending");

    // Replace this timeout with an API request.
    await new Promise((resolve) => setTimeout(resolve, 900));

    setStatus("success");
    setFormData(initialForm);

    window.setTimeout(() => {
      setStatus("idle");
    }, 3000);
  }

  const inputClassName =
    "w-full rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3.5 text-foreground outline-none transition-all duration-300 placeholder:text-foreground-muted/60 focus:border-success/50 focus:bg-success/[0.035] focus:shadow-[0_0_25px_rgba(34,197,94,.08)]";

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="relative bg-background/35 backdrop-blur-2xl p-6 md:p-8 border border-white/10 rounded-[32px] overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10 pointer-events-none" />

      <div className="z-10 relative">
        <div className="contact-form-item">
          <span className="font-semibold text-primary text-sm uppercase tracking-[0.2em]">
            Send a Message
          </span>

          <h3 className="mt-4 font-heading font-bold text-3xl">
            Tell me about your project
          </h3>
        </div>

        <div className="gap-5 grid grid-cols-1 sm:grid-cols-2 mt-8">
          <label className="block contact-form-item">
            <span className="block mb-2 font-medium text-sm">Your name</span>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
              className={inputClassName}
            />
          </label>

          <label className="block contact-form-item">
            <span className="block mb-2 font-medium text-sm">
              Email address
            </span>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              required
              className={inputClassName}
            />
          </label>
        </div>

        <label className="block mt-5 contact-form-item">
          <span className="block mb-2 font-medium text-sm">Subject</span>

          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Website or mobile application"
            required
            className={inputClassName}
          />
        </label>

        <label className="block mt-5 contact-form-item">
          <span className="block mb-2 font-medium text-sm">Message</span>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your idea, goals and timeline..."
            required
            rows={6}
            className={`${inputClassName} resize-none`}
          />
        </label>

        <button
          type="submit"
          disabled={status === "sending"}
          className="group flex justify-center items-center gap-3 bg-gradient-to-r from-success via-primary to-accent disabled:opacity-60 mt-7 px-6 py-4 rounded-2xl w-full font-bold text-black transition-transform hover:-translate-y-1 duration-300 contact-form-item"
        >
          {status === "sending" && (
            <>
              <span className="border-2 border-black/20 border-t-black rounded-full w-5 h-5 animate-spin" />
              Sending...
            </>
          )}

          {status === "success" && (
            <>
              <FiCheck size={19} />
              Message Ready
            </>
          )}

          {status === "idle" && (
            <>
              <FiSend size={18} />
              Send Message
              <FiArrowUpRight className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 duration-300" />
            </>
          )}
        </button>

        <p className="mt-4 text-foreground-muted text-xs text-center contact-form-item">
          The form interface is ready. Connect it to your email API before
          deployment.
        </p>
      </div>
    </form>
  );
}
