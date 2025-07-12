export const metadata = {
  title: "Contact Scrapify – Bulk Scrap & E-Waste Pickup NCR",
  description:
    "Contact Scrapify to book scrap or e-waste pickup in Delhi NCR. Schedule online or via WhatsApp for fast, eco-friendly service and instant payout.",
  keywords:
    "contact Scrapify, scrap pickup contact, book scrap collection, bulk scrap disposal Delhi NCR, e-waste pickup Noida, schedule scrap service Gurugram, WhatsApp scrap booking, commercial scrap contact, eco-friendly scrap solutions",
  alternates: {
    canonical: "https://scrapify.in/contact",
  },
  openGraph: {
    title: "Contact Scrapify – Bulk Scrap & E-Waste Pickup NCR",
    description:
      "Reach out to Scrapify for bulk scrap or e-waste pickup in Delhi, Noida, Gurugram. Book online or via WhatsApp. Fast service. Instant payment.",
    url: "https://scrapify.in/contact",
    siteName: "Scrapify",
    images: [
      {
        url: "https://scrapify.in/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Scrapify for Scrap Pickup",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Scrapify – Bulk Scrap & E-Waste Pickup NCR",
    description:
      "Contact us to schedule scrap pickup in NCR. Online booking, WhatsApp support, instant payout.",
    images: ["https://scrapify.in/og-cover.jpg"],
    creator: "@scrapify",
  },
};



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


  <section className="py-5">
  <div className="container">
    <div className="row">
      <div className="col-lg-8 mx-auto">
        <Header h2="Frequently Asked Questions" />
        <div className="accordion" id="faqAccordion">
          
          {/* Question 1 */}
          <div className="accordion-item mb-3">
            <h3 className="accordion-header">
              <button
                className="accordion-button fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faq1"
              >
                How does Scrapify's bulk scrap pickup work?
              </button>
            </h3>
            <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
              <div className="accordion-body f_15">
                Scrapify offers doorstep bulk scrap collection for societies, offices, and industries. Simply book via WhatsApp or our website, and our verified pickup team will arrive with digital weighing scales, offer live rates, and provide instant UPI or cash payment with GST invoice.
              </div>
            </div>
          </div>

          {/* Question 2 */}
          <div className="accordion-item mb-3">
            <h3 className="accordion-header">
              <button
                className="accordion-button collapsed fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faq2"
              >
                Do you provide GST invoices and disposal certificates?
              </button>
            </h3>
            <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body f_15">
                Yes, we issue GST-compliant invoices and disposal certificates for every transaction. This is ideal for businesses and corporate clients who need legal and audit-ready scrap documentation.
              </div>
            </div>
          </div>

          {/* Question 3 */}
          <div className="accordion-item mb-3">
            <h3 className="accordion-header">
              <button
                className="accordion-button collapsed fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faq3"
              >
                Which cities does Scrapify currently serve?
              </button>
            </h3>
            <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body f_15">
                We currently operate across Delhi NCR, including Noida, Gurugram, Ghaziabad, and Faridabad. Bulk pickup services are available 7 days a week for commercial and institutional clients.
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
