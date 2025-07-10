import Header from "@/components/Header"
import styles from "../../styles/Contact.module.css"
import { Mail, PhoneCall, MapPin } from "lucide-react";
import ContactFormSection from "@/components/ContactFormSection";
export default function Contact() {
  return (
    <div className="min-vh-100">
      {/* Hero Section */}
      <section className={`${styles.heroSection} bg-gradient-success text-white py-5`}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-3">Get in Touch</h1>
              <p className="lead f_18">
                Have questions about Scrapify? We'd love to hear from you. Send us a message and we'll respond as soon
                as possible.
              </p>
            </div>
          </div>
        </div>
      </section>


      <ContactFormSection />


      {/* Contact Info Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            {/* Email Us */}
            <div className="col-lg-4 mb-4">
              <div className={`${styles.contactInfo} text-center h-100`}>
                <div
                  className={`${styles.contactIcon} feature-icon bg-success text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3`}
                  style={{ width: 70, height: 70 }}
                >
                  <Mail size={28} />
                </div>
                <h4 className="fw-bold mb-2">Email Us</h4>
                <p className="text-muted f_15">
                  info@scrapify.com
                  <br />

                </p>
              </div>
            </div>

            {/* Call Us */}
            <div className="col-lg-4 mb-4">
              <div className={`${styles.contactInfo} text-center h-100`}>
                <div
                  className={`${styles.contactIcon} feature-icon bg-success text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3`}
                  style={{ width: 70, height: 70 }}
                >
                  <PhoneCall size={28} />
                </div>
                <h4 className="fw-bold mb-2">Call Us</h4>
                <p className="text-muted f_15">
                  +91-9319412012
                  <br />
                  Mon–Fri 9AM–6PM
                </p>
              </div>
            </div>

            {/* Visit Us */}
            <div className="col-lg-4 mb-4">
              <div className={`${styles.contactInfo} text-center h-100`}>
                <div
                  className={`${styles.contactIcon} feature-icon bg-success text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3`}
                  style={{ width: 70, height: 70 }}
                >
                  <MapPin size={28} />
                </div>
                <h4 className="fw-bold mb-2">Visit Us</h4>
                <p className="text-muted f_15">
                  Plot No 281,
                  Udyog Kendra 1, Ecotech 3,
                  <br />
                  Greater Noida 201306
                </p>
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
              {/* <h2 className="fw-bold text-center mb-5">Frequently Asked Questions</h2> */}
              <Header h2='Frequently Asked Questions' />
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item mb-3">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button fw-bold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq1"
                    >
                      How does Scrapify work?
                    </button>
                  </h3>
                  <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                    <div className="accordion-body f_15">
                      Scrapify uses advanced web scraping technology to extract data from websites quickly and
                      efficiently. Simply provide the URL and specify what data you need.
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-3">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed fw-bold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq2"
                    >
                      Is web scraping legal?
                    </button>
                  </h3>
                  <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body f_15">
                      Web scraping is legal when done responsibly and in compliance with website terms of service and
                      applicable laws. We provide guidelines to help you scrape ethically.
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-3">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed fw-bold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq3"
                    >
                      What formats can I export data in?
                    </button>
                  </h3>
                  <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body f_15">
                      Scrapify supports multiple export formats including CSV, JSON, Excel, and XML to suit your data
                      processing needs.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
