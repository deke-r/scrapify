export const metadata = {
  title: "Scrapify – Bulk Scrap & E-Waste Pickup in Delhi, Noida, Gurugram",
  description:
    "Scrapify offers certified bulk scrap pickup, e-waste collection & facility decommissioning across Delhi NCR. Trusted by societies, offices, and industries for fast pickups, instant UPI payments, GST invoicing, and green-certified disposal. Book your pickup online or via WhatsApp.",
  keywords:
    "bulk scrap pickup Delhi, online kabadiwala Noida, scrap dealer Gurugram, e-waste collection Ghaziabad, scrap buyers Faridabad, industrial scrap Delhi NCR, kabadiwala for companies, commercial scrap buyers, scrapify booking, instant scrap payment, online scrap collection, facility decommissioning Delhi, recycling service India, B2B scrap pickup, green disposal certificate"
}


import Header from "@/components/Header"
import styles from "../../styles/Bulk-scrap.module.css"
import WhatWeDo from "@/components/WhatWeDo"
import {
  ShoppingCart,
  Rocket,
  BookOpen,
  Megaphone,
  Banknote,
  Newspaper,
} from "lucide-react"
import ModalButton from "@/components/ModalButton"


export default function BulkScrap() {
  return (
    <div className="min-vh-100">
      {/* Announcement Bar */}
      <section className={`${styles.announcementBar} bg-light py-2`}>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <marquee className="f_14">Minimum Pickup Value Must Be Rs:5000/-</marquee>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className={`${styles.heroSection} bg-gradient-success d-flex align-items-center text-white py-5`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">Bulk Scrap Collection Services for Businesses & Societies</h1>
              <h3 className="fw-bold mb-4">Welcome to Scrapify Online Web Scraping Bulk Collection Service!</h3>
              <div className="d-flex gap-3">
                <ModalButton text='Get a quote' variant="white" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className={`${styles.heroImage} text-center`}>
                <img
                  src="/img/imgi_6_scrap-metal-flat-composition-with-cityscape-background-view-bulldozer-with-workers-moving-waste-iron-vector-illustration_1284-79302.webp"
                  alt="Bulk Scrap Collection"
                  className="img-fluid rounded-5 shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p className="lead f_16 text-justify mb-4">
                Scrapify offers fast and reliable bulk scrap collection for offices, housing societies, retail stores, factories, and corporate facilities across Delhi NCR. Whether it’s metal scrap, plastic waste, cartons, or electronic junk — we ensure on-time pickup, certified disposal, and instant digital payment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WhatWeDo />


     <section className="py-5">
  <div className="container">
    <div className="row">
      <div className="col-12 text-center mb-5">
        <Header h2="Why Choose Scrapify for Bulk Scrap Collection?" />
      </div>
    </div>

    <div className="row">
      <div className="col-12 mb-4">
        <h4 className="fw-bold text-dark">1. Seamless Pickup Execution</h4>
        <p className="f_15 text-justify">
          From instant booking to doorstep scrap pickup, our trained staff and GPS-enabled fleet ensure hassle-free, timely service across Delhi NCR.
        </p>
      </div>

      <div className="col-12 mb-4">
        <h4 className="fw-bold text-dark">2. Expertise in All Scrap Types</h4>
        <p className="f_15 text-justify">
          We handle a wide variety of bulk scrap—metal, plastic, cardboard, and e-waste—from offices, societies, factories, warehouses, and retail spaces.
        </p>
      </div>

      <div className="col-12 mb-4">
        <h4 className="fw-bold text-dark">3. Eco-Friendly & Certified Disposal</h4>
        <p className="f_15 text-justify">
          Our recycling partners follow government norms. You receive GST invoices and Green Recycling Certificates after every pickup, ensuring full compliance.
        </p>
      </div>

      <div className="col-12 mb-4">
        <h4 className="fw-bold text-dark">4. Transparent Pricing</h4>
        <p className="f_15 text-justify">
          Get real-time scrap rates with no hidden costs. We offer instant payments via UPI or bank transfer after material verification.
        </p>
      </div>

      <div className="col-12 mb-4">
        <h4 className="fw-bold text-dark">5. Trusted by 500+ Clients</h4>
        <p className="f_15 text-justify">
          Scrapify is the go-to scrap partner for IT parks, schools, housing societies, and commercial buildings throughout Delhi, Noida, Gurugram, Ghaziabad, and Faridabad.
        </p>
      </div>

      <div className="col-12 text-center">
        <ModalButton text="Get a Quote" variant="green" />
      </div>
    </div>
  </div>
</section>





      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-5">
              <h2 className="fw-bold text-center">Our Prospective Clients</h2>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className={`${styles.clientCard} card h-100 border-0 shadow-sm text-center`}>
                <div className="card-body p-4">
                  <ShoppingCart size={48} className="text-success mb-3" />
                  <h4 className="fw-bold">E-commerce</h4>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className={`${styles.clientCard} card h-100 border-0 shadow-sm text-center`}>
                <div className="card-body p-4">
                  <Rocket size={48} className="text-success mb-3" />
                  <h4 className="fw-bold">Tech Startups</h4>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className={`${styles.clientCard} card h-100 border-0 shadow-sm text-center`}>
                <div className="card-body p-4">
                  <BookOpen size={48} className="text-success mb-3" />
                  <h4 className="fw-bold">Research Firms</h4>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className={`${styles.clientCard} card h-100 border-0 shadow-sm text-center`}>
                <div className="card-body p-4">
                  <Megaphone size={48} className="text-success mb-3" />
                  <h4 className="fw-bold">Marketing Agencies</h4>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className={`${styles.clientCard} card h-100 border-0 shadow-sm text-center`}>
                <div className="card-body p-4">
                  <Banknote size={48} className="text-success mb-3" />
                  <h4 className="fw-bold">Financial Services</h4>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className={`${styles.clientCard} card h-100 border-0 shadow-sm text-center`}>
                <div className="card-body p-4">
                  <Newspaper size={48} className="text-success mb-3" />
                  <h4 className="fw-bold">Media Companies</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>





    </div>
  )
}
