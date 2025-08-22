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
         Welcome to Scrapify — your trusted online scrap collection partner.
We offer hassle-free, doorstep bulk pickup for businesses, residential societies, offices, and institutions. From metal and paper to e-waste and furniture, we ensure fair pricing, digital weighing, and instant payments — all with transparent processes and environmentally responsible disposal.
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
               Fast & Reliable Bulk Scrap Collection Across Delhi NCR. Scrapify provides efficient bulk scrap pickup for offices, housing societies, retail stores, factories, and corporate facilities. Whether it’s metal scrap, plastic waste, cardboard cartons, or electronic junk, we ensure: On-time pickups, Certified disposal, Instant digital payments, Partner with us for a transparent, hassle-free, and eco-friendly scrap management experience.
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
        <h4 className="fw-bold text-dark">1. Effortless, On-Time Pickup</h4>
        <p className="f_15 text-justify">
         Book instantly and relax—our highly trained team and GPS-tracked fleet guarantee fast, reliable doorstep scrap collection anywhere across Delhi NCR, every time.
        </p>
      </div>

      <div className="col-12 mb-4">
        <h4 className="fw-bold text-dark">2. Comprehensive Scrap Expertise</h4>
        <p className="f_15 text-justify">
       From metals and plastics to cardboard and e-waste, we expertly manage all scrap types for offices, residential societies, factories, warehouses, and retail outlets.
        </p>
      </div>

      <div className="col-12 mb-4">
        <h4 className="fw-bold text-dark">3. Certified, Environmentally Responsible Disposal</h4>
        <p className="f_15 text-justify">
         Partnering only with government-approved recyclers, we ensure 100% compliant, eco-friendly processing. You receive GST invoices and official Green Recycling Certificates for peace of mind.
        </p>
      </div>

      <div className="col-12 mb-4">
        <h4 className="fw-bold text-dark">4. Transparent, Competitive Pricing</h4>
        <p className="f_15 text-justify">
        Say goodbye to surprises. We provide live market-based pricing, zero hidden fees, and instant digital payments immediately after verification.
        </p>
      </div>

      <div className="col-12 mb-4">
        <h4 className="fw-bold text-dark">5. Trusted by 500+ Satisfied Clients</h4>
        <p className="f_15 text-justify">
         From IT parks and educational institutions to housing societies and commercial hubs, Scrapify is the go-to scrap management partner in Delhi, Noida, Gurugram, Ghaziabad, and Faridabad.
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
        <h2 className="fw-bold text-center">Who We Serve: Tailored Scrap Solutions for Every Industry</h2>
        <p className="text-center text-muted">At Scrapify, we understand that every sector has unique scrap management challenges. That’s why we offer customized, reliable, and eco-friendly services designed to meet your specific needs.</p>
      </div>
    </div>

    <div className="row">
      {/* Industries */}
      <div className="col-lg-3 col-md-6 mb-4">
        <div className={`${styles.clientCard} card h-100 border-0 shadow-sm text-center`}>
          <div className="card-body p-4">
            <Factory size={48} className="text-success mb-3" />
            <h5 className="fw-bold">Industrial Units</h5>
            <p className="text-muted small">From heavy metal scrap to obsolete machinery, we provide safe, efficient bulk waste removal — minimizing downtime and maximizing compliance.</p>
          </div>
        </div>
      </div>

      {/* IT Companies */}
      <div className="col-lg-3 col-md-6 mb-4">
        <div className={`${styles.clientCard} card h-100 border-0 shadow-sm text-center`}>
          <div className="card-body p-4">
            <MonitorSmartphone size={48} className="text-success mb-3" />
            <h5 className="fw-bold">IT & Tech Parks</h5>
            <p className="text-muted small">Protect sensitive data and the environment with our secure e-waste disposal for servers, computers, and electronic equipment — fully certified and audit-ready.</p>
          </div>
        </div>
      </div>

      {/* Hospitals */}
      <div className="col-lg-3 col-md-6 mb-4">
        <div className={`${styles.clientCard} card h-100 border-0 shadow-sm text-center`}>
          <div className="card-body p-4">
            <Stethoscope size={48} className="text-success mb-3" />
            <h5 className="fw-bold">Hospitals & Healthcare</h5>
            <p className="text-muted small">We ensure compliant disposal of medical equipment, hospital beds, and metal scrap — helping you maintain strict health and environmental standards.</p>
          </div>
        </div>
      </div>

      {/* Hotels & Hospitality */}
      <div className="col-lg-3 col-md-6 mb-4">
        <div className={`${styles.clientCard} card h-100 border-0 shadow-sm text-center`}>
          <div className="card-body p-4">
            <Hotel size={48} className="text-success mb-3" />
            <h5 className="fw-bold">Hotels & Resorts</h5>
            <p className="text-muted small">Streamline renovations and refurbishments with hassle-free removal of old furniture, fixtures, kitchen gear, and other scrap — fast, discreet, and green.</p>
          </div>
        </div>
      </div>

      {/* Commercial Complexes */}
      <div className="col-lg-3 col-md-6 mb-4">
        <div className={`${styles.clientCard} card h-100 border-0 shadow-sm text-center`}>
          <div className="card-body p-4">
            <Building2 size={48} className="text-success mb-3" />
            <h5 className="fw-bold">Commercial Spaces</h5>
            <p className="text-muted small">Offices, malls, and retail outlets trust us for regular scrap pickups that keep their premises clean, safe, and sustainable.</p>
          </div>
        </div>
      </div>

      {/* Residential Societies */}
      <div className="col-lg-3 col-md-6 mb-4">
        <div className={`${styles.clientCard} card h-100 border-0 shadow-sm text-center`}>
          <div className="card-body p-4">
            <Home size={48} className="text-success mb-3" />
            <h5 className="fw-bold">Residential Societies</h5>
            <p className="text-muted small">We simplify community waste management with doorstep scrap collection, promoting recycling and a cleaner living environment.</p>
          </div>
        </div>
      </div>

      {/* Educational Institutions */}
      <div className="col-lg-3 col-md-6 mb-4">
        <div className={`${styles.clientCard} card h-100 border-0 shadow-sm text-center`}>
          <div className="card-body p-4">
            <GraduationCap size={48} className="text-success mb-3" />
            <h5 className="fw-bold">Educational Institutions</h5>
            <p className="text-muted small">Helping schools, colleges, and training centers responsibly dispose of outdated infrastructure and materials with transparent documentation.</p>
          </div>
        </div>
      </div>

      {/* Warehouses & Logistics */}
      <div className="col-lg-3 col-md-6 mb-4">
        <div className={`${styles.clientCard} card h-100 border-0 shadow-sm text-center`}>
          <div className="card-body p-4">
            <Truck size={48} className="text-success mb-3" />
            <h5 className="fw-bold">Warehouses & Logistics</h5>
            <p className="text-muted small">From pallets to storage racks, we handle large-scale scrap clearance with precision — ensuring smooth operations and regulatory compliance.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>






    </div>
  )
}
