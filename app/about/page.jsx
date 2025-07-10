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
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">About Scrapify</h1>
              <p className="lead f_18 mb-4">
                Empowering businesses and developers with intelligent web scraping solutions that transform how you
                collect and analyze web data.
              </p>
              <div className="d-flex gap-3">
            <ModalButton variant="white"/>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={`${styles.heroImage} text-center`}>
                <div className={`${styles.imageContainer} position-relative`}>
                  <img
                    src="/img/imgi_133_car-dump-cartoon-concept-with-handyman-operating-auto-crushing-machinery-vector-illustration_1284-81103.webp"
                    alt="Scrapify Dashboard"
                    className="img-fluid rounded-5 shadow-lg"
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
              <ModalButton variant="white"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
