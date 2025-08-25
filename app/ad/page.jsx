"use client"

import { useForm } from "react-hook-form"
import "bootstrap/dist/css/bootstrap.min.css"
import ServicesOverview from "@/components/ServicesOverview"
import '../../styles/AdPage.css'
import Link from "next/link"
import ModalButton from "@/components/ModalButton"
import FloatingAdForm from "@/components/FloatingAdForm"

export default function BookingPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm()

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        // Redirect to thank you page
        window.location.href = "/thank-you"
      } else {
        alert("Something went wrong. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("Something went wrong. Please try again.")
    }
  }

  return (
    <>


      {/* Navigation */}


      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand ms-md-5 fw-bold" href="/">
            <img src='/img/logo.jpg' width={130} alt='logo' />
          </Link>
          <div className="navbar-nav ms-auto">
            <a className="nav-link py-3 mx-3 btn-outline-success rounded-4 px-5" href="#services">
              Services
            </a>
            <ModalButton text="Book Now" variant="white" />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 hero-content d-flex align-items-center">
              <div>

                <h1 className="display-4 fw-bold mb-4">Professional Scrap & E-Waste Pickup Service</h1>
                <p className="lead mb-4">
                  Get instant cash for your scrap materials and electronic waste. We provide doorstep pickup with
                  transparent pricing and eco-friendly disposal.
                </p>
                <div className="d-flex gap-3">
                  <div className="text-center">
                    <div className="h3 fw-bold">500+</div>
                    <small>Happy Customers</small>
                  </div>
                  <div className="text-center">
                    <div className="h3 fw-bold">24/7</div>
                    <small>Service Available</small>
                  </div>
                  <div className="text-center">
                    <div className="h3 fw-bold">100%</div>
                    <small>Eco-Friendly</small>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-lg-6">
              <img src="/img/erasebg-transformed (1).png" alt="Scrap Pickup Service" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      <FloatingAdForm/>

      <section id="services" className="py-5">
        <ServicesOverview />
      </section>

      <div className="row my-3">
        <div className="col-lg-8 mx-auto text-center">
          <div className={` bg-gradient-success text-white rounded-3 p-5`}>
            <h3 className="fw-bold mb-3">Need Reliable Scrap Pickup Services?</h3>
            <p className="f_16 mb-4">
              Partner with Scrapify for hassle-free scrap collection and responsible e-waste recycling.
            </p>
            <div className="d-flex gap-3 justify-content-center">
              <ModalButton text="Book Now" variant="white" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              {/* <Link className="navbar-brand ms-md-5 fw-bold" href="/">
          <img src='/img/logo.jpg' width={130} alt='logo' />
        </Link> */}
            </div>
            <div className="col-md-6 text-md-end">
              <p className="p-0">Contact: +91 9876543210 | info@scrapify.in</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
