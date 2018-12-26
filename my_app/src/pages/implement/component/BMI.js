import React, { Component } from "react";
import Nav from "../../common/Nav";
import Foot from "../../common/Foot";
import NavBreadcrumb from "../../common/NavBreadcrumb";
import "../style.css";
import { Layout, Input, Row, Col, Button } from "antd";
const { Content } = Layout;
class BMI extends Component {
  render() {
    return (
      <Layout>
        <Nav />
        <Content
          style={{
            padding: "0 50px",
            marginTop: 64,
            height: 450,
            background: "white"
          }}
        >
          <NavBreadcrumb />
          <div className="implement_content">
            <h3>身体质量指数</h3>
            <div className="implement_content_area">
              <p>
                BMI[Body Mass Index]
                即BMI指数，也叫身体质量指数，是衡量是否肥胖和标准体重的重要指标。适用范围：18至65岁的人士。儿童、发育中的青少年、孕妇、乳母、老人及身型健硕的运动员除外。世界卫生组织认为BMI指数保持在22左右是比较理想的。
              </p>
            </div>
            <div>
              请输入您的身高、体重：
              <br />
              <div>
                <Row gutter={16}>
                  <Col className="gutter-row" span={8}>
                    身高:
                    <Input size="small" placeholder="身高" />
                    CM(厘米)
                  </Col>
                  <Col className="gutter-row" span={8}>
                    体重:
                    <Input size="small" placeholder="体重" />
                    KG(公斤)
                  </Col>
                </Row>
                <br />
                <Button type="primary" size="large">
                  计算
                </Button>
              </div>
            </div>
          </div>
        </Content>
        <Foot />
      </Layout>
    );
  }
}
export default BMI;
