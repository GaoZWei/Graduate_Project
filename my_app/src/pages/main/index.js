import React, { Component } from "react";
import { connect } from "react-redux";
import { actionCreator } from "./store";
import Foot from "../common/Foot";
import MainTop from "./component/MainTop/MainTop";
import MainMiddle from "./component/MainMiddle/MainMiddle";
import MainBottom from "./component/MainBottom/MainBottom";
import MainBottomSecond from "./component/MainBottomSecond/MainBottomSecond";
import "./style.css";
import { Layout } from "antd";
class Main extends Component {
  render() {
    return (
      <Layout>
        <MainTop />
        <MainMiddle />
        <hr style={{ width: "90%", color: "gray", opacity: "0.2" }} />
        <MainBottom />
        <MainBottomSecond />
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
    //推荐动作
    dispatch(actionCreator.changeHomeInfo());
    //热点新闻
    dispatch(actionCreator.changeHotInfo());
    //食物知识
    dispatch(actionCreator.changeFoodKnowledgeInfo());
    //健身计划
    dispatch(actionCreator.changePlanInfo());
  }
});
export default connect(
  null,
  mapDispatchToProps
)(Main);
