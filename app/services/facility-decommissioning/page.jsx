import ModalButton from "@/components/ModalButton"
import styles from "../../../styles/facility-decommissioning.module.css"
import {
  ClipboardList,
  Truck,
  Leaf,
  Brush,
} from "lucide-react"
export default function FacilityDecommissioning() {
  const faqItems = [
    {
      question: "What types of facilities do you decommission?",
      answer:
        "We handle manufacturing plants, warehouses, data centers, laboratories, hospitals, schools, and other commercial and industrial facilities of all sizes.",
    },
    {
      question: "How do you maximize asset value recovery?",
      answer:
        "We conduct thorough asset evaluations, utilize multiple sales channels including auctions and direct sales, and have partnerships with equipment dealers to ensure maximum value recovery.",
    },
    {
      question: "Do you handle environmental compliance?",
      answer:
        "Yes, we manage all environmental aspects including soil testing, contamination assessment, hazardous material removal, and regulatory reporting to ensure full compliance.",
    },
    {
      question: "What is the typical timeline for decommissioning?",
      answer:
        "Timeline varies based on facility size and complexity. Small facilities may take 2-4 weeks, while large industrial sites can take several months. We provide detailed project schedules during planning.",
    },
  ]

  return (
    <div className="min-vh-100">
      {/* Hero Section */}
      <section className={`${styles.heroSection} bg-gradient-success text-white py-5`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className={`${styles.complianceBadge} mb-3`}>
                <i className="fas fa-certificate me-2"></i>
                EPA Compliant
              </div>
              <h1 className="display-4 fw-bold mb-4">Facility Decommissioning Services</h1>
              <p className="lead f_18 mb-4">
                Complete facility shutdown and asset recovery solutions with maximum value recovery and environmental
                compliance.
              </p>
              <div className="d-flex gap-3">
                <ModalButton text="Request Assessment" variant="white"/>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Facility Decommissioning Services"
                className="img-fluid rounded-3 shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h2 className="fw-bold mb-4">Comprehensive Facility Decommissioning</h2>
              <p className="f_16 text-justify mb-4">
                Scrapify provides end-to-end facility decommissioning services for businesses closing operations or
                relocating. We handle everything from asset inventory and equipment removal to site cleanup and
                environmental remediation, ensuring maximum value recovery and regulatory compliance.
              </p>
              <p className="f_16 text-justify mb-4">
                Our systematic approach combines decades of experience with cutting-edge technology to deliver
                comprehensive decommissioning solutions. We work closely with facility owners, environmental
                consultants, and regulatory agencies to ensure smooth project execution.
              </p>
            </div>
            <div className="col-lg-4">
              <div className={`${styles.recoveryMetrics}`}>
                <div className="mb-4">
                  <span className={`${styles.metricValue}`}>92%</span>
                  <div className={`${styles.metricLabel}`}>Average Asset Recovery</div>
                </div>
                <div className="mb-4">
                  <span className={`${styles.metricValue}`}>100%</span>
                  <div className={`${styles.metricLabel}`}>Compliance Rate</div>
                </div>
                <div className="mb-4">
                  <span className={`${styles.metricValue}`}>45</span>
                  <div className={`${styles.metricLabel}`}>Days Average Timeline</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  <section className="py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="fw-bold mb-3">Decommissioning Service Portfolio</h2>
            <p className="lead f_16 text-muted">
              Complete facility closure and asset recovery solutions
            </p>
          </div>
        </div>

        <div className="row">
          {/* Asset Inventory */}
          <div className="col-lg-6 mb-4">
            <div className={`${styles.serviceCard} card h-100 border-0 shadow-sm hover-card`}>
              <div className="card-body p-4">
                <div className="d-flex align-items-start">
                  <div
                    className={`${styles.serviceIcon} bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0`}
                    style={{ width: 50, height: 50 }}
                  >
                    <ClipboardList size={24} />
                  </div>
                  <div>
                    <h5 className="fw-bold mb-2">Asset Inventory</h5>
                    <p className="f_15 text-muted mb-0">
                      Comprehensive cataloging and valuation of all facility assets including machinery, equipment,
                      and materials with detailed documentation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Equipment Removal */}
          <div className="col-lg-6 mb-4">
            <div className={`${styles.serviceCard} card h-100 border-0 shadow-sm hover-card`}>
              <div className="card-body p-4">
                <div className="d-flex align-items-start">
                  <div
                    className={`${styles.serviceIcon} bg-info text-white rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0`}
                    style={{ width: 50, height: 50 }}
                  >
                    <Truck size={24} />
                  </div>
                  <div>
                    <h5 className="fw-bold mb-2">Equipment Removal</h5>
                    <p className="f_15 text-muted mb-0">
                      Safe dismantling and removal of industrial equipment, machinery, and infrastructure components
                      with specialized handling.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Environmental Cleanup */}
          <div className="col-lg-6 mb-4">
            <div className={`${styles.serviceCard} card h-100 border-0 shadow-sm hover-card`}>
              <div className="card-body p-4">
                <div className="d-flex align-items-start">
                  <div
                    className={`${styles.serviceIcon} bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0`}
                    style={{ width: 50, height: 50 }}
                  >
                    <Leaf size={24} />
                  </div>
                  <div>
                    <h5 className="fw-bold mb-2">Environmental Cleanup</h5>
                    <p className="f_15 text-muted mb-0">
                      Soil testing, contamination assessment, and environmental remediation to meet regulatory
                      standards and compliance requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Site Restoration */}
          <div className="col-lg-6 mb-4">
            <div className={`${styles.serviceCard} card h-100 border-0 shadow-sm hover-card`}>
              <div className="card-body p-4">
                <div className="d-flex align-items-start">
                  <div
                    className={`${styles.serviceIcon} bg-warning text-white rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0`}
                    style={{ width: 50, height: 50 }}
                  >
                    <Brush size={24} />
                  </div>
                  <div>
                    <h5 className="fw-bold mb-2">Site Restoration</h5>
                    <p className="f_15 text-muted mb-0">
                      Complete site cleanup and restoration to prepare the facility for new use or redevelopment with
                      final inspection.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
      {/* Process Timeline */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="fw-bold mb-3">Our Decommissioning Process</h2>
              <p className="lead f_16 text-muted">Systematic approach to facility closure and asset recovery</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className={`${styles.timelineStep}`}>
                <h5 className="fw-bold mb-2">Initial Assessment</h5>
                <p className="f_15 text-muted">
                  Comprehensive facility evaluation including asset inventory, environmental assessment, and regulatory
                  review with detailed reporting.
                </p>
              </div>
              <div className={`${styles.timelineStep}`}>
                <h5 className="fw-bold mb-2">Decommissioning Plan</h5>
                <p className="f_15 text-muted">
                  Development of detailed project timeline, asset recovery strategy, and environmental compliance plan
                  with stakeholder approval.
                </p>
              </div>
              <div className={`${styles.timelineStep}`}>
                <h5 className="fw-bold mb-2">Asset Recovery</h5>
                <p className="f_15 text-muted">
                  Systematic removal and processing of valuable equipment and materials with maximum value recovery
                  through multiple sales channels.
                </p>
              </div>
              <div className={`${styles.timelineStep}`}>
                <h5 className="fw-bold mb-2">Site Remediation</h5>
                <p className="f_15 text-muted">
                  Environmental cleanup, site restoration, and final compliance verification for facility closure with
                  regulatory sign-off.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className={`${styles.assetCard} text-center`}>
                    <i className={`${styles.valueIcon} fas fa-dollar-sign`}></i>
                    <h5 className="fw-bold mb-2">Value Recovery</h5>
                    <p className="f_14 mb-0">Maximum asset value through strategic sales and auctions</p>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className={`${styles.assetCard} text-center`}>
                    <i className={`${styles.valueIcon} fas fa-recycle`}></i>
                    <h5 className="fw-bold mb-2">Material Recovery</h5>
                    <p className="f_14 mb-0">Sustainable recycling of non-sellable materials and components</p>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className={`${styles.assetCard} text-center`}>
                    <i className={`${styles.valueIcon} fas fa-shield-alt`}></i>
                    <h5 className="fw-bold mb-2">Compliance</h5>
                    <p className="f_14 mb-0">Full regulatory compliance and environmental protection</p>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className={`${styles.assetCard} text-center`}>
                    <i className={`${styles.valueIcon} fas fa-clock`}></i>
                    <h5 className="fw-bold mb-2">Timeline</h5>
                    <p className="f_14 mb-0">Efficient project completion within agreed schedules</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Asset Recovery Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="fw-bold mb-3">Asset Recovery & Sales Channels</h2>
              <p className="lead f_16 text-muted">Multiple avenues to maximize your asset value</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="card border-0 shadow-sm text-center">
                <div className="card-body p-4">
                  <i className="fas fa-gavel fa-3x text-primary mb-3"></i>
                  <h5 className="fw-bold mb-2">Equipment Auctions</h5>
                  <p className="f_14 text-muted">
                    Online and live auctions for maximum market exposure and competitive bidding
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card border-0 shadow-sm text-center">
                <div className="card-body p-4">
                  <i className="fas fa-handshake fa-3x text-success mb-3"></i>
                  <h5 className="fw-bold mb-2">Direct Sales</h5>
                  <p className="f_14 text-muted">
                    Direct sales to equipment dealers and end users for specialized machinery
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card border-0 shadow-sm text-center">
                <div className="card-body p-4">
                  <i className="fas fa-globe fa-3x text-warning mb-3"></i>
                  <h5 className="fw-bold mb-2">International Markets</h5>
                  <p className="f_14 text-muted">Global network for specialized equipment with international demand</p>
                </div>
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
              <div className="accordion" id="facilityFaqAccordion">
                {faqItems.map((faq, index) => (
                  <div key={index} className="accordion-item mb-3 border-0 shadow-sm">
                    <h3 className="accordion-header">
                      <button
                        className={`accordion-button fw-bold ${index !== 0 ? "collapsed" : ""}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#facilityFaq${index}`}
                      >
                        {faq.question}
                      </button>
                    </h3>
                    <div
                      id={`facilityFaq${index}`}
                      className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                      data-bs-parent="#facilityFaqAccordion"
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
              <h2 className="fw-bold mb-3">Planning Facility Closure?</h2>
              <p className="lead f_18 mb-4">
                Maximize asset recovery and ensure compliance with our comprehensive decommissioning services.
              </p>
              <div className="d-flex gap-3 justify-content-center">
                 <ModalButton text="Request Assessment" variant="white"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
