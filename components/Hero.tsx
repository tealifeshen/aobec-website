export default function Hero() {
  return (
    <section
      id="home"
      className="hero-premium relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      <style>{`
        #home.hero-premium {
          background-image:
            linear-gradient(90deg, rgba(3,12,21,.88) 0%, rgba(3,12,21,.74) 36%, rgba(3,12,21,.22) 70%, rgba(3,12,21,.18) 100%),
            linear-gradient(180deg, rgba(3,12,21,.12) 0%, rgba(3,12,21,.12) 56%, rgba(3,12,21,.88) 100%),
            url("/images/hero-aobec-energy-mobile-v2.jpg");
          background-position: center center;
        }

        @media (min-width: 641px) {
          #home.hero-premium {
            background-image:
              linear-gradient(90deg, rgba(3,12,21,.88) 0%, rgba(3,12,21,.74) 36%, rgba(3,12,21,.22) 70%, rgba(3,12,21,.18) 100%),
              linear-gradient(180deg, rgba(3,12,21,.12) 0%, rgba(3,12,21,.12) 56%, rgba(3,12,21,.88) 100%),
              url("/images/hero-aobec-energy-v2.jpg");
            background-position: center right;
          }
        }
      `}</style>
      <div className="hero-noise absolute inset-0 opacity-[0.18]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_31%,rgba(242,139,34,0.18),transparent_22%)]" />
      <div className="absolute -left-40 top-28 h-[420px] w-[420px] rounded-full bg-[#195a80]/15 blur-[110px]" />

      <div className="site-container relative z-10 py-16 md:py-24">
        <div className="max-w-4xl">
          <div className="hero-reveal hero-delay-1 mb-7 inline-flex items-center gap-3 rounded-full border border-white/14 bg-white/[0.06] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.24em] text-white/74 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-[#f28b22] shadow-[0_0_18px_rgba(242,139,34,.9)]" />
            Global Energy Solutions
          </div>

          <h1 className="hero-reveal hero-delay-2 max-w-5xl text-[52px] font-black leading-[0.96] tracking-[-0.05em] text-white sm:text-6xl md:text-7xl lg:text-[92px]">
            Powering Global
            <span className="block bg-gradient-to-r from-white via-white to-white/56 bg-clip-text text-transparent">
              Energy Transformation
            </span>
          </h1>

          <p className="hero-reveal hero-delay-3 mt-8 max-w-xl text-base leading-8 text-[#d8e2e9] sm:text-lg">
            Empowering a cleaner world through
            <br />
            smart energy innovation.
          </p>

          <div className="hero-reveal hero-delay-5 mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="/solutions"
              className="glass-button inline-flex min-h-14 items-center justify-center rounded-full px-8 text-sm font-bold text-white"
            >
              Explore Solutions
            </a>
            <div className="relative w-fit max-w-full">
              <span className="absolute -right-1 -top-3 z-10 rounded-md bg-[#007ee6] px-2.5 py-1 text-[9px] font-black tracking-[0.16em] text-white shadow-[0_6px_18px_rgba(0,126,230,0.45)]">
                NEW
              </span>
              <a
                href="/energy/assessment"
                className="group inline-flex h-14 max-w-full items-center justify-center rounded-full border border-[rgba(0,168,255,0.9)] bg-[linear-gradient(135deg,rgba(10,25,55,0.95),rgba(5,15,35,0.95))] px-7 text-sm font-bold text-white shadow-[0_0_20px_rgba(0,168,255,0.45),0_0_40px_rgba(0,102,255,0.25)] backdrop-blur-xl transition duration-300 hover:-translate-y-[3px] hover:border-[#62caff] hover:shadow-[0_0_26px_rgba(0,168,255,0.62),0_0_52px_rgba(0,102,255,0.38)] sm:px-9"
              >
                <span aria-hidden="true">✨</span>
                <span className="ml-2">AI Energy Assessment</span>
                <span className="ml-3 text-lg transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  →
                </span>
              </a>
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
