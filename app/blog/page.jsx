import styles from "../../styles/Blog.module.css"

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "The Ultimate Guide to Web Scraping in 2024",
      excerpt:
        "Discover the latest techniques, tools, and best practices for effective web scraping in today's digital landscape.",
      author: "John Doe",
      date: "March 15, 2024",
      category: "Tutorial",
      readTime: "8 min read",
      image: "/placeholder.svg?height=250&width=400",
    },
    {
      id: 2,
      title: "Legal Considerations for Web Scraping",
      excerpt:
        "Understanding the legal landscape of web scraping and how to ensure your data collection practices are compliant.",
      author: "Jane Smith",
      date: "March 12, 2024",
      category: "Legal",
      readTime: "6 min read",
      image: "/placeholder.svg?height=250&width=400",
    },
    {
      id: 3,
      title: "Scaling Your Web Scraping Operations",
      excerpt:
        "Learn how to handle large-scale data extraction projects efficiently with advanced scraping techniques.",
      author: "Mike Johnson",
      date: "March 10, 2024",
      category: "Advanced",
      readTime: "10 min read",
      image: "/placeholder.svg?height=250&width=400",
    },
    {
      id: 4,
      title: "API vs Web Scraping: When to Use What",
      excerpt:
        "A comprehensive comparison between APIs and web scraping to help you choose the right approach for your project.",
      author: "Sarah Wilson",
      date: "March 8, 2024",
      category: "Comparison",
      readTime: "7 min read",
      image: "/placeholder.svg?height=250&width=400",
    },
    {
      id: 5,
      title: "Handling Dynamic Content with JavaScript",
      excerpt: "Master the art of scraping JavaScript-heavy websites and single-page applications effectively.",
      author: "David Brown",
      date: "March 5, 2024",
      category: "Tutorial",
      readTime: "12 min read",
      image: "/placeholder.svg?height=250&width=400",
    },
    {
      id: 6,
      title: "Data Quality and Validation Best Practices",
      excerpt: "Ensure the accuracy and reliability of your scraped data with these proven validation techniques.",
      author: "Emily Davis",
      date: "March 3, 2024",
      category: "Best Practices",
      readTime: "9 min read",
      image: "/placeholder.svg?height=250&width=400",
    },
  ]

  const categories = ["All", "Tutorial", "Legal", "Advanced", "Comparison", "Best Practices"]

  return (
    <div className="min-vh-100">
      {/* Hero Section */}
      <section className={`${styles.heroSection} bg-gradient-success text-white py-5`}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-3">Scrapify Blog</h1>
              <p className="lead f_18 mb-4">
                Stay updated with the latest insights, tutorials, and best practices in web scraping and data
                extraction.
              </p>
              <div className={`${styles.searchContainer} position-relative mx-auto`}>
                <input type="text" className="form-control form-control-lg" placeholder="Search articles..." />
                <button className="btn btn-light position-absolute">
                  <i className="fas fa-search text-success"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-4 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className={`${styles.categoryFilter} d-flex flex-wrap justify-content-center gap-2`}>
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`btn ${index === 0 ? "btn-success" : "btn-outline-success"} ${styles.categoryBtn}`}
                  >
                    {category}
                  </button>
                ))}
              </div>
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
              <div className={`${styles.featuredPost} card border-0 shadow-lg hover-card`}>
                <img src="/placeholder.svg?height=300&width=600" className="card-img-top" alt="Featured post" />
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <span className="badge bg-success me-2">Featured</span>
                    <span className="badge bg-secondary me-2">Tutorial</span>
                    <small className="text-muted f_14">March 15, 2024 • 8 min read</small>
                  </div>
                  <h3 className="fw-bold mb-3">The Ultimate Guide to Web Scraping in 2024</h3>
                  <p className="f_15 text-muted mb-3">
                    Discover the latest techniques, tools, and best practices for effective web scraping in today's
                    digital landscape. This comprehensive guide covers everything from basic concepts to advanced
                    strategies.
                  </p>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <img src="/placeholder.svg?height=40&width=40" className="rounded-circle me-2" alt="Author" />
                      <div>
                        <small className="fw-bold">John Doe</small>
                        <br />
                        <small className="text-muted f_12">Senior Developer</small>
                      </div>
                    </div>
                    <button className="btn btn-success">Read More</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className={`${styles.sidebar} sticky-top`}>
                <div className="card border-0 shadow-sm mb-4">
                  <div className="card-body">
                    <h5 className="fw-bold mb-3">Newsletter</h5>
                    <p className="f_14 text-muted mb-3">Get the latest articles delivered to your inbox.</p>
                    <div className="input-group mb-3">
                      <input type="email" className="form-control" placeholder="Your email" />
                      <button className="btn btn-success">Subscribe</button>
                    </div>
                  </div>
                </div>
                <div className="card border-0 shadow-sm">
                  <div className="card-body">
                    <h5 className="fw-bold mb-3">Popular Tags</h5>
                    <div className="d-flex flex-wrap gap-2">
                      <span className="badge bg-light text-dark">Web Scraping</span>
                      <span className="badge bg-light text-dark">Python</span>
                      <span className="badge bg-light text-dark">JavaScript</span>
                      <span className="badge bg-light text-dark">APIs</span>
                      <span className="badge bg-light text-dark">Data Mining</span>
                      <span className="badge bg-light text-dark">Automation</span>
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
                  <img src={post.image || "/placeholder.svg"} className="card-img-top" alt={post.title} />
                  <div className="card-body d-flex flex-column">
                    <div className="d-flex align-items-center mb-2">
                      <span className={`badge ${styles.categoryBadge} me-2`}>{post.category}</span>
                      <small className="text-muted f_12">{post.readTime}</small>
                    </div>
                    <h5 className="fw-bold mb-2">{post.title}</h5>
                    <p className="f_14 text-muted flex-grow-1">{post.excerpt}</p>
                    <div className="d-flex align-items-center justify-content-between mt-auto">
                      <div className="d-flex align-items-center">
                        <img
                          src="/placeholder.svg?height=30&width=30"
                          className="rounded-circle me-2"
                          alt={post.author}
                        />
                        <div>
                          <small className="fw-bold f_12">{post.author}</small>
                          <br />
                          <small className="text-muted f_12">{post.date}</small>
                        </div>
                      </div>
                      <button className="btn btn-outline-success btn-sm">Read</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pagination */}
      <section className="py-4">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav aria-label="Blog pagination">
                <ul className="pagination justify-content-center">
                  <li className="page-item disabled">
                    <span className="page-link">Previous</span>
                  </li>
                  <li className="page-item active">
                    <span className="page-link bg-success border-success">1</span>
                  </li>
                  <li className="page-item">
                    <a className="page-link text-success" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link text-success" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link text-success" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
