export const metadata = {
  title: "E-Waste Collection & Recycling in Delhi NCR – Scrapify",
  description:
    "Certified e-waste pickup for offices and industries in Delhi NCR. Secure data destruction, GST invoicing, and eco-friendly recycling.",
  keywords:
    "e-waste management Delhi, electronic waste pickup Noida, secure data destruction, certified e-waste recycler Gurugram, office electronics recycling, computer disposal Delhi NCR, eco-friendly e-waste solution, IT scrap collection, Scrapify e-waste, industrial e-waste disposal, corporate e-waste service",
  alternates: {
    canonical: "https://scrapify.in/services/e-waste-services",
  },
  openGraph: {
    title: "E-Waste Collection & Recycling in Delhi NCR – Scrapify",
    description:
      "Scrapify offers certified e-waste pickup for offices, IT, and industrial units. Secure data wipe, GST invoice, and eco disposal.",
    url: "https://scrapify.in/services/e-waste-services",
    siteName: "Scrapify",
    images: [
      {
        url: "https://scrapify.in/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Scrapify E-Waste Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Waste Collection & Recycling in Delhi NCR – Scrapify",
    description:
      "Book secure and certified e-waste pickup in Delhi NCR. For offices, IT assets, and industries. Trusted recycling partner.",
    images: ["https://scrapify.in/og-cover.jpg"],
    creator: "@scrapify",
  },
};


import ModalButton from "@/components/ModalButton"
import styles from "../../../styles/e-waste.module.css"

export default function EWasteServices() {
  const faqItems = [
    {
      question: "What happens to my personal data on devices?",
      answer:
        "We provide certified data destruction services that completely wipe all storage devices. You'll receive a certificate of data destruction for your records, ensuring complete data security.",
    },
    {
      question: "Which electronic items do you accept?",
      answer:
        "We accept computers, laptops, smartphones, tablets, televisions, home appliances, office equipment, servers, networking equipment, and most other electronic devices.",
    },
    {
      question: "Do you provide certificates for e-waste disposal?",
      answer:
        "Yes, we provide official certificates of disposal and data destruction that comply with environmental regulations and can be used for audit purposes.",
    },
    {
      question: "Is there a charge for e-waste pickup?",
      answer:
        "Pickup charges depend on the quantity and location. For bulk e-waste, we often provide free pickup services. Contact us for a customized quote.",
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
          src="/img/IMG_7248.webp"
          alt="E-Waste Management Services"
          className="img-fluid rounded-5 shadow-lg"
        />
      </div>

      <div className="col-lg-6 order-2 order-lg-1 text-center text-lg-start">
        <div className={`${styles.securityBadge} mb-3`}>
          <i className="fas fa-shield-alt me-2"></i>
          Certified Data Destruction
        </div>
        <h1 className="display-5 fw-bold mb-3">E-Waste Management Services</h1>
        <p className="lead f_18 mb-4">
          Secure and environmentally responsible electronic waste disposal with guaranteed data destruction and
          EPA compliance.
        </p>
        <div className="d-flex justify-content-center justify-content-lg-start gap-3">
          <ModalButton text="Schedule Pickup" variant="white" />
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
              <h2 className="fw-bold mb-4">Professional E-Waste Management Services</h2>
              <p className="f_16 text-justify mb-4">
                At Scrapify, we specialize in the certified collection, processing, and recycling of electronic waste across Delhi NCR. Our services are designed to help businesses, offices, and institutions safely dispose of outdated or unused electronics — including laptops, servers, printers, and other IT assets — with complete data security.
              </p>
              <p className="f_16 text-justify mb-4">
              We follow strict environmental and regulatory compliance standards, ensuring all e-waste is handled responsibly. From pickup to certified data destruction and authorized recycling, Scrapify offers end-to-end e-waste solutions that minimize risk and maximize resource recovery.
              </p>
            </div>
            <div className="col-lg-4">
              <div className={`${styles.certificationCard} text-center`}>
                <i className={`${styles.dataSecurityIcon} fas fa-certificate`}></i>
                <h5 className="fw-bold mb-2">EPA Certified</h5>
                <p className="f_14 mb-3">Fully compliant with environmental regulations</p>
                <div className={`${styles.securityElement}`}>
                  <i className="fas fa-lock fa-2x mb-2"></i>
                  <p className="f_13 mb-0">100% Data Security Guaranteed</p>
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
              <h2 className="fw-bold mb-3">E-Waste Collection Services</h2>
              <p className="lead f_16 text-muted">Comprehensive electronic waste management solutions</p>
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
                      <i className="fas fa-laptop fa-lg"></i>
                    </div>
                    <div>
                      <h5 className="fw-bold mb-2">Computers & Laptops</h5>
                      <p className="f_15 text-muted mb-0">
                        Secure disposal of computers, laptops, servers, and related hardware with guaranteed data
                        destruction and component recovery.
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
                      <i className="fas fa-mobile-alt fa-lg"></i>
                    </div>
                    <div>
                      <h5 className="fw-bold mb-2">Mobile Devices</h5>
                      <p className="f_15 text-muted mb-0">
                        Safe recycling of smartphones, tablets, and other mobile devices with complete data wiping and
                        precious metal recovery.
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
                      <i className="fas fa-tv fa-lg"></i>
                    </div>
                    <div>
                      <h5 className="fw-bold mb-2">Home Appliances</h5>
                      <p className="f_15 text-muted mb-0">
                        Responsible disposal of televisions, refrigerators, washing machines, and other household
                        electronics with proper material separation.
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
                      <i className="fas fa-print fa-lg"></i>
                    </div>
                    <div>
                      <h5 className="fw-bold mb-2">Office Equipment</h5>
                      <p className="f_15 text-muted mb-0">
                        Professional handling of printers, scanners, copiers, and other office electronic equipment with
                        bulk processing capabilities.
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
              <h2 className="fw-bold mb-3">Our E-Waste Processing Method</h2>
              <p className="lead f_16 text-muted">Secure, compliant, and environmentally responsible process</p>
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
                <h5 className="fw-bold mb-2">Collection & Transport</h5>
                <p className="f_14 text-muted">
                  We collect e-waste from your location using specialized vehicles designed for safe electronic
                  transport.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className={`${styles.processStep} text-center`}>
                <div
                  className={`${styles.stepNumber} bg-danger text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3`}
                >
                  <span className="fw-bold f_18">2</span>
                </div>
                <h5 className="fw-bold mb-2">Data Security</h5>
                <p className="f_14 text-muted">
                  All storage devices undergo certified data destruction processes to ensure complete data security.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className={`${styles.processStep} text-center`}>
                <div
                  className={`${styles.stepNumber} bg-warning text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3`}
                >
                  <span className="fw-bold f_18">3</span>
                </div>
                <h5 className="fw-bold mb-2">Dismantling</h5>
                <p className="f_14 text-muted">
                  Electronics are carefully dismantled to separate different materials and components for proper
                  recycling.
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
                  Valuable materials like gold, silver, copper, and rare earth elements are recovered through
                  specialized processes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Security Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="fw-bold mb-3">Data Security & Compliance</h2>
              <p className="lead f_16 text-muted">Your data security is our top priority</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className={`${styles.securityCard} card border-0 shadow-sm text-center`}>
                <div className="card-body p-4">
                  <i className="fas fa-certificate fa-3x text-primary mb-3"></i>
                  <h5 className="fw-bold mb-2">Certified Destruction</h5>
                  <p className="f_14 text-muted">DOD 5220.22-M compliant data wiping with certificates provided</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className={`${styles.securityCard} card border-0 shadow-sm text-center`}>
                <div className="card-body p-4">
                  <i className="fas fa-shield-alt fa-3x text-success mb-3"></i>
                  <h5 className="fw-bold mb-2">EPA Compliance</h5>
                  <p className="f_14 text-muted">Full compliance with environmental protection agency regulations</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className={`${styles.securityCard} card border-0 shadow-sm text-center`}>
                <div className="card-body p-4">
                  <i className="fas fa-file-contract fa-3x text-warning mb-3"></i>
                  <h5 className="fw-bold mb-2">Chain of Custody</h5>
                  <p className="f_14 text-muted">Complete documentation and tracking from pickup to final disposal</p>
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
              <div className="accordion" id="ewasteFaqAccordion">
                {faqItems.map((faq, index) => (
                  <div key={index} className="accordion-item mb-3 border-0 shadow-sm">
                    <h3 className="accordion-header">
                      <button
                        className={`accordion-button fw-bold ${index !== 0 ? "collapsed" : ""}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#ewasteFaq${index}`}
                      >
                        {faq.question}
                      </button>
                    </h3>
                    <div
                      id={`ewasteFaq${index}`}
                      className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                      data-bs-parent="#ewasteFaqAccordion"
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
              <h2 className="fw-bold mb-3">Dispose E-Waste Responsibly</h2>
              <p className="lead f_18 mb-4">
                Protect your data and the environment with our certified e-waste management services.
              </p>
              <div className="d-flex gap-3 justify-content-center">
                <ModalButton  variant="white"/>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
