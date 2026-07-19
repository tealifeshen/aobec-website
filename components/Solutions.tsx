const solutions = [
  {
    number: "01",
    title: "Energy Storage",
    subtitle: "Residential · Commercial · Utility",
    description:
      "Reliable lithium battery and energy management solutions for homes, businesses, industrial facilities and microgrid projects.",
    icon: "⚡",
  },
  {
    number: "02",
    title: "Solar Lighting",
    subtitle: "Road · Municipal · Off-grid",
    description:
      "High-efficiency solar street lighting systems designed for rural roads, cities, industrial parks and infrastructure projects.",
    icon: "☀",
  },
  {
    number: "03",
    title: "Industrial Solutions",
    subtitle: "Equipment · Automation · Engineering",
    description:
      "Integrated industrial equipment, smart manufacturing and project engineering support for international industrial development.",
    icon: "◫",
  },
  {
    number: "04",
    title: "Global Supply Chain",
    subtitle: "Sourcing · Quality · Delivery",
    description:
      "End-to-end China sourcing, supplier coordination, quality control and export delivery for complex international projects.",
    icon: "◎",
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="section-shell bg-[#f4f7f9] text-[#071523]">
      <div className="site-container">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Our Solutions</p>
            <h2 className="section-title max-w-3xl">
              One Partner. Multiple Capabilities.
            </h2>
          </div>
          <p className="section-copy max-w-xl">
            AOBEC combines energy technology, industrial resources and China
            supply chain capabilities to deliver complete solutions for global
            projects.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {solutions.map((item) => (
            <article
              key={item.number}
              className="solution-card group relative overflow-hidden rounded-[30px] border border-[#dce4e9] bg-white p-8 md:p-10"
            >
              <div className="absolute right-7 top-7 text-sm font-black tracking-[0.18em] text-[#071523]/18">
                {item.number}
              </div>

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#071523] text-xl text-white shadow-lg transition duration-300 group-hover:-translate-y-1 group-hover:bg-[#f28b22]">
                {item.icon}
              </div>

              <div className="mt-10">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#f28b22]">
                  {item.subtitle}
                </p>
                <h3 className="mt-3 text-3xl font-black tracking-[-0.035em] text-[#071523]">
                  {item.title}
                </h3>
                <p className="mt-5 max-w-xl text-[15px] leading-7 text-[#526372]">
                  {item.description}
                </p>
              </div>

              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-3 text-sm font-black text-[#071523]"
              >
                Explore Solution
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
