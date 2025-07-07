import styles from '../styles/Navbar.module.css';
import Link from 'next/link';

export default function Navbar() {


  return (
    <nav className="navbar navbar-expand-lg  py-4">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" href="/">Navbar</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto gap-3 px-3 text-uppercase fw-semibold text-dark">
            <li className="nav-item">
              <Link className="nav-link" href="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/scrap-price-list">Scrap Price List</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/bulk-scrap">Bulk Scrap</Link>
            </li>
             <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
               Services
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" href="/action">Action</Link></li>
                <li><Link className="dropdown-item" href="/another-action">Another action</Link></li>
                <li><Link className="dropdown-item" href="/something-else">Something else here</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/blog">Blog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
