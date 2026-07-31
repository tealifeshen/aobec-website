import Link from "next/link";

const coreCapabilities = [
  {
    number: "01",
    title: "Energy System Integration",
    description:
      "Connect solar power, energy storage and application requirements into coordinated renewable energy solutions.",
  },
  {
    number: "02",
    title: "China Supply Chain Network",
    description:
      "Coordinate qualified manufacturers, technical resources and production capabilities across China.",
  },
  {
    number: "03",
    title: "Global Project Support",
    description:
      "Support international customers from requirement analysis and technical communication through project delivery.",
  },
];

const customerAdvantages = [
  {
    number: "01",
    title: "Quality Control",
    description:
      "Clear specifications, production coordination and inspection support help control product and delivery quality.",
  },
  {
    number: "02",
    title: "Technical Coordination",
    description:
      "Connect customer requirements with suppliers and engineering resources through structured communication.",
  },
  {
    number: "03",
    title: "International Delivery",
    description:
      "Coordinate documentation, logistics and handover requirements for projects in global markets.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#071523] text-white">
      <section className="relative flex min-h-[620px] items-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(242,139,34,0.17),transparent_24%)]" />
        <div className="absolute -left-40 top-20 h-[460px] w-[460px] rounded-full bg-[#2876a1]/20 blur-[125px]" />
        <div className="absolute bottom-0 right-0 h-[480px] w-[700px] bg-[linear-gradient(135deg,transparent,rgba(25,90,128,0.16))]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />

        <div className="site-container relative z-10 py-24">
          <div className="max-w-5xl">
            <p className="mb-7 flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.24em] text-[#f28b22]">
              <span className="h-2 w-2 rounded-full bg-[#f28b22] shadow-[0_0_18px_rgba(242,139,34,.9)]" />
              Global Energy Partner
            </p>

            <h1 className="max-w-5xl text-[52px] font-black leading-[0.98] tracking-[-0.05em] sm:text-6xl md:text-7xl lg:text-[88px]">
              About
              <span className="ml-3 bg-gradient-to-r from-white via-white to-white/50 bg-clip-text text-transparent">
                AOBEC
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-base leading-8 text-[#d8e2e9] sm:text-lg">
              Global energy solutions partner connecting renewable technology,
              China supply chain capability and worldwide projects.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f7f9] py-20 text-[#071523] md:py-28">
        <div className="site-container">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#f28b22]">
                Company Position
              </p>
              <h2 className="mt-5 max-w-3xl text-4xl font-black leading-[1.05] tracking-[-0.04em] md:text-6xl">
                Connecting Technology, Supply Chain and Global Energy Projects
              </h2>
            </div>

            <div className="relative overflow-hidden rounded-[34px] border border-[#dce4e9] bg-white p-8 shadow-[0_16px_50px_rgba(7,21,35,0.06)] md:p-12">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#f28b22]/10 blur-[80px]" />
              <div className="relative">
                <span className="text-6xl font-black tracking-[-0.06em] text-[#071523]/8">
                  AOBEC
                </span>
                <p className="mt-8 text-base leading-8 text-[#60717e] md:text-lg">
                  AOBEC provides integrated renewable energy solutions through
                  professional supplier coordination, technical communication
                  and international project support.
                </p>
                <div className="mt-9 h-px bg-[#dce4e9]" />
                <p className="mt-7 text-xs font-black uppercase tracking-[0.18em] text-[#f28b22]">
                  Technology · Supply Chain · Delivery
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#071523] py-20 md:py-28">
        <div className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-[#f28b22]/8 blur-[110px]" />
        <div className="site-container relative z-10">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#f28b22]">
              Core Capabilities
            </p>
            <h2 className="mt-5 text-4xl font-black leading-[1.05] tracking-[-0.04em] md:text-6xl">
              Integrated Capabilities for
              <span className="block text-white/48">
                International Projects.
              </span>
            </h2>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {coreCapabilities.map((capability) => (
              <article
                key={capability.number}
                className="rounded-[28px] border border-white/10 bg-white/[0.04] p-8 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07]"
              >
                <span className="text-4xl font-black tracking-[-0.05em] text-[#f28b22]">
                  {capability.number}
                </span>
                <h3 className="mt-8 text-2xl font-black tracking-[-0.03em]">
                  {capability.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/55">
                  {capability.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f7f9] py-20 text-[#071523] md:py-28">
        <div className="site-container">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#f28b22]">
                Why AOBEC
              </p>
              <h2 className="mt-5 max-w-xl text-4xl font-black leading-[1.05] tracking-[-0.04em] md:text-6xl">
                Why Customers Choose AOBEC
              </h2>
            </div>

            <div className="grid gap-4">
              {customerAdvantages.map((advantage) => (
                <article
                  key={advantage.number}
                  className="grid gap-5 rounded-[26px] border border-[#dce4e9] bg-white p-7 shadow-[0_12px_36px_rgba(7,21,35,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[#f28b22]/40 sm:grid-cols-[64px_1fr]"
                >
                  <span className="text-3xl font-black text-[#f28b22]">
                    {advantage.number}
                  </span>
                  <div>
                    <h3 className="text-xl font-black tracking-[-0.02em]">
                      {advantage.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#60717e]">
                      {advantage.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#071523] pb-20 md:pb-28">
        <div className="site-container">
          <div className="relative overflow-hidden rounded-[38px] border border-white/10 bg-[#0a1d2c] px-7 py-14 md:px-14 md:py-16">
            <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#f28b22]/20 blur-[90px]" />
            <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-[#2c769d]/18 blur-[90px]" />

            <div className="relative z-10 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#f28b22]">
                  Work With AOBEC
                </p>
                <h2 className="mt-5 max-w-4xl text-4xl font-black leading-[1.02] tracking-[-0.045em] md:text-6xl">
                  Start Your Energy Project
                </h2>
                <p className="mt-6 max-w-2xl text-[15px] leading-7 text-white/58">
                  Share your market, application and project requirements with
                  our international energy team.
                </p>
              </div>

              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                <Link
                  href="/energy/assessment"
                  className="premium-button inline-flex min-h-14 items-center justify-center rounded-full px-8 text-sm font-bold"
                >
                  Start Assessment
                </Link>
                <a
                  href="mailto:sales@aobec.com"
                  className="glass-button inline-flex min-h-14 items-center justify-center rounded-full px-8 text-sm font-bold"
                >
                  Contact AOBEC
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
