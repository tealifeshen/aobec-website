const advantages = [
  {
    title: "Global Project Experience",
    description:
      "Cross-border experience across Asia, Africa, the Middle East and Latin America.",
  },
  {
    title: "China Manufacturing Network",
    description:
      "Direct access to qualified manufacturers, technical teams and industrial resources.",
  },
  {
    title: "Strict Quality Control",
    description:
      "Clear specifications, supplier screening, production inspection and delivery control.",
  },
  {
    title: "One-stop Technical Support",
    description:
      "From needs analysis and solution design to sourcing, shipment and after-sales coordination.",
  },
];

export default function WhyAobec() {
  return (
    <section id="about" className="section-shell bg-[#071523] text-white">
      <div className="site-container grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[#0d2436] p-8 md:p-10">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#f28b22]/16 blur-3xl" />
          <div className="absolute -bottom-20 -left-14 h-56 w-56 rounded-full bg-[#2876a1]/18 blur-3xl" />

          <div className="relative z-10">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#f28b22]">
              Why AOBEC
            </p>
            <h2 className="mt-5 max-w-xl text-4xl font-black leading-[1.05] tracking-[-0.04em] md:text-5xl">
              Built for Complex International Projects.
            </h2>
            <p className="mt-6 max-w-xl text-[15px] leading-7 text-white/62">
              We are not just a product supplier. We connect project owners,
              technical requirements and reliable Chinese manufacturing
              resources into one coordinated delivery system.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                <div className="text-3xl font-black">20+</div>
                <div className="mt-1 text-[11px] font-bold uppercase tracking-[0.18em] text-white/42">
                  Markets Served
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                <div className="text-3xl font-black">4</div>
                <div className="mt-1 text-[11px] font-bold uppercase tracking-[0.18em] text-white/42">
                  Core Capabilities
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          {advantages.map((item, index) => (
            <article
              key={item.title}
              className="advantage-card group flex gap-5 rounded-[26px] border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.06]"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/[0.05] text-sm font-black text-[#f28b22]">
                0{index + 1}
              </div>
              <div>
                <h3 className="text-xl font-black tracking-[-0.02em]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/52">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
