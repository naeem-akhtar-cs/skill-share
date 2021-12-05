import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
class SidePanelComponent extends React.Component {
  constructor(props) {
    super(props);
    this.panelData = this.props.sidePanelData;
  }
  render() {
    return (
      <div>
        <div className="mt-4">
          <button type="button" className="btn btn-dark btn-block w-100">
            All Classes
          </button>
        </div>

        {Object.keys(this.panelData).map((key, i) => (
          <div className="mt-4">
            <h5>{key}</h5>
            <hr />
            {this.panelData[key].map((element) => {
              return (
                <a className="btn btn-light w-100" href="#" role="button">
                  {element}
                </a>
              );
            })}
          </div>
        ))}
      </div>
    );
  }
}

export default SidePanelComponent;
