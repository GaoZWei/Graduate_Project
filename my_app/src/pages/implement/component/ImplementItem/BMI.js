import React, { Component } from "react";
import Nav from "../../../common/Nav";
import Foot from "../../../common/Foot";
import NavBreadcrumb from "../../../common/NavBreadcrumb";
import "../../style.css";
import { Layout, Input, Row, Col, Button } from "antd";
class BMI extends Component {
  render() {
    return (
      <Layout>
        <Nav />
        <NavBreadcrumb />
        <div className="implement_bmi">
          <div className="implement_bmi_title">身体质量指数</div>
          <div className="implement_bmi_content">
            BMI[Body Mass Index]
            即BMI指数，也叫身体质量指数，是衡量是否肥胖和标准体重的重要指标。适用范围：18至65岁的人士。儿童、发育中的青少年、孕妇、乳母、老人及身型健硕的运动员除外。世界卫生组织认为BMI指数保持在22左右是比较理想的。
          </div>
          <hr className="under_line" />
          <div>
            <div className="implement_bmi_prompt">请输入您的身高、体重：</div>
            <div className="implement_bmi_input">
              <Row gutter={16}>
                <Col span={12}>
                  <Col span={4}> 身高:</Col>
                  <Col span={13}>
                    <Input
                      placeholder="身高"
                      className="implement_bmi_input_place"
                    />
                  </Col>
                  <Col span={7}> CM(厘米)</Col>
                </Col>
                <Col span={12}>
                  <Col span={4}> 体重:</Col>
                  <Col span={13}>
                    <Input
                      placeholder="体重"
                      className="implement_bmi_input_place"
                    />
                  </Col>
                  <Col span={7}> KG(公斤)</Col>
                </Col>
              </Row>
            </div>
            <div className="implement_bmi_summit">
              <Row>
                <Col span={3} />
                <Col span={18}>
                  <Col span={10}>
                    <Button
                      type="primary"
                      size="large"
                      className="implement_bmi_submit_btn"
                    >
                      计算
                    </Button>
                  </Col>
                  <Col span={4} />
                  <Col span={10}>
                    <Button
                      type="primary"
                      size="large"
                      className="implement_bmi_submit_btn"
                    >
                      重置
                    </Button>
                  </Col>
                </Col>
                <Col span={3} />
              </Row>
            </div>
            <div className="implement_bmi_extend_content">
              <li>您的身体质量指数(BMI)为19.1</li>
            </div>
          </div>
        </div>
        <Foot />
      </Layout>
    );
  }
}
export default BMI;
