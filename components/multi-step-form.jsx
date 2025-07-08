"use client"

import { useForm } from "react-hook-form"
import { Phone, ChevronRight } from "lucide-react"
import { useState } from "react"

export default function MultiStepForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm()

  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (data) => {
    console.log("Form submitted:", data)
    setSubmitted(true)
    // You can also trigger an API call here
  }

  return (
    <div className="card border-0 mt-5">
      <div className="card-body p-4">
        <div className="text-center mb-4">
          <Phone size={30} className="text-success mb-2" />
          <h5 className="fw-semibold text-success">Enter Your Mobile Number</h5>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label htmlFor="phone" className="form-label f_14 fw-semibold">
                Phone Number <span className="text-danger">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="WhatsApp or Mobile Number"
                className={`form-control text-muted shadow-none f_15 fw-semibold ${
                  errors.phone ? "is-invalid" : ""
                }`}
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Enter a valid 10-digit number",
                  },
                })}
              />
              {errors.phone && (
                <div className="invalid-feedback">{errors.phone.message}</div>
              )}
            </div>

            <button
              type="submit"
              className="btn btn-outline-success f_14 fw-semibold d-flex align-items-center"
              disabled={isSubmitting}
            >
              Submit
              <ChevronRight size={20} className="ms-2" />
            </button>
          </form>
        ) : (
          <div className="alert alert-success mt-3 text-center" role="alert">
            ✅ Thank you! Your number has been submitted.
          </div>
        )}
      </div>
    </div>
  )
}
