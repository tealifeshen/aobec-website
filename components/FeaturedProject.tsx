import Image from "next/image";
import Link from "next/link";

import { getFeaturedProjects } from "@/data/projects";

export default function FeaturedProject() {
  const project = getFeaturedProjects()[0];

  return (
    <section className="bg-[#071523] pb-20 text-white md:pb-28">
      <div className="site-container">
        <div className="overflow-hidden rounded-[34px] border border-white/10 bg-[#0a1d2c]">
          <div className="grid lg:grid-cols-2 lg:items-stretch">
            <div className="relative min-h-[320px] lg:min-h-[470px]">
              <Image src={project.heroImage.src} alt={project.heroImage.alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-11">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#f28b22]">Real Project</p>
              <h2 className="mt-5 text-3xl font-black tracking-[-0.04em] md:text-5xl">{project.title}</h2>
              <p className="mt-5 text-sm leading-7 text-white/58">A completed hybrid solar and battery storage project supporting more reliable and sustainable resort operations in Phu Quoc, Vietnam.</p>
              <div className="mt-7 flex flex-wrap gap-2">
                {[`${project.solarCapacity} Solar PV`, `${project.batteryCapacity} Battery Storage`, `${project.inverterPower} Hybrid Inverter`].map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-[10px] font-black uppercase tracking-[0.1em] text-white/70">{item}</span>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link href={`/projects/${project.slug}`} className="premium-button inline-flex min-h-13 items-center justify-center rounded-full px-7 text-sm font-bold">View Case Study</Link>
                <Link href="/projects" className="inline-flex min-h-13 items-center justify-center px-5 text-sm font-black text-white/70 transition hover:text-white">Explore All Projects →</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
