import React, { Component } from "react";
import "../../style.css";
import MainMiddleLeft from "./MainMiddleLeft";
import MainMiddleRight from "./MainMiddleRight";
import { Row, Col } from "antd";
class MainTop extends Component {
  render() {
    return (
      <div className="index_middle_content">
        <Row>
          <Col span={1} />
          <Col span={11}>
            <MainMiddleLeft />
          </Col>
          <Col span={1} />
          <Col span={10}>
            <MainMiddleRight />
          </Col>
          <Col span={1} />
        </Row>
      </div>
    );
  }
}
export default MainTop;
