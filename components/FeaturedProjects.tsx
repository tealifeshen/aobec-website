const projects = [
  {
    category: "Commercial Energy Storage",
    title: "Integrated C&I Energy Storage",
    location: "Southeast Asia",
    description:
      "A modular commercial energy storage concept designed for factories, hotels, commercial buildings and energy-intensive facilities.",
    image: "/project-storage.svg",
  },
  {
    category: "Solar Lighting",
    title: "Smart Solar Road Lighting",
    location: "Africa",
    description:
      "Reliable solar street lighting for municipal roads, industrial parks, rural infrastructure and off-grid public projects.",
    image: "/project-lighting.svg",
  },
  {
    category: "Industrial Supply Chain",
    title: "Cross-border Equipment Delivery",
    location: "Asia",
    description:
      "Supplier coordination, specification control, inspection and export delivery for multi-category industrial projects.",
    image: "/project-industrial.svg",
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="section-shell bg-[#f4f7f9] text-[#071523]">
      <div className="site-container">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Featured Projects</p>
            <h2 className="section-title max-w-3xl">
              Solutions Designed Around Real Project Needs.
            </h2>
          </div>
          <p className="section-copy max-w-xl">
            Every project begins with application requirements, operating
            conditions, technical specifications and delivery objectives—not
            with a one-size-fits-all product list.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="project-card group overflow-hidden rounded-[30px] border border-[#dce4e9] bg-white"
            >
              <div className="relative overflow-hidden bg-[#dfe8ee]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-[280px] w-full object-cover transition duration-700 group-hover:scale-[1.045]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071523]/55 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 rounded-full border border-white/20 bg-[#071523]/68 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-white backdrop-blur-xl">
                  {project.location}
                </div>
              </div>

              <div className="p-7">
                <p className="text-[11px] font-black uppercase tracking-[0.19em] text-[#f28b22]">
                  {project.category}
                </p>
                <h3 className="mt-3 text-2xl font-black tracking-[-0.03em]">
                  {project.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#60717e]">
                  {project.description}
                </p>
                <a
                  href="#contact"
                  className="mt-7 inline-flex items-center gap-3 text-sm font-black"
                >
                  View Project
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
