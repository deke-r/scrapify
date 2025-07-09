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
                <h4 className="fw-bold mb-3">Best Rates</h4>
                <p className="f_15 text-muted">
                  Scrapify offers competitive prices for all types of scrap — transparent and fair.
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
                <h4 className="fw-bold mb-3">Verified Pickup Team</h4>
                <p className="f_15 text-muted">
                  Our trusted and verified team ensures a professional and secure pickup at your doorstep.
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
                <h4 className="fw-bold mb-3">Digital Accuracy</h4>
                <p className="f_15 text-muted">
                  We use ISO-certified digital weighing scales to ensure full transparency and precision.
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
                <h4 className="fw-bold mb-3">Transparent Process</h4>
                <p className="f_15 text-muted">
                  Every step is visible — from weighing to payment — for your complete peace of mind.
                </p>
              </div>
            </div>
          </div>

          {/* Optional: Add more cards if desired */}
        </div>
      </div>
    </section>
  );
}
