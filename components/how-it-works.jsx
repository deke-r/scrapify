"use client"

import Header from "./Header"
import Lottie from "lottie-react"
import calendarAnim from "../public/animations/calendar.json"
import truckAnim from "../public/animations/truck.json"
import moneyAnim from "../public/animations/money.json"

const steps = [
  {
    icon: calendarAnim,
    title: "Book a Pickup",
    size: 90,
    description:
      "Easily schedule your scrap pickup by filling out a simple form on our website or by sending us a message on WhatsApp. Choose a date and time that works best for you.",
  },
  {
    icon: truckAnim,
    title: "Pickup from Your Doorstep",
    size: 160,
    description:
      "Our trained executive will arrive at your location at the scheduled date and time. We'll weigh, verify, and collect your scrap materials directly from your doorstep — hassle-free and contactless.",
  },
  {
    icon: moneyAnim,
    title: "Get Paid Instantly",
    size: 100,
    description:
      "Once the pickup is complete, you’ll receive instant payment via your preferred method — UPI, bank transfer, or wallet credit. No delays, no complications.",
  },
]

export default function HowItWorks() {
  return (
    <section className="py-5  bg-white">
      <div className="container ">
        <div className="text-center mb-5">
          <Header h2="How It Works" />
        </div>

        <div className="row g-4">
          {steps.map((step, index) => (
            <div key={index} className="col-md-4">
              <div className="card h-100 text-center rounded-5 border-0 hover-card">
                <div className="card-body py-5">
                  <div
                    className="bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
                    style={{ height: 100, width: 100 }}
                  >
                    <Lottie
                      animationData={step.icon}
                      loop={true}
                      height={step.size}
                      
                    />
                  </div>
                  <h5 className="card-title fw-bold text-dark mb-3">
                    {step.title}
                  </h5>
                  <p className="card-text fw-semibold text-muted text-justify">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
