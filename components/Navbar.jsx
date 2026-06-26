"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FiDownload, FiMoon, FiX, FiMenu } from "react-icons/fi";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("#home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);
  return (
    <>
      <nav className="top-0 left-0 z-50 fixed flex justify-between items-center bg-background/20 backdrop-blur-md px-6 lg:px-12 py-4 border-foreground/20 border-b w-full">
        {/* Logo */}

        <div className="flex items-center gap-3">
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-foreground hover:text-success transition-colors"
          >
            <FiMenu size={24} />
          </button>

          <Link
            href="/"
            className="font-bold text-foreground text-xl tracking-wider"
          >
            FELIX<span className="text-success">.</span>
          </Link>
        </div>

        {/* Nav Links - Hidden on Mobile */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 font-medium text-foreground text-sm">
          {links.map((link) => {
            const isActive = activeLink === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setActiveLink(link.href)}
                className={`group relative flex flex-col items-center transition-colors duration-300 ${
                  isActive
                    ? "text-success"
                    : "text-foreground hover:text-success"
                }`}
              >
                {link.label}

                {/* Dot */}
                {isActive && (
                  <span className="-bottom-2 absolute bg-success rounded-full w-1 h-1" />
                )}

                {/* Underline */}
                {isActive && (
                  <span className="-bottom-6 left-1/2 absolute bg-success w-full h-[2px] -translate-x-1/2" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full text-forground hover:text-success transition-colors">
            <FiMoon size={18} />
          </button>
          <Link
            href="/cv.pdf"
            className="hidden md:flex items-center gap-2 bg-success/10 hover:bg-success/20 px-4 py-2 border border-success/30 rounded-full font-semibold text-success text-xs tracking-wide transition-all duration-300"
          >
            Download CV <FiDownload size={14} />
          </Link>
        </div>
      </nav>
      <div
        className={`fixed inset-0 z-100 bg-background/95 backdrop-blur-xl transition-all duration-500 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Close Button */}

        <button
          onClick={() => setMenuOpen(false)}
          className="top-6 right-6 absolute text-foreground hover:text-success"
        >
          <FiX size={28} />
        </button>

        {/* Menu Content */}

        <div className="flex flex-col justify-center items-center gap-8 h-full">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => {
                setActiveLink(link.href);
                setMenuOpen(false);
              }}
              className="font-semibold text-foreground hover:text-success text-3xl transition-colors"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/cv.pdf"
            className="md:hidden flex items-center gap-2 bg-success/10 hover:bg-success/20 px-5 py-3 border border-success/30 rounded-full font-semibold text-success text-xs tracking-wide transition-all duration-300"
          >
            Download CV
            <FiDownload />
          </Link>
        </div>
      </div>
    </>
  );
}
