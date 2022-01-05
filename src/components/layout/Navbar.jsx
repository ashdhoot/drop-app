import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Dashboard
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to={`/character/${1}`}>
                    Character-1
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={`/character/${2}`}>
                    Character-2
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to={`/character/${3}`}>
                    Character-3
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={`/character/${4}`}>
                    Character-4
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={`/character/${5}`}>
                    Character-4
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={`/character/${6}`}>
                    Character-4
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={`/character/${12}`}>
                    Character-5
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={`/character/${13}`}>
                    Character-6
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={`/character/${14}`}>
                    Character-7
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={`/character/${18}`}>
                    Character-8
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={`/character/${81}`}>
                    Character-9
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
