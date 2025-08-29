import Link from "next/link"
import styles from "../styles/Testimonials.module.css"
import Header from "./Header"

export default function Testimonials() {
    const testimonials = [
        {
            id: 1,
            name: "Anjali Mehra",
            position: "Operations Director",
            company: "Metro Manufacturing Co.",
            avatar: "/gif/user.gif",
            rating: 5,
            text: "We were skeptical about trying a new startup for scrap disposal, but Scrapify exceeded our expectations. Their team is responsive, pricing is transparent, and they handle everything professionally. Highly recommend for businesses looking for reliable scrap management.",
            logo: "",
        },
        {
            id: 2,
            name: "Rohan Gupta",
            position: "IT Manager",
            company: "Digital Solutions Ltd.",
            avatar: "/placeholder.svg?height=80&width=80",
            rating: 4,
            text: "Scrapify helped us dispose of our old IT equipment responsibly. As a startup themselves, they understand the challenges businesses face. The process was smooth, though they're still building their service portfolio. Great potential and customer service.",
            logo: "/placeholder.svg?height=40&width=120",
        },
        {
            id: 3,
            name: "Sneha Patel",
            position: "Facility Manager",
            company: "Urban Office Spaces",
            avatar: "/placeholder.svg?height=80&width=80",
            rating: 5,
            text: "We've been using Scrapify for our office cleanouts. Their demolition and removal service is impressive for a new company. The team is professional, safety-conscious, and they're constantly improving their processes. A promising startup to watch.",
            logo: "/placeholder.svg?height=40&width=120",
        },
        {
            id: 4,
            name: "Amitabh Verma",
            position: "Sustainability Officer",
            company: "GreenCorp Industries",
            avatar: "/placeholder.svg?height=80&width=80",
            rating: 4,
            text: "Scrapify's facility decommissioning service shows real commitment to environmental responsibility. They're still growing, but their attention to compliance and documentation is commendable. Looking forward to seeing how they expand their services.",
            logo: "/placeholder.svg?height=40&width=120",
        },
        {
            id: 5,
            name: "Priya Iyer",
            position: "Procurement Manager",
            company: "TechFlow Systems",
            avatar: "/placeholder.svg?height=80&width=80",
            rating: 5,
            text: "We've been working with Scrapify since their early days. Their pickup process is efficient, payments are prompt, and their customer support is excellent. It's refreshing to work with a startup that truly understands customer needs and delivers consistently.",
            logo: "/placeholder.svg?height=40&width=120",
        },
        {
            id: 6,
            name: "Karan Malhotra",
            position: "Director of Operations",
            company: "Innovate Manufacturing",
            avatar: "/placeholder.svg?height=80&width=80",
            rating: 4,
            text: "Scrapify offers comprehensive scrap and e-waste solutions. While they're still building their infrastructure, their service quality is solid. Their team is dedicated and they're clearly focused on building long-term relationships. A reliable partner for our waste management needs.",
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
                            <h3 className="fw-bold text-success mb-1">500+</h3>
                            <p className="f_14 text-muted mb-0">Records Extracted</p>
                        </div>
                    </div>
                    <div className="col-md-3 text-center mb-3">
                        <div className={styles.statItem}>
                            <h3 className="fw-bold text-success mb-1">50+</h3>
                            <p className="f_14 text-muted mb-0">Active Users</p>
                        </div>
                    </div>
                    <div className="col-md-3 text-center mb-3">
                        <div className={styles.statItem}>
                            <h3 className="fw-bold text-success mb-1">99.5%</h3>
                            <p className="f_14 text-muted mb-0">System Uptime</p>
                        </div>
                    </div>
                    <div className="col-md-3 text-center mb-3">
                        <div className={styles.statItem}>
                            <h3 className="fw-bold text-success mb-1">24/7</h3>
                            <p className="f_14 text-muted mb-0">Support Available</p>
                        </div>
                    </div>
                </div>



                <div className="row mt-5">
                    <div className="col-lg-8 mx-auto text-center">
                        <div className={`${styles.ctaSection} bg-gradient-success text-white rounded-3 p-5`}>
                            <h3 className="fw-bold mb-3">Need Reliable Scrap Pickup Services?</h3>
                            <p className="f_16 mb-4">
                                Partner with Scrapify for hassle-free scrap collection and responsible e-waste recycling.
                            </p>
                            <div className="d-flex gap-3 justify-content-center">
                                <Link href="/contact" className="btn f_14 fw-semibold rounded-4 btn-outline-light btn-lg">
                                    Book a Pickup
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
