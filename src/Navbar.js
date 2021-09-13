import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const Navbar = (props) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand" href="#">
              <img src="logo.png" alt="" style={{ width: "60px" }} />
            </a>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Men
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Women
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Kids
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Home & Living
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Beauty
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={props.onChange}
              />
             
                
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
