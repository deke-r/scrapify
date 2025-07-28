export const metadata = {
  title: "Bulk Scrap & E-Waste Pickup in Delhi NCR – Scrapify",
  description:
    "Book certified bulk scrap or e-waste pickup in Delhi NCR. Trusted by businesses and societies. Instant UPI payment, GST billing, green disposal.",
  keywords:
    "bulk scrap pickup Delhi, online kabadiwala Noida, scrap dealer Gurugram, e-waste collection Ghaziabad, scrap buyers Faridabad, industrial scrap Delhi NCR, kabadiwala for companies, commercial scrap buyers, scrapify booking, instant scrap payment, online scrap collection, facility decommissioning Delhi, recycling service India, B2B scrap pickup, green disposal certificate",
  alternates: {
    canonical: "https://scrapify.in/bulk-scrap",
  },
  openGraph: {
    title: "Bulk Scrap & E-Waste Pickup in Delhi NCR – Scrapify",
    description:
      "Book bulk scrap or e-waste pickup in Delhi NCR. Trusted by industries. Instant UPI, GST invoice, green-certified disposal.",
    url: "https://scrapify.in/bulk-scrap",
    siteName: "Scrapify",
    images: [
      {
        url: "https://scrapify.in/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Bulk Scrap Pickup by Scrapify",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bulk Scrap & E-Waste Pickup in Delhi NCR – Scrapify",
    description:
      "Certified scrap and e-waste pickup with GST invoicing and instant UPI payout. Trusted by industries and housing societies.",
    images: ["https://scrapify.in/og-cover.jpg"],
    creator: "@scrapify",
  },
};



import Header from "@/components/Header"
import styles from "../../styles/Bulk-scrap.module.css"
import WhatWeDo from "@/components/WhatWeDo"
import {
  Factory,
  MonitorSmartphone,
  Stethoscope,
  Hotel,
  Building2,
  Home,
  GraduationCap,
  Truck
} from "lucide-react";

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
     <section className={`${styles.heroSection} bg-gradient-success text-white py-5`}>
  <div className="container">
    <div className="row align-items-center">
      
      <div className="col-lg-6 order-1 order-lg-2 text-center">
        <div className={`${styles.heroImage}`}>
          <img
            src="/img/bulk.webp"
            alt="Bulk Scrap Collection"
            className="img-fluid rounded-5 shadow-lg"
          />
        </div>
      </div>

      <div className="col-lg-6 order-2 order-lg-1 mb-4 mb-lg-0 text-center text-lg-start">
        <h1 className="display-5 fw-bold mb-3">
          Bulk Scrap Collection Services for Businesses & Societies
        </h1>
        <h3 className="fw-semibold mb-4">
          Welcome to Scrapify Online Web Scraping Bulk Collection Service!
        </h3>
        <div className="d-flex justify-content-center justify-content-lg-start gap-3">
          <ModalButton text="Get a quote" variant="white" />
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
        <p className="text-center text-muted">We cater to a wide range of sectors that require responsible scrap management and recycling solutions.</p>
      </div>
    </div>

    <div className="row">
      {/* Industries */}
      <div className="col-lg-3 col-md-6 mb-4">
        <div className={`${styles.clientCard} card h-100 border-0 shadow-sm text-center`}>
          <div className="card-body p-4">
            <Factory size={48} className="text-success mb-3" />
            <h5 className="fw-bold">Industrial Units</h5>
            <p className="text-muted small">Scrap metal, machinery, and bulk waste management for factories and plants.</p>
          </div>
        </div>
      </div>

      {/* IT Companies */}
      <div className="col-lg-3 col-md-6 mb-4">
        <div className={`${styles.clientCard} card h-100 border-0 shadow-sm text-center`}>
          <div className="card-body p-4">
            <MonitorSmartphone size={48} className="text-success mb-3" />
            <h5 className="fw-bold">IT & Tech Parks</h5>
            <p className="text-muted small">Secure e-waste disposal for servers, computers, and electronic peripherals.</p>
          </div>
        </div>
      </div>

      {/* Hospitals */}
      <div className="col-lg-3 col-md-6 mb-4">
        <div className={`${styles.clientCard} card h-100 border-0 shadow-sm text-center`}>
          <div className="card-body p-4">
            <Stethoscope size={48} className="text-success mb-3" />
            <h5 className="fw-bold">Hospitals</h5>
            <p className="text-muted small">Disposal of medical equipment, beds, and metal scrap as per norms.</p>
          </div>
        </div>
      </div>

      {/* Hotels & Hospitality */}
      <div className="col-lg-3 col-md-6 mb-4">
        <div className={`${styles.clientCard} card h-100 border-0 shadow-sm text-center`}>
          <div className="card-body p-4">
            <Hotel size={48} className="text-success mb-3" />
            <h5 className="fw-bold">Hotels & Resorts</h5>
            <p className="text-muted small">Scrap clearance from furniture, fixtures, and kitchen equipment.</p>
          </div>
        </div>
      </div>

      {/* Commercial Complexes */}
      <div className="col-lg-3 col-md-6 mb-4">
        <div className={`${styles.clientCard} card h-100 border-0 shadow-sm text-center`}>
          <div className="card-body p-4">
            <Building2 size={48} className="text-success mb-3" />
            <h5 className="fw-bold">Commercial Spaces</h5>
            <p className="text-muted small">Offices, malls, and retail outlets requiring periodic scrap pickup.</p>
          </div>
        </div>
      </div>

      {/* Residential Societies */}
      <div className="col-lg-3 col-md-6 mb-4">
        <div className={`${styles.clientCard} card h-100 border-0 shadow-sm text-center`}>
          <div className="card-body p-4">
            <Home size={48} className="text-success mb-3" />
            <h5 className="fw-bold">Residential Societies</h5>
            <p className="text-muted small">Community-level waste management and recyclables collection.</p>
          </div>
        </div>
      </div>

      {/* Educational Institutions */}
      <div className="col-lg-3 col-md-6 mb-4">
        <div className={`${styles.clientCard} card h-100 border-0 shadow-sm text-center`}>
          <div className="card-body p-4">
            <GraduationCap size={48} className="text-success mb-3" />
            <h5 className="fw-bold">Institutions</h5>
            <p className="text-muted small">Schools, colleges, and training centers discarding old infrastructure.</p>
          </div>
        </div>
      </div>

      {/* Warehouses & Logistics */}
      <div className="col-lg-3 col-md-6 mb-4">
        <div className={`${styles.clientCard} card h-100 border-0 shadow-sm text-center`}>
          <div className="card-body p-4">
            <Truck size={48} className="text-success mb-3" />
            <h5 className="fw-bold">Warehouses & Logistics</h5>
            <p className="text-muted small">Pallets, storage racks, and outdated logistics scrap handled efficiently.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>






    </div>
  )
}
