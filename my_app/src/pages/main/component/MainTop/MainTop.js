import React, { Component, Fragment } from "react";
import Nav from "../../../common/Nav";
import index_bg from "../../../../statics/index-bg.jpeg";
import "../../style.css";
import { Layout } from "antd";
const { Content } = Layout;
class MainTop extends Component {
  render() {
    return (
      <Fragment>
        <Nav />
        <Content className="index_area">
          <div className="index_top_area">
            <img src={index_bg} alt="" />
          </div>
          <div className="index_top_left">
            橙子健身
            <br />
            Change your life
          </div>
          <div className="index_top_right">dasdaadada</div>
        </Content>
      </Fragment>
    );
  }
}
export default MainTop;
