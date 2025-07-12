export const metadata = {
  title: "Scrapify Blog – Tips on Scrap, E-Waste & Recycling",
  description:
    "Explore Scrapify's blog for expert tips on bulk scrap management, e-waste recycling, sustainability, and green disposal solutions across Delhi NCR.",
  keywords:
    "Scrapify blog, scrap recycling tips, e-waste articles, bulk scrap insights, eco-friendly scrap disposal, sustainable waste management, NCR recycling blog",
  alternates: {
    canonical: "https://scrapify.in/blog",
  },
  openGraph: {
    title: "Scrapify Blog – Tips on Scrap, E-Waste & Recycling",
    description:
      "Read expert articles from Scrapify on bulk scrap collection, e-waste recycling, sustainability, and certified disposal solutions in NCR.",
    url: "https://scrapify.in/blog",
    siteName: "Scrapify",
    images: [
      {
        url: "https://scrapify.in/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Scrapify Blog Cover",
      },
    ],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scrapify Blog – Tips on Scrap, E-Waste & Recycling",
    description:
      "Get scrap tips and e-waste advice on the Scrapify blog. Learn sustainable disposal practices and bulk pickup solutions.",
    images: ["https://scrapify.in/og-cover.jpg"],
    creator: "@scrapify",
  },
};


