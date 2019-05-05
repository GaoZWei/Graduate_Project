import React, { Component } from "react";
import { connect } from "react-redux";
import { actionCreator } from "./store";
import "./style.css";
import Nav from "../common/Nav";
import Foot from "../common/Foot";
import ActionList from "./component/ActionLIst/ActionList";
import ExerciseNav from "../common/LeftNavComponent/ExerciseNav";
import { Layout, Col, Row } from "antd";
const { Content } = Layout;
class Exercise extends Component {
  render() {
    // const {exerciseList}=this.props;
    // console.log(exerciseList);
    return (
      <Layout>
        <Nav />
        <Content className="contentArea">
          <Row>
            <Col span={8}>
              <ExerciseNav />
            </Col>
            <Col span={16}>
              <ActionList />
            </Col>
          </Row>
        </Content>
        <div />
        <Foot />
      </Layout>
    );
  }
  componentDidMount() {
    this.props.changeHomeData();
  }
}
const mapDispatchToProps = dispatch => ({
  changeHomeData() {
    dispatch(actionCreator.changeHomeInfo());
  }
});
export default connect(
  null,
  mapDispatchToProps
)(Exercise);
