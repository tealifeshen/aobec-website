const steps = [
  {
    number: "01",
    title: "Understand the Requirement",
    text: "Clarify application, capacity, environment, standards, budget and delivery expectations.",
  },
  {
    number: "02",
    title: "Build the Solution",
    text: "Select technologies, equipment, configurations and qualified suppliers for the project.",
  },
  {
    number: "03",
    title: "Control Quality & Delivery",
    text: "Coordinate specifications, production, inspection, documentation, shipment and follow-up.",
  },
];

export default function Process() {
  return (
    <section className="section-shell bg-white text-[#071523]">
      <div className="site-container">
        <div className="section-heading">
          <div>
            <p className="section-kicker">How We Work</p>
            <h2 className="section-title max-w-3xl">
              A Clear Process from Requirement to Delivery.
            </h2>
          </div>
          <p className="section-copy max-w-xl">
            Our work is structured to reduce communication gaps, specification
            errors and delivery risks in international projects.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.number}
              className="process-card rounded-[28px] border border-[#dce4e9] bg-[#f8fafb] p-8"
            >
              <div className="flex items-center justify-between">
                <span className="text-5xl font-black tracking-[-0.06em] text-[#071523]/12">
                  {step.number}
                </span>
                <span className="h-2.5 w-2.5 rounded-full bg-[#f28b22]" />
              </div>
              <h3 className="mt-8 text-2xl font-black tracking-[-0.03em]">
                {step.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#60717e]">
                {step.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
