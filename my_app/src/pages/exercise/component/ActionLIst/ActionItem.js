import React, { Component } from "react";
import { Card, Col, Row } from "antd";
import { Link } from "react-router-dom";
const { Meta } = Card;
class ActionItem extends Component {
  render() {
    return (
       <Row>
          <Col span={6}>
          <Link to="/action/detail"> 
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
            </Link>
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

    );
  }
}
export default ActionItem;
