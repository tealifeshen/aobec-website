import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getProjectBySlug, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = getProjectBySlug((await params).slug);

  if (!project) return {};

  return {
    title: `${project.title} | AOBEC`,
    description:
      "A 65 kWp solar PV and 30 kWh battery storage project supporting resort operations in Phu Quoc, Vietnam.",
  };
}

export default async function ProjectCaseStudyPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug((await params).slug);

  if (!project) notFound();

  const overview = [
    ["Location", project.location],
    ["Industry", project.industry],
    ["System Type", project.systemType],
    ["Status", project.status],
    ["Completion", project.completionDate],
  ];
  const highlights = [
    [project.solarCapacity, "Solar PV Capacity"],
    [project.batteryCapacity, "Battery Storage"],
    [project.inverterPower, "Hybrid Inverter"],
    ["Hybrid", "System Architecture"],
    [project.status, "Project Status"],
    [project.completionDate, "Completion"],
  ];

  return (
    <main className="min-h-screen bg-white text-[#071523]">
      <section className="relative min-h-[820px] overflow-hidden bg-[#071523] pt-28 text-white">
        <Image
          src={project.heroImage.src}
          alt={project.heroImage.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,14,23,0.98)_0%,rgba(7,21,35,0.9)_42%,rgba(7,21,35,0.28)_78%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(5,15,24,0.85))]" />
        <div className="site-container relative z-10 py-10 md:py-16">
          <nav aria-label="Breadcrumb" className="flex flex-wrap gap-2 text-xs font-bold text-white/55">
            <Link href="/" className="transition hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/projects" className="transition hover:text-white">Projects</Link>
            <span>/</span>
            <span className="text-white/80">{project.title}</span>
          </nav>
          <div className="mt-24 max-w-5xl md:mt-32">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#f28b22]">Case Study 001</p>
            <h1 className="mt-7 max-w-5xl text-[48px] font-black leading-[0.98] tracking-[-0.05em] sm:text-6xl md:text-7xl lg:text-[82px]">{project.title}</h1>
            <p className="mt-7 max-w-3xl text-base leading-8 text-white/72 sm:text-lg">{project.summary}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {[project.location, project.industry, project.status, `Completed ${project.completionDate}`].map((item) => (
                <span key={item} className="rounded-full border border-white/15 bg-[#071523]/55 px-4 py-2 text-[11px] font-black uppercase tracking-[0.12em] backdrop-blur">{item}</span>
              ))}
            </div>
            <div className="mt-10 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                [project.solarCapacity, "Solar PV"],
                [project.batteryCapacity, "Battery Storage"],
                [project.inverterPower, "Hybrid Inverter"],
              ].map(([value, label]) => (
                <div key={label} className="border-l-2 border-[#f28b22] pl-4">
                  <p className="text-2xl font-black">{value}</p>
                  <p className="mt-1 text-xs text-white/55">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f7f9] py-20 md:py-28">
        <div className="site-container grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="section-kicker">Project Overview</p>
            <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] md:text-6xl">Project Overview</h2>
            <p className="mt-7 max-w-3xl text-base leading-8 text-[#60717e]">
              This operational hybrid energy project was developed for a resort hotel in Phu Quoc, Vietnam. The system combines rooftop solar generation, battery storage and hybrid inverter technology to support more stable energy use and increase the share of renewable electricity in daily resort operations.
            </p>
          </div>
          <dl className="grid gap-px overflow-hidden rounded-[28px] border border-[#dce4e9] bg-[#dce4e9] sm:grid-cols-2">
            {overview.map(([label, value]) => (
              <div key={label} className="bg-white p-6 last:sm:col-span-2">
                <dt className="text-[10px] font-black uppercase tracking-[0.18em] text-[#f28b22]">{label}</dt>
                <dd className="mt-3 text-base font-black">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="site-container grid gap-6 lg:grid-cols-2">
          <article className="rounded-[30px] border border-[#dce4e9] p-8 md:p-10">
            <p className="section-kicker">Project Context</p>
            <h2 className="mt-5 text-4xl font-black tracking-[-0.04em]">The Challenge</h2>
            <p className="mt-6 text-base leading-8 text-[#60717e]">{project.challenge}</p>
          </article>
          <article className="rounded-[30px] bg-[#071523] p-8 text-white md:p-10">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#f28b22]">Integrated Delivery</p>
            <h2 className="mt-5 text-4xl font-black tracking-[-0.04em]">The AOBEC Solution</h2>
            <p className="mt-6 text-base leading-8 text-white/60">{project.solution}</p>
          </article>
        </div>
        <div className="site-container mt-8">
          <div className="grid gap-3 rounded-[30px] border border-[#dce4e9] bg-[#f4f7f9] p-6 sm:grid-cols-4 md:p-8">
            {["Solar PV", "Hybrid Inverter", "Battery Storage", "Resort Loads"].map((step, index) => (
              <div key={step} className="flex items-center gap-3 sm:block">
                <div className="flex min-h-20 flex-1 items-center justify-center rounded-2xl bg-white px-4 text-center text-sm font-black shadow-sm">{step}</div>
                {index < 3 && <span className="text-xl font-black text-[#f28b22] sm:mt-3 sm:block sm:text-center sm:rotate-0">→</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#071523] py-20 text-white md:py-28">
        <div className="site-container">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#f28b22]">Technical Highlights</p>
          <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] md:text-6xl">The System at a Glance.</h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map(([value, label]) => (
              <div key={label} className="rounded-[26px] border border-white/10 bg-white/[0.04] p-7">
                <p className="text-3xl font-black tracking-[-0.04em] text-[#f28b22]">{value}</p>
                <p className="mt-3 text-sm text-white/55">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f7f9] py-20 md:py-28">
        <div className="site-container">
          <p className="section-kicker">Project Gallery</p>
          <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] md:text-6xl">On-site Project Views.</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-12">
            {project.gallery.map((image, index) => (
              <figure key={image.src} className={`relative overflow-hidden rounded-[26px] bg-[#dce4e9] ${index === 0 || index === 3 ? "lg:col-span-7" : "lg:col-span-5"} ${index === 0 ? "h-[360px] md:h-[500px]" : "h-[340px] md:h-[420px]"}`}>
                <Image src={image.src} alt={image.alt} fill sizes="(max-width: 768px) 100vw, 55vw" className="object-cover" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="site-container grid gap-12 lg:grid-cols-2">
          <div>
            <p className="section-kicker">Project Outcomes</p>
            <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] md:text-6xl">Confirmed Project Outcomes.</h2>
            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              {project.results.map((result) => (
                <div key={result} className="rounded-2xl border border-[#dce4e9] bg-[#f4f7f9] p-5 text-sm font-black">{result}</div>
              ))}
            </div>
            <p className="mt-7 text-sm leading-7 text-[#60717e]">The project is operational. Detailed financial and performance data remain confidential.</p>
          </div>
          <div className="rounded-[30px] bg-[#071523] p-8 text-white md:p-10">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#f28b22]">AOBEC Scope</p>
            <h2 className="mt-5 text-4xl font-black tracking-[-0.04em]">Coordinated Project Support.</h2>
            <p className="mt-6 text-sm leading-7 text-white/60">AOBEC supported the project from solution development and equipment sourcing through installation guidance and commissioning coordination.</p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {project.scope.map((item) => <li key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm font-black">{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#071523] py-20 text-white md:py-28">
        <div className="site-container">
          <div className="rounded-[36px] border border-white/10 bg-[#0b2133] p-8 md:p-14">
            <h2 className="text-4xl font-black tracking-[-0.04em] md:text-6xl">Planning a Similar Project?</h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/60">Tell us your location, energy usage and backup requirements. Our team will help evaluate a suitable solar and storage solution.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/energy/assessment" className="premium-button inline-flex min-h-14 items-center justify-center rounded-full px-8 text-sm font-bold">Start AI Energy Assessment</Link>
              <a href="mailto:sales@aobec.com" className="glass-button inline-flex min-h-14 items-center justify-center rounded-full px-8 text-sm font-bold">Discuss Your Project</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
