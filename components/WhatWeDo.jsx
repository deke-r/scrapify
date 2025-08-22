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
              We assess your scrap type, quantity, and pickup location—whether it's e-waste, metal, cardboard, or mixed recyclables. For large or complex projects, we offer on-site surveys and custom audit planning.
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
             We provide fast and flexible pickup slots tailored to your needs—daily, weekly, or on-demand. Our service covers offices, factories, retail spaces, societies, and more across Delhi NCR.
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
             Our trained, background-verified team arrives with digital weighing equipment and proper transport vehicles. Scrap is collected with safe handling, efficient loading, and minimal disruption.
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
             Once materials are verified and weighed, we process instant UPI or bank payments on-site. Clients receive GST-compliant invoices along with eco-disposal certificates for regulatory use.
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
              All collected scrap is sent to authorized recyclers for safe dismantling, recycling, or disposal as per pollution control board norms and environmental standards.
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
           For corporate and industrial clients, we offer detailed pickup summaries, disposal documentation, carbon offset data, and optional CSR collaboration for sustainability reporting.
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
            Receive structured reports with key metrics, material categories, and disposal summaries. Full transparency and tracking for audits, sustainability reports, and internal records.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}
