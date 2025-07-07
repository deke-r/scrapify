"use client"

import { ArrowRight } from "lucide-react"

const scrapItems = [
  {
    name: "Copies/Books",
    price: "Rs 11/kg",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Newspaper",
    price: "Rs 13/kg",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Cardboard",
    price: "Rs 7/kg",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Mill Board",
    price: "Rs 5/kg",
    image: "/placeholder.svg?height=200&width=200",
  },
]

export default function PricingCards() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row g-4 mb-5">
          {scrapItems.map((item, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className="card h-100 text-center border-0 shadow-sm pricing-card">
                <div className="card-body p-4">
                  <div className="pricing-image bg-light rounded mb-3 mx-auto d-flex align-items-center justify-content-center">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="img-fluid rounded"
                      style={{ width: "120px", height: "120px", objectFit: "cover" }}
                    />
                  </div>
                  <h4 className="text-success fw-bold mb-2">{item.price}</h4>
                  <h6 className="card-title fw-bold text-dark mb-3">{item.name}</h6>
                  <button className="btn btn-success w-100 d-flex align-items-center justify-content-center">
                    Pickup request
                    <ArrowRight size={16} className="ms-2" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="btn btn-outline-dark btn-lg">See All</button>
        </div>
      </div>
    </section>
  )
}
