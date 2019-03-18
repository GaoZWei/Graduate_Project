import React, { Component } from "react";
import { Col, Row, Button, Divider } from "antd";
import "../../style.css";
import num01 from "../../../../statics/01.jpg";
import num02 from "../../../../statics/02.jpg";
import num001 from "../../../../statics/001.png";
import num002 from "../../../../statics/002.png";
class ActionBasic extends Component {
  render() {
    return (
      <div>
        <div className="action_basic">
          <div className="action_title">平板卧推</div>
          <hr className="action_underline" />
          <div className="action_content">
            <Row>
              <span className="action_type">类型:</span>
              <span className="action_type_sort">上肢</span>
              <Divider
                type="vertical"
                style={{
                  position: "absolute",
                  marginLeft: "5%",
                  marginTop: "1%"
                }}
              />
              <span className="action_main">主要肌肉群:</span>
              <span className="action_main_sort">胸大肌</span>
            </Row>
            <Row>
              <span className="action_level">级别:</span>
              <span className="action_level_sort">初级</span>
              <Divider
                type="vertical"
                style={{
                  position: "absolute",
                  marginLeft: "5%",
                  marginTop: "1%"
                }}
              />
              <span className="action_other">其他肌肉:</span>
              <span className="action_other_sort">肱三头肌</span>
            </Row>
            <Row>
              <span className="action_implement">器械要求:</span>
              <span className="action_implement_sort">徒手训练</span>
            </Row>
          </div>
        </div>
        <div className="action_basic_two">
          <div className="action_title">动作要领图</div>
          <div className="action_main_pic">
            <Row>
              <Col span={10}>
                <img src={num01} alt="" />
                <br />
                <p>1、挺胸收腹，躯干与地面平行</p>
              </Col>
              <Col span={1} />
              <Col span={10}>
                <img src={num02} alt="" />
                <br />
                <p>2、双手与肩同宽，始终保持腰背挺直，控制肘部紧贴身体两侧</p>
              </Col>
            </Row>
          </div>
        </div>
        <div className="action_basic_three">
          <Row>
            <Col span={12}>
              <div className="action_title">主要肌肉示意图</div>
              <div className="main_show_pic">
                <img src={num001} alt="" />
                <img src={num002} alt="" />
              </div>
            </Col>
            <Col span={12}>
              <div className="action_title">平板卧推动作要领</div>
              <div className="main_action_description">
                <p>1、挺胸收腹，躯干与地面平行</p>
                <p>2、双手与肩同宽，始终保持腰背挺直，控制肘部紧贴身体两侧</p>
              </div>
            </Col>
          </Row>
        </div>
        <div className="action_basic_four">
          <div className="add_to_plan">
            <Button type="primary" className="add_btn" size="large">
              添加至我的计划
            </Button>
            <Button type="primary" className="add_btn" size="large">
              查看已有计划
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
export default ActionBasic;
