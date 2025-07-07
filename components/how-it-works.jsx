"use client"

import { Calendar, Truck, DollarSign } from "lucide-react"

const steps = [
  {
    icon: Calendar,
    title: "Book a Pickup",
    description: "You can Book through our Website or via WhatsApp.",
  },
  {
    icon: Truck,
    title: "Pickup from your Doorstep",
    description:
      "We have scheduled an appointment for an executive to arrive at your doorstep on the date and time of your choosing.",
  },
  {
    icon: DollarSign,
    title: "Get Paid",
    description:
      "Get paid conveniently with our wallet system that offers multiple payment options to suit your preferences.",
  },
]

export default function HowItWorks() {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-6 fw-bold text-dark mb-4">How It Works</h2>
        </div>

        <div className="row g-4">
          {steps.map((step, index) => (
            <div key={index} className="col-md-4">
              <div className="card h-100  text-center border-0  hover-card">
                <div className="card-body py-5">
                  <div className="feature-icon-lg bg-success bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4">
                    <step.icon size={40} className="text-success" />
                  </div>
                  <h5 className="card-title fw-bold text-dark mb-3">{step.title}</h5>
                  <p className="card-text text-muted">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
