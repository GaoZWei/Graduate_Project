import React, { Component, Fragment } from "react";
import { Collapse, Row, Button } from "antd";
import "../style.css";
const Panel = Collapse.Panel;
class ExerciseNavItem extends Component {
  render() {
    return (
      <Fragment>
        <Collapse accordion className="left_nav_collapse" >
          <Panel header="健身动作" key="1" className="left_nav_collapse_panel">
            <div className="left_nav">
              器械要求
              <Row gutter={16}>
                <Button size="small" type="primary">
                  不限器械
                </Button>
                <Button size="small" type="primary">
                  徒手训练
                </Button>
                <Button size="small" type="primary">
                  双人训练
                </Button>
                <Button size="small" type="primary">
                  其他器械
                </Button>
              </Row>
            </div>
            <div className="left_nav">
              固定器械
              <Row gutter={16}>
                <Button size="small" type="primary">
                  龙门架
                </Button>
                <Button size="small" type="primary">
                  史密斯机
                </Button>
                <Button size="small" type="primary">
                  推胸机
                </Button>
                <Button size="small" type="primary">
                  夹胸器
                </Button>
              </Row>
            </div>
            <div className="left_nav">
              <Row gutter={16}>
                <Button size="small" type="primary">
                  划船机
                </Button>
                <Button size="small" type="primary">
                  下拉机
                </Button>
                <Button size="small" type="primary">
                  推肩器
                </Button>
                <Button size="small" type="primary">
                  倒蹬机
                </Button>
              </Row>
            </div>
            <div className="left_nav">
              <Row gutter={16}>
                <Button size="small" type="primary">
                  腿弯举机
                </Button>
                <Button size="small" type="primary">
                  腿屈伸机
                </Button>
                <Button size="small" type="primary">
                  单杠
                </Button>
                <Button size="small" type="primary">
                  双杠
                </Button>
              </Row>
            </div>
            <div className="left_nav">
              自由器械
              <Row gutter={16}>
                <Button size="small" type="primary">
                  哑铃
                </Button>
                <Button size="small" type="primary">
                  杠铃
                </Button>
                <Button size="small" type="primary">
                  壶铃
                </Button>
                <Button size="small" type="primary">
                  弹力带
                </Button>
              </Row>
            </div>
            <div className="left_nav">
              <Row gutter={16}>
                <Button size="small" type="primary">
                  瑞士球
                </Button>
                <Button size="small" type="primary">
                  泡沫轴
                </Button>
                <Button size="small" type="primary">
                  波速球
                </Button>
                <Button size="small" type="primary">
                  战绳
                </Button>
              </Row>
            </div>
            <div className="left_nav">
              训练部位
              <Row gutter={16}>
                <Button size="small" type="primary">
                  不限部位
                </Button>
                <Button size="small" type="primary">
                  肱二头肌
                </Button>
                <Button size="small" type="primary">
                  胸肌
                </Button>
                <Button size="small" type="primary">
                  前臂
                </Button>
              </Row>
            </div>
            <div className="left_nav">
              <Row gutter={16}>
                <Button size="small" type="primary">
                  中背
                </Button>
                <Button size="small" type="primary">
                  下背
                </Button>
                <Button size="small" type="primary">
                  颈部
                </Button>
                <Button size="small" type="primary">
                  股四头肌
                </Button>
              </Row>
            </div>
            <div className="left_nav">
              训练难度
              <Row gutter={16}>
                <Button size="small" type="primary">
                  不限难度
                </Button>
                <Button size="small" type="primary">
                  初级
                </Button>
                <Button size="small" type="primary">
                  中级
                </Button>
                <Button size="small" type="primary">
                  高级
                </Button>
              </Row>
            </div>
          </Panel>
          <Panel header="健身计划" key="2"  className="left_nav_collapse_panel" style={{ backgroundColor: "rgb(37,36,37)" }}>
            <p>text</p>
          </Panel>
        </Collapse>
      </Fragment>
    );
  }
}
export default ExerciseNavItem;
