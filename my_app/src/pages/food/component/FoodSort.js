import React, { Component } from "react";
import NavBreadcrumb from "../../common/NavBreadcrumb";
import "../style.css";
import { Row, Col } from "antd";
class FoodSort extends Component {
  render() {
    return (
      <div className="food_sort">
        <div className="food_sort_top">
          <NavBreadcrumb />
          <span className="food_sort_title"> 常见食物分类</span>
          <div className="food_sort_content">
            <Row>
              <Col span={3}>占位符</Col>
              <Col span={9}>
                <div>主食</div>
                <div>dadasda</div>
              </Col>
              <Col span={9}>
                <div>蛋类</div>
                <div>dadasda</div>
              </Col>
              <Col span={3}>占位符</Col>
            </Row>
          </div>
          <div />
        </div>
      </div>
    );
  }
}
export default FoodSort;
