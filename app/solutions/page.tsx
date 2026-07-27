import Link from "next/link";

const solutions = [
  {
    number: "01",
    title: "Energy Storage Solutions",
    description:
      "Reliable energy storage systems for residential, commercial, industrial, microgrid and off-grid applications.",
    image: "/images/solution-energy-storage.jpg",
    tags: ["Commercial ESS", "Industrial BESS", "Microgrid", "Off-grid"],
  },
  {
    number: "02",
    title: "Solar Lighting Solutions",
    description:
      "Efficient solar lighting solutions for roads, communities, industrial parks and public infrastructure.",
    image: "/images/solution-solar-lighting.jpg",
    tags: ["Street Lighting", "Rural Roads", "Public Projects", "Off-grid"],
  },
  {
    number: "03",
    title: "Industrial Solutions",
    description:
      "Industrial project support combining equipment sourcing, production-line planning and China manufacturing resources.",
    image: "/images/solution-industrial.jpg",
    tags: ["Factory Setup", "Production Lines", "Equipment", "Engineering"],
  },
  {
    number: "04",
    title: "Global Supply Chain",
    description:
      "End-to-end supplier coordination, quality control, export management and international project delivery.",
    image: "/images/solution-global-supply.jpg",
    tags: ["Supplier Audit", "Quality Control", "Logistics", "Delivery"],
  },
];

export default function SolutionsPage() {
  return (
    <main className="solutions-page">
      <section className="solutions-hero">
        <div className="solutions-hero-overlay" />

        <div className="site-container solutions-hero-content">
          <p className="solutions-eyebrow">
            GLOBAL ENERGY & INDUSTRIAL SOLUTIONS
          </p>

          <h1>
            Integrated Energy
            <span>& Industrial Solutions</span>
          </h1>

          <p className="solutions-hero-copy">
            Connecting global projects with reliable energy systems,
            industrial capabilities and China&apos;s manufacturing network.
          </p>

          <Link href="#core-solutions" className="solutions-primary-button">
            Explore Solutions
            <span>→</span>
          </Link>
        </div>
      </section>

      <section id="core-solutions" className="solutions-intro">
        <div className="site-container">
          <div className="solutions-section-heading">
            <div>
              <p className="solutions-section-label">OUR SOLUTIONS</p>
              <h2>
                One Partner.
                <span>Multiple Capabilities.</span>
              </h2>
            </div>

            <p>
              AOBEC combines energy technology, industrial resources and
              international supply-chain coordination to support projects from
              initial requirements through final delivery.
            </p>
          </div>

          <div className="solutions-grid">
            {solutions.map((solution) => (
              <article className="solution-card" key={solution.title}>
                <div
                  className="solution-card-image"
                  style={{ backgroundImage: `url("${solution.image}")` }}
                >
                  <span className="solution-card-number">
                    {solution.number}
                  </span>
                </div>

                <div className="solution-card-body">
                  <h3>{solution.title}</h3>
                  <p>{solution.description}</p>

                  <div className="solution-tags">
                    {solution.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <a href="#contact" className="solution-card-link">
                    Discuss Your Project
                    <span>→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="solutions-why">
        <div className="site-container solutions-why-layout">
          <div className="solutions-why-heading">
            <p className="solutions-section-label">WHY AOBEC</p>
            <h2>
              Built for Complex
              <span>International Projects.</span>
            </h2>

            <p>
              We connect project requirements, technical resources, qualified
              suppliers and international delivery into one coordinated
              solution.
            </p>
          </div>

          <div className="solutions-benefits">
            <div>
              <span>01</span>
              <h3>China Manufacturing Network</h3>
              <p>
                Access to qualified manufacturers, technical teams and
                industrial resources.
              </p>
            </div>

            <div>
              <span>02</span>
              <h3>Integrated Project Support</h3>
              <p>
                Support from requirement analysis and solution design to
                sourcing and delivery.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>Quality & Delivery Control</h3>
              <p>
                Clear specifications, supplier coordination, inspection and
                export management.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="solutions-process">
        <div className="site-container">
          <div className="solutions-section-heading solutions-process-heading">
            <div>
              <p className="solutions-section-label">HOW WE WORK</p>
              <h2>
                From Requirement
                <span>to Delivery.</span>
              </h2>
            </div>

            <p>
              A clear process reduces communication gaps, specification errors
              and delivery risks.
            </p>
          </div>

          <div className="solutions-process-grid">
            <div>
              <span>01</span>
              <h3>Project Assessment</h3>
              <p>
                Clarify application, capacity, environment, standards, budget
                and delivery expectations.
              </p>
            </div>

            <div>
              <span>02</span>
              <h3>Solution Design</h3>
              <p>
                Select the suitable technologies, system structure, equipment
                and suppliers.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>Supplier Integration</h3>
              <p>
                Coordinate technical specifications, quotations, production and
                documentation.
              </p>
            </div>

            <div>
              <span>04</span>
              <h3>Delivery & Support</h3>
              <p>
                Manage inspection, shipment, handover and after-sales
                coordination.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="solutions-cta">
        <div className="site-container solutions-cta-inner">
          <div>
            <p className="solutions-section-label">START A PROJECT</p>
            <h2>
              Ready to Build Your
              <span>Next Solution?</span>
            </h2>
            <p>
              Tell us your country, application, capacity and delivery target.
              We will help organize the next step.
            </p>
          </div>

          <div className="solutions-cta-actions">
            <a href="mailto:sales@aobec.com">Email AOBEC</a>
            <a href="#top" className="secondary">
              Back to Top
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}


