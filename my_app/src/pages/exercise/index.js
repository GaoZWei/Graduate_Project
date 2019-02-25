import React, { Component } from "react";
import Nav from "../common/Nav";
import Foot from "../common/Foot";
import Action from './component/Action';
import { Layout, Col, Row, Button, Input } from "antd";
const { Content } = Layout;
const Search = Input.Search;
class Exercise extends Component {
  render() {
    return (
      <Layout>
        <Nav />
        <Content style={{ padding: "0 50px", marginTop: 64, height: 600 }}>
          <Row>
            <Col span={9}>
              <div style={{ marginTop: 15 }}>
                <Search
                  placeholder="动作名"
                  onSearch={value => console.log(value)}
                  style={{ width: 300 }}
                />
              </div>
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
              <div style={{ marginTop: 15 }}>
                训练部位
                <Row gutter={16}>
                  <Col className="gutter-row" span={4}>
                    <Button size="small" type="primary">
                      不限部位
                    </Button>
                  </Col>
                  <Col className="gutter-row" span={4}>
                    <Button size="small" type="primary">
                      肱二头肌
                    </Button>
                  </Col>
                  <Col className="gutter-row" span={4}>
                    <Button size="small" type="primary">
                      胸肌
                    </Button>
                  </Col>
                  <Col className="gutter-row" span={4}>
                    <Button size="small" type="primary">
                      前臂
                    </Button>
                  </Col>
                </Row>
              </div>
              <div style={{ marginTop: 15 }}>
                <Row gutter={16}>
                  <Col className="gutter-row" span={4}>
                    <Button size="small" type="primary">
                      中背
                    </Button>
                  </Col>
                  <Col className="gutter-row" span={4}>
                    <Button size="small" type="primary">
                      下背
                    </Button>
                  </Col>
                  <Col className="gutter-row" span={4}>
                    <Button size="small" type="primary">
                      颈部
                    </Button>
                  </Col>
                  <Col className="gutter-row" span={4}>
                    <Button size="small" type="primary">
                      股四头肌
                    </Button>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col span={15}>
             <Action/>
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
