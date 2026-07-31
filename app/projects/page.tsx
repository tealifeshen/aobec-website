const projects = [
  {
    number: "01",
    title: "Africa Solar Storage Project",
    image: "/images/products/containerized-bess.jpg",
    description:
      "Off-grid and microgrid energy storage solution combining solar PV and battery storage.",
    category: "Solar + Storage",
  },
  {
    number: "02",
    title: "Industrial Solar Energy Solution",
    image: "/images/products/solar-commercial-pv.jpg",
    description:
      "Commercial and industrial solar PV solutions helping businesses improve energy efficiency.",
    category: "Commercial & Industrial",
  },
  {
    number: "03",
    title: "Solar Lighting Infrastructure",
    image: "/images/products/solar-lighting-hero.jpg",
    description:
      "Solar lighting solutions for roads, communities and public infrastructure.",
    category: "Public Infrastructure",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#071523] text-white">
      <section className="relative flex min-h-[620px] items-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_30%,rgba(242,139,34,0.16),transparent_24%)]" />
        <div className="absolute -left-40 top-24 h-[440px] w-[440px] rounded-full bg-[#2876a1]/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[460px] w-[680px] bg-[linear-gradient(135deg,transparent,rgba(25,90,128,0.15))]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />

        <div className="site-container relative z-10 py-24">
          <div className="max-w-5xl">
            <p className="mb-7 flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.24em] text-[#f28b22]">
              <span className="h-2 w-2 rounded-full bg-[#f28b22] shadow-[0_0_18px_rgba(242,139,34,.9)]" />
              AOBEC Project Portfolio
            </p>

            <h1 className="max-w-5xl text-[52px] font-black leading-[0.98] tracking-[-0.05em] sm:text-6xl md:text-7xl lg:text-[88px]">
              Global Energy
              <span className="mt-2 block bg-gradient-to-r from-white via-white to-white/50 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-base leading-8 text-[#d8e2e9] sm:text-lg">
              Renewable energy solutions delivered for residential, commercial
              and industrial applications worldwide.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f7f9] py-20 text-[#071523] md:py-28">
        <div className="site-container">
          <div className="max-w-4xl">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#f28b22]">
              Featured Projects
            </p>
            <h2 className="mt-5 text-4xl font-black leading-[1.05] tracking-[-0.04em] md:text-6xl">
              Energy Solutions
              <span className="block text-[#60717e]">
                Delivered Worldwide.
              </span>
            </h2>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.number}
                className="group overflow-hidden rounded-[30px] border border-[#dce4e9] bg-white shadow-[0_16px_50px_rgba(7,21,35,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#f28b22]/45 hover:shadow-2xl"
              >
                <div className="relative overflow-hidden p-2">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-[280px] w-full rounded-[24px] object-cover transition duration-700 group-hover:scale-[1.035] sm:h-[340px] lg:h-[280px]"
                  />
                  <div className="pointer-events-none absolute inset-2 rounded-[24px] bg-gradient-to-t from-[#071523]/65 via-transparent to-transparent" />
                  <span className="absolute left-7 top-7 rounded-full border border-white/15 bg-[#071523]/72 px-4 py-2 text-[10px] font-black tracking-[0.18em] text-[#f28b22] backdrop-blur-xl">
                    Project {project.number}
                  </span>
                  <span className="absolute bottom-7 left-7 text-[10px] font-black uppercase tracking-[0.16em] text-white/75">
                    {project.category}
                  </span>
                </div>

                <div className="p-7 pt-6">
                  <h2 className="text-2xl font-black tracking-[-0.03em]">
                    {project.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-[#60717e]">
                    {project.description}
                  </p>
                  <div className="mt-7 flex items-center gap-3 text-sm font-black text-[#071523]">
                    AOBEC Global Project
                    <span className="text-[#f28b22]">↗</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
