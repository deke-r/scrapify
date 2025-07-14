export const metadata = {
  title: "Scrap Recycling Services in Delhi NCR – Scrapify",
  description:
    "Efficient scrap recycling services for paper, metal, plastic, and more across Delhi NCR. Eco-friendly disposal with GST invoicing for homes, offices & industries.",
  keywords:
    "scrap recycling Delhi NCR, metal recycling Noida, paper scrap collection, plastic disposal Gurugram, eco scrap service, Scrapify recycling, industrial waste recycling, office scrap collection, certified scrap recycler, household scrap recycling, sustainable scrap disposal",
  alternates: {
    canonical: "https://scrapify.in/services/recycling-services",
  },
  openGraph: {
    title: "Scrap Recycling Services in Delhi NCR – Scrapify",
    description:
      "Scrapify provides professional and eco-friendly scrap recycling across Delhi NCR. Trusted by offices, households & industries for reliable collection.",
    url: "https://scrapify.in/services/recycling-services",
    siteName: "Scrapify",
    images: [
      {
        url: "https://scrapify.in/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Scrapify Recycling Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scrap Recycling Services in Delhi NCR – Scrapify",
    description:
      "Eco-friendly scrap recycling for homes, offices & industries in Delhi NCR. Metal, plastic, paper & more. Book a pickup today.",
    images: ["https://scrapify.in/og-cover.jpg"],
    creator: "@scrapify",
  },
};


import {
  Newspaper,
  Wine,
  Coins,
  Laptop,
  Truck,
  Filter,
  Settings,
  Package,
  Home, Building2, Factory, Check
} from "lucide-react";



import ModalButton from "@/components/ModalButton";
import styles from "../../../styles/recycling-services.module.css"
import StatsSection from "@/components/StatsSection";

export default function RecyclingServices() {
  const faqItems = [
    {
      question: "What materials do you accept for recycling?",
      answer:
        "We accept a wide range of materials including paper, cardboard, plastics (PET, HDPE, PP), metals (aluminum, steel, copper), glass, electronics, batteries, and organic waste. Contact us for specific material inquiries.",
    },
    {
      question: "Do you provide pickup services for recycling?",
      answer:
        "Yes, we offer scheduled pickup services for both residential and commercial clients. For bulk quantities, we provide free pickup. Regular pickup schedules can be arranged based on your needs.",
    },
    {
      question: "How do you ensure proper recycling processes?",
      answer:
        "We follow strict environmental guidelines and use certified recycling facilities. All materials are properly sorted, cleaned, and processed according to industry standards. We provide certificates of recycling for commercial clients.",
    },
    {
      question: "What happens to materials that cannot be recycled?",
      answer:
        "Non-recyclable materials are disposed of responsibly through authorized waste management facilities. We always prioritize recycling and recovery, with disposal as the last resort, following all environmental regulations.",
    },
  ]


  const materialTypes = [
    {
      category: "Paper & Cardboard",
      items: ["Newspapers", "Magazines", "Office Paper", "Cardboard Boxes", "Packaging Materials"],
      icon: Newspaper,
      color: "primary",
    },
    {
      category: "Plastics",
      items: ["PET Bottles", "HDPE Containers", "PP Packaging", "Plastic Films", "Rigid Plastics"],
      icon: Wine, // Lucide doesn't have Bottle, use Wine
      color: "success",
    },
    {
      category: "Metals",
      items: ["Aluminum Cans", "Steel Containers", "Copper Wire", "Brass Fittings", "Mixed Metals"],
      icon: Coins,
      color: "warning",
    },
    {
      category: "Electronics",
      items: ["Computers", "Mobile Phones", "Batteries", "Circuit Boards", "Cables"],
      icon: Laptop,
      color: "info",
    },
  ];



  return (
    <div className="min-vh-100">
      {/* Hero Section */}
      <section className={`${styles.heroSection} bg-gradient-success d-flex align-items-center text-white py-5`}>
        <div className="container">
          <div className="row align-items-center">

            {/* Image Column - appears first on small screens */}
            <div className="col-lg-6 order-1 order-lg-2 text-center mb-4 mb-lg-0">
              <div className={`${styles.heroImageContainer}`}>
                <img
                  src="/img/imgi_44_people-placing-reusable-waste-into-dumpster_74855-7781.webp"
                  alt="Recycling Services"
                  className="img-fluid rounded-3 shadow-lg"
                />
                <div className={`${styles.floatingIcon} ${styles.icon1}`}>
                  <i className="fas fa-recycle"></i>
                </div>
                <div className={`${styles.floatingIcon} ${styles.icon2}`}>
                  <i className="fas fa-leaf"></i>
                </div>
                <div className={`${styles.floatingIcon} ${styles.icon3}`}>
                  <i className="fas fa-globe"></i>
                </div>
              </div>
            </div>

            {/* Text Column - appears second on small screens */}
            <div className="col-lg-6 order-2 order-lg-1 text-center text-lg-start">
              <div className={`${styles.sustainabilityBadge} mb-3`}>
                <i className="fas fa-leaf me-2"></i>
                100% Sustainable Processing
              </div>
              <h1 className="display-4 fw-bold mb-4">Recycling Services</h1>
              <p className="lead f_18 mb-4">
                Transform waste into valuable resources with our comprehensive recycling solutions.
                Professional, sustainable, and environmentally responsible recycling services for all material types.
              </p>
              <div className="d-flex justify-content-center justify-content-lg-start gap-3">
                <ModalButton text="Start Recycling" variant="white" />
              </div>
            </div>

          </div>
        </div>
      </section>

      <StatsSection />

      {/* Overview Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h2 className="fw-bold mb-4">Comprehensive Recycling Solutions</h2>
              <p className="f_16 text-justify mb-4">
                Scrapify's recycling services are designed to maximize resource recovery while minimizing environmental
                impact. Our state-of-the-art facilities and expert team ensure that your waste materials are processed
                efficiently and sustainably, contributing to a circular economy.
              </p>
              <p className="f_16 text-justify mb-4">
                We work with businesses, institutions, and communities to develop customized recycling programs that
                meet specific needs while achieving maximum diversion rates. Our comprehensive approach includes
                collection, sorting, processing, and transformation of waste materials into new products.
              </p>
              <div className={`${styles.impactHighlight} p-4 rounded-3 mb-4`}>
                <h5 className="fw-bold text-success mb-2">
                  <i className="fas fa-seedling me-2"></i>
                  Environmental Impact
                </h5>
                <p className="f_15 mb-0">
                  Every ton of material recycled saves 3.3 tons of CO2 emissions and conserves natural resources for
                  future generations.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className={`${styles.certificationCard}`}>
                <div className="text-center mb-4">
                  <i className={`${styles.certIcon} fas fa-certificate text-success`}></i>
                  <h5 className="fw-bold mb-2">ISO 14001 Certified</h5>
                  <p className="f_14 text-muted">Environmental Management System</p>
                </div>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    <span className="f_14">Zero Waste to Landfill</span>
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    <span className="f_14">Carbon Neutral Processing</span>
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    <span className="f_14">Certified Chain of Custody</span>
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    <span className="f_14">Real-time Tracking</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Material Types Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="fw-bold mb-3">Materials We Recycle</h2>
              <p className="lead f_16 text-muted">Comprehensive recycling solutions for all material types</p>
            </div>
          </div>
          <div className="row">
            {materialTypes.map((material, index) => (
              <div key={index} className="col-lg-6 mb-4">
                <div className={`${styles.materialCard} card h-100 border-0 shadow-sm`}>
                  <div className="card-body p-4">
                    <div className="d-flex align-items-start mb-3">
                      <div
                        className={`${styles.materialIcon} bg-${material.color} text-white rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0`}
                        style={{ width: "48px", height: "48px" }}
                      >
                        <material.icon size={24} strokeWidth={2} color="#fff" />
                      </div>
                      <div>
                        <h5 className="fw-bold mb-2">{material.category}</h5>
                        <div className={`${styles.materialList}`}>
                          {material.items.map((item, itemIndex) => (
                            <span
                              key={itemIndex}
                              className={`${styles.materialTag} badge bg-light text-dark me-1 mb-1`}
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className={`${styles.recyclingRate} text-center mt-3`}>
                      <small className="text-muted">Recycling Rate:</small>
                      <div className={`${styles.progressBar} bg-light rounded-pill mt-1`}>
                        <div
                          className={`${styles.progressFill} bg-${material.color} rounded-pill`}
                          style={{ width: `${85 + index * 3}%` }}
                        ></div>
                      </div>
                      <small className="text-success fw-bold">{85 + index * 3}%</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="fw-bold mb-3">Our Recycling Process</h2>
              <p className="lead f_16 text-muted">From collection to transformation - a sustainable journey</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className={`${styles.processStep} text-center`}>
                <div className={`${styles.processCircle} ${styles.step1}`}>
                  <div
                    className={`${styles.stepNumber} bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3`}
                  >
                    <Truck size={24} color="#fff" />
                  </div>
                </div>
                <h5 className="fw-bold mb-2">Collection</h5>
                <p className="f_14 text-muted">
                  Scheduled pickup from your location using specialized vehicles designed for different material types.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className={`${styles.processStep} text-center`}>
                <div className={`${styles.processCircle} ${styles.step2}`}>
                  <div
                    className={`${styles.stepNumber} bg-warning text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3`}
                  >
                    <Filter size={24} color="#fff" />
                  </div>
                </div>
                <h5 className="fw-bold mb-2">Sorting</h5>
                <p className="f_14 text-muted">
                  Advanced sorting technology and manual inspection to separate materials by type and quality.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className={`${styles.processStep} text-center`}>
                <div className={`${styles.processCircle} ${styles.step3}`}>
                  <div
                    className={`${styles.stepNumber} bg-info text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3`}
                  >
                    <Settings size={24} color="#fff" />
                  </div>
                </div>
                <h5 className="fw-bold mb-2">Processing</h5>
                <p className="f_14 text-muted">
                  Cleaning, shredding, melting, or other processing methods to prepare materials for manufacturing.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className={`${styles.processStep} text-center`}>
                <div className={`${styles.processCircle} ${styles.step4}`}>
                  <div
                    className={`${styles.stepNumber} bg-success text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3`}
                  >
                    <Package size={24} color="#fff" />
                  </div>
                </div>
                <h5 className="fw-bold mb-2">New Products</h5>
                <p className="f_14 text-muted">
                  Transformation into new products, completing the circular economy cycle and reducing waste.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Services Offered */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="fw-bold mb-3">Recycling Service Options</h2>
              <p className="lead f_16 text-muted">Flexible solutions for every recycling need</p>
            </div>
          </div>
          <div className="row">
            {/* Residential Recycling */}
            <div className="col-lg-4 mb-4">
              <div className={`${styles.serviceOption} card border-0 shadow-sm h-100`}>
                <div className="card-body p-4 text-center">
                  <div className={`${styles.serviceIcon} bg-primary text-white rounded-circle mx-auto mb-3`}>
                    <Home size={32} color="#fff" />
                  </div>
                  <h5 className="fw-bold mb-3">Residential Recycling</h5>
                  <ul className="list-unstyled text-start">
                    <li className="mb-2">
                      <Check className="text-success me-2" size={18} /> Weekly curbside pickup
                    </li>
                    <li className="mb-2">
                      <Check className="text-success me-2" size={18} /> Mixed material collection
                    </li>
                    <li className="mb-2">
                      <Check className="text-success me-2" size={18} /> Special item pickup
                    </li>
                    <li className="mb-2">
                      <Check className="text-success me-2" size={18} /> Educational resources
                    </li>
                  </ul>

                </div>
              </div>
            </div>

            {/* Commercial Recycling */}
            <div className="col-lg-4 mb-4">
              <div className={`${styles.serviceOption} card border-0 shadow-sm h-100`}>
                <div className="card-body p-4 text-center">
                  <div className={`${styles.serviceIcon} bg-success text-white rounded-circle mx-auto mb-3`}>
                    <Building2 size={32} color="#fff" />
                  </div>
                  <h5 className="fw-bold mb-3">Commercial Recycling</h5>
                  <ul className="list-unstyled text-start">
                    <li className="mb-2">
                      <Check className="text-success me-2" size={18} /> Customized pickup schedules
                    </li>
                    <li className="mb-2">
                      <Check className="text-success me-2" size={18} /> Dedicated account management
                    </li>
                    <li className="mb-2">
                      <Check className="text-success me-2" size={18} /> Waste audit services
                    </li>
                    <li className="mb-2">
                      <Check className="text-success me-2" size={18} /> Sustainability reporting
                    </li>
                  </ul>

                </div>
              </div>
            </div>

            {/* Industrial Recycling */}
            <div className="col-lg-4 mb-4">
              <div className={`${styles.serviceOption} card border-0 shadow-sm h-100`}>
                <div className="card-body p-4 text-center">
                  <div className={`${styles.serviceIcon} bg-warning text-white rounded-circle mx-auto mb-3`}>
                    <Factory size={32} color="#fff" />
                  </div>
                  <h5 className="fw-bold mb-3">Industrial Recycling</h5>
                  <ul className="list-unstyled text-start">
                    <li className="mb-2">
                      <Check className="text-success me-2" size={18} /> Large volume processing
                    </li>
                    <li className="mb-2">
                      <Check className="text-success me-2" size={18} /> Specialized material handling
                    </li>
                    <li className="mb-2">
                      <Check className="text-success me-2" size={18} /> Compliance documentation
                    </li>
                    <li className="mb-2">
                      <Check className="text-success me-2" size={18} /> Revenue sharing programs
                    </li>
                  </ul>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Environmental Impact */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="fw-bold mb-4">Environmental Impact</h2>
              <p className="f_16 mb-4">
                Our recycling services contribute significantly to environmental conservation and sustainability goals.
                Every material recycled helps reduce carbon footprint and conserve natural resources.
              </p>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div className={`${styles.impactCard} text-center p-3`}>
                    <i className="fas fa-tree fa-2x text-success mb-2"></i>
                    <h6 className="fw-bold">Trees Saved</h6>
                    <p className="f_14 text-muted mb-0">50,000+ trees saved annually</p>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className={`${styles.impactCard} text-center p-3`}>
                    <i className="fas fa-tint fa-2x text-primary mb-2"></i>
                    <h6 className="fw-bold">Water Conserved</h6>
                    <p className="f_14 text-muted mb-0">100M+ gallons saved</p>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className={`${styles.impactCard} text-center p-3`}>
                    <i className="fas fa-bolt fa-2x text-warning mb-2"></i>
                    <h6 className="fw-bold">Energy Saved</h6>
                    <p className="f_14 text-muted mb-0">50M+ kWh annually</p>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className={`${styles.impactCard} text-center p-3`}>
                    <i className="fas fa-cloud fa-2x text-info mb-2"></i>
                    <h6 className="fw-bold">CO2 Reduced</h6>
                    <p className="f_14 text-muted mb-0">25,000+ tons prevented</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={`${styles.sustainabilityChart}`}>
                <img
                  src="/img/imgi_9_big-data-analysis-teamwork-developer-programmer-business-people-are-looking-idea-business-colorful-vector-illustration_569417-786.webp"
                  alt="Environmental Impact Chart"
                  className="img-fluid rounded-3"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className="fw-bold text-center mb-5">Frequently Asked Questions</h2>
              <div className="accordion" id="recyclingFaqAccordion">
                {faqItems.map((faq, index) => (
                  <div key={index} className="accordion-item mb-3 border-0 shadow-sm">
                    <h3 className="accordion-header">
                      <button
                        className={`accordion-button fw-bold ${index !== 0 ? "collapsed" : ""}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#recyclingFaq${index}`}
                      >
                        {faq.question}
                      </button>
                    </h3>
                    <div
                      id={`recyclingFaq${index}`}
                      className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                      data-bs-parent="#recyclingFaqAccordion"
                    >
                      <div className="accordion-body f_15">{faq.answer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`${styles.ctaSection} py-5 bg-gradient-success text-white`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="fw-bold mb-3">Start Your Recycling Journey Today</h2>
              <p className="lead f_18 mb-4">
                Join thousands of customers who are making a positive environmental impact through our recycling
                services.
              </p>
              <div className="d-flex gap-3 justify-content-center">
                <ModalButton text="Schedule Pickup" variant="white" />

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
