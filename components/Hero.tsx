import AnimatedCounter from "@/components/AnimatedCounter";

const stats = [
  { end: 20, suffix: "+", label: "Countries" },
  { end: 100, suffix: "+", label: "Partners" },
  { end: 500, suffix: "+", label: "Projects" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-premium relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      <div className="hero-noise absolute inset-0 opacity-[0.18]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_31%,rgba(242,139,34,0.18),transparent_22%)]" />
      <div className="absolute -left-40 top-28 h-[420px] w-[420px] rounded-full bg-[#195a80]/15 blur-[110px]" />

      <div className="site-container relative z-10 py-16 md:py-24">
        <div className="max-w-4xl">
          <div className="hero-reveal hero-delay-1 mb-7 inline-flex items-center gap-3 rounded-full border border-white/14 bg-white/[0.06] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.24em] text-white/74 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-[#f28b22] shadow-[0_0_18px_rgba(242,139,34,.9)]" />
            Global Energy & Industrial Solutions
          </div>

          <h1 className="hero-reveal hero-delay-2 max-w-5xl text-[52px] font-black leading-[0.96] tracking-[-0.05em] text-white sm:text-6xl md:text-7xl lg:text-[92px]">
            Powering Global
            <span className="block bg-gradient-to-r from-white via-white to-white/56 bg-clip-text text-transparent">
              Energy Transformation
            </span>
          </h1>

          <p className="hero-reveal hero-delay-3 mt-8 max-w-2xl text-base leading-8 text-[#d8e2e9] sm:text-lg">
            Complete energy, industrial and global supply chain solutions for
            international projects — engineered in China, delivered worldwide.
          </p>

          <div className="hero-reveal hero-delay-4 mt-5 flex flex-wrap gap-x-7 gap-y-2 text-[12px] font-bold uppercase tracking-[0.17em] text-white/48">
            <span>Reliable Energy</span>
            <span>Smart Supply Chain</span>
            <span>Sustainable Future</span>
          </div>

          <div className="hero-reveal hero-delay-5 mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="premium-button inline-flex min-h-14 items-center justify-center rounded-full px-8 text-sm font-bold text-white"
            >
              Get a Quote
              <span className="ml-3 text-lg">↗</span>
            </a>
            <a
              href="#solutions"
              className="glass-button inline-flex min-h-14 items-center justify-center rounded-full px-8 text-sm font-bold text-white"
            >
              Explore Solutions
            </a>
            <a
  href="/energy/assessment"
  className="premium-button inline-flex min-h-14 items-center justify-center"
>
  AI Solar Assessment
  <span className="ml-3 text-lg">→</span>
</a>
          </div>
        </div>

        <div className="hero-reveal hero-delay-6 mt-16 grid max-w-4xl grid-cols-2 overflow-hidden rounded-[28px] border border-white/12 bg-[#06131f]/45 backdrop-blur-2xl md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border-r border-white/10 px-6 py-6 last:border-r-0 md:px-8"
            >
              <div className="text-3xl font-black tracking-[-0.04em] text-white">
                <AnimatedCounter end={stat.end} suffix={stat.suffix} />
              </div>
              <div className="mt-1 text-[11px] font-bold uppercase tracking-[0.19em] text-white/43">
                {stat.label}
              </div>
            </div>
          ))}

          <div className="px-6 py-6 md:px-8">
            <div className="text-3xl font-black tracking-[-0.04em] text-white">
              24/7
            </div>
            <div className="mt-1 text-[11px] font-bold uppercase tracking-[0.19em] text-white/43">
              Global Support
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 hidden items-center gap-3 text-[10px] font-bold uppercase tracking-[0.25em] text-white/35 xl:flex">
        Scroll to explore
        <span className="mouse-indicator">
          <span />
        </span>
      </div>
    </section>
  );
}
