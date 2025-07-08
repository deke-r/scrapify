"use client"

import { useForm } from "react-hook-form"
import { useEffect, useState } from "react"

const states = ["Delhi", "Noida", "Gurugram", "Faridabad", "Ghaziabad", "Dehradun"]
const scrapTypes = [
  "Paper", "Metals", "Plastic", "Electronics", "E- Waste", "Bulk Scrap",
  "Furniture", "Glass", "Vehicle", "Old Clothes/Fabrics", "Other"
]

export default function PickupRequestModal({ show, handleClose }) {
  const [isVisible, setIsVisible] = useState(false)
  const [fadeClass, setFadeClass] = useState("")

  useEffect(() => {
    if (show) {
      setIsVisible(true)
  
      setTimeout(() => setFadeClass("show"), 10)
    } else {
      setFadeClass("") 
 
      setTimeout(() => setIsVisible(false), 300)
    }
  }, [show])

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const onSubmit = (data) => {
    console.log("Form Submitted:", data)
    reset()
    handleClose()
  }

  if (!isVisible) return null

  return (
    <div
      className={`modal fade ${fadeClass} d-block`}
      tabIndex="-1"
      style={{
        backgroundColor: "rgba(0,0,0,0.5)",
        transition: "opacity 0.3s ease",
      }}
      role="dialog"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Pickup Request</h5>
            <button type="button" className="btn-close" onClick={handleClose}></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row g-4">
                <div className="col-md-6">
                  <label className="form-label">Name *</label>
                  <input className="form-control" {...register("name", { required: "Name is required" })} />
                  {errors.name && <small className="text-danger">{errors.name.message}</small>}
                </div>

                <div className="col-md-6">
                  <label className="form-label">Phone No *</label>
                  <input className="form-control" {...register("phone", {
                    required: "Phone is required",
                    pattern: { value: /^[0-9]{10}$/, message: "Enter valid 10-digit number" }
                  })} />
                  {errors.phone && <small className="text-danger">{errors.phone.message}</small>}
                </div>

                <div className="col-md-8">
                  <label className="form-label">Address *</label>
                  <input className="form-control" {...register("address", { required: "Address is required" })} />
                  {errors.address && <small className="text-danger">{errors.address.message}</small>}
                </div>

                <div className="col-md-4">
                  <label className="form-label">State *</label>
                  <select className="form-select" {...register("state", { required: "State is required" })}>
                    <option value="">Select State</option>
                    {states.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                  {errors.state && <small className="text-danger">{errors.state.message}</small>}
                </div>

                <div className="col-md-4">
                  <label className="form-label">Pin Code *</label>
                  <input className="form-control" {...register("pincode", { required: "PIN Code is required" })} />
                  {errors.pincode && <small className="text-danger">{errors.pincode.message}</small>}
                </div>

                <div className="col-md-8">
                  <label className="form-label">Email</label>
                  <input className="form-control" {...register("email")} />
                </div>

                <div className="col-12">
                  <label className="form-label">Type of Scrap</label>
                  <div className="d-flex flex-wrap gap-3">
                    {scrapTypes.map((type) => (
                      <div className="form-check form-check-inline" key={type}>
                        <input type="checkbox" className="form-check-input" value={type} id={type} {...register("scrapTypes")} />
                        <label className="form-check-label" htmlFor={type}>{type}</label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="col-md-6">
                  <label className="form-label">Pickup Date *</label>
                  <input type="date" className="form-control" {...register("pickupDate", { required: "Pickup date is required" })} />
                  {errors.pickupDate && <small className="text-danger">{errors.pickupDate.message}</small>}
                </div>

                <div className="col-12">
                  <label className="form-label">Remarks</label>
                  <textarea className="form-control" rows="4" {...register("remarks")}></textarea>
                </div>

                <div className="col-12 d-flex justify-content-end">
                  <button type="submit" className="btn btn-success">
                    Submit <i className="fas fa-arrow-right ms-2"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
