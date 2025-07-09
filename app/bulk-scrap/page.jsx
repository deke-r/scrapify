import styles from "../../styles/Bulk-scrap.module.css"

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

      {/* What We Do Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-5">
              <h3 className="fw-bold text-center">What We Do?</h3>
            </div>
          </div>

          {/* Process Steps */}
          <div className="row mb-5">
            <div className="col-lg-4 mb-4">
              <div className={`${styles.processCard} card h-100 border-0 shadow-sm`}>
                <div className="card-body text-center p-4">
                  <div
                    className={`${styles.processIcon} bg-success text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3`}
                  >
                    <img src="/placeholder.svg?height=64&width=64" alt="Audit" className="img-fluid" />
                  </div>
                  <h4 className="fw-bold mb-3">Audit:</h4>
                  <p className="f_15 text-muted">
                    We do an inspection of your data requirements because we check what arrangements we need to do for
                    the extraction.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-4">
              <div className={`${styles.processCard} card h-100 border-0 shadow-sm`}>
                <div className="card-body text-center p-4">
                  <div
                    className={`${styles.processIcon} bg-success text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3`}
                  >
                    <img src="/placeholder.svg?height=64&width=64" alt="Participation" className="img-fluid" />
                  </div>
                  <h4 className="fw-bold mb-3">Taking part:</h4>
                  <p className="f_15 text-muted">
                    Scrapify also participates in Online Bidding/Tender for large-scale data extraction projects.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-4">
              <div className={`${styles.processCard} card h-100 border-0 shadow-sm`}>
                <div className="card-body text-center p-4">
                  <div
                    className={`${styles.processIcon} bg-success text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3`}
                  >
                    <img src="/placeholder.svg?height=64&width=64" alt="Planning" className="img-fluid" />
                  </div>
                  <h3 className="fw-bold mb-3">Preparation:</h3>
                  <p className="f_15 text-muted">
                    Our team meticulously designs a comprehensive plan and implements strategic strategies to ensure
                    efficient data extraction.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row mb-5">
            <div className="col-lg-4 mb-4">
              <div className={`${styles.processCard} card h-100 border-0 shadow-sm`}>
                <div className="card-body text-center p-4">
                  <div
                    className={`${styles.processIcon} bg-success text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3`}
                  >
                    <img src="/placeholder.svg?height=64&width=64" alt="Assigning" className="img-fluid" />
                  </div>
                  <h4 className="fw-bold mb-3">Allotting:</h4>
                  <p className="f_15 text-muted">
                    We assign a dedicated scraping executive to supervise the data extraction and processing for your
                    project.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-4">
              <div className={`${styles.processCard} card h-100 border-0 shadow-sm`}>
                <div className="card-body text-center p-4">
                  <div
                    className={`${styles.processIcon} bg-success text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3`}
                  >
                    <img src="/placeholder.svg?height=64&width=64" alt="Collecting" className="img-fluid" />
                  </div>
                  <h4 className="fw-bold mb-3">Collecting Data:</h4>
                  <p className="f_15 text-muted">
                    We carefully plan extraction routines for data collection based on the frequency and volume
                    requirements to ensure timely delivery.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-4">
              <div className={`${styles.processCard} card h-100 border-0 shadow-sm`}>
                <div className="card-body text-center p-4">
                  <div
                    className={`${styles.processIcon} bg-success text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3`}
                  >
                    <img src="/placeholder.svg?height=64&width=64" alt="Transportation" className="img-fluid" />
                  </div>
                  <h3 className="fw-bold mb-3">Processing:</h3>
                  <p className="f_15 text-muted">
                    We handle all arrangements for data processing, cleaning, and formatting according to your
                    specifications.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 mx-auto">
              <div className={`${styles.processCard} card h-100 border-0 shadow-sm`}>
                <div className="card-body text-center p-4">
                  <div
                    className={`${styles.processIcon} bg-success text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3`}
                  >
                    <img src="/placeholder.svg?height=64&width=64" alt="Reporting" className="img-fluid" />
                  </div>
                  <h5 className="fw-bold mb-3">Reporting:</h5>
                  <p className="f_15 text-muted">
                    Our detailed reports provide a comprehensive overview of the quantity and categories of data
                    collected and processed, based on careful day-to-day record-keeping.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-5">
              <h2 className="fw-bold text-center">Why Choose Scrapify for Bulk Data Collection?</h2>
            </div>
          </div>

          <div className="row">
            <div className="col-12 mb-4">
              <h2 className="fw-bold text-success">1. Convenience:</h2>
              <p className="f_15 text-justify">
                We understand that managing and processing bulk data extraction can be a time-consuming and challenging
                task. With our Bulk Data Collection Service, we take care of all the technical complexities involved in
                collecting your web data. Our team will coordinate with you to schedule convenient extraction times,
                ensuring a hassle-free experience.
              </p>
            </div>

            <div className="col-12 mb-4">
              <h2 className="fw-bold text-success">2. Efficient Handling:</h2>
              <p className="f_15 text-justify">
                Our experienced professionals are trained in handling a wide range of data extraction requirements.
                Whether you need e-commerce data, social media content, news articles, or any other web-based
                information, we have the expertise to handle it all. We utilize state-of-the-art tools and techniques to
                ensure safe and efficient collection of your data.
              </p>
            </div>

            <div className="col-12 mb-4">
              <h2 className="fw-bold text-success">3. Environmentally Friendly:</h2>
              <p className="f_15 text-justify">
                By choosing Scrapify for your bulk data collection needs, you are contributing to efficient digital
                resource utilization. We prioritize optimized scraping methods and proper data management to minimize
                server load and ensure sustainable data extraction practices.
              </p>
            </div>

            <div className="col-12 mb-4">
              <h2 className="fw-bold text-success">4. Competitive Pricing:</h2>
              <p className="f_15 text-justify">
                We offer competitive pricing for our Bulk Data Collection Service. Our rates are based on the complexity
                and volume of data being collected, ensuring you receive fair value for your investment. Our transparent
                pricing policy ensures that there are no hidden costs or surprises.
              </p>
            </div>

            <div className="col-12 mb-4">
              <h2 className="fw-bold text-success">5. Compliance and Documentation:</h2>
              <p className="f_15 text-justify">
                At Scrapify, we adhere to all relevant regulations and guidelines governing web scraping and data
                collection. We provide proper documentation and certification for the data extraction services provided,
                ensuring compliance with legal requirements. You can trust us to handle your data collection needs
                responsibly and ethically.
              </p>
            </div>

            <div className="col-12 text-center">
              <button className="btn btn-success btn-lg">Get Quote</button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Prospective Clients Section */}
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
                  <div className={`${styles.clientIcon} mx-auto mb-3`}></div>
                  <h2 className="fw-bold">E-commerce</h2>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className={`${styles.clientCard} card h-100 border-0 shadow-sm text-center`}>
                <div className="card-body p-4">
                  <div className={`${styles.clientIcon} mx-auto mb-3`}></div>
                  <h2 className="fw-bold">Tech Startups</h2>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className={`${styles.clientCard} card h-100 border-0 shadow-sm text-center`}>
                <div className="card-body p-4">
                  <div className={`${styles.clientIcon} mx-auto mb-3`}></div>
                  <h2 className="fw-bold">Research Firms</h2>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className={`${styles.clientCard} card h-100 border-0 shadow-sm text-center`}>
                <div className="card-body p-4">
                  <div className={`${styles.clientIcon} mx-auto mb-3`}></div>
                  <h2 className="fw-bold">Marketing Agencies</h2>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className={`${styles.clientCard} card h-100 border-0 shadow-sm text-center`}>
                <div className="card-body p-4">
                  <div className={`${styles.clientIcon} mx-auto mb-3`}></div>
                  <h2 className="fw-bold">Financial Services</h2>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className={`${styles.clientCard} card h-100 border-0 shadow-sm text-center`}>
                <div className="card-body p-4">
                  <div className={`${styles.clientIcon} mx-auto mb-3`}></div>
                  <h2 className="fw-bold">Media Companies</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    
    </div>
  )
}
