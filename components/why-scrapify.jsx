"use client";
import {
  IndianRupee,
  ShieldCheck,
  Scale,
  Eye
} from "lucide-react";
import Header from "./Header";
import styles from "../styles/About.module.css";

export default function WhyScrapify() {
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
      {/* Best Rates */}
      <div className="col-lg-3 mb-4">
        <div className={`${styles.featureCard} card h-100 border-0 shadow-sm hover-card`}>
          <div className="card-body text-center p-4">
            <div
              className={`${styles.featureIcon} bg-success text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3`}
              style={{ width: 70, height: 70 }}
            >
              <IndianRupee size={32} />
            </div>
            <h4 className="fw-bold mb-3">Best Rates, No Surprises</h4>
            <p className="f_15 text-muted">
              We offer competitive and transparent pricing for all scrap types — metal, e-waste, cardboard, and more — with zero hidden charges.
            </p>
          </div>
        </div>
      </div>

      {/* Verified Scrap Pickup Team */}
      <div className="col-lg-3 mb-4">
        <div className={`${styles.featureCard} card h-100 border-0 shadow-sm hover-card`}>
          <div className="card-body text-center p-4">
            <div
              className={`${styles.featureIcon} bg-success text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3`}
              style={{ width: 70, height: 70 }}
            >
              <ShieldCheck size={32} />
            </div>
            <h4 className="fw-bold mb-3">Verified & Trained Pickup Team</h4>
            <p className="f_15 text-muted">
              Our pickup staff is background-verified and trained in industrial-grade handling, ensuring safety and professionalism on every visit.
            </p>
          </div>
        </div>
      </div>

      {/* Digital Weighing Scale */}
      <div className="col-lg-3 mb-4">
        <div className={`${styles.featureCard} card h-100 border-0 shadow-sm hover-card`}>
          <div className="card-body text-center p-4">
            <div
              className={`${styles.featureIcon} bg-success text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3`}
              style={{ width: 70, height: 70 }}
            >
              <Scale size={32} />
            </div>
            <h4 className="fw-bold mb-3">Digital Weighing & GST Invoicing</h4>
            <p className="f_15 text-muted">
              We use ISO-certified digital scales to ensure accurate weighing. Get instant UPI payments, GST-compliant invoices, and disposal certificates.
            </p>
          </div>
        </div>
      </div>

      {/* Transparent Process */}
      <div className="col-lg-3 mb-4">
        <div className={`${styles.featureCard} card h-100 border-0 shadow-sm hover-card`}>
          <div className="card-body text-center p-4">
            <div
              className={`${styles.featureIcon} bg-success text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3`}
              style={{ width: 70, height: 70 }}
            >
              <Eye size={32} />
            </div>
            <h4 className="fw-bold mb-3">100% Transparent Process</h4>
            <p className="f_15 text-muted">
              From pickup to payment, everything is documented and trackable — no guesswork, no delays. Your scrap is processed responsibly and legally.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
}
