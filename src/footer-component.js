import React from "react";
class FooterComponent extends React.Component {
  render() {
    return (
      <div>
        <footer
          class="page-footer text-light mt-4 pt-4"
          style={{ "background-color": "#072333" }}
        >
          <div className="container">
            <div class="row">
              <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                <h5>Company</h5>
                <div class="mt-2">
                  <div>
                    <a href="#" class="text-light text-decoration-none">
                      <small>About</small>
                    </a>
                  </div>
                  <div>
                    <a href="#" class="text-light text-decoration-none">
                      <small>Careers</small>
                    </a>
                  </div>
                  <div>
                    <a href="#" class="text-light text-decoration-none">
                      <small>Press</small>
                    </a>
                  </div>
                  <div>
                    <a href="#" class="text-light text-decoration-none">
                      <small>Blog</small>
                    </a>
                  </div>
                  <div>
                    <a href="#" class="text-light text-decoration-none">
                      <small>Affiliates</small>
                    </a>
                  </div>
                  <div>
                    <a href="#" class="text-light text-decoration-none">
                      <small>Partnerships</small>
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                <h5>Community</h5>
                <div class="mt-2">
                  <div>
                    <a href="#" class="text-light text-decoration-none">
                      <small>Go Premium</small>
                    </a>
                  </div>
                  <div>
                    <a href="#" class="text-light text-decoration-none">
                      <small>Team Plans</small>
                    </a>
                  </div>
                  <div>
                    <a href="#" class="text-light text-decoration-none">
                      <small>Refer a Friend</small>
                    </a>
                  </div>
                  <div>
                    <a href="#" class="text-light text-decoration-none">
                      <small>Limited Memberships</small>
                    </a>
                  </div>
                  <div>
                    <a href="#" class="text-light text-decoration-none">
                      <small>Scholarships</small>
                    </a>
                  </div>
                  <div>
                    <a href="#" class="text-light text-decoration-none">
                      <small>Free Classes</small>
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                <h5>Teaching</h5>
                <div class="mt-2">
                  <div>
                    <a href="#" class="text-light text-decoration-none">
                      <small>Become a Teacher</small>
                    </a>
                  </div>
                  <div>
                    <a href="#" class="text-light text-decoration-none">
                      <small>Teaching Academy</small>
                    </a>
                  </div>
                  <div>
                    <a href="#" class="text-light text-decoration-none">
                      <small>Teacher Handbook</small>
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                <h5>Mobile</h5>
                <div>
                  <a href="#">
                    <img
                      src="/images/appstore.png"
                      height="50px"
                      width="170px"
                    />
                  </a>
                  <br />
                  <br />
                  <a href="#">
                    <img
                      src="/images/playstore.png"
                      height="50px"
                      width="170px"
                    />
                  </a>
                </div>
              </div>
            </div>
            <hr style={{ color: "#81E879;" }} />
            <div class="row">
              <div class="col-lg-4 col-sm-12">
                <div class="row">
                  <div class="col-lg-6 col-sm-12 text-center">
                    <a>?? Skillshare, Inc. 2021</a>
                  </div>
                  <div class="col-lg-6 col-sm-12">
                    <div class="row">
                      <div class="col-4">
                        <a href="#" class="text-light text-decoration-none">
                          Help
                        </a>
                      </div>
                      <div class="col-4">
                        <a href="#" class="text-light text-decoration-none">
                          Privacy
                        </a>
                      </div>
                      <div class="col-4">
                        <a href="#" class="text-light text-decoration-none">
                          Terms
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-8 d-sm-12">
                <div style={{ float: "right" }}>
                  <a href="#">
                    <img
                      src="/images/fb.png"
                      class="rounded-circle"
                      height="4%"
                      width="4%"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="/images/twitter.png"
                      class="rounded-circle"
                      height="4%"
                      width="4%"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="/images/instagram.png"
                      class="rounded-circle"
                      height="4%"
                      width="4%"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
        </footer>
      </div>
    );
  }
}

export default FooterComponent;
