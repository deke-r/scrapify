"use client";
import { useState } from "react";
import {
  IndianRupee,
  ShieldCheck,
  Scale,
  Eye
} from "lucide-react";
import Header from "./Header";
import PickupRequestModal from "./PickupRequestModal";
import styles from "../styles/About.module.css";

export default function WhyScrapify() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const cards = [
    {
      icon: <IndianRupee size={32} />,
      title: "Best Rates, No Surprises",
      desc:
        "We offer competitive, transparent pricing for all types of scrap — metal, e-waste, cardboard, plastic, and more — with zero hidden charges and real-time market rates you can trust."
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Verified & Trained Pickup Team",
      desc:
        "Our pickup professionals are background-verified and trained in industrial-grade scrap handling, ensuring safe, reliable, and professional service every time."
    },
    {
      icon: <Scale size={32} />,
      title: "Digital Weighing & GST Invoicing",
      desc:
        "We use ISO-certified digital weighing scales for 100% accuracy. Receive instant UPI payments, GST-compliant invoices, and disposal certificates—all in real time."
    },
    {
      icon: <Eye size={32} />,
      title: "100% Transparent Process",
      desc:
        "From pickup to payment, every step is documented, trackable, and verifiable—no guesswork, no delays. Your scrap is handled legally, responsibly, and with complete transparency."
    }
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center mb-5">
            <Header h2="Why Choose Scrapify?" />
            <p className="lead f_16 text-muted">
              Discover what makes us the trusted partner for your scrap disposal needs
            </p>
          </div>
        </div>

        <div className="row">
          {cards.map((card, index) => (
            <div className="col-lg-3 mb-4" key={index}>
              <div
                role="button"
                onClick={openModal}
                className={`${styles.featureCard} card h-100 border-0 shadow-sm hover-card`}
                style={{ cursor: "pointer", transition: "transform 0.2s" }}
              >
                <div className="card-body text-center p-4">
                  <div
                    className={`${styles.featureIcon} bg-success text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3`}
                    style={{ width: 70, height: 70 }}
                  >
                    {card.icon}
                  </div>
                  <h4 className="fw-bold mb-3">{card.title}</h4>
                  <p className="f_15 text-muted">{card.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

     
        <PickupRequestModal show={showModal} handleClose={closeModal} />
      </div>
    </section>
  );
}
