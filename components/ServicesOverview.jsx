import Link from "next/link"
import styles from "../styles/ServicesOverview.module.css"
import Header from "./Header"

export default function ServicesOverview() {
 const services = [
  {
    id: "scrap-dealing",
    title: "Scrap Dealing",
    description:
      "Professional scrap metal collection and processing services with competitive pricing and reliable pickup.",
    icon: "♻️",
    features: ["Contact Us", "Get Quote", "Schedule Pickup", "Receive Payment"],
    link: "/services/scrap-dealing",
    color: "#228b22",
  },
  {
    id: "e-waste",
    title: "E-Waste Services",
    description:
      "Secure and environmentally responsible electronic waste disposal and data destruction services.",
    icon: "💻",
    features: ["Assessment", "Data Destruction", "Secure Transport", "Certified Disposal"],
    link: "/services/e-waste-services",
    color: "#228b22",
  },
  {
    id: "demolition",
    title: "Demolition Services",
    description:
      "Complete demolition solutions for residential and commercial properties with safety compliance.",
    icon: "🏗️",
    features: ["Site Survey", "Permits & Planning", "Demolition Work", "Cleanup & Disposal"],
    link: "/services/demolition-services",
    color: "#228b22",
  },
  {
    id: "facility",
    title: "Facility Decommissioning",
    description:
      "Complete facility shutdown and decommissioning services for industrial and commercial sites.",
    icon: "��",
    features: ["Facility Assessment", "Asset Inventory", "Decommissioning", "Site Restoration"],
    link: "/services/facility-decommissioning",
    color: "#228b22",
  },
  {
    id: "recycling",
    title: "Recycling Services",
    description:
      "Comprehensive recycling solutions for various materials with environmental sustainability focus.",
    icon: "🌱",
    features: ["Material Collection", "Sorting & Processing", "Recycling", "Sustainability Report"],
    link: "/services/recycling-services",
    color: "#228b22",
  },
];


  return (
    <section className={styles.servicesSection}>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
       
            <Header h2='Our Services'/>
            <p className={styles.sectionSubtitle}>
              Comprehensive solutions for all your scrap, waste management, and recycling needs
            </p>
          </div>
        </div>

        <div className="row g-4 justify-content-center">
          {services.map((service) => (
            <div key={service.id} className="col-lg-4 col-md-6 col-12">
              <Link href={service.link} className={styles.serviceCardLink}>
                <div className={`${styles.serviceCard} h-100 rounded-4`}>
                  <div className={styles.cardHeader} style={{ borderTopColor: service.color }}>
                    <div className={styles.serviceIcon} style={{ backgroundColor: service.color }}>
                      {service.icon}
                    </div>
                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                  </div>

                  <div className={styles.cardBody}>
                    <p className={styles.serviceDescription}>{service.description}</p>

                    <ul className={styles.featuresList}>
                      {service.features.map((feature, index) => (
                        <li key={index} className={styles.featureItem}>
                          <span className={styles.checkIcon}>✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.cardFooter}>
                    <span className={styles.learnMore} style={{ color: service.color }}>
                      Learn More →
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

  
      </div>
    </section>
  )
}
