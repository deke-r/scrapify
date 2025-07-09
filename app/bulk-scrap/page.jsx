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
              <h1 className="display-4 fw-bold mb-4">Bulk Scrap Collection</h1>
              <h3 className="fw-bold mb-4">Welcome to Scrapify Online Web Scraping Bulk Collection Service!</h3>
              <div className="d-flex gap-3">
                <button className="btn btn-light btn-lg text-success fw-bold">Get Quote</button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={`${styles.heroImage} text-center`}>
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Bulk Scrap Collection"
                  className="img-fluid rounded-3 shadow-lg"
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
                At Scrapify Online Web Scraping, we are committed to creating efficient data extraction solutions by
                providing reliable and scalable bulk scraping services. Our Bulk Scrap Collection Service is designed to
                cater to the needs of businesses, developers, and organizations that require large volumes of web data
                extraction.
              </p>
            </div>
          </div>
        </div>
      </section>

<WhatWeDo/>

    
  <section className="py-5">
  <div className="container">
    <div className="row">
      <div className="col-12 mb-5">
        <Header h2="Why Scrapify for Bulk Data?" />
      </div>
    </div>

    <div className="row">
      <div className="col-12 mb-4">
        <h4 className="fw-bold text-dark">1. Seamless Execution</h4>
        <p className="f_15 text-justify">
          We simplify the bulk scraping process by managing all technical operations—from scheduling to execution—ensuring a smooth and stress-free experience for your team.
        </p>
      </div>

      <div className="col-12 mb-4">
        <h4 className="fw-bold text-dark">2. Multi-Domain Expertise</h4>
        <p className="f_15 text-justify">
          Whether it's product listings, social feeds, listings, or media content, our team is skilled in extracting structured data from a wide range of web sources.
        </p>
      </div>

      <div className="col-12 mb-4">
        <h4 className="fw-bold text-dark">3. Optimized & Sustainable</h4>
        <p className="f_15 text-justify">
          We follow optimized scraping workflows that reduce server load and promote responsible data extraction, aligning with ethical data usage practices.
        </p>
      </div>

      <div className="col-12 mb-4">
        <h4 className="fw-bold text-dark">4. Transparent Pricing</h4>
        <p className="f_15 text-justify">
          Our pricing is clear, fair, and scalable based on project scope—no hidden fees or surprise charges, just accurate estimates tailored to your needs.
        </p>
      </div>

      <div className="col-12 mb-4">
        <h4 className="fw-bold text-dark">5. Full Compliance</h4>
        <p className="f_15 text-justify">
          We ensure all data collection is legally compliant and provide audit-ready documentation and logs for transparency and accountability.
        </p>
      </div>

      <div className="col-12 text-center">
        <button className="btn btn-success btn-lg">Get Quote</button>
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
