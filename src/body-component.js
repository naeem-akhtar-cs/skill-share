import React from "react";
import MainBodyComponent from "./main-body-component";
import SidePanelComponent from "./side-panel-component";
import "bootstrap/dist/css/bootstrap.min.css";
class BodyComponent extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row mt-4">
            <div className="d-none d-lg-block col-lg-3 cl-md-0">
              <SidePanelComponent
                sidePanelData={this.props.bodyData.sidePanelButtons}
              />
            </div>
            <div class="col-lg-9 cl-md-12 cl-sm-12">
              <MainBodyComponent
                topImg={this.props.bodyData.topImg}
                classesData={this.props.bodyData.Classes}
                topClass={this.props.bodyData.topClass}
                bottomExplanation={this.props.bodyData.bottomExplanation}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BodyComponent;
