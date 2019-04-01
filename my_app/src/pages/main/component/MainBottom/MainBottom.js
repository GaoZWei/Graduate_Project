import React, { Component } from "react";
import "../../style.css";
import MainBottomLeft from "./MainBottomLeft";
import MainBottomRight from "./MainBottomRight";
import { Row, Col } from "antd";
class MainBottom extends Component {
  render() {
    return (
      <div className="index_bottom_content">
        <Row>
          <Col span={1} />
          <Col span={11}>
            <MainBottomLeft />
          </Col>
          <Col span={1} />
          <Col span={10}>
            <MainBottomRight />
          </Col>
          <Col span={1} />
        </Row>
      </div>
    );
  }
}
export default MainBottom;
