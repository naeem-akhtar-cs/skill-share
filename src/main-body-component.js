import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
class MainBodyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.topImg = this.props.topImg;
    this.topClass = this.props.topClass;
    this.classesData = this.props.classesData;
    this.bottomExplanation = this.props.bottomExplanation;
  }
  render() {
    return (
      <div>
        <div class="border rounded">
          <a href="#">
            <img src={this.topImg} className="img-fluid w-100" />
          </a>
        </div>
        <hr />

        <div class="row w-100 mt-4 h-5">
          <div class="col-lg-6 col-sm-12">
            <img
              src={this.topClass.frontImage}
              class="img-fluid w-100 rounded"
              alt="Responsive image"
            />
          </div>
          <div class="col-lg-6 shadow">
            <h4>{this.topClass.title}</h4>
            <div class="row">
              <div class="col-2 cl-sm-12">
                <img
                  src={this.topClass.profileImg}
                  class="rounded-circle"
                  width="90%"
                  height="90%"
                />
              </div>
              <div class="col-10">
                <p class="m-0">
                  <small />
                  {this.topClass.teacherName}
                </p>
                <p class="m-0">
                  <small>{this.topClass.category}</small>
                </p>
                <p class="m-0">
                  <small>{this.topClass.students} students</small>
                </p>
              </div>
            </div>
            <p class="mt-4">{this.topClass.time}</p>
          </div>
        </div>

        <div>
          {Object.keys(this.classesData).map((key, i) => {
            return (
              <div>
                <div class="row mt-4">
                  <div class="col-lg-10 col-sm-6 col-xs-6">
                    <h2>{key}</h2>
                  </div>
                  <div class="col-lg-2 col-sm-6 col-xs-6">
                    <button type="button" class="btn btn-outline-dark">
                      View All
                    </button>
                  </div>
                </div>
                <div class="row mt-4">
                  {this.classesData[key].map((element) => {
                    return (
                      <div class="col-lg-4 col-sm-12 mt-4">
                        <div class="border rounded shadow">
                          <img src={element.img} class="w-100 rounded" />
                          <div class="p-2">
                            <div class="row">
                              <div class="col-9">
                                <p>{element.students} students</p>
                              </div>
                              <div class="col-3">
                                <p>{element.time}</p>
                              </div>
                            </div>
                            <div class="w-100">
                              <h6>{element.title}</h6>
                            </div>
                            <div class="row mt-4">
                              <div class="col-10">
                                <p>{element.teacherName}</p>
                              </div>
                              <div class="col-2">
                                <a href="#" class="text-decoration-none">
                                  <i class="fa fa-bookmark-o"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div class="text-center mt-4">
          <button type="button" class="btn btn-outline-dark">
            See All
          </button>
        </div>

        <div class="mt-5">
          <h2>{this.bottomExplanation.title}</h2>
          <div>{this.bottomExplanation.description}</div>
        </div>
      </div>
    );
  }
}

export default MainBodyComponent;
