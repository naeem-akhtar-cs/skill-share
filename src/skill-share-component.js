import React from "react";
import HeaderComponent from "./header-component";
import BodyComponent from "./body-component";
import FooterComponent from "./footer-component";
import webdata from "./skillShareData.json";
class SkillShareComponent extends React.Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <BodyComponent bodyData={webdata} />
        <FooterComponent />
      </div>
    );
  }
}

export default SkillShareComponent;
