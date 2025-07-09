import Header from "@/components/Header"
import styles from "../../styles/About.module.css"
import WhyScrapify from "@/components/why-scrapify"
import StatsSection from "@/components/StatsSection"

export default function About() {
  return (
    <div className="min-vh-100">
      {/* Hero Section */}
      <section className={`${styles.heroSection} bg-gradient-success d-flex align-items-center text-white py-5`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">About Scrapify</h1>
              <p className="lead f_18 mb-4">
                Empowering businesses and developers with intelligent web scraping solutions that transform how you
                collect and analyze web data.
              </p>
              <div className="d-flex gap-3">
                <button className="btn btn-outline-light btn-lg">Our Story</button>
                <button className="btn btn-light btn-lg text-success fw-bold">Get Started</button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={`${styles.heroImage} text-center`}>
                <div className={`${styles.imageContainer} position-relative`}>
                  <img
                    src="/placeholder.svg?height=400&width=500"
                    alt="Scrapify Dashboard"
                    className="img-fluid rounded-3 shadow-lg"
                  />
                </div>
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
              <Header h2='Our Mission'/>
              <p className="lead f_17 text-justify">
                At Scrapify, we believe that data should be accessible to everyone. Our mission is to democratize web
                scraping by providing powerful, user-friendly tools that make data extraction simple, efficient, and
                ethical. We're committed to helping businesses of all sizes harness the power of web data to make
                informed decisions and drive growth.
              </p>
            </div>
          </div>
        </div>
      </section>


<WhyScrapify/>

 <StatsSection/>

      {/* Team Section */}
      {/* <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <Header h2='Meet Our Team'/>

              <p className="lead f_16 text-muted">The passionate people behind Scrapify</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className={`${styles.teamCard} card border-0 shadow-sm hover-card`}>
                <div className="card-body text-center p-4">
                  <img
                    src="/placeholder.svg?height=150&width=150"
                    alt="John Doe"
                    className={`${styles.teamImage} rounded-circle mb-3`}
                  />
                  <h5 className="fw-bold mb-1">John Doe</h5>
                  <p className="text-success f_14 mb-2">CEO & Founder</p>
                  <p className="f_14 text-muted">
                    Passionate about making data accessible to everyone through innovative technology.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className={`${styles.teamCard} card border-0 shadow-sm hover-card`}>
                <div className="card-body text-center p-4">
                  <img
                    src="/placeholder.svg?height=150&width=150"
                    alt="Jane Smith"
                    className={`${styles.teamImage} rounded-circle mb-3`}
                  />
                  <h5 className="fw-bold mb-1">Jane Smith</h5>
                  <p className="text-success f_14 mb-2">CTO</p>
                  <p className="f_14 text-muted">
                    Leading our technical vision with expertise in scalable web scraping solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className={`${styles.teamCard} card border-0 shadow-sm hover-card`}>
                <div className="card-body text-center p-4">
                  <img
                    src="/placeholder.svg?height=150&width=150"
                    alt="Mike Johnson"
                    className={`${styles.teamImage} rounded-circle mb-3`}
                  />
                  <h5 className="fw-bold mb-1">Mike Johnson</h5>
                  <p className="text-success f_14 mb-2">Head of Product</p>
                  <p className="f_14 text-muted">
                    Ensuring our products deliver exceptional user experiences and value.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className={`${styles.ctaSection} py-5 bg-gradient-success text-white`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-5 fw-bold mb-4">Ready to Get Started?</h2>
              <p className="lead f_18 mb-4">
                Join thousands of developers and businesses who trust Scrapify for their data needs.
              </p>
              <div className="d-flex gap-3 justify-content-center">
                <button className="btn btn-light btn-lg text-success fw-bold">Start Free Trial</button>
                <button className="btn btn-outline-light btn-lg">View Pricing</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
