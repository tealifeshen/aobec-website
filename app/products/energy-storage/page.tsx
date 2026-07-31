import Link from "next/link";

const storageProducts = [
  {
    number: "01",
    title: "Containerized BESS",
    eyebrow: "Utility & Large-scale C&I",
    image: "/images/products/containerized-bess.jpg",
    description:
      "Integrated battery energy storage for renewable energy integration, peak management, grid support and large off-grid projects.",
    applications: [
      "Renewable Energy Integration",
      "Peak Shaving",
      "Microgrids",
      "Grid Support",
    ],
    parameters: [
      { label: "System Capacity", value: "MWh-scale" },
      { label: "Battery Chemistry", value: "LiFePO4" },
      { label: "Architecture", value: "Modular Container" },
      { label: "Control", value: "BMS · EMS · PCS" },
    ],
  },
  {
    number: "02",
    title: "Commercial Battery Cabinet",
    eyebrow: "Commercial & Industrial",
    image: "/images/products/commercial-battery-cabinet.jpg",
    description:
      "Flexible cabinet-based storage designed for factories, commercial buildings, farms and distributed energy projects.",
    applications: [
      "Factories",
      "Commercial Buildings",
      "Solar Self-consumption",
      "Backup Power",
    ],
    parameters: [
      { label: "System Capacity", value: "100 kWh+" },
      { label: "Battery Chemistry", value: "LiFePO4" },
      { label: "Installation", value: "Indoor / Outdoor" },
      { label: "Expansion", value: "Parallel Cabinets" },
    ],
  },
  {
    number: "03",
    title: "Residential ESS",
    eyebrow: "Residential & Small Business",
    image: "/images/products/residential-ess.jpg",
    description:
      "Compact solar storage systems for household energy independence, electricity cost optimization and essential-load backup.",
    applications: [
      "Solar Homes",
      "Backup Power",
      "Time-of-use Savings",
      "Small Business",
    ],
    parameters: [
      { label: "System Capacity", value: "5–30 kWh" },
      { label: "Battery Chemistry", value: "LiFePO4" },
      { label: "System Type", value: "Low / High Voltage" },
      { label: "Configuration", value: "Stacked / Wall-mounted" },
    ],
  },
];

const advantages = [
  {
    number: "01",
    title: "Integrated System Engineering",
    description:
      "Coordinate batteries, power conversion, control systems and project requirements as one complete storage solution.",
  },
  {
    number: "02",
    title: "Quality & Safety Control",
    description:
      "Support specification review, supplier qualification, production inspection and project documentation.",
  },
  {
    number: "03",
    title: "Global Project Delivery",
    description:
      "Manage export coordination, logistics and technical handover for international energy storage projects.",
  },
];

