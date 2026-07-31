import Link from "next/link";

const productCategories = [
  {
    number: "01",
    title: "Energy Storage Systems",
    href: "/products/energy-storage",
    description:
      "Scalable battery storage solutions for residential, commercial, industrial, microgrid and off-grid applications.",
    applications: ["Residential ESS", "C&I BESS", "Microgrid"],
  },
  {
    number: "02",
    title: "Solar Lighting Systems",
    href: "/products/solar-lighting",
    description:
      "Reliable solar lighting products engineered for roads, communities, industrial facilities and public infrastructure.",
    applications: ["Street Lighting", "Public Projects", "Off-grid"],
  },
  {
    number: "03",
    title: "Solar Power Systems",
    href: "/products/solar-power",
    description:
      "Integrated solar generation systems designed around project loads, site conditions and long-term energy objectives.",
    applications: ["Solar PV", "Hybrid Systems", "Commercial"],
  },
  {
    number: "04",
    title: "Industrial Energy Solutions",
    href: "/solutions",
    description:
      "Coordinated equipment and energy solutions for factories, production facilities and complex international projects.",
    applications: ["Factory Energy", "Equipment", "Engineering"],
  },
];

const advantages = [
  {
    number: "01",
    title: "China Manufacturing Network",
    description:
      "Access qualified manufacturers, technical teams and a broad renewable energy supply network.",
  },
  {
    number: "02",
    title: "Quality Control",
    description:
      "Control specifications, production, inspection and documentation throughout the delivery process.",
  },
  {
    number: "03",
    title: "Global Delivery",
    description:
      "Coordinate export documentation, logistics and international project delivery from China to global markets.",
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#071523] text-white">
      <section className="relative flex min-h-[760px] items-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 bg-cover bg-[position:68%_center] bg-no-repeat md:bg-center"
          style={{ backgroundImage: 'url("/images/products-hero.jpg")' }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,15,24,0.98)_0%,rgba(7,21,35,0.92)_36%,rgba(7,21,35,0.58)_62%,rgba(7,21,35,0.18)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,15,24,0.2)_0%,transparent_48%,rgba(5,15,24,0.5)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_25%,rgba(242,139,34,0.12),transparent_24%)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />

        <div className="site-container relative z-10 py-24">
          <div className="max-w-5xl">
            <p className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/14 bg-white/[0.06] px-4 py-2 text-[11px] font-black uppercase tracking-[0.24em] text-white/70 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-[#f28b22] shadow-[0_0_18px_rgba(242,139,34,.9)]" />
              AOBEC Product Portfolio
            </p>

            <h1 className="text-[52px] font-black leading-[0.98] tracking-[-0.05em] sm:text-6xl md:text-7xl lg:text-[88px]">
              Energy Products
              <span className="mt-2 block bg-gradient-to-r from-white via-white to-white/50 bg-clip-text text-transparent">
                Built for Global Applications
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-base leading-8 text-[#d8e2e9] sm:text-lg">
              Reliable renewable energy products and integrated solutions for
              residential, commercial and industrial projects.
            </p>

            <Link
              href="#product-categories"
              className="premium-button mt-10 inline-flex min-h-14 items-center justify-center rounded-full px-8 text-sm font-bold text-white"
            >
              Explore Products
              <span className="ml-3 text-lg">↓</span>
            </Link>
          </div>
        </div>
      </section>

      <section
        id="product-categories"
        className="bg-[#f4f7f9] py-20 text-[#071523] md:py-28"
      >
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div>
              <p className="section-kicker">Product Categories</p>
              <h2 className="section-title mt-5 max-w-3xl">
                Reliable Products.
                <span className="block text-[#60717e]">
                  Integrated for Every Project.
                </span>
              </h2>
            </div>
            <p className="section-copy max-w-xl lg:justify-self-end">
              From energy storage and solar generation to lighting and
              industrial applications, AOBEC connects products, engineering and
              delivery into one coordinated solution.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {productCategories.map((product) => (
              <Link
                key={product.number}
                href={product.href}
                className="group relative min-h-[340px] overflow-hidden rounded-[30px] border border-[#dce4e9] bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-[#f28b22]/50 hover:shadow-2xl md:p-10"
              >
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#195a80]/8 transition duration-500 group-hover:bg-[#f28b22]/10" />

                <div className="relative flex h-full flex-col">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-black tracking-[0.2em] text-[#f28b22]">
                      {product.number}
                    </span>
                    <span className="h-2.5 w-2.5 rounded-full bg-[#071523] transition duration-300 group-hover:bg-[#f28b22]" />
                  </div>

                  <h3 className="mt-12 max-w-md text-3xl font-black tracking-[-0.04em]">
                    {product.title}
                  </h3>
                  <p className="mt-5 max-w-xl text-[15px] leading-7 text-[#60717e]">
                    {product.description}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-2 pt-8">
                    {product.applications.map((application) => (
                      <span
                        key={application}
                        className="rounded-full border border-[#dce4e9] bg-[#f8fafb] px-4 py-2 text-[10px] font-black uppercase tracking-[0.14em] text-[#526372]"
                      >
                        {application}
                      </span>
                    ))}
                  </div>

                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-black text-[#071523]">
                    Explore Category
                    <span className="text-[#f28b22] transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#071523] py-20 md:py-28">
        <div className="absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-[#f28b22]/8 blur-[120px]" />

        <div className="site-container relative z-10">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#f28b22]">
              Why AOBEC
            </p>
            <h2 className="mt-5 text-4xl font-black leading-[1.05] tracking-[-0.04em] md:text-6xl">
              Built for Complex
              <span className="block text-white/50">
                International Requirements.
              </span>
            </h2>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {advantages.map((advantage) => (
              <article
                key={advantage.number}
                className="rounded-[28px] border border-white/10 bg-white/[0.04] p-8 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07]"
              >
                <span className="text-4xl font-black tracking-[-0.05em] text-[#f28b22]">
                  {advantage.number}
                </span>
                <h3 className="mt-8 text-2xl font-black tracking-[-0.03em]">
                  {advantage.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/55">
                  {advantage.description}
                </p>
              </article>
            ))}
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
                  Contact AOBEC
                </p>
                <h2 className="mt-5 max-w-4xl text-4xl font-black leading-[1.02] tracking-[-0.045em] md:text-6xl">
                  Looking for the Right Energy Products?
                </h2>
                <p className="mt-6 max-w-2xl text-[15px] leading-7 text-white/58">
                  Tell us your market, application, capacity and delivery
                  requirements. Our team will help identify the right product
                  solution for your project.
                </p>
              </div>

              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                <a
                  href="mailto:sales@aobec.com"
                  className="premium-button inline-flex min-h-14 items-center justify-center rounded-full px-8 text-sm font-bold"
                >
                  Contact Us
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
