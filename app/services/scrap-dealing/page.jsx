import ModalButton from "@/components/ModalButton"
import styles from "../../../styles/scrap-dealing.module.css"
import {
  Recycle,
  Newspaper,
  FlaskConical,
  BatteryCharging,
} from "lucide-react"

export default function ScrapDealing() {
  const faqItems = [
    {
      question: "What types of scrap materials do you accept?",
      answer:
        "We accept a wide variety of materials including metals (iron, steel, aluminum, copper, brass), paper products, cardboard, plastic materials, batteries, and electronic waste. Contact us for specific material inquiries.",
    },
    {
      question: "How do you determine scrap prices?",
      answer:
        "Our pricing is based on current market rates, material quality, quantity, and type. We provide transparent pricing and ensure you get competitive rates for your scrap materials.",
    },
    {
      question: "Do you provide pickup services?",
      answer:
        "Yes, we offer free doorstep pickup services for bulk quantities. For smaller amounts, you can visit our collection centers or schedule a pickup for a nominal fee.",
    },
    {
      question: "What is the minimum quantity for pickup?",
      answer:
        "We typically require a minimum value of Rs. 500 for free pickup services. However, this may vary based on location and material type.",
    },
  ]

  return (
    <div className="min-vh-100">
      {/* Hero Section */}
      <section className={`${styles.heroSection} bg-gradient-success text-white py-5`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">Scrap Dealing Services</h1>
              <p className="lead f_18 mb-4">
                Professional scrap collection, processing, and recycling solutions that help you convert waste materials
                into valuable resources.
              </p>
              <div className="d-flex gap-3">
                <ModalButton variant='white'/>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Scrap Dealing Services"
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
              <h2 className="fw-bold mb-4">Comprehensive Scrap Dealing Solutions</h2>
              <p className="f_16 text-justify mb-4">
                At Scrapify, we provide end-to-end scrap dealing services that help businesses and individuals convert
                their waste materials into valuable resources. Our professional team ensures efficient collection, fair
                pricing, and environmentally responsible processing of all types of scrap materials.
              </p>
              <p className="f_16 text-justify mb-4">
                With years of experience in the scrap industry, we have built a reputation for reliability,
                transparency, and competitive pricing. Our state-of-the-art facilities and trained professionals ensure
                that your scrap materials are handled with care and processed efficiently.
              </p>
            </div>
            <div className="col-lg-4">
              <div className={`${styles.featuresCard} card border-0 shadow-sm bg-light`}>
                <div className="card-body">
                  <h5 className="fw-bold mb-3 text-success">Key Features</h5>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <span className="f_14">Free doorstep pickup service</span>
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <span className="f_14">Competitive market rates</span>
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <span className="f_14">Instant payment options</span>
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <span className="f_14">Certified weighing systems</span>
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <span className="f_14">Environmental compliance</span>
                    </li>
                  </ul>
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
            <h2 className="fw-bold mb-3">Our Scrap Collection Services</h2>
            <p className="lead f_16 text-muted">
              Comprehensive solutions for all types of scrap materials
            </p>
          </div>
        </div>
        <div className="row">
          {/* Metal Scrap */}
          <div className="col-lg-6 mb-4">
            <div className={`${styles.serviceCard} card h-100 border-0 shadow-sm hover-card`}>
              <div className="card-body p-4">
                <div className="d-flex align-items-start">
                  <div className={`${styles.serviceIcon} bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0`} style={{ width: 50, height: 50 }}>
                    <Recycle size={24} />
                  </div>
                  <div>
                    <h5 className="fw-bold mb-2">Metal Scrap Collection</h5>
                    <p className="f_15 text-muted mb-0">
                      We collect and process all types of metal scraps including iron, steel, aluminum, copper, and brass with competitive pricing and immediate payment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Paper & Cardboard */}
          <div className="col-lg-6 mb-4">
            <div className={`${styles.serviceCard} card h-100 border-0 shadow-sm hover-card`}>
              <div className="card-body p-4">
                <div className="d-flex align-items-start">
                  <div className={`${styles.serviceIcon} bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0`} style={{ width: 50, height: 50 }}>
                    <Newspaper size={24} />
                  </div>
                  <div>
                    <h5 className="fw-bold mb-2">Paper & Cardboard</h5>
                    <p className="f_15 text-muted mb-0">
                      Efficient collection and recycling of newspapers, magazines, cardboard boxes, and office paper waste with proper sorting and processing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Plastic Materials */}
          <div className="col-lg-6 mb-4">
            <div className={`${styles.serviceCard} card h-100 border-0 shadow-sm hover-card`}>
              <div className="card-body p-4">
                <div className="d-flex align-items-start">
                  <div className={`${styles.serviceIcon} bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0`} style={{ width: 50, height: 50 }}>
                    <FlaskConical size={24} />
                  </div>
                  <div>
                    <h5 className="fw-bold mb-2">Plastic Materials</h5>
                    <p className="f_15 text-muted mb-0">
                      Comprehensive plastic waste management including bottles, containers, and industrial plastic materials with proper categorization.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Battery Recycling */}
          <div className="col-lg-6 mb-4">
            <div className={`${styles.serviceCard} card h-100 border-0 shadow-sm hover-card`}>
              <div className="card-body p-4">
                <div className="d-flex align-items-start">
                  <div className={`${styles.serviceIcon} bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0`} style={{ width: 50, height: 50 }}>
                    <BatteryCharging size={24} />
                  </div>
                  <div>
                    <h5 className="fw-bold mb-2">Battery Recycling</h5>
                    <p className="f_15 text-muted mb-0">
                      Safe collection and disposal of automotive batteries, UPS batteries, and other battery types with environmental compliance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

      
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="fw-bold mb-3">Our Scrap Dealing Process</h2>
              <p className="lead f_16 text-muted">Simple, transparent, and efficient process for maximum value</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className={`${styles.processStep} text-center`}>
                <div
                  className={`${styles.stepNumber} bg-success text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3`}
                >
                  <span className="fw-bold f_18">1</span>
                </div>
                <h5 className="fw-bold mb-2">Schedule Pickup</h5>
                <p className="f_14 text-muted">
                  Contact us via phone or website to schedule a convenient pickup time for your scrap materials.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className={`${styles.processStep} text-center`}>
                <div
                  className={`${styles.stepNumber} bg-success text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3`}
                >
                  <span className="fw-bold f_18">2</span>
                </div>
                <h5 className="fw-bold mb-2">Material Assessment</h5>
                <p className="f_14 text-muted">
                  Our experts assess and categorize your scrap materials to determine the best pricing structure.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className={`${styles.processStep} text-center`}>
                <div
                  className={`${styles.stepNumber} bg-success text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3`}
                >
                  <span className="fw-bold f_18">3</span>
                </div>
                <h5 className="fw-bold mb-2">Accurate Weighing</h5>
                <p className="f_14 text-muted">
                  We use certified digital scales to ensure accurate measurement and fair pricing for all materials.
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
                <h5 className="fw-bold mb-2">Instant Payment</h5>
                <p className="f_14 text-muted">
                  Receive immediate payment through cash, bank transfer, or digital payment methods of your choice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

     
      {/* <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="fw-bold mb-3">Current Scrap Rates</h2>
              <p className="lead f_16 text-muted">Competitive pricing for all scrap materials</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className={`${styles.priceCard} card border-0 shadow-sm text-center`}>
                <div className="card-body p-4">
                  <i className="fas fa-tools fa-3x text-success mb-3"></i>
                  <h5 className="fw-bold mb-2">Iron & Steel</h5>
                  <div className={`${styles.price} text-success fw-bold mb-2`}>₹25-30/kg</div>
                  <p className="f_13 text-muted">Current market rate</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className={`${styles.priceCard} card border-0 shadow-sm text-center`}>
                <div className="card-body p-4">
                  <i className="fas fa-coins fa-3x text-success mb-3"></i>
                  <h5 className="fw-bold mb-2">Aluminum</h5>
                  <div className={`${styles.price} text-success fw-bold mb-2`}>₹120-140/kg</div>
                  <p className="f_13 text-muted">Current market rate</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className={`${styles.priceCard} card border-0 shadow-sm text-center`}>
                <div className="card-body p-4">
                  <i className="fas fa-bolt fa-3x text-success mb-3"></i>
                  <h5 className="fw-bold mb-2">Copper</h5>
                  <div className={`${styles.price} text-success fw-bold mb-2`}>₹450-500/kg</div>
                  <p className="f_13 text-muted">Current market rate</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className={`${styles.priceCard} card border-0 shadow-sm text-center`}>
                <div className="card-body p-4">
                  <i className="fas fa-newspaper fa-3x text-success mb-3"></i>
                  <h5 className="fw-bold mb-2">Paper</h5>
                  <div className={`${styles.price} text-success fw-bold mb-2`}>₹8-12/kg</div>
                  <p className="f_13 text-muted">Current market rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className="fw-bold text-center mb-5">Frequently Asked Questions</h2>
              <div className="accordion" id="scrapFaqAccordion">
                {faqItems.map((faq, index) => (
                  <div key={index} className="accordion-item mb-3 border-0 shadow-sm">
                    <h3 className="accordion-header">
                      <button
                        className={`accordion-button fw-bold ${index !== 0 ? "collapsed" : ""}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#scrapFaq${index}`}
                      >
                        {faq.question}
                      </button>
                    </h3>
                    <div
                      id={`scrapFaq${index}`}
                      className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                      data-bs-parent="#scrapFaqAccordion"
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


      <section className={`${styles.ctaSection} py-5 bg-gradient-success text-white`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="fw-bold mb-3">Ready to Sell Your Scrap?</h2>
              <p className="lead f_18 mb-4">
                Get the best prices for your scrap materials with our professional dealing services.
              </p>
              <div className="d-flex gap-3 justify-content-center">
              <ModalButton variant='white'/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
