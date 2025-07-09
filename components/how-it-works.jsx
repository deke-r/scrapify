"use client"

import Header from "./Header"
import Lottie from "lottie-react"
import calendarAnim from "../public/animations/calendar.json"
import truckAnim from "../public/animations/truck.json"
import moneyAnim from "../public/animations/money.json"
import styles from '../styles/About.module.css'

const steps = [
  {
    icon: calendarAnim,
    title: "Book a Pickup",
    size: 70,
    description:
      "Easily schedule your scrap pickup by filling out a simple form on our website or via WhatsApp. Choose a date and time that suits you.",
  },
  {
    icon: truckAnim,
    title: "Pickup from Your Doorstep",
    size: 70,
    description:
      "Our trained executive will visit your location, weigh and collect scrap materials directly from your doorstep — hassle-free and contactless.",
  },
  {
    icon: moneyAnim,
    title: "Get Paid Instantly",
    size: 70,
    description:
      "Once pickup is done, receive instant payment via UPI, bank transfer, or wallet. No delays, no complications.",
  },
]

export default function HowItWorks() {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="text-center mb-5">
          <Header h2="How It Works" />
          <p className="lead f_16 text-muted">
            A simple and transparent 3-step scrap collection process
          </p>
        </div>

        <div className="row">
          {steps.map((step, index) => (
            <div key={index} className="col-lg-4 mb-4">
              <div className={`${styles.featureCard} card h-100 border-0 shadow-sm hover-card`}>
                <div className="card-body text-center p-4">
                  <div
                    className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                    style={{ width: 70, height: 70 }}
                  >
                    <Lottie animationData={step.icon} style={{ height: step.size }} loop={true} />
                  </div>
                  <h4 className="fw-bold mb-3">{step.title}</h4>
                  <p className="f_15 text-muted">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
