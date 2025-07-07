"use client"

import { ArrowRight } from "lucide-react"

export default function CallToAction() {
  return (
    <section className="py-5 bg-gradient-success text-white">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <h2 className="display-6 fw-bold mb-3">
              Book a <span className="text-warning">Pickup Request</span>.
            </h2>
            <p className="lead mb-0">
              Give your all scrap to Online Kabadiwala for Recycling Hassle free doorstep pickup service.
            </p>
          </div>
          <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
            <button className="btn btn-warning btn-lg fw-bold d-flex align-items-center justify-content-center mx-auto mx-lg-0">
              Schedule a pickup
              <ArrowRight size={20} className="ms-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
