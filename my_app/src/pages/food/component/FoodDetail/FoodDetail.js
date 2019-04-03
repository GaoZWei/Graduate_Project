import React, { Component } from "react";
import NavBreadcrumb from "../../../common/NavBreadcrumb";
import Foot from "../../../common/Foot";
import FoodTopArea from "../FoodTopArea";
import "../../style.css";
import { Row, Col, Layout } from "antd";
class FoodDetail extends Component {
  render() {
    return (
      <Layout>
        <FoodTopArea />
        <div className="food_detail">
          <div className="food_detail_top">
            <NavBreadcrumb />
          </div>
          <div className="food_detail_content">
            <div className="food_detail_content_top">米饭</div>
            <div className="food_detail_content_middle">
              <Row>
                <Col span={12}>热量分解</Col>
                <Col span={12}>食用分量</Col>
              </Row>
            </div>
            <div className="food_detail_content_bottom">相关食物</div>
          </div>
        </div>
        <Foot />
      </Layout>
    );
  }
}
export default FoodDetail;
