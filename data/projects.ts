export type ProjectImage = {
  src: string;
  alt: string;
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  location: string;
  country: string;
  industry: string;
  application: string;
  technologies: string[];
  status: string;
  completionDate: string;
  solarCapacity: string;
  batteryCapacity: string;
  inverterPower: string;
  systemType: string;
  heroImage: ProjectImage;
  cardImage: ProjectImage;
  gallery: ProjectImage[];
  challenge: string;
  solution: string;
  scope: string[];
  results: string[];
  featured: boolean;
  featuredOrder: number;
};

const imageRoot = "/images/projects/vietnam-resort";

export const projects: Project[] = [
  {
    id: "case-study-001",
    slug: "vietnam-resort-hybrid-solar",
    title: "Vietnam Resort Hybrid Solar Project",
    shortTitle: "Vietnam Resort Hybrid Solar",
    summary:
      "A hybrid solar and battery storage system supporting more reliable and sustainable resort operations in Phu Quoc, Vietnam.",
    location: "Phu Quoc, Vietnam",
    country: "Vietnam",
    industry: "Resort Hotel",
    application: "Hospitality Energy",
    technologies: ["Solar PV", "Battery Storage", "Hybrid Inverter"],
    status: "Operational",
    completionDate: "July 2026",
    solarCapacity: "65 kWp",
    batteryCapacity: "30 kWh",
    inverterPower: "80 kW",
    systemType: "Hybrid Solar + Battery Storage",
    heroImage: {
      src: `${imageRoot}/vietnam-resort-hero.jpg`,
      alt: "Resort buildings, swimming pool and rooftop solar installation in Phu Quoc, Vietnam",
    },
    cardImage: {
      src: `${imageRoot}/vietnam-resort-overview.jpg`,
      alt: "Overview of the Vietnam resort hybrid solar project site",
    },
    gallery: [
      {
        src: `${imageRoot}/vietnam-resort-overview.jpg`,
        alt: "Overview of the resort and its rooftop solar energy system",
      },
      {
        src: `${imageRoot}/vietnam-resort-building.jpg`,
        alt: "Resort building served by the hybrid solar and battery system",
      },
      {
        src: `${imageRoot}/vietnam-resort-solar-roof.jpg`,
        alt: "Solar PV modules installed on the resort rooftop",
      },
      {
        src: `${imageRoot}/vietnam-resort-inverter.jpg`,
        alt: "Hybrid inverter equipment installed for the resort energy system",
      },
      {
        src: `${imageRoot}/vietnam-resort-battery-rack.jpg`,
        alt: "Battery storage rack for the Vietnam resort project",
      },
      {
        src: `${imageRoot}/vietnam-resort-battery-detail.jpg`,
        alt: "Detailed view of battery storage equipment at the project site",
      },
      {
        src: `${imageRoot}/vietnam-resort-bms-screen.jpg`,
        alt: "Battery management system monitoring screen for the resort project",
      },
    ],
    challenge:
      "The resort sought to reduce electricity costs while improving power reliability and increasing renewable energy usage without disrupting guest operations.",
    solution:
      "AOBEC coordinated a hybrid solar and battery storage solution combining rooftop solar PV, an 80 kW hybrid inverter and 30 kWh of battery storage. The system was designed to improve renewable energy utilization and support more stable resort operations.",
    scope: [
      "Solution Design",
      "Equipment Supply",
      "China Procurement",
      "Technical Coordination",
      "Installation Guidance",
      "Commissioning Support",
    ],
    results: [
      "Stable Energy Operation",
      "Reduced Electricity Costs",
      "Higher Renewable Energy Usage",
      "Improved Power Reliability",
    ],
    featured: true,
    featuredOrder: 1,
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects() {
  return projects
    .filter((project) => project.featured)
    .sort((a, b) => a.featuredOrder - b.featuredOrder);
}
