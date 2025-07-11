"use client"

import {
  ClipboardList,
  Gavel,
  Hammer,
  UserCheck,
  Database,
  Settings,
  FileBarChart2
} from "lucide-react"
import Header from "./Header"
import styles from "../styles/Bulk-scrap.module.css"

export default function WhatWeDo() {
  return (
<section className="py-5 bg-light">
  <div className="container">
    <div className="row">
      <div className="col-12 mb-5">
        <Header h2="What We Do at Scrapify" />
      </div>
    </div>

    {/* First Row */}
    <div className="row mb-5">
      <div className="col-lg-4 mb-4">
        <div className={`${styles.processCard} card h-100 border-0 shadow-sm`}>
          <div className="card-body text-center p-4">
            <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: 64, height: 64 }}>
              <ClipboardList size={32} />
            </div>
            <h4 className="fw-bold mb-3">Scrap Assessment & Requirement Audit</h4>
            <p className="f_15 text-muted">
              We assess your scrap type, quantity, and pickup location—whether it’s e-waste, metal, cardboard, or mixed waste. On-site surveys available for large projects.
            </p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 mb-4">
        <div className={`${styles.processCard} card h-100 border-0 shadow-sm`}>
          <div className="card-body text-center p-4">
            <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: 64, height: 64 }}>
              <Gavel size={32} />
            </div>
            <h4 className="fw-bold mb-3">Pickup Planning & Scheduling</h4>
            <p className="f_15 text-muted">
              We offer fast, flexible pickup slots for offices, factories, societies, and commercial spaces—daily, weekly, or on-demand.
            </p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 mb-4">
        <div className={`${styles.processCard} card h-100 border-0 shadow-sm`}>
          <div className="card-body text-center p-4">
            <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: 64, height: 64 }}>
              <Hammer size={32} />
            </div>
            <h4 className="fw-bold mb-3">On-Ground Collection & Loading</h4>
            <p className="f_15 text-muted">
              Our trained team arrives with weighing equipment and transport vehicles. Scrap is collected safely, efficiently, and with proper handling.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Second Row */}
    <div className="row mb-5">
      <div className="col-lg-4 mb-4">
        <div className={`${styles.processCard} card h-100 border-0 shadow-sm`}>
          <div className="card-body text-center p-4">
            <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: 64, height: 64 }}>
              <UserCheck size={32} />
            </div>
            <h4 className="fw-bold mb-3">Instant Digital Payment & Invoicing</h4>
            <p className="f_15 text-muted">
              Once scrap is weighed and verified, we initiate UPI or bank payment on the spot. Clients also receive GST invoices and eco-disposal certificates.
            </p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 mb-4">
        <div className={`${styles.processCard} card h-100 border-0 shadow-sm`}>
          <div className="card-body text-center p-4">
            <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: 64, height: 64 }}>
              <Database size={32} />
            </div>
            <h4 className="fw-bold mb-3">Eco-Friendly Processing & Recycling</h4>
            <p className="f_15 text-muted">
              All collected materials are sent to authorized recyclers for safe and legal processing, including dismantling and disposal per pollution board norms.
            </p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 mb-4">
        <div className={`${styles.processCard} card h-100 border-0 shadow-sm`}>
          <div className="card-body text-center p-4">
            <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: 64, height: 64 }}>
              <Settings size={32} />
            </div>
            <h4 className="fw-bold mb-3">Reporting & Compliance Support</h4>
            <p className="f_15 text-muted">
              For corporate and industrial clients, we offer detailed pickup reports, carbon offset impact summaries, and CSR partnership options.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Final Row */}
    <div className="row">
      <div className="col-lg-6 mx-auto">
        <div className={`${styles.processCard} card h-100 border-0 shadow-sm`}>
          <div className="card-body text-center p-4">
            <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: 64, height: 64 }}>
              <FileBarChart2 size={32} />
            </div>
            <h4 className="fw-bold mb-3">Insightful Reporting</h4>
            <p className="f_15 text-muted">
              Receive structured reports summarizing data categories, quantity, and key metrics with transparent tracking.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}
