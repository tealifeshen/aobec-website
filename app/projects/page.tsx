import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { getFeaturedProjects, projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "AOBEC Energy Project Case Studies",
  description:
    "Explore AOBEC solar, energy storage and international project delivery case studies.",
};

const capabilities = [
  "Solution Design",
  "Equipment Supply",
  "China Procurement",
  "Technical Coordination",
  "Installation Guidance",
  "Commissioning Support",
];

export default function ProjectsPage() {
  const featuredProject = getFeaturedProjects()[0];

  return (
    <main className="min-h-screen bg-[#071523] text-white">
      <section className="relative flex min-h-[720px] items-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image
            src={featuredProject.heroImage.src}
            alt={featuredProject.heroImage.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,15,24,0.97)_0%,rgba(7,21,35,0.88)_42%,rgba(7,21,35,0.35)_72%,rgba(7,21,35,0.2)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,15,24,0.18),transparent_50%,rgba(5,15,24,0.65))]" />

        <div className="site-container relative z-10 py-24">
          <div className="max-w-4xl">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#f28b22]">
              AOBEC Case Studies
            </p>
            <h1 className="mt-7 text-[52px] font-black leading-[0.98] tracking-[-0.05em] sm:text-6xl md:text-7xl lg:text-[88px]">
              Real Energy Projects.
              <span className="mt-2 block text-white/65">Proven Delivery.</span>
            </h1>
            <p className="mt-8 max-w-3xl text-base leading-8 text-white/72 sm:text-lg">
              Explore how AOBEC supports international energy projects through
              system design, equipment supply and technical coordination.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href={`/projects/${featuredProject.slug}`}
                className="premium-button inline-flex min-h-14 items-center justify-center rounded-full px-8 text-sm font-bold"
              >
                View Featured Project
              </Link>
              <a
                href="mailto:sales@aobec.com"
                className="glass-button inline-flex min-h-14 items-center justify-center rounded-full px-8 text-sm font-bold"
              >
                Discuss Your Project
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f7f9] py-20 text-[#071523] md:py-28">
        <div className="site-container">
          <p className="section-kicker">Featured Case Study</p>
          <div className="mt-8 overflow-hidden rounded-[34px] border border-[#dce4e9] bg-white shadow-[0_20px_70px_rgba(7,21,35,0.08)]">
            <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
              <div className="relative min-h-[340px] lg:min-h-[570px]">
                <Image
                  src={featuredProject.cardImage.src}
                  alt={featuredProject.cardImage.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-8 md:p-12">
                <div className="flex flex-wrap gap-2 text-[10px] font-black uppercase tracking-[0.14em] text-[#60717e]">
                  {[featuredProject.location, featuredProject.industry, featuredProject.status].map((item) => (
                    <span key={item} className="rounded-full border border-[#dce4e9] px-3 py-2">
                      {item}
                    </span>
                  ))}
                </div>
                <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.04em] md:text-5xl">
                  {featuredProject.title}
                </h2>
                <p className="mt-5 text-sm leading-7 text-[#60717e]">
                  {featuredProject.summary}
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {[
                    featuredProject.solarCapacity + " Solar PV",
                    featuredProject.batteryCapacity + " Battery Storage",
                    featuredProject.inverterPower + " Hybrid Inverter",
                    "Completed " + featuredProject.completionDate,
                  ].map((item) => (
                    <div key={item} className="border-l-2 border-[#f28b22] pl-4 text-sm font-black">
                      {item}
                    </div>
                  ))}
                </div>
                <Link
                  href={`/projects/${featuredProject.slug}`}
                  className="premium-button mt-9 inline-flex min-h-14 w-fit items-center justify-center rounded-full px-8 text-sm font-bold text-white"
                >
                  View Case Study
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 text-[#071523] md:py-28">
        <div className="site-container">
          <div className="max-w-3xl">
            <p className="section-kicker">Project Portfolio</p>
            <h2 className="section-title">International Case Studies.</h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.slug}`}
                className="group overflow-hidden rounded-[30px] border border-[#dce4e9] bg-[#f4f7f9] transition duration-300 hover:-translate-y-1 hover:border-[#f28b22]/45"
              >
                <div className="relative h-[300px] overflow-hidden">
                  <Image
                    src={project.cardImage.src}
                    alt={project.cardImage.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-7">
                  <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#f28b22]">
                    {project.location} · {project.status}
                  </p>
                  <h3 className="mt-3 text-2xl font-black tracking-[-0.03em]">{project.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#60717e]">{project.summary}</p>
                  <span className="mt-7 inline-flex text-sm font-black">View Case Study →</span>
                </div>
              </Link>
            ))}
            <aside className="flex min-h-[320px] flex-col justify-center rounded-[30px] border border-dashed border-[#bdcbd4] bg-[#f4f7f9] p-9">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#f28b22]">Project Library</p>
              <h3 className="mt-4 text-3xl font-black tracking-[-0.04em]">More Case Studies Coming Soon</h3>
              <p className="mt-5 max-w-xl text-sm leading-7 text-[#60717e]">
                Additional international projects will be published after client authorization.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-[#071523] py-20 md:py-28">
        <div className="site-container">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#f28b22]">Project Capability</p>
          <h2 className="mt-5 max-w-3xl text-4xl font-black tracking-[-0.04em] md:text-6xl">Support Across the Project Lifecycle.</h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability, index) => (
              <div key={capability} className="rounded-[24px] border border-white/10 bg-white/[0.04] p-7">
                <span className="text-sm font-black text-[#f28b22]">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-5 text-xl font-black">{capability}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#071523] pb-20 md:pb-28">
        <div className="site-container">
          <div className="rounded-[36px] border border-white/10 bg-[#0b2133] p-8 md:p-14">
            <h2 className="text-4xl font-black tracking-[-0.04em] md:text-6xl">Planning a Similar Energy Project?</h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/60">
              Share your project location, application, capacity requirements and energy goals. Our team will help define the next step.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/energy/assessment" className="premium-button inline-flex min-h-14 items-center justify-center rounded-full px-8 text-sm font-bold">Start AI Energy Assessment</Link>
              <a href="https://wa.me/8613590908968" target="_blank" rel="noreferrer" className="glass-button inline-flex min-h-14 items-center justify-center rounded-full px-8 text-sm font-bold">WhatsApp AOBEC</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
