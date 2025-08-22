export const metadata = {
  title: "About Scrapify – Scrap & E-Waste Solutions NCR",
  description:
    "Scrapify offers smart scrap management and eco-friendly e-waste solutions for businesses, societies, and institutions across Delhi NCR.",
  keywords:
    "about Scrapify, scrap company Delhi NCR, online kabadiwala Noida, e-waste collection Gurugram, eco-friendly scrap service, scrap management India, commercial scrap pickup, industrial scrap solutions, trusted scrap partner NCR",
  alternates: {
    canonical: "https://scrapify.in/about",
  },
  openGraph: {
    title: "About Scrapify – Scrap & E-Waste Solutions NCR",
    description:
      "Learn about Scrapify's tech-enabled scrap pickup and green e-waste solutions. Serving businesses and societies across Delhi NCR.",
    url: "https://scrapify.in/about",
    siteName: "Scrapify",
    images: [
      {
        url: "https://scrapify.in/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "About Scrapify",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Scrapify – Scrap & E-Waste Solutions NCR",
    description:
      "Smart scrap collection and e-waste disposal for companies, societies & institutions across Delhi NCR. Eco-friendly and tech-enabled.",
    images: ["https://scrapify.in/og-cover.jpg"],
    creator: "@scrapify",
  },
};


import Header from "@/components/Header"
import styles from "../../styles/About.module.css"
import WhyScrapify from "@/components/why-scrapify"
import StatsSection from "@/components/StatsSection"
import ModalButton from "@/components/ModalButton"

export default function About() {
  return (
    <div className="min-vh-100">
      {/* Hero Section */}
 <section className={`${styles.heroSection} bg-gradient-success d-flex align-items-center text-white py-5`}>
  <div className="container">
    <div className="row align-items-center">

      <div className="col-lg-6 order-1 order-lg-2 text-center mb-4 mb-lg-0">
        <div className={`${styles.heroImage}`}>
          <div className={`${styles.imageContainer} position-relative`}>
            <img
              src="/img/IMG_7253.webp"
              alt="Scrapify Dashboard"
              className="img-fluid rounded-5 shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="col-lg-6 order-2 order-lg-1 text-center text-lg-start">
        <h1 className="display-5 fw-bold mb-3">About Scrapify</h1>
        <p className="lead f_18 mb-4">
         Scrapify is a professional scrap management company serving businesses, housing societies, and institutions across Delhi NCR. We specialize in doorstep scrap pickup, e-waste disposal, and facility decommissioning, with a strong focus on transparency, sustainability, and instant digital payment.Trusted by commercial clients and bulk scrap generators, Scrapify combines the convenience of an online kabadiwala with the efficiency and reliability of certified waste management—bringing order, value, and accountability to scrap disposal.
        </p>
        <div className="d-flex justify-content-center justify-content-lg-start gap-3">
          <ModalButton variant="white" />
        </div>
      </div>

    </div>
  </div>
</section>


      {/* Mission Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <Header h2='Our Mission' />
              <p className="lead f_17 text-justify">
               At Scrapify, our mission is to revolutionize scrap collection by making it smart, seamless, and sustainable. We empower businesses, housing societies, and institutions to dispose of scrap responsibly, with a commitment to transparency, fair pricing, and eco-friendly practices.From bulk pickups and e-waste disposal to facility decommissioning and recycling, we’re driving a cleaner, greener future—one pickup at a time across Delhi NCR.
              </p>
            </div>
          </div>
        </div>
      </section>


      <WhyScrapify />

      <StatsSection />



      {/* CTA Section */}
      <section className={`${styles.ctaSection} py-5 bg-gradient-success text-white`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-5 fw-bold mb-4">Scrap to clear? Let’s make it easy.</h2>
              <p className="lead f_18 mb-4">
                Trusted by families and businesses alike — book your Scrapify pickup now.
              </p>
              <div className="d-flex gap-3 justify-content-center">
                <ModalButton variant="white" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
