const markets = [
  "Vietnam",
  "Pakistan",
  "Uganda",
  "Nigeria",
  "Venezuela",
  "Philippines",
  "UAE",
];

export default function GlobalPresence() {
  return (
    <section className="section-shell bg-white text-[#071523]">
      <div className="site-container">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Global Presence</p>
            <h2 className="section-title max-w-3xl">
              From China to Emerging Markets Worldwide.
            </h2>
          </div>
          <p className="section-copy max-w-xl">
            AOBEC supports partners in fast-growing markets with localized
            project coordination, responsive communication and reliable
            delivery.
          </p>
        </div>

        <div className="mt-14 overflow-hidden rounded-[34px] border border-[#dce4e9] bg-[#f6f8fa]">
          <div className="global-map relative min-h-[460px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_40%,rgba(242,139,34,.11),transparent_24%)]" />
            <div className="relative z-10 grid min-h-[460px] items-end gap-10 p-8 md:p-12 lg:grid-cols-[1fr_340px]">
              <div className="self-center">
                <img
                  src="/world-map.svg"
                  alt="AOBEC global market map"
                  className="w-full opacity-90"
                />
              </div>

              <div className="rounded-[26px] border border-[#dce4e9] bg-white/88 p-7 shadow-xl backdrop-blur">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#f28b22]">
                  Active Markets
                </p>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {markets.map((market) => (
                    <div
                      key={market}
                      className="rounded-xl border border-[#e3e9ed] bg-[#f8fafb] px-4 py-3 text-sm font-bold"
                    >
                      {market}
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-sm leading-6 text-[#60717e]">
                  Additional markets and project locations will be added as
                  AOBEC expands its international network.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
