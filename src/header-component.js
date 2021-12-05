import React from "react";
class HeaderComponent extends React.Component {
  render() {
    return (
      <div>
        <nav style={{ "background-color": "#072333" }} className="pt-4">
          <div className="row">
            <div className="d-none d-sm-block col-lg-0">
              <i className="bi bi-search"></i>
            </div>
            <div className="col-4">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <img src="./images/unnamed.webp" height="90px" />
                </div>
                <div className="col-2 d-none d-lg-block">
                  <a
                    className="nav-link dropdown-toggle text-success"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    Browse
                  </a>
                </div>
                <div className="col-7 d-none d-lg-block">
                  <form className="d-flex border border-light rounded bg-dark">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="What do you want to learn today?"
                      aria-label="Search"
                    />
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-5 d-none col-md-0 col-sm-6 d-sm-block">
              <button type="button" className="btn btn-outline-dark">
                Sign In
              </button>
            </div>
            <div className="col-lg-3 d-none d-lg-block">
              <div className="row">
                <div className="col-3">
                  <a href="#" className="text-light text-decoration-none">
                    Go Premium
                  </a>
                </div>
                <div className="col-3">
                  <a href="#" className="text-light text-decoration-none">
                    Sign In
                  </a>
                </div>
                <div className="col-6">
                  <button type="button" className="btn btn-success w-80">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default HeaderComponent;
