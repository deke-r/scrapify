"use client"


import { useState } from "react"
import { Phone, MapPin, Calendar, ChevronLeft, ChevronRight, Check } from "lucide-react"


const steps = [
  { id: 1, title: "Phone", icon: Phone },
  { id: 2, title: "Address", icon: MapPin },
  { id: 3, title: "Schedule", icon: Calendar },
]

const states = ["Delhi", "Noida", "Gurugram", "Faridabad", "Ghaziabad", "Dehradun"]

const scrapTypes = [
  "Paper",
  "Metals",
  "Plastic",
  "Electronics",
  "E-Waste",
  "Bulk Scrap",
  "Furniture",
  "Glass",
  "Vehicle",
  "Old Clothes/Fabrics",
  "Other",
]

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    state: "",
    pincode: "",
    email: "",
    scrapTypes: [],
    pickupDate: "",
    remarks: "",
  })

  const handleInputChange = () => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleScrapTypeChange = () => {
    setFormData((prev) => ({
      ...prev,
      scrapTypes: checked ? [...prev.scrapTypes, scrapType] : prev.scrapTypes.filter((type) => type !== scrapType),
    }))
  }

  const validateStep = (step) => {
    switch (step) {
      case 1:
        return formData.name.trim() !== "" && formData.phone.trim() !== ""
      case 2:
        return formData.address.trim() !== "" && formData.state !== "" && formData.pincode.trim() !== ""
      case 3:
        return formData.scrapTypes.length > 0 && formData.pickupDate !== ""
      default:
        return false
    }
  }

  const nextStep = () => {
    if (validateStep(currentStep) && currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = () => {
    e.preventDefault()
    if (validateStep(3)) {
      console.log("Form submitted:", formData)
      // Handle form submission here
    }
  }

  return (


          

            <div className="card  border-0">
              <div className="card-body">
                {/* Progress Indicators */}
                <div className="d-flex justify-content-center align-items-center mb-5">
                  {steps.map((step, index) => (
                    <div key={step.id} className="d-flex align-items-center">
                      <div className="d-flex flex-column align-items-center">
                        <div
                          className={`step-indicator d-flex align-items-center justify-content-center ${
                            currentStep >= step.id ? "active" : ""
                          }`}
                        >
                          {currentStep > step.id ? <Check size={24} /> : <step.icon size={24} />}
                        </div>
                        <small className="mt-2 text-muted fw-medium">{step.title}</small>
                      </div>
                      {index < steps.length - 1 && (
                        <div className={`step-connector ${currentStep > step.id ? "completed" : ""}`} />
                      )}
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSubmit} className="ms-md-3">
                  {/* Step 1: Phone */}
                  {currentStep === 1 && (
                    <div className="step-content">
                      <div className="row g-4">
                        <div className="col-md-6">
                          <label htmlFor="name" className="form-label f_14 fw-semibold">
                            Name <span className="text-danger">*</span>
                          </label>
                          <input
                            id="name"
                            type="text"
                            className="form-control text-muted f_15 fw-semibold"
                            placeholder="Enter Your Name"
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="phone" className="form-label f_14 fw-semibold">
                            Phone No  <span className="text-danger">*</span>
                          </label>
                          <input
                            id="phone"
                            type="tel"
                            className="form-control text-muted f_15 fw-semibold"
                            placeholder="WhatsApp no /or Mobile no"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            pattern="[0-9()#+*-=.]+"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Address */}
                  {currentStep === 2 && (
                    <div className="step-content">
                      <div className="row g-4">
                        <div className="col-md-6">
                          <label htmlFor="address" className="form-label fw-medium">
                            Address *
                          </label>
                          <input
                            id="address"
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Address"
                            value={formData.address}
                            onChange={(e) => handleInputChange("address", e.target.value)}
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="state" className="form-label fw-medium">
                            State *
                          </label>
                          <select
                            id="state"
                            className="form-select form-select-lg"
                            value={formData.state}
                            onChange={(e) => handleInputChange("state", e.target.value)}
                            required
                          >
                            <option value="">Select State</option>
                            {states.map((state) => (
                              <option key={state} value={state}>
                                {state}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="pincode" className="form-label fw-medium">
                            Pin Code *
                          </label>
                          <input
                            id="pincode"
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter PIN Code"
                            value={formData.pincode}
                            onChange={(e) => handleInputChange("pincode", e.target.value)}
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="email" className="form-label fw-medium">
                            Email
                          </label>
                          <input
                            id="email"
                            type="email"
                            className="form-control form-control-lg"
                            placeholder="Email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Schedule */}
                  {currentStep === 3 && (
                    <div className="step-content">
                      <div className="mb-4">
                        <label className="form-label fw-medium mb-3 d-block">Type of Scrap *</label>
                        <div className="row g-3">
                          {scrapTypes.map((type) => (
                            <div key={type} className="col-6 col-md-4 col-lg-3">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id={type}
                                  checked={formData.scrapTypes.includes(type)}
                                  onChange={(e) => handleScrapTypeChange(type, e.target.checked)}
                                />
                                <label className="form-check-label" htmlFor={type}>
                                  {type}
                                </label>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="row g-4 mb-4">
                        <div className="col-md-6">
                          <label htmlFor="pickupDate" className="form-label fw-medium">
                            Pickup Date *
                          </label>
                          <input
                            id="pickupDate"
                            type="date"
                            className="form-control form-control-lg"
                            value={formData.pickupDate}
                            onChange={(e) => handleInputChange("pickupDate", e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="mb-4">
                        <label htmlFor="remarks" className="form-label fw-medium">
                          Remarks
                        </label>
                        <textarea
                          id="remarks"
                          className="form-control"
                          rows={4}
                          placeholder="Message"
                          value={formData.remarks}
                          onChange={(e) => handleInputChange("remarks", e.target.value)}
                        />
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="d-flex justify-content-between mt-5">
                    <button
                      type="button"
                      className="btn btn-outline-secondary  f_13 fw-semibold d-flex align-items-center"
                      onClick={prevStep}
                      disabled={currentStep === 1}
                    >
                      <ChevronLeft size={20} className="me-2" />
                      Previous
                    </button>

                    {currentStep < 3 ? (
                      <button
                        type="button"
                        className="btn btn-success  f_13 fw-semibold d-flex align-items-center"
                        onClick={nextStep}
                        disabled={!validateStep(currentStep)}
                      >
                        Next
                        <ChevronRight size={20} className="ms-2" />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="btn btn-success  d-flex align-items-center"
                        disabled={!validateStep(3)}
                      >
                        Submit
                        <ChevronRight size={20} className="ms-2" />
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
     
   
  )
}
