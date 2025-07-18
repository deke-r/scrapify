"use client";

import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Truck } from "lucide-react";

const states = ["Delhi", "Noida", "Greater Noida", "Gurugram", "Faridabad", "Ghaziabad"];
const scrapTypes = [
"Metals", "Plastic", "Electronics", "E- Waste", "Bulk Scrap",
  "Furniture", "Glass", "Vehicle", "Old Clothes/Fabrics", "Other"
];

export default function PickupRequestModal({ show, handleClose }) {
  const [isVisible, setIsVisible] = useState(false);
  const [fadeClass, setFadeClass] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (show) {
      setIsVisible(true);
      setTimeout(() => setFadeClass("show"), 10);
    } else {
      setFadeClass("");
      setTimeout(() => setIsVisible(false), 300);
    }
  }, [show]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    try {
      const response = await fetch("/api/pickup-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const res = await response.json();

      if (res.success) {
        setSuccessMsg("Pickup request submitted successfully!");
        reset();
        setTimeout(() => {
          setSuccessMsg("");
          handleClose();
        }, 2000);
      } else {
        setErrorMsg("Failed to submit. Please try again.");
      }
    } catch (err) {
      console.error("Submit error:", err);
      setErrorMsg("An error occurred. Please try again later.");
    }

    setLoading(false);
  };

  if (!isVisible) return null;

  const today = new Date().toISOString().split("T")[0];

  return (
    <div
      className={`modal fade ${fadeClass} d-block`}
      tabIndex="-1"
      style={{ backgroundColor: "rgba(0,0,0,0.5)", transition: "opacity 0.3s ease" }}
      role="dialog"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div className="modal-content border-0 rounded-4 overflow-hidden">
          <div className="modal-header flex-column align-items-center border-0 pt-4">
            <div className="bg-success rounded-circle d-flex justify-content-center align-items-center mb-3" style={{ width: "50px", height: "50px" }}>
              <Truck size={28} color="white" />
            </div>
            <h5 className="modal-title text-center fw-bold">Pickup Request</h5>
            <button type="button" className="btn-close position-absolute end-0 top-0 m-3" onClick={handleClose}></button>
          </div>

          <div className="modal-body px-4">
            {successMsg && <div className="alert alert-success text-center">{successMsg}</div>}
            {errorMsg && <div className="alert alert-danger text-center">{errorMsg}</div>}

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row g-4">
                <div className="col-md-6 text-start">
                  <label className="form-label ms-2 fw-semibold f_14">Name <span className="text-danger">*</span></label>
                  <input
                    className="form-control rounded-4 f_14 fw-semibold shadow-none py-3"
                    placeholder="Enter your full name"
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && <small className="text-danger ms-2">{errors.name.message}</small>}
                </div>

                <div className="col-md-6 text-start">
                  <label className="form-label ms-2 fw-semibold f_14">Phone No <span className="text-danger">*</span></label>
                  <input
                    className="form-control rounded-4 f_14 fw-semibold shadow-none py-3"
                    placeholder="10-digit mobile number"
                    {...register("phone", {
                      required: "Phone is required",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Enter valid 10-digit number"
                      }
                    })}
                  />
                  {errors.phone && <small className="text-danger ms-2">{errors.phone.message}</small>}
                </div>

                <div className="col-md-8 text-start">
                  <label className="form-label ms-2 fw-semibold f_14">Address <span className="text-danger">*</span></label>
                  <input
                    className="form-control rounded-4 f_14 fw-semibold shadow-none py-3"
                    placeholder="Pickup address"
                    {...register("address", { required: "Address is required" })}
                  />
                  {errors.address && <small className="text-danger ms-2">{errors.address.message}</small>}
                </div>

                <div className="col-md-4 text-start">
                  <label className="form-label ms-2 fw-semibold f_14">Location <span className="text-danger">*</span></label>
                  <select
                    className="form-select rounded-4 f_14 fw-semibold shadow-none py-3"
                    {...register("state", { required: "Location is required" })}
                  >
                    <option value="">Select Location</option>
                    {states.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  {errors.state && <small className="text-danger ms-2">{errors.state.message}</small>}
                </div>

                <div className="col-md-4 text-start">
                  <label className="form-label ms-2 fw-semibold f_14">Pin Code <span className="text-danger">*</span></label>
                  <input
                    className="form-control rounded-4 f_14 fw-semibold shadow-none py-3"
                    placeholder="6-digit PIN code"
                    {...register("pincode", { required: "PIN Code is required" })}
                  />
                  {errors.pincode && <small className="text-danger ms-2">{errors.pincode.message}</small>}
                </div>

                <div className="col-md-8 text-start">
                  <label className="form-label ms-2 fw-semibold f_14">Email</label>
                  <input
                    type="email"
                    className="form-control rounded-4 f_14 fw-semibold shadow-none py-3"
                    placeholder="example@email.com"
                    {...register("email")}
                  />
                </div>

                <div className="col-12 text-start">
                  <label className="form-label ms-2 fw-semibold f_14">Type of Scrap</label>
                  <div className="d-flex flex-wrap gap-3">
                    {scrapTypes.map((type) => (
                      <div className="form-check form-check-inline" key={type}>
                        <input
                          type="checkbox"
                          className="form-check-input"
                          value={type}
                          id={type}
                          {...register("scrapTypes")}
                        />
                        <label className="form-check-label" htmlFor={type}>{type}</label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="col-md-6 text-start">
                  <label className="form-label ms-2 fw-semibold f_14">Pickup Date <span className="text-danger">*</span></label>
                  <input
                    type="date"
                    min={today}
                    className="form-control rounded-4 f_14 fw-semibold shadow-none py-3"
                    {...register("pickupDate", { required: "Pickup date is required" })}
                  />
                  {errors.pickupDate && <small className="text-danger ms-2">{errors.pickupDate.message}</small>}
                </div>

                <div className="col-12 text-start">
                  <label className="form-label ms-2 fw-semibold f_14">Remarks</label>
                  <textarea
                    className="form-control rounded-4 f_14 fw-semibold shadow-none py-3"
                    rows="4"
                    placeholder="Any additional information..."
                    {...register("remarks")}
                  ></textarea>
                </div>

                <div className="col-12 d-flex justify-content-end">
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn w-100 f_14 fw-semibold py-3 rounded-4 btn-success"
                  >
                    {loading ? "Submitting..." : "Submit"} <i className="fas fa-arrow-right ms-2"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
