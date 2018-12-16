import React, { Component } from "react";
import { Input, Row, Col } from "antd";
class BMI extends Component {
  render() {
    return (
      <div>
        <div>
          身体质量指数
          <div>
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
                <Col className="gutter-row" span={12}>
                  身高:
                  <Input size="small" placeholder="身高" />
                  CM(厘米)
                </Col>
                <Col className="gutter-row" span={12}>
                  体重:
                  <Input size="small" placeholder="体重" />
                  KG(公斤)
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default BMI;