export default function EnergyStoragePage() {
  return (
    <main className="min-h-screen bg-[#071523] text-white">
      <section className="relative flex min-h-[760px] items-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 bg-cover bg-[position:68%_center] bg-no-repeat md:bg-center"
          style={{ backgroundImage: 'url("/images/hero-storage.png")' }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,15,24,0.98)_0%,rgba(7,21,35,0.94)_36%,rgba(7,21,35,0.56)_64%,rgba(7,21,35,0.12)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,15,24,0.22)_0%,transparent_48%,rgba(5,15,24,0.58)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_32%,rgba(242,139,34,0.14),transparent_25%)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />

        <div className="site-container relative z-10 py-24">
          <div className="max-w-5xl">
            <Link
              href="/products"
              className="mb-7 inline-flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.22em] text-white/62 transition hover:text-white"
            >
              <span className="text-[#f28b22]">←</span>
              Products
            </Link>

            <p className="mb-7 flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.24em] text-[#f28b22]">
              <span className="h-2 w-2 rounded-full bg-[#f28b22] shadow-[0_0_18px_rgba(242,139,34,.9)]" />
              Energy Storage Portfolio
            </p>

            <h1 className="max-w-4xl text-[52px] font-black leading-[0.98] tracking-[-0.05em] sm:text-6xl md:text-7xl lg:text-[88px]">
              Energy Storage
              <span className="mt-2 block bg-gradient-to-r from-white via-white to-white/50 bg-clip-text text-transparent">
                Systems
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-[#d8e2e9] sm:text-lg">
              Scalable battery energy storage solutions for residential,
              commercial, industrial, microgrid and renewable energy
              applications worldwide.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#storage-products"
                className="premium-button inline-flex min-h-14 items-center justify-center rounded-full px-8 text-sm font-bold"
              >
                Explore Storage Systems
                <span className="ml-3">↓</span>
              </Link>
              <a
                href="#contact"
                className="glass-button inline-flex min-h-14 items-center justify-center rounded-full px-8 text-sm font-bold"
              >
                Discuss Your Project
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="storage-products"
        className="bg-[#f4f7f9] py-20 text-[#071523] md:py-28"
      >
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <p className="section-kicker">Storage Product Categories</p>
              <h2 className="section-title mt-5 max-w-3xl">
                Storage Platforms for
                <span className="block text-[#60717e]">
                  Every Project Scale.
                </span>
              </h2>
            </div>
            <p className="section-copy max-w-xl lg:justify-self-end">
              Select a storage platform according to application, capacity,
              installation environment and operational requirements. Final
              configurations are confirmed through engineering assessment.
            </p>
          </div>

          <div className="mt-14 space-y-6">
            {storageProducts.map((product) => (
              <article
                key={product.number}
                className="overflow-hidden rounded-[32px] border border-[#dce4e9] bg-white shadow-[0_16px_50px_rgba(7,21,35,0.06)]"
              >
                <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                  <div className="relative overflow-hidden bg-[#081a2a] p-8 text-white md:p-10 lg:p-12">
                    <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-[#f28b22]/12 blur-[70px]" />
                    <div className="relative">
                      <div className="flex items-center justify-between">
                        <span className="text-5xl font-black tracking-[-0.06em] text-white/14">
                          {product.number}
                        </span>
                        <span className="h-2.5 w-2.5 rounded-full bg-[#f28b22]" />
                      </div>

                      <div className="relative mt-8 overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.04]">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="h-[260px] w-full object-cover transition duration-700 hover:scale-[1.025] md:h-[320px]"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071523]/35 via-transparent to-transparent" />
                      </div>

                      <p className="mt-8 text-[10px] font-black uppercase tracking-[0.2em] text-[#f28b22]">
                        {product.eyebrow}
                      </p>
                      <h3 className="mt-4 text-3xl font-black tracking-[-0.04em] md:text-4xl">
                        {product.title}
                      </h3>
                      <p className="mt-5 max-w-xl text-sm leading-7 text-white/58">
                        {product.description}
                      </p>

                      <div className="mt-8">
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/35">
                          Applications
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {product.applications.map((application) => (
                            <span
                              key={application}
                              className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-white/65"
                            >
                              {application}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 md:p-10 lg:p-12">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#f28b22]">
                          Core Parameters
                        </p>
                        <h4 className="mt-3 text-2xl font-black tracking-[-0.03em]">
                          Typical Configuration
                        </h4>
                      </div>
                      <div className="hidden h-12 w-12 items-center justify-center rounded-full bg-[#f4f7f9] text-xl text-[#f28b22] sm:flex">
                        ↗
                      </div>
                    </div>

                    <dl className="mt-8 grid gap-3 sm:grid-cols-2">
                      {product.parameters.map((parameter) => (
                        <div
                          key={parameter.label}
                          className="rounded-2xl border border-[#e1e7eb] bg-[#f8fafb] p-5"
                        >
                          <dt className="text-[10px] font-black uppercase tracking-[0.15em] text-[#7a8994]">
                            {parameter.label}
                          </dt>
                          <dd className="mt-2 text-lg font-black text-[#071523]">
                            {parameter.value}
                          </dd>
                        </div>
                      ))}
                    </dl>

                    <p className="mt-6 text-xs leading-6 text-[#7a8994]">
                      Parameters shown are typical configuration ranges. Final
                      specifications depend on project requirements and
                      technical assessment.
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#071523] py-20 md:py-28">
        <div className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-[#f28b22]/8 blur-[110px]" />
        <div className="site-container relative z-10">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#f28b22]">
                Why AOBEC
              </p>
              <h2 className="mt-5 text-4xl font-black leading-[1.05] tracking-[-0.04em] md:text-6xl">
                More Than
                <span className="block text-white/48">Battery Supply.</span>
              </h2>
              <p className="mt-6 max-w-lg text-sm leading-7 text-white/55">
                AOBEC connects product selection, system integration, quality
                control and international delivery around the needs of each
                energy project.
              </p>
            </div>

            <div className="grid gap-4">
              {advantages.map((advantage) => (
                <article
                  key={advantage.number}
                  className="grid gap-5 rounded-[26px] border border-white/10 bg-white/[0.04] p-7 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07] sm:grid-cols-[64px_1fr]"
                >
                  <span className="text-3xl font-black text-[#f28b22]">
                    {advantage.number}
                  </span>
                  <div>
                    <h3 className="text-xl font-black tracking-[-0.02em]">
                      {advantage.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-white/52">
                      {advantage.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#071523] pb-20 md:pb-28">
        <div className="site-container">
          <div className="relative overflow-hidden rounded-[38px] border border-white/10 bg-[#0a1d2c] px-7 py-14 md:px-14 md:py-16">
            <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#f28b22]/20 blur-[90px]" />
            <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-[#2c769d]/18 blur-[90px]" />

            <div className="relative z-10 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#f28b22]">
                  Start an Energy Storage Project
                </p>
                <h2 className="mt-5 max-w-4xl text-4xl font-black leading-[1.02] tracking-[-0.045em] md:text-6xl">
                  Need the Right Storage Configuration?
                </h2>
                <p className="mt-6 max-w-2xl text-[15px] leading-7 text-white/58">
                  Share your application, required capacity, site conditions
                  and delivery target. Our team will help define the next step.
                </p>
              </div>

              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                <a
                  href="mailto:sales@aobec.com"
                  className="premium-button inline-flex min-h-14 items-center justify-center rounded-full px-8 text-sm font-bold"
                >
                  Contact AOBEC
                </a>
                <a
                  href="https://wa.me/8613590908968"
                  target="_blank"
                  rel="noreferrer"
                  className="glass-button inline-flex min-h-14 items-center justify-center rounded-full px-8 text-sm font-bold"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
