export const metadata = {
  title: "Scrap Dealing Services in Delhi NCR – Scrapify",
  description:
    "End-to-end scrap pickup and disposal for businesses in Delhi NCR. Metal, plastic, e-waste & more. Instant payment, GST invoice, certified recycling.",
  keywords:
    "scrap dealing Delhi NCR, scrap management services, scrap dealers Noida, bulk scrap pickup Gurugram, commercial scrap buyers Ghaziabad, metal scrap Delhi, office scrap disposal, industrial scrap solutions, GST scrap pickup, certified scrap collection services, Scrapify scrap services",
  alternates: {
    canonical: "https://scrapify.in/services/scrap-dealing",
  },
  openGraph: {
    title: "Scrap Dealing Services in Delhi NCR – Scrapify",
    description:
      "Bulk scrap pickup and certified recycling for companies in Delhi NCR. Instant UPI payment, GST billing, and all material types covered.",
    url: "https://scrapify.in/services/scrap-dealing",
    siteName: "Scrapify",
    images: [
      {
        url: "https://scrapify.in/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Scrap Dealing Services by Scrapify",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scrap Dealing Services in Delhi NCR – Scrapify",
    description:
      "Scrapify handles scrap pickup and disposal for industries, societies & offices. Certified service with instant payout and GST invoices.",
    images: ["https://scrapify.in/og-cover.jpg"],
    creator: "@scrapify",
  },
};



import ModalButton from "@/components/ModalButton"
import styles from "../../../styles/scrap-dealing.module.css"
import {
  Recycle,
  Newspaper,
  FlaskConical,
  BatteryCharging,
  MonitorSmartphone,
  Sofa
} from "lucide-react";


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
      <div className="col-lg-6 order-1 order-lg-2 text-center mb-4 mb-lg-0">
        <img
          src="/img/car-dump-cartoon-icons-set-with-crushed-autos-isolated-vector-illustration_1284-81098 (2).avif"
          alt="Scrap Dealing Services"
          className="img-fluid rounded-3 shadow-lg"
        />
      </div>
      <div className="col-lg-6 order-2 order-lg-1 text-center text-lg-start">
        <h1 className="display-5 fw-bold mb-3">Scrap Dealing Services</h1>
        <p className="lead f_18 mb-4">
          Professional scrap collection, processing, and recycling solutions that help you convert waste materials
          into valuable resources.
        </p>
        <div className="d-flex justify-content-center justify-content-lg-start gap-3">
          <ModalButton variant="white" />
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
              <h2 className="fw-bold mb-4">Comprehensive Scrap Dealing Solutions</h2>
              <p className="f_16 text-justify mb-4">
                At Scrapify, we offer end-to-end scrap management solutions that help businesses convert their waste materials into valuable resources. Our trained team ensures fast, reliable collection, fair pricing, and environmentally responsible processing for all types of scrap — including metal, plastic, cardboard, e-waste, and furniture.
              </p>
              <p className="f_16 text-justify mb-4">
                With years of industry experience, Scrapify has earned a reputation for reliability, transparency, and competitive rates. Backed by modern equipment and certified recycling partners, we ensure your scrap is handled with care and processed efficiently in compliance with environmental standards.
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
      {/* Metal Scrap Collection */}
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
                  We collect and purchase all types of metal scrap, including iron, steel, copper, aluminum, and brass. Our services ensure competitive rates, digital weighing, and instant payments — ideal for factories, warehouses, and commercial sites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Paper & Cardboard Waste */}
      <div className="col-lg-6 mb-4">
        <div className={`${styles.serviceCard} card h-100 border-0 shadow-sm hover-card`}>
          <div className="card-body p-4">
            <div className="d-flex align-items-start">
              <div className={`${styles.serviceIcon} bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0`} style={{ width: 50, height: 50 }}>
                <Newspaper size={24} />
              </div>
              <div>
                <h5 className="fw-bold mb-2">Paper & Cardboard Waste</h5>
                <p className="f_15 text-muted mb-0">
                  We offer efficient collection and recycling of cardboard boxes, newspapers, shredded office paper, and packaging waste. Scrapify ensures proper sorting and eco-friendly processing in partnership with certified recyclers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Plastic Scrap Collection */}
      <div className="col-lg-6 mb-4">
        <div className={`${styles.serviceCard} card h-100 border-0 shadow-sm hover-card`}>
          <div className="card-body p-4">
            <div className="d-flex align-items-start">
              <div className={`${styles.serviceIcon} bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0`} style={{ width: 50, height: 50 }}>
                <FlaskConical size={24} />
              </div>
              <div>
                <h5 className="fw-bold mb-2">Plastic Scrap Collection</h5>
                <p className="f_15 text-muted mb-0">
                  We handle industrial and post-consumer plastic waste including PET bottles, HDPE containers, shrink wraps, crates, and more — sorted at source for effective recycling and material recovery.
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
                  Our team safely collects and disposes of used automotive, inverter, and UPS batteries. All battery scrap is processed in compliance with environmental norms, with proper documentation and disposal certificates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* E-Waste Collection */}
      <div className="col-lg-6 mb-4">
        <div className={`${styles.serviceCard} card h-100 border-0 shadow-sm hover-card`}>
          <div className="card-body p-4">
            <div className="d-flex align-items-start">
              <div className={`${styles.serviceIcon} bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0`} style={{ width: 50, height: 50 }}>
                <MonitorSmartphone size={24} />
              </div>
              <div>
                <h5 className="fw-bold mb-2">E-Waste Collection</h5>
                <p className="f_15 text-muted mb-0">
                  Scrapify offers hassle-free pickup of outdated or damaged electronic equipment such as computers, monitors, printers, routers, and servers. All e-waste is recycled through authorized channels with proper certification for compliance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Furniture Disposal */}
      <div className="col-lg-6 mb-4">
        <div className={`${styles.serviceCard} card h-100 border-0 shadow-sm hover-card`}>
          <div className="card-body p-4">
            <div className="d-flex align-items-start">
              <div className={`${styles.serviceIcon} bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0`} style={{ width: 50, height: 50 }}>
                <Sofa size={24} />
              </div>
              <div>
                <h5 className="fw-bold mb-2">Furniture Disposal</h5>
                <p className="f_15 text-muted mb-0">
                  We provide professional pickup and eco-conscious disposal of office chairs, desks, workstations, and storage units. Ideal for office renovations, clear-outs, or shutdowns — all handled responsibly.
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
                <ModalButton variant='white' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
