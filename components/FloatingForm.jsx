"use client"

import { useState } from "react"
import PickupRequestModal from "./PickupRequestModal"
import styles from "../styles/FloatingForm.module.css"
import { ArrowRight } from "lucide-react"
import { useForm } from "react-hook-form"
import axios from "axios"
import { MousePointerClick } from 'lucide-react';


export default function FloatingForm() {
  const [showModal, setShowModal] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const handleBookNow = async (data) => {
      setShowModal(true)
    const { phone } = data
    try {
      await axios.post("/api/leads", { phone })
      reset()
    } catch (err) {
      console.error("Error sending phone number:", err)
    }
  }

  return (
    <div className="container">
      <div className="row mx-md-5">
        <div className={`container shadow rounded-5 p-5 ${styles.floatingBox}`}>
          <div className="row px-md-4 align-items-center">
            {/* Left Section */}
            <div className="col-md-8 px-md-3 mb-3 mb-md-0">
              <h2 className="fw-bold f_50">
                Turn Your Scrap into Value with <br />
                <span className="text-success">Scrapify</span>.
              </h2>
              <p className="mb-3 text-justify fw-semibold text-muted">
                Experience a smarter way to dispose of your scrap. With our tech-driven, eco-conscious approach, we make recycling effortless and rewarding.
              </p>

              <ul className="list-unstyled text-muted fw-semibold mb-0">
                <li className="mb-2 d-flex align-items-start">
                  <ArrowRight size={16} className="text-success me-2 mt-1" />
                  Book pickups online or via WhatsApp in seconds.
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <ArrowRight size={16} className="text-success me-2 mt-1" />
                  Transparent pricing with instant digital payments.
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <ArrowRight size={16} className="text-success me-2 mt-1" />
                  Trusted by households and businesses across NCR.
                </li>
              </ul>
            </div>

            {/* Right Section */}
            <div className="col-md-4 px-md-3 d-flex flex-column align-items-center">
              <form className="w-100" onSubmit={handleSubmit(handleBookNow)}>
                <label className="text-start ms-2 f_14 mb-2 fw-semibold text-dark f_14">Mobile Number <span className="text-danger">*</span></label>
                <input
                  type="tel"
                  placeholder="+91 "
                  className="form-control mb-2 ps-4 shadow-none fw-semibold f_14 py-3 rounded-4"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[6-9]\d{9}$/,
                      message: "Enter a valid 10-digit phone number",
                    },
                  })}
                />
                {errors.phone && <small className="text-danger ms-2 ">{errors.phone.message}</small>}

                <button
                  type="submit"
                  className="btn btn-success rounded-4 py-3 w-100 f_13 fw-semibold px-4  mt-2"
                >
                  Book Now 
                    <MousePointerClick />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <PickupRequestModal show={showModal} handleClose={() => setShowModal(false)} />
    </div>
  )
}
