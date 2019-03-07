import React, { Component, Fragment } from "react";
import { Col, Row, Button} from "antd";
class ExerciseNavItem extends Component {
  render() {
    return (
      <Fragment>
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
          固定器械
          <Row gutter={16}>
            <Col className="gutter-row" span={4}>
              <Button size="small" type="primary">
                龙门架
              </Button>
            </Col>
            <Col className="gutter-row" span={4}>
              <Button size="small" type="primary">
                史密斯机
              </Button>
            </Col>
            <Col className="gutter-row" span={4}>
              <Button size="small" type="primary">
                推胸机
              </Button>
            </Col>
            <Col className="gutter-row" span={4}>
              <Button size="small" type="primary">
                夹胸器
              </Button>
            </Col>
          </Row>
        </div>
        <div style={{ marginTop: 15 }}>
          <Row gutter={16}>
            <Col className="gutter-row" span={4}>
              <Button size="small" type="primary">
                划船机
              </Button>
            </Col>
            <Col className="gutter-row" span={4}>
              <Button size="small" type="primary">
                下拉机
              </Button>
            </Col>
            <Col className="gutter-row" span={4}>
              <Button size="small" type="primary">
                推肩器
              </Button>
            </Col>
            <Col className="gutter-row" span={4}>
              <Button size="small" type="primary">
                倒蹬机
              </Button>
            </Col>
          </Row>
        </div>
        <div style={{ marginTop: 15 }}>
          <Row gutter={16}>
            <Col className="gutter-row" span={4}>
              <Button size="small" type="primary">
                腿弯举机
              </Button>
            </Col>
            <Col className="gutter-row" span={4}>
              <Button size="small" type="primary">
                腿屈伸机
              </Button>
            </Col>
            <Col className="gutter-row" span={4}>
              <Button size="small" type="primary">
                单杠
              </Button>
            </Col>
            <Col className="gutter-row" span={4}>
              <Button size="small" type="primary">
                双杠
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
        <div style={{ marginTop: 15 }}>
          训练难度
          <Row gutter={16}>
            <Col className="gutter-row" span={4}>
              <Button size="small" type="primary">
                不限难度
              </Button>
            </Col>
            <Col className="gutter-row" span={4}>
              <Button size="small" type="primary">
                初级
              </Button>
            </Col>
            <Col className="gutter-row" span={4}>
              <Button size="small" type="primary">
                中级
              </Button>
            </Col>
            <Col className="gutter-row" span={4}>
              <Button size="small" type="primary">
                高级
              </Button>
            </Col>
          </Row>
        </div>
      </Fragment>
    );
  }
}
export default ExerciseNavItem;
