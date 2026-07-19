const items = [
  ["01", "China Manufacturing Network", "Direct connection with qualified suppliers and engineering resources."],
  ["02", "Quality Control", "Specification review, supplier assessment and delivery coordination."],
  ["03", "Technical Support", "Project analysis, system design and international communication."],
  ["04", "Global Delivery", "Supporting partners from China to worldwide markets."]
];

export default function TrustSection() {
  return (
    <section className="section-shell bg-[#071523] text-white">
      <div className="site-container">
        <p className="section-kicker">Why Global Customers Choose AOBEC</p>
        <h2 className="section-title mt-5 max-w-4xl">
          More Than Products. We Build Reliable Project Solutions.
        </h2>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {items.map(([n,t,d]) => (
            <div key={n} className="rounded-[28px] border border-white/10 bg-white/[0.04] p-8 transition hover:-translate-y-2 hover:bg-white/[0.07]">
              <div className="text-4xl font-black text-[#f28b22]">{n}</div>
              <h3 className="mt-5 text-2xl font-black">{t}</h3>
              <p className="mt-3 text-sm leading-7 text-white/55">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
