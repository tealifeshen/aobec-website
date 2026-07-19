const columns = [
  {
    title: "Company",
    links: ["About AOBEC", "Global Presence", "Projects", "Contact"],
  },
  {
    title: "Solutions",
    links: [
      "Energy Storage",
      "Solar Lighting",
      "Industrial Solutions",
      "Global Supply Chain",
    ],
  },
  {
    title: "Support",
    links: ["Technical Assessment", "Quotation", "Project Coordination", "After-sales"],
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
              <p>Email: sales@aobec.com</p>
              <p>Website: www.aobec.com</p>
              <p>WhatsApp: +86 135 9090 8968</p>
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
                      key={link}
                      href="#"
                      className="text-sm text-white/45 transition hover:text-white"
                    >
                      {link}
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
