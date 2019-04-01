import React, { Component } from "react";
import "../../style.css";
import MainBottomLeftSecond from "./MainBottomLeftSecond";
import MainBottomRightSecond from "./MainBottomRightSecond";
import { Row, Col } from "antd";
class MainBottomSecond extends Component {
  render() {
    return (
      <div className="index_bottom_content">
        <Row>
          <Col span={1} />
          <Col span={11}>
            <MainBottomLeftSecond />
          </Col>
          <Col span={1} />
          <Col span={10}>
            <MainBottomRightSecond />
          </Col>
          <Col span={1} />
        </Row>
      </div>
    );
  }
}
export default MainBottomSecond;
