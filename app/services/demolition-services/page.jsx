export const metadata = {
  title: "Demolition & Site Clearance in Delhi NCR – Scrapify",
  description:
    "Certified demolition services for factories, offices & warehouses in Delhi NCR. Safe dismantling, scrap recovery, and full site clearance.",
  keywords:
    "demolition services Delhi NCR, industrial demolition Noida, factory dismantling Gurugram, certified site clearance Delhi, machine removal Noida, scrap disposal service, office demolition contractor, Scrapify demolition solutions, interior strip-out Delhi, commercial demolition services NCR",
  alternates: {
    canonical: "https://scrapify.in/services/demolition-services",
  },
  openGraph: {
    title: "Demolition & Site Clearance in Delhi NCR – Scrapify",
    description:
      "Get certified demolition and clearance services in Delhi NCR. Offices, warehouses, factories — safe dismantling and scrap disposal.",
    url: "https://scrapify.in/services/demolition-services",
    siteName: "Scrapify",
    images: [
      {
        url: "https://scrapify.in/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Scrapify Demolition Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Demolition & Site Clearance in Delhi NCR – Scrapify",
    description:
      "Scrapify offers safe, certified demolition for industrial and office spaces. Trusted across Delhi, Noida, and Gurugram.",
    images: ["https://scrapify.in/og-cover.jpg"],
    creator: "@scrapify",
  },
};


import ModalButton from "@/components/ModalButton"
import styles from "../../../styles/demolition.module.css"

export default function DemolitionServices() {
  const faqItems = [
    {
      question: "What permits are required for demolition?",
      answer:
        "Demolition permits vary by location and structure type. We handle all permit applications and ensure compliance with local building codes and environmental regulations.",
    },
    {
      question: "How do you handle hazardous materials?",
      answer:
        "We conduct thorough asbestos and hazardous material surveys before demolition. Any hazardous materials are safely removed by certified professionals following EPA guidelines.",
    },
    {
      question: "What happens to the demolished materials?",
      answer:
        "We prioritize material recovery and recycling. Metals, concrete, wood, and other materials are sorted and processed for reuse, significantly reducing landfill waste.",
    },
    {
      question: "How long does a typical demolition take?",
      answer:
        "Timeline depends on structure size, complexity, and permit requirements. Residential demolitions typically take 1-3 days, while commercial projects may take several weeks.",
    },
  ]

  return (
    <div className="min-vh-100">
      {/* Hero Section */}
     <section className={`${styles.heroSection} bg-gradient-success text-white py-5`}>
  <div className="container">
    <div className="row align-items-center">

      <div className="col-lg-6 order-1 order-lg-2 text-center mb-4 mb-lg-0">
        <img
          src="/img/car-dump-cartoon-composition-with-crushed-auto-landfill-vector-illustration_1284-81099.avif"
          alt="Demolition Services"
          className="img-fluid rounded-3 shadow-lg"
        />
      </div>

      <div className="col-lg-6 order-2 order-lg-1 text-center text-lg-start">
        <div className={`${styles.safetyBadge} mb-3`}>
          <i className="fas fa-hard-hat me-2"></i>
          Licensed & Insured
        </div>
        <h1 className="display-5 fw-bold mb-3">Demolition Services</h1>
        <p className="lead f_18 mb-4">
          Safe, efficient, and environmentally conscious demolition solutions for residential, commercial, and
          industrial structures.
        </p>
        <div className="d-flex justify-content-center justify-content-lg-start gap-3">
          <ModalButton text="Get Demolition Quote" variant="white" />
        </div>
      </div>

    </div>
  </div>
</section>


      {/* Overview Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h2 className="fw-bold mb-4">Professional Demolition Solutions</h2>
              <p className="f_16 text-justify mb-4">
              At Scrapify, we provide end-to-end demolition services for commercial, industrial, and institutional properties across Delhi NCR. Our trained demolition team uses advanced equipment and adheres to strict safety and environmental protocols to ensure smooth, compliant, and efficient project execution.
              </p>
              <p className="f_16 text-justify mb-4">
             With years of experience in structural dismantling, interior strip-outs, and equipment removal, we handle projects of every scale — from office floor demolitions to large industrial facility teardowns. Every job is executed with a focus on material recovery, eco-friendly scrap disposal, and site readiness for future development.
              </p>
            </div>
            <div className="col-lg-4">
              <div className={`${styles.demolitionStats} text-center`}>
                <div className="mb-4">
                  <span className={`${styles.statNumber}`}>500+</span>
                  <div className={`${styles.statLabel}`}>Projects Completed</div>
                </div>
                <div className="mb-4">
                  <span className={`${styles.statNumber}`}>99.9%</span>
                  <div className={`${styles.statLabel}`}>Safety Record</div>
                </div>
                <div className="mb-4">
                  <span className={`${styles.statNumber}`}>85%</span>
                  <div className={`${styles.statLabel}`}>Material Recovery</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="fw-bold mb-3">Demolition Service Types</h2>
              <p className="lead f_16 text-muted">Specialized demolition solutions for every need</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className={`${styles.serviceCard} card h-100 border-0 shadow-sm hover-card`}>
                <div className="card-body p-4">
                  <div className="d-flex align-items-start">
                    <div
                      className={`${styles.serviceIcon} bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0`}
                    >
                      <i className="fas fa-home fa-lg"></i>
                    </div>
                    <div>
                      <h5 className="fw-bold mb-2">Residential Demolition</h5>
                      <p className="f_15 text-muted mb-0">
                        Complete or partial demolition of houses, apartments, and residential structures with careful
                        material recovery and neighborhood consideration.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className={`${styles.serviceCard} card h-100 border-0 shadow-sm hover-card`}>
                <div className="card-body p-4">
                  <div className="d-flex align-items-start">
                    <div
                      className={`${styles.serviceIcon} bg-info text-white rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0`}
                    >
                      <i className="fas fa-building fa-lg"></i>
                    </div>
                    <div>
                      <h5 className="fw-bold mb-2">Commercial Demolition</h5>
                      <p className="f_15 text-muted mb-0">
                        Professional demolition of office buildings, retail spaces, and commercial properties with
                        minimal disruption to surrounding businesses.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className={`${styles.serviceCard} card h-100 border-0 shadow-sm hover-card`}>
                <div className="card-body p-4">
                  <div className="d-flex align-items-start">
                    <div
                      className={`${styles.serviceIcon} bg-warning text-white rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0`}
                    >
                      <i className="fas fa-industry fa-lg"></i>
                    </div>
                    <div>
                      <h5 className="fw-bold mb-2">Industrial Demolition</h5>
                      <p className="f_15 text-muted mb-0">
                        Specialized demolition of factories, warehouses, and industrial facilities with hazardous
                        material handling and environmental compliance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className={`${styles.serviceCard} card h-100 border-0 shadow-sm hover-card`}>
                <div className="card-body p-4">
                  <div className="d-flex align-items-start">
                    <div
                      className={`${styles.serviceIcon} bg-secondary text-white rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0`}
                    >
                      <i className="fas fa-hammer fa-lg"></i>
                    </div>
                    <div>
                      <h5 className="fw-bold mb-2">Selective Demolition</h5>
                      <p className="f_15 text-muted mb-0">
                        Precise interior demolition and renovation support while preserving structural integrity and
                        valuable architectural elements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="fw-bold mb-3">Our Demolition Process</h2>
              <p className="lead f_16 text-muted">Systematic approach ensuring safety and efficiency</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className={`${styles.processStep} text-center`}>
                <div
                  className={`${styles.stepNumber} bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3`}
                >
                  <span className="fw-bold f_18">1</span>
                </div>
                <h5 className="fw-bold mb-2">Site Assessment</h5>
                <p className="f_14 text-muted">
                  Comprehensive evaluation of the structure, utilities, hazardous materials, and surrounding
                  environment.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className={`${styles.processStep} text-center`}>
                <div
                  className={`${styles.stepNumber} bg-warning text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3`}
                >
                  <span className="fw-bold f_18">2</span>
                </div>
                <h5 className="fw-bold mb-2">Permit & Planning</h5>
                <p className="f_14 text-muted">
                  Obtaining necessary permits and creating detailed demolition plans with safety and environmental
                  considerations.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className={`${styles.processStep} text-center`}>
                <div
                  className={`${styles.stepNumber} bg-danger text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3`}
                >
                  <span className="fw-bold f_18">3</span>
                </div>
                <h5 className="fw-bold mb-2">Safe Demolition</h5>
                <p className="f_14 text-muted">
                  Systematic demolition using appropriate equipment and techniques while following strict safety
                  protocols.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className={`${styles.processStep} text-center`}>
                <div
                  className={`${styles.stepNumber} bg-success text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3`}
                >
                  <span className="fw-bold f_18">4</span>
                </div>
                <h5 className="fw-bold mb-2">Material Recovery</h5>
                <p className="f_14 text-muted">
                  Sorting and processing demolished materials for recycling, reducing waste and environmental impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="fw-bold mb-3">Advanced Demolition Equipment</h2>
              <p className="lead f_16 text-muted">State-of-the-art machinery for safe and efficient demolition</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className={`${styles.equipmentCard} text-center`}>
                <i className={`${styles.safetyIcon} fas fa-truck`}></i>
                <h5 className="fw-bold mb-2">Excavators</h5>
                <p className="f_14 mb-0">Heavy-duty excavators for structural demolition and material handling</p>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className={`${styles.equipmentCard} text-center`}>
                <i className={`${styles.safetyIcon} fas fa-hammer`}></i>
                <h5 className="fw-bold mb-2">Hydraulic Breakers</h5>
                <p className="f_14 mb-0">Precision breaking equipment for controlled demolition work</p>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className={`${styles.equipmentCard} text-center`}>
                <i className={`${styles.safetyIcon} fas fa-cut`}></i>
                <h5 className="fw-bold mb-2">Cutting Tools</h5>
                <p className="f_14 mb-0">Diamond wire saws and concrete cutters for precise material separation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className="fw-bold text-center mb-5">Frequently Asked Questions</h2>
              <div className="accordion" id="demolitionFaqAccordion">
                {faqItems.map((faq, index) => (
                  <div key={index} className="accordion-item mb-3 border-0 shadow-sm">
                    <h3 className="accordion-header">
                      <button
                        className={`accordion-button fw-bold ${index !== 0 ? "collapsed" : ""}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#demolitionFaq${index}`}
                      >
                        {faq.question}
                      </button>
                    </h3>
                    <div
                      id={`demolitionFaq${index}`}
                      className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                      data-bs-parent="#demolitionFaqAccordion"
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
              <h2 className="fw-bold mb-3">Need Professional Demolition?</h2>
              <p className="lead f_18 mb-4">
                Get safe, efficient demolition services with maximum material recovery and environmental responsibility.
              </p>
              <div className="d-flex gap-3 justify-content-center">
                <ModalButton text="Get Demolition Quote" variant="white"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
