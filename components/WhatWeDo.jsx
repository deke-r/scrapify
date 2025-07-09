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
            <Header h2="What We Do?" />
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
                <h4 className="fw-bold mb-3">Requirements Audit</h4>
                <p className="f_15 text-muted">
                  We begin by analyzing your data goals and outlining technical needs to ensure accurate and scalable extraction.
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
                <h4 className="fw-bold mb-3">Tender Participation</h4>
                <p className="f_15 text-muted">
                  We actively engage in government and enterprise tenders for structured, large-volume data scraping projects.
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
                <h4 className="fw-bold mb-3">Strategic Planning</h4>
                <p className="f_15 text-muted">
                  Our experts devise a tailored scraping strategy using robust workflows and compliance-first methodologies.
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
                <h4 className="fw-bold mb-3">Dedicated Assignment</h4>
                <p className="f_15 text-muted">
                  A skilled scraping specialist is assigned to your project to oversee end-to-end execution and quality control.
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
                <h4 className="fw-bold mb-3">Data Acquisition</h4>
                <p className="f_15 text-muted">
                  We execute high-speed, reliable data extraction routines that align with your frequency and format requirements.
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
                <h4 className="fw-bold mb-3">Processing & Cleanup</h4>
                <p className="f_15 text-muted">
                  We clean, de-duplicate, and structure the collected data to match your application or reporting needs.
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
