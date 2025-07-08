import styles from '../styles/Navbar.module.css';
import Link from 'next/link';

export default function Navbar() {


  return (
    <nav className="navbar navbar-expand-lg  py-4">
      <div className="container-fluid">
        <Link className="navbar-brand ms-md-5 fw-bold" href="/">
        <img src='/img/logo.jpg' width={130} alt='logo'/>
        </Link>

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
              <ul className="dropdown-menu fw-semibold f_14">
                <li><Link className="dropdown-item" href="/action">Scrap Dealing</Link></li>
                <li><Link className="dropdown-item" href="/action">E Waste Services</Link></li>
                <li><Link className="dropdown-item" href="/another-action">Demolition Services</Link></li>
                <li><Link className="dropdown-item" href="/something-else">Facility Decommissioning</Link></li>
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
