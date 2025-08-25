"use client"

import '../../styles/thank-you.css'



export default function ThankYouPage() {
  return (
    <>
     

      <div className="thank-you-container">
        <div className="thank-you-card">
          <div className="success-icon">✓</div>

          <h1 className="h2 mb-4 text-bold" style={{ color: "var(--dark-green)" }}>
            Thank You for Your Booking!
          </h1>

          <p className="lead text-muted mb-4">
            Your pickup request has been successfully submitted. Our sales team will contact you within 2 hours to
            confirm the details and schedule.
          </p>

          <div className="row text-center mb-5">
            <div className="col-md-4 mb-3">
              <div className="h5" style={{ color: "var(--primary-green)" }}>
                📞
              </div>
              <small className="text-muted">We'll call you soon</small>
            </div>
            <div className="col-md-4 mb-3">
              <div className="h5" style={{ color: "var(--primary-green)" }}>
                🚚
              </div>
              <small className="text-muted">Doorstep pickup</small>
            </div>
            <div className="col-md-4 mb-3">
              <div className="h5" style={{ color: "var(--primary-green)" }}>
                💰
              </div>
              <small className="text-muted">Instant payment</small>
            </div>
          </div>

          {/* <div className="alert alert-light border" style={{ borderColor: "var(--primary-green)" }}>
            <strong>What's Next?</strong>
            <br />
            1. Our team will call you to confirm pickup details
            <br />
            2. We'll arrive at your specified time
            <br />
            3. We'll weigh and evaluate your materials
            <br />
            4. You'll receive instant payment
          </div> */}

          <div className="d-flex gap-3 justify-content-center flex-wrap mt-4">
            <button className="btn btn-primary" onClick={() => (window.location.href = "/")}>
              Book Another Pickup
            </button>
            <button className="btn btn-outline-primary" onClick={() => (window.location.href = "https://scrapify.in")}>
              Visit Our Website
            </button>
          </div>


        </div>
      </div>
    </>
  )
}
