import React, { Component } from "react";
import { Card, Col, Row } from "antd";
const { Meta } = Card;
class Action extends Component {
  render() {
    return (
      <div style={{ marginTop: 15 }}>
      <h1>全部动作</h1>
        <Row>
          <Col span={6}>
            <Card
              hoverable
              style={{ width: 140, height: 100 }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta title="具体动作名" description="所属相关分类" />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
              style={{ width: 140, height: 100 }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta title="具体动作名" description="所属相关分类" />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
              style={{ width: 140, height: 100 }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta title="具体动作名" description="所属相关分类" />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
              style={{ width: 140, height: 100 }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta title="具体动作名" description="所属相关分类" />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
export default Action;
