import Link from "next/link"
import styles from "../styles/Testimonials.module.css"
import Header from "./Header"

export default function Testimonials() {
 const testimonials = [
  {
    id: 1,
    name: "Anjali Mehra",
    position: "Business Analyst",
    company: "Infoserve Solutions",
    avatar: "/gif/user.gif",
    rating: 5,
    text: "Scrapify made it easy to manage our scrap disposal process. Their scrap dealing service is transparent, quick, and fairly priced.",
    logo: "",
  },
  {
    id: 2,
    name: "Rohan Gupta",
    position: "Software Engineer",
    company: "CodeMatrix Technologies",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "We used Scrapify for e-waste management, and the process was seamless. They handle everything responsibly with proper documentation.",
    logo: "/placeholder.svg?height=40&width=120",
  },
  {
    id: 3,
    name: "Sneha Patel",
    position: "Digital Marketing Head",
    company: "ClickEdge Pvt. Ltd.",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "Scrapify helped us clear out an old office floor. Their demolition and removal team worked efficiently and safely.",
    logo: "/placeholder.svg?height=40&width=120",
  },
  {
    id: 4,
    name: "Amitabh Verma",
    position: "Head of Research",
    company: "InsightBridge Analytics",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 4,
    text: "We opted for Scrapify’s facility decommissioning service. It was handled with professionalism and adherence to all regulations.",
    logo: "/placeholder.svg?height=40&width=120",
  },
  {
    id: 5,
    name: "Priya Iyer",
    position: "Product Lead",
    company: "InnoVerse Labs",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "Scrapify is now our go-to partner for scrap and e-waste disposal. Their pickup process is smooth and payments are instant.",
    logo: "/placeholder.svg?height=40&width=120",
  },
  {
    id: 6,
    name: "Karan Malhotra",
    position: "Chief Technology Officer",
    company: "DataNova Systems",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "From demolition to e-waste handling, Scrapify offers everything under one roof. Their services are scalable and reliable.",
    logo: "/placeholder.svg?height=40&width=120",
  },
];



    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, index) => (
            <i key={index} className={`fas fa-star ${index < rating ? "text-warning" : "text-muted"}`}></i>
        ))
    }

    return (
        <section className="py-5">
            <div className="container">

                <div className="row">
                    <div className="col-lg-8 mx-auto text-center mb-5">

                        <Header h2='What Our Customers Say' />
                        <p className="lead f_16 text-muted">
                            Join thousands of satisfied customers who trust Scrapify for their data extraction needs
                        </p>
                        <div className={`${styles.overallRating} d-flex align-items-center justify-content-center gap-3 mt-4`}>
                            <div className="d-flex gap-1">{renderStars(5)}</div>
                            <span className="fw-bold f_18">4.9/5</span>
                            <span className="text-muted f_14">(1,847 reviews)</span>
                        </div>
                    </div>
                </div>


                <div className="row">
                    {testimonials.map((testimonial, index) => (
                        <div key={testimonial.id} className="col-lg-4 col-md-6 mb-4">
                            <div className={`${styles.testimonialCard} card h-100 border-0 shadow-sm hover-card`}>
                                <div className="card-body p-4">

                                    <div className="d-flex gap-1 mb-3">{renderStars(testimonial.rating)}</div>


                                    <blockquote className={`${styles.testimonialText} f_15 mb-4`}>"{testimonial.text}"</blockquote>


                                    <div className="d-flex align-items-center">
                                        <img
                                            src='/gif/user.gif'
                                            alt={testimonial.name}
                                            className={`${styles.avatar} rounded-circle me-3`}
                                        />
                                        <div className="flex-grow-1">
                                            <h6 className="fw-bold mb-0 f_14">{testimonial.name}</h6>

                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    ))}
                </div>

              
                <div className={`${styles.statsSection} row mt-5 py-4`}>
                    <div className="col-md-3 text-center mb-3">
                        <div className={styles.statItem}>
                            <h3 className="fw-bold text-success mb-1">9,999+</h3>
                            <p className="f_14 text-muted mb-0">Records Extracted</p>
                        </div>
                    </div>
                    <div className="col-md-3 text-center mb-3">
                        <div className={styles.statItem}>
                            <h3 className="fw-bold text-success mb-1">1,140+</h3>
                            <p className="f_14 text-muted mb-0">Active Users</p>
                        </div>
                    </div>
                    <div className="col-md-3 text-center mb-3">
                        <div className={styles.statItem}>
                            <h3 className="fw-bold text-success mb-1">100%</h3>
                            <p className="f_14 text-muted mb-0">System Uptime</p>
                        </div>
                    </div>
                    <div className="col-md-3 text-center mb-3">
                        <div className={styles.statItem}>
                            <h3 className="fw-bold text-success mb-1">7/7</h3>
                            <p className="f_14 text-muted mb-0">Support Available</p>
                        </div>
                    </div>
                </div>



                <div className="row mt-5">
                    <div className="col-lg-8 mx-auto text-center">
                        <div className={`${styles.ctaSection} bg-gradient-success text-white rounded-3 p-5`}>
                            <h3 className="fw-bold mb-3">Ready to Join Our Success Stories?</h3>
                            <p className="f_16 mb-4">
                                Start your free trial today and see why thousands of businesses choose Scrapify
                            </p>
                            <div className="d-flex gap-3 justify-content-center">
                                <Link href="/contact" className="btn f_14 fw-semibold rounded-4 btn-outline-light btn-lg">
                                    Contact Sales
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
