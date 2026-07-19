const certs = ["CE", "IEC", "UN38.3", "MSDS", "ISO"];

export default function Certification() {
  return (
    <section className="section-shell bg-white text-[#071523]">
      <div className="site-container text-center">
        <p className="section-kicker">Quality & Compliance</p>
        <h2 className="section-title mt-5">
          Professional Standards for Global Markets.
        </h2>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {certs.map((c)=>(
            <div key={c} className="rounded-2xl border border-[#dce4e9] bg-[#f8fafb] px-10 py-6 text-2xl font-black tracking-widest">
              {c}
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-sm leading-7 text-[#60717e]">
          Certification information will be updated according to specific products and project requirements.
        </p>
      </div>
    </section>
  );
}
