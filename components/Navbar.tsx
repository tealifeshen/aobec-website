"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Solutions", href: "#solutions" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
        scrolled
          ? "border-white/10 bg-[#06131f]/92 py-3 shadow-2xl backdrop-blur-2xl"
          : "border-transparent bg-transparent py-5"
      }`}
    >
      <div className="site-container flex items-center justify-between">
        <a href="#home" className="group flex items-center gap-3">
          <img
            src="/aobec-logo.svg"
            alt="AOBEC"
            className="h-11 w-auto transition duration-300 group-hover:scale-[1.02]"
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative py-2 text-sm font-semibold text-white/72 transition hover:text-white"
            >
              {link.label}
              <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-[#f28b22] transition-transform duration-300 hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <div className="text-xs font-semibold text-white/58">
            EN <span className="mx-2 text-white/20">|</span> 中文
            <span className="mx-2 text-white/20">|</span> VI
          </div>
          <a
            href="#contact"
            className="premium-button rounded-full px-6 py-3 text-sm font-bold text-white"
          >
            Get a Quote
          </a>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-white/15 bg-white/8 backdrop-blur lg:hidden"
        >
          <span className={`h-0.5 w-5 bg-white transition ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-5 bg-white transition ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-5 bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="site-container mt-4 rounded-3xl border border-white/10 bg-[#081a2a]/96 p-5 shadow-2xl backdrop-blur-2xl lg:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-white/80 hover:bg-white/8"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="premium-button mt-4 block rounded-2xl px-5 py-3 text-center text-sm font-bold"
          >
            Get a Quote
          </a>
        </div>
      )}
    </header>
  );
}