import Image from "next/image"
import { Search, Calendar, Clock } from "lucide-react"
import styles from "../../styles/Blog.module.css"
import ModalButton from "@/components/ModalButton"

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "How to Maximize Returns from Scrap Metal",
      excerpt:
        "From copper and brass to aluminum and steel—learn how to sort, store, and sell your scrap for maximum profitability in India’s dynamic metal recycling market.",
      author: "Ankit Sharma",
      date: "July 1, 2024",
      category: "Scrap Dealing",
      readTime: "5 min read",
      image: "/img/imgi_17_many-carpentry-tools_23-2147773366.webp",
    },
    {
      id: 2,
      title: "Managing E-Waste: Corporate Responsibility in India",
      excerpt:
        "As regulations tighten, Indian companies must adopt sustainable practices for safe disposal of electronics. Learn about the right partners and processes.",
      author: "Priya Nair",
      date: "June 28, 2024",
      category: "E Waste Services",
      readTime: "7 min read",
      image: "/img/imgi_2_e-waste-template-design_23-2151350186.webp",
    },
    {
      id: 3,
      title: "Safe Demolition Practices for Indian Construction Sites",
      excerpt:
        "A deep dive into safety protocols, compliance standards, and waste segregation during demolition activities across urban and semi-urban India.",
      author: "Ravi Menon",
      date: "June 25, 2024",
      category: "Demolition Services",
      readTime: "6 min read",
      image: "/img/imgi_37_excavator-demolishing-old-building_173948-5307.webp",
    },
    {
      id: 4,
      title: "A Step-by-Step Guide to Facility Decommissioning",
      excerpt:
        "Planning to decommission an industrial unit in India? Here's everything from hazardous waste removal to final NOC clearances.",
      author: "Divya Iyer",
      date: "June 22, 2024",
      category: "Facility Decommissioning",
      readTime: "8 min read",
      image: "/img/imgi_17_loading-scrap-metal-into-truck-crane-grabber-loading-metal-rusty-scrap-dock-grapple-truck-loads-scrap-industrial-metal-recycling_347372-542.webp",
    },
    {
      id: 5,
      title: "Understanding Scrap Metal Grades in India",
      excerpt:
        "Why knowing your metal type—ferrous or non-ferrous—can directly impact resale rates. We break down ISRI codes and practical tips for local sellers.",
      author: "Nikhil Bansal",
      date: "June 19, 2024",
      category: "Scrap Dealing",
      readTime: "5 min read",
      image: "/img/imgi_16_grab-crane-works-waste-recycling-station_1112-3447.webp",
    },
    {
      id: 6,
      title: "E-Waste Laws in India: What Every Business Must Know",
      excerpt:
        "From EPR compliance to CPCB guidelines—understand the evolving legal framework and how to stay compliant.",
      author: "Swati Rao",
      date: "June 16, 2024",
      category: "E Waste Services",
      readTime: "6 min read",
      image: "/img/imgi_37_electronics-waste-bin-concept-garbage-electrical-waste-ready-recycling-old-devices-e-waste-di_926199-4096799.webp",
    },
  ]



  return (
    <div className="min-vh-100">
      {/* Hero Section */}
      <section className={`${styles.heroSection} text-white py-5`}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-3">Scrapify Insights</h1>
              <p className="lead f_18 mb-4">
                Industry tips and trends on scrap dealing, e-waste disposal, demolition practices, and decommissioning—all tailored to the Indian market.
              </p>

            </div>
          </div>
        </div>
      </section>



      {/* Featured Post */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-4">
              <h2 className="fw-bold mb-4">Featured Article</h2>
            </div>
            <div className="col-lg-8">
              <div className={`${styles.featuredPost2} card border-0 shadow-lg hover-card`}>
                <Image
                  src="/img/imgi_5_crane-grab-scrap_1112-1219.webp"
                  className="card-img-top"
                  alt="Featured post"
                  width={600}
                  height={300}
                />
                </div>
                 <div className={`${styles.featuredPost} card border-0 shadow-lg hover-card`}>
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <span className="badge bg-success me-2">Featured</span>
                    <span className="badge bg-secondary me-2">Scrap Dealing</span>
                    <small className="text-muted f_14 d-flex align-items-center">
                      <Calendar className="me-1" size={14} />
                      July 1, 2024 •
                      <Clock className="ms-2 me-1" size={14} /> 5 min read
                    </small>
                  </div>
                  <h3 className="fw-bold mb-3">How to Maximize Returns from Scrap Metal</h3>
                  <p className="f_15 text-muted mb-3">
                    From copper and brass to aluminum and steel—learn how to sort, store, and sell your scrap for maximum profitability in India’s dynamic metal recycling market.
                  </p>
                  <div className="d-flex align-items-center">
                    <Image
                      src="/gif/user.gif"
                      className="rounded-circle me-2"
                      alt="Ankit Sharma"
                      width={40}
                      height={40}
                    />
                    <div>
                      <small className="fw-bold">Ankit Sharma</small>
                      <br />
                      <small className="text-muted f_12">Scrap Metal Consultant</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className={`${styles.sidebar} sticky-top`}>
                <div className="card border-0 shadow-sm mb-4">
                  <div className="card-body">
                    <h5 className="fw-bold mb-3">Get Scrapify Assistance</h5>
                    <p className="f_14 text-muted mb-3">
                      Looking for reliable and affordable scrap disposal or facility decommissioning solutions? Our experts are here to help you plan and execute end-to-end.
                    </p>
                    <ModalButton text="Get a Quote" variant="green"  />

                  </div>

                </div>
                <div className="card border-0 shadow-sm">
                  <div className="card-body">
                    <h5 className="fw-bold mb-3">Popular Topics</h5>
                    <div className="d-flex flex-wrap gap-2">
                      <span className="badge bg-light text-dark">Scrap Metal Prices</span>
                      <span className="badge bg-light text-dark">E-Waste Recycling</span>
                      <span className="badge bg-light text-dark">Demolition Safety</span>
                      <span className="badge bg-light text-dark">Copper Recovery</span>
                      <span className="badge bg-light text-dark">Industrial Cleanup</span>
                      <span className="badge bg-light text-dark">Environmental Compliance</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-4">
              <h2 className="fw-bold">Latest Articles</h2>
            </div>
            {blogPosts.map((post) => (
              <div key={post.id} className="col-lg-4 col-md-6 mb-4">
                <div className={`${styles.blogCard} card h-100 border-0 shadow-sm hover-card`}>
                  <Image
                    src={post.image}
                    className="card-img-top"
                    alt={post.title}
                    width={400}
                    height={250}
                  />
                  <div className="card-body d-flex flex-column">
                    <div className="d-flex align-items-center mb-2">
                      <span className={`badge ${styles.categoryBadge} me-2`}>{post.category}</span>
                      <small className="text-muted f_12 d-flex align-items-center">
                        <Clock className="me-1" size={12} />
                        {post.readTime}
                      </small>
                    </div>
                    <h5 className="fw-bold mb-2">{post.title}</h5>
                    <p className="f_14 text-muted flex-grow-1">{post.excerpt}</p>
                    <div className="d-flex align-items-center justify-content-between mt-auto">
                      <div className={`d-flex align-items-center ${styles.user}`}>
                        <Image
                          src="/gif/user.gif"
                          className="rounded-circle me-2"
                          alt={post.author}
                          width={30}
                          height={30}
                        />
                        <div>
                          <small className="fw-bold f_12">{post.author}</small>
                          <br />
                          <small className="text-muted f_12">{post.date}</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
