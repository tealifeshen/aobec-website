import Link from "next/link";

import Hero from "@/components/Hero";
import StatsUpgrade from "@/components/StatsUpgrade";
import Solutions from "@/components/Solutions";
import WhyAobec from "@/components/WhyAobec";
import GlobalPresence from "@/components/GlobalPresence";
import TrustSection from "@/components/TrustSection";
import Certification from "@/components/Certification";
import FeaturedProjects from "@/components/FeaturedProjects";
import Process from "@/components/Process";
import ContactCTA from "@/components/ContactCTA";

const productOverview = [
  {
    title: "Energy Storage",
    image: "/images/products/containerized-bess.jpg",
    description:
      "Battery energy storage solutions for residential, commercial and utility applications.",
    href: "/products/energy-storage",
  },
  {
    title: "Solar Lighting",
    image: "/images/products/solar-lighting-hero.jpg",
    description:
      "Reliable solar lighting systems for roads, communities and infrastructure projects.",
    href: "/products/solar-lighting",
  },
  {
    title: "Solar Power",
    image: "/images/products/solar-power-hero.jpg",
    description:
      "Solar PV solutions for residential, commercial and utility scale applications.",
    href: "/products/solar-power",
  },
];

const whyChooseAobec = [
  {
    number: "01",
    title: "Integrated Energy Solutions",
    description:
      "Complete renewable energy solutions combining solar power, energy storage and smart energy applications.",
  },
  {
    number: "02",
    title: "China Supply Chain Capability",
    description:
      "Professional supplier integration, quality control and engineering coordination from China.",
  },
  {
    number: "03",
    title: "Global Project Support",
    description:
      "Technical communication, project coordination and international delivery support.",
  },
];

export default function HomePage(){
return(
<main>
<Hero/>
<section className="bg-[#071523] py-20 text-white md:py-28">
  <div className="site-container">
    <div className="max-w-3xl">
      <p className="text-xs font-black uppercase tracking-[0.22em] text-[#f28b22]">
        Product Overview
      </p>
      <h2 className="mt-5 text-4xl font-black leading-[1.05] tracking-[-0.04em] md:text-6xl">
        Our Energy Solutions
      </h2>
    </div>

    <div className="mt-14 grid gap-6 lg:grid-cols-3">
      {productOverview.map((product, index) => (
        <Link
          key={product.title}
          href={product.href}
          className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.045] transition duration-300 hover:-translate-y-1 hover:border-[#f28b22]/45 hover:bg-white/[0.07]"
        >
          <div className="relative overflow-hidden p-2">
            <img
              src={product.image}
              alt={product.title}
              className="h-[260px] w-full rounded-[24px] object-cover transition duration-700 group-hover:scale-[1.035] sm:h-[320px] lg:h-[280px]"
            />
            <div className="pointer-events-none absolute inset-2 rounded-[24px] bg-gradient-to-t from-[#071523]/55 via-transparent to-transparent" />
            <span className="absolute left-7 top-7 rounded-full border border-white/15 bg-[#071523]/70 px-4 py-2 text-[10px] font-black tracking-[0.18em] text-[#f28b22] backdrop-blur-xl">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <div className="p-7 pt-5">
            <h3 className="text-2xl font-black tracking-[-0.03em]">
              {product.title}
            </h3>
            <p className="mt-4 min-h-[84px] text-sm leading-7 text-white/55">
              {product.description}
            </p>
            <span className="mt-7 inline-flex items-center gap-3 text-sm font-black text-white">
              Explore Products
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
<section className="relative overflow-hidden bg-[#071523] pb-20 text-white md:pb-28">
  <div className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-[#f28b22]/8 blur-[110px]" />
  <div className="site-container relative z-10">
    <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
      <div className="lg:sticky lg:top-32">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-[#f28b22]">
          Why AOBEC
        </p>
        <h2 className="mt-5 max-w-xl text-4xl font-black leading-[1.05] tracking-[-0.04em] md:text-6xl">
          Why Choose AOBEC
        </h2>
        <p className="mt-6 max-w-lg text-sm leading-7 text-white/52">
          One partner connecting renewable energy products, China supply chain
          capabilities and global project execution.
        </p>
      </div>

      <div className="grid gap-4">
        {whyChooseAobec.map((advantage) => (
          <article
            key={advantage.number}
            className="grid gap-5 rounded-[28px] border border-white/10 bg-white/[0.04] p-7 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07] sm:grid-cols-[72px_1fr] md:p-8"
          >
            <span className="text-4xl font-black tracking-[-0.05em] text-[#f28b22]">
              {advantage.number}
            </span>
            <div>
              <h3 className="text-2xl font-black tracking-[-0.03em] text-white">
                {advantage.title}
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/55">
                {advantage.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </div>
</section>
<StatsUpgrade/>
<Solutions/>
<WhyAobec/>
<GlobalPresence/>
<TrustSection/>
<Certification/>
<FeaturedProjects/>
<Process/>
<ContactCTA/>
</main>
)
}
