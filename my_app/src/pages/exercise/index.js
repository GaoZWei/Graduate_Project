import React, { Component } from "react";
import Nav from "../common/Nav";
import Foot from "../common/Foot";
import { Layout, Col, Row, Button } from "antd";
const { Content } = Layout;
class Exercise extends Component {
  render() {
    return (
      <Layout>
        <Nav />
        <Content style={{ padding: "0 50px", marginTop: 64, height: 450 }}>
          这是健身动作库主页
          <Row>
            <Col span={6}>
              <div style={{ marginTop: 15 }}>
                器械要求
                <Row gutter={16}>
                  <Col className="gutter-row" span={4}>
                    <Button size="small" type="primary">
                      不限器械
                    </Button>
                  </Col>
                  <Col className="gutter-row" span={4}>
                    <Button size="small" type="primary">
                      徒手训练
                    </Button>
                  </Col>
                  <Col className="gutter-row" span={4}>
                    <Button size="small" type="primary">
                      双人训练
                    </Button>
                  </Col>
                  <Col className="gutter-row" span={4}>
                    <Button size="small" type="primary">
                      其他器械
                    </Button>
                  </Col>
                </Row>
              </div>

              <div style={{ marginTop: 15 }}>
                自由器械
                <Row gutter={16}>
                  <Col className="gutter-row" span={4}>
                    <Button size="small" type="primary">
                      哑铃
                    </Button>
                  </Col>
                  <Col className="gutter-row" span={4}>
                    <Button size="small" type="primary">
                      杠铃
                    </Button>
                  </Col>
                  <Col className="gutter-row" span={4}>
                    <Button size="small" type="primary">
                      壶铃
                    </Button>
                  </Col>
                  <Col className="gutter-row" span={4}>
                    <Button size="small" type="primary">
                      弹力带
                    </Button>
                  </Col>
                </Row>
              </div>
              <div style={{ marginTop: 15 }}>
                <Row gutter={16}>
                  <Col className="gutter-row" span={4}>
                    <Button size="small" type="primary">
                      瑞士球
                    </Button>
                  </Col>
                  <Col className="gutter-row" span={4}>
                    <Button size="small" type="primary">
                      泡沫轴
                    </Button>
                  </Col>
                  <Col className="gutter-row" span={4}>
                    <Button size="small" type="primary">
                      波速球
                    </Button>
                  </Col>
                  <Col className="gutter-row" span={4}>
                    <Button size="small" type="primary">
                      战绳
                    </Button>
                  </Col>
                </Row>
              </div>

              <div style={{ marginTop: 15 }}>
                自由器械
                <Row gutter={16}>
                  <Col className="gutter-row" span={4}>
                    <Button size="small" type="primary">
                      哑铃
                    </Button>
                  </Col>
                  <Col className="gutter-row" span={4}>
                    <Button size="small" type="primary">
                      杠铃
                    </Button>
                  </Col>
                  <Col className="gutter-row" span={4}>
                    <Button size="small" type="primary">
                      壶铃
                    </Button>
                  </Col>
                  <Col className="gutter-row" span={4}>
                    <Button size="small" type="primary">
                      弹力带
                    </Button>
                  </Col>
                </Row>
              </div>
              <div style={{ marginTop: 15 }}>
                <Row gutter={16}>
                  <Col className="gutter-row" span={4}>
                    <Button size="small" type="primary">
                      瑞士球
                    </Button>
                  </Col>
                  <Col className="gutter-row" span={4}>
                    <Button size="small" type="primary">
                      泡沫轴
                    </Button>
                  </Col>
                  <Col className="gutter-row" span={4}>
                    <Button size="small" type="primary">
                      波速球
                    </Button>
                  </Col>
                  <Col className="gutter-row" span={4}>
                    <Button size="small" type="primary">
                      战绳
                    </Button>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col span={18}>
              右侧主页 <div>dadada</div>
            </Col>
          </Row>
        </Content>
        <div />
        <Foot />
      </Layout>
    );
  }
}
export default Exercise;
