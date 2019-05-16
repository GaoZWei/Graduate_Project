import React, { Component } from "react";
import { connect } from "react-redux";
import { actionCreator } from "../../store";
import { withRouter } from "react-router-dom";
import "../../style.css";
import Nav from "../../../common/Nav";
import Foot from "../../../common/Foot";
import ExerciseNav from "../../../common/LeftNavComponent/ExerciseNav";
import ActionVideo from "./ActionVideo";
import ActionBasic from "./ActionBasic";
import { Layout, Col, Row } from "antd";
const { Content } = Layout;
class ActionDetail extends Component {
  render() {
    return (
      <Layout>
        <Nav />
        <Content className="contentArea">
          <Row>
            <Col span={9}>
              <ExerciseNav />
            </Col>
            <Col span={13}>
              {/* <ActionVideo /> */}
              <ActionBasic />
            </Col>
            <Col span={3} />
          </Row>
        </Content>
        <div />
        <Foot />
      </Layout>
    );
  }
  componentDidMount() {
    this.props.getExerciseDetail(this.props.match.params.exercise_id);
  }
}
const mapDispatchToProps = dispatch => ({
  getExerciseDetail(exercise_id) {
    dispatch(actionCreator.getExerciseDetail(exercise_id));
  }
});
export default connect(
  null,
  mapDispatchToProps
)(withRouter(ActionDetail));
