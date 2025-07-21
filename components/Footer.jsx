"use client"

import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"
import '../styles/Footer.css'
export default function Footer() {
  return (
    <footer className="footer bg-dark text-light">
      <div className="container">
        {/* Main Footer Content */}
        <div className="row py-5">
          {/* Company Info */}
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div className="footer-section">
              <h3 className="footer-logo mb-3">
                <span className="text-success">Scrapify</span>
              </h3>
              <p className="footer-description mb-4">
                Your trusted online scrap collection partner. We provide hassle-free doorstep pickup services for all
                types of scrap materials including paper, plastic, metal, e-waste, and furniture.
              </p>
              <div className="footer-contact-item d-flex align-items-center mb-2">
                <Phone size={16} className="text-success me-2" />
                <span>+91 9599196875</span>
              </div>
              <div className="footer-contact-item d-flex align-items-center mb-2">
                <Mail size={16} className="text-success me-2" />
                <span>info@scrapify.in</span>
              </div>
              <div className="footer-contact-item d-flex align-items-start">
                <MapPin size={16} className="text-success me-2 mt-1" />
                <span>Plot No 281,
                  Udyog Kendra 1, Ecotech 3,Greater Noida 201306</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <div className="footer-section">
              <h5 className="footer-title mb-3">Quick Links</h5>
              <ul className="footer-links list-unstyled">
                <li>
                  <a href="/" className="footer-link">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="footer-link">
                    About Us
                  </a>
                </li>

                <li>
                  <a href="/contact" className="footer-link">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/blog" className="footer-link">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Services */}
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <div className="footer-section">
              <h5 className="footer-title mb-3">Our Services</h5>
              <ul className="footer-links list-unstyled">
                <li>
                  <a href="/services/scrap-dealing" className="footer-link">
                    Scrap Dealing
                  </a>
                </li>
                <li>
                  <a href="/services/e-waste-services" className="footer-link">
                    E Waste Services
                  </a>
                </li>
                <li>
                  <a href="/services/recycling-services" className="footer-link">
                    Recycling Services
                  </a>
                </li>
                <li>
                  <a href="/services/demolition-services" className="footer-link">
                    Demolition Services
                  </a>
                </li>
                <li>
                  <a href="/services/facility-decommissioning" className="footer-link">
                    Facility Decommissioning
                  </a>
                </li>
              </ul>

            </div>
          </div>

          {/* Service Areas */}
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <div className="footer-section">
              <h5 className="footer-title mb-3">Service Areas</h5>
              <ul className="footer-links list-unstyled">
                <li>
                  <a href="#" className="footer-link">
                    Delhi NCR
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Noida
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Greater Noida
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Gurugram
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Faridabad
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Ghaziabad
                  </a>
                </li>

              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="row py-4 border-top border-secondary">
          <div className="col-lg-8 col-md-6 mb-3 mb-md-0">
            <h5 className="footer-title mb-3">Stay Updated</h5>
            <p className="mb-3">
              Subscribe to our newsletter for latest updates on scrap prices and eco-friendly tips.
            </p>
            {/* <div className="newsletter-form">
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email address"
                  aria-label="Email address"
                />
                <button className="btn btn-success" type="button">
                  Subscribe
                </button>
              </div>
            </div> */}
          </div>
          <div className="col-lg-4 col-md-6">
            <h5 className="footer-title mb-3">Follow Us</h5>
            <div className="social-links d-flex gap-3">
              <a href="https://www.facebook.com/Scrapify.in" target="_blank" className="social-link" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://x.com/Scrapify_in" target="_blank" className="social-link" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://www.instagram.com/scrapify_india/" target="_blank" className="social-link" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              {/* <a href="#" className="social-link" aria-label="YouTube">
                <Youtube size={20} />
              </a> */}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="row py-4 border-top border-secondary">
          <div className="col-lg-6 col-md-6 mb-2 mb-md-0">
            <p className="footer-copyright mb-0">
              &copy; 2025 <span className="text-success">Scrapify</span>. All rights reserved.
            </p>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="footer-legal-links d-flex flex-wrap justify-content-md-end gap-3">
              <a href="#" className="footer-link">
                Privacy Policy
              </a>
              <a href="#" className="footer-link">
                Terms of Service
              </a>
              <a href="#" className="footer-link">
                Cookie Policy
              </a>
              <a href="#" className="footer-link">
                Sitemap
              </a>
            </div>
          </div>
        </div>

        {/* Certifications & Awards */}
        <div className="row py-4 border-top border-secondary">
          <div className="col-12">
            <div className="certifications text-center">
              <h6 className="text-muted mb-3">Certified & Trusted</h6>
              <div className="d-flex justify-content-center align-items-center flex-wrap gap-4">
                <div className="certification-badge">
                  <span className="badge bg-success">ISO 14001 Certified</span>
                </div>
                <div className="certification-badge">
                  <span className="badge bg-success">E-Waste Authorized</span>
                </div>
                <div className="certification-badge">
                  <span className="badge bg-success">Green Business</span>
                </div>
                <div className="certification-badge">
                  <span className="badge bg-success">5 Star Rated</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
