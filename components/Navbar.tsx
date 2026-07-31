"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "Products", href: "/products" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Energy Assessment", href: "/energy/assessment" },
  { label: "Contact", href: "/#contact", activePath: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";

  const isActiveLink = (link: (typeof links)[number]) => {
    const activePath = "activePath" in link ? link.activePath : link.href;

    if (activePath === "/") {
      return pathname === "/";
    }

    return pathname === activePath || pathname.startsWith(`${activePath}/`);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
        isHome
          ? scrolled
            ? "border-white/10 bg-[#06131f]/92 py-3 shadow-2xl backdrop-blur-2xl"
            : "border-transparent bg-transparent py-5"
          : "border-gray-200/80 bg-white/95 py-3 shadow-sm backdrop-blur-2xl"
      }`}
    >
      <div className="site-container flex items-center justify-between">
        <a
          href="/"
          className={`group flex items-center gap-3 ${
            isHome ? "" : "rounded-xl bg-[#06131f] px-3 py-1.5 shadow-sm"
          }`}
        >
          <img
            src="/aobec-logo.svg"
            alt="AOBEC"
            className={`w-auto transition duration-300 group-hover:scale-[1.02] ${
              isHome ? "h-11" : "h-9"
            }`}
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => {
            const isActive = isActiveLink(link);

            return (
              <a
                key={link.label}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`group relative py-2 text-sm font-semibold transition ${
                  isActive
                    ? "text-orange-500 hover:text-orange-500"
                    : isHome
                      ? "text-white hover:text-orange-500"
                      : "text-slate-800 hover:text-orange-500"
                }`}
              >
                {link.label}
                <span
                  className={`absolute inset-x-0 -bottom-0.5 h-0.5 origin-left bg-orange-500 transition-transform duration-300 ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <div
            className={`text-xs font-semibold ${
              isHome ? "text-white/58" : "text-gray-600"
            }`}
          >
            EN <span className={isHome ? "mx-2 text-white/20" : "mx-2 text-gray-300"}>|</span> 中文
            <span className={isHome ? "mx-2 text-white/20" : "mx-2 text-gray-300"}>|</span> VI
          </div>
          <a
            href="/energy/assessment"
            className="premium-button rounded-full px-6 py-3 text-sm font-bold text-white"
          >
            Get a Quote
          </a>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
          className={`flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border backdrop-blur lg:hidden ${
            isHome
              ? "border-white/15 bg-white/8"
              : "border-gray-200 bg-gray-100/80"
          }`}
        >
          <span className={`h-0.5 w-5 transition ${isHome ? "bg-white" : "bg-gray-900"} ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-5 transition ${isHome ? "bg-white" : "bg-gray-900"} ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-5 transition ${isHome ? "bg-white" : "bg-gray-900"} ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div
          className={`site-container mt-4 rounded-3xl border p-5 shadow-2xl backdrop-blur-2xl lg:hidden ${
            isHome
              ? "border-white/10 bg-[#081a2a]/96"
              : "border-gray-200 bg-white/98"
          }`}
        >
          <div className="flex flex-col gap-1">
            {links.map((link) => {
              const isActive = isActiveLink(link);

              return (
                <a
                  key={link.label}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={`relative rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                    isActive
                      ? "text-[#f28b22]"
                      : isHome
                        ? "text-white/80 hover:bg-white/8"
                        : "text-gray-900/80 hover:bg-gray-100"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-1.5 left-4 right-4 h-0.5 rounded-full bg-[#f28b22]" />
                  )}
                </a>
              );
            })}
          </div>
          <a
            href="/energy/assessment"
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
