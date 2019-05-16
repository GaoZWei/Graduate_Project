import React, { Component } from "react";
import { connect } from "react-redux";
import { actionCreator } from "../../store";
import { withRouter, Link } from "react-router-dom";
import { Col, Row, Button, Divider, Modal } from "antd";
import "../../style.css";
import ActionForm from "./ActionForm";
import num001 from "../../../../statics/001.png";
import num002 from "../../../../statics/002.png";
class ActionBasic extends Component {
  render() {
    const {
      detailList,
      showModal,
      modelVisible,
      hideModal,
      handleOK
    } = this.props;
    return (
      <div>
        {detailList.map((item, index) => {
          return (
            <div key={index}>
              <div style={{ border: "1px solid yellow" }} key={index}>
                <video
                  id="my-video"
                  controls
                  preload="auto"
                  width="100%"
                  height="20%"
                >
                  <source src={item.get("exercise_video")} type="video/mp4" />
                </video>
              </div>
              <div className="action_basic">
                <div className="action_title">{item.get("exercise_name")}</div>
                <hr className="action_underline" />
                <div className="action_content">
                  <Row>
                    <span className="action_type">类型:</span>
                    <span className="action_type_sort">
                      上肢
                      {/* {item.get("exercise_sort")} */}
                    </span>
                    <Divider
                      type="vertical"
                      style={{
                        position: "absolute",
                        marginLeft: "5%",
                        marginTop: "1%"
                      }}
                    />
                    <span className="action_main">主要肌肉群:</span>
                    <span className="action_main_sort">
                      {item.get("sort_name")}
                    </span>
                  </Row>
                  <Row>
                    <span className="action_level">级别:</span>
                    <span className="action_level_sort">
                      {item.get("difficult_name")}
                    </span>
                    <Divider
                      type="vertical"
                      style={{
                        position: "absolute",
                        marginLeft: "5%",
                        marginTop: "1%"
                      }}
                    />
                    <span className="action_other">其他肌肉:</span>
                    <span className="action_other_sort">
                      肱三头肌
                      {/* {item.get("exercise_sort_other")} */}
                    </span>
                  </Row>
                  <Row>
                    <span className="action_implement">器械要求:</span>
                    <span className="action_implement_sort">
                      {item.get("exercise_implement_name")}
                    </span>
                  </Row>
                </div>
              </div>
              <div className="action_basic_two">
                <div className="action_title">动作要领图</div>
                <div className="action_main_pic">
                  <Row>
                    <Col span={10}>
                      <img src={item.get("exercise_pic_first")} alt="" />
                      <br />
                      {/* <p>1、挺胸收腹，躯干与地面平行</p> */}
                    </Col>
                    <Col span={1} />
                    <Col span={10}>
                      <img src={item.get("exercise_pic_second")} alt="" />
                      <br />
                      {/* <p>
                        2、双手与肩同宽，始终保持腰背挺直，控制肘部紧贴身体两侧
                      </p> */}
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
                      {/* <p>1、挺胸收腹，躯干与地面平行</p>
                      <p>
                        2、双手与肩同宽，始终保持腰背挺直，控制肘部紧贴身体两侧
                      </p> */}
                      <p> {item.get("exercise_description")} </p>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="action_basic_four">
                <div className="add_to_plan">
                  <Button
                    type="primary"
                    className="add_btn"
                    size="large"
                    onClick={() => showModal()}
                  >
                    添加至我的计划
                  </Button>
                  <Modal
                    title="请选择添加属性"
                    visible={modelVisible}
                    onOk={() => handleOK(this)}
                    onCancel={hideModal}
                    okText="确认"
                    cancelText="取消"
                  >
                    {/* <p>请选择日期</p>
                    <p>Bla bla ...</p>
                    <p>Bla bla ...</p> */}
                    <ActionForm ref="getFormValue" />
                  </Modal>
                  <Button type="primary" className="add_btn" size="large">
                    <Link to="/personal"> 查看已有计划</Link>
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  componentDidMount() {
    this.props.getExerciseDetail(this.props.match.params.exercise_id);
  }
}
const mapStateToProps = state => ({
  detailList: state.getIn(["exercise", "detailList"]),
  modelVisible: state.getIn(["exercise", "modelVisible"])
});
const mapDispatchToProps = dispatch => ({
  getExerciseDetail(exercise_id) {
    dispatch(actionCreator.getExerciseDetail(exercise_id));
  },
  showModal() {
    dispatch(actionCreator.showModal());
  },
  hideModal() {
    dispatch(actionCreator.hideModal());
  },
  handleOK(_self) {
    // console.log(_self.props.match.params.exercise_id);
    let demo = _self.refs.getFormValue;
    demo.validateFields((err, values) => {
      if (!err) {
        if (JSON.parse(sessionStorage.getItem("user")) != null) {
          values.exercise_id = _self.props.match.params.exercise_id;
          values.user_id = JSON.parse(sessionStorage.getItem("user")).user_id;
          // console.log(values); //这里可以拿到数据
          dispatch(actionCreator.addPersonalPlan(values, _self));
        } else {
          _self.props.history.push("/login");
        }
      }
    });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ActionBasic));
