const columns = [
  {
    title: "Products",
    links: [
      { label: "All Products", href: "/products" },
      { label: "Energy Storage", href: "/products/energy-storage" },
      { label: "Solar Lighting", href: "/products/solar-lighting" },
      { label: "Solar Power", href: "/products/solar-power" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "All Solutions", href: "/solutions" },
      { label: "Energy Storage", href: "/products/energy-storage" },
      { label: "Industrial Solutions", href: "/solutions" },
      { label: "Global Supply Chain", href: "/solutions" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Energy Assessment", href: "/energy/assessment" },
      { label: "Request a Quote", href: "/energy/assessment" },
      { label: "Email AOBEC", href: "mailto:sales@aobec.com" },
      { label: "WhatsApp", href: "https://wa.me/8613590908968" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[#050f18] py-14 text-white">
      <div className="site-container">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <img src="/aobec-logo.svg" alt="AOBEC" className="h-12 w-auto" />
            <p className="mt-6 max-w-md text-sm leading-7 text-white/42">
              Global energy, industrial and supply chain solutions for
              international projects.
            </p>
            <div className="mt-7 space-y-2 text-sm text-white/58">
              <p>
                Email:{" "}
                <a className="transition hover:text-white" href="mailto:sales@aobec.com">
                  sales@aobec.com
                </a>
              </p>
              <p>Website: www.aobec.com</p>
              <p>
                WhatsApp:{" "}
                <a
                  className="transition hover:text-white"
                  href="https://wa.me/8613590908968"
                  target="_blank"
                  rel="noreferrer"
                >
                  +86 135 9090 8968
                </a>
              </p>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-sm font-black uppercase tracking-[0.17em] text-white">
                  {column.title}
                </h3>
                <div className="mt-5 flex flex-col gap-3">
                  {column.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      {...(link.href.startsWith("https://")
                        ? { target: "_blank", rel: "noreferrer" }
                        : {})}
                      className="text-sm text-white/45 transition hover:text-white"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/8 pt-7 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 AOBEC. All rights reserved.</p>
          <p>Powering Global Energy Transformation.</p>
        </div>
      </div>
    </footer>
  );
}
