import React, { Component } from "react";
import { connect } from "react-redux";
import { actionCreator } from "./store";
import Foot from "../common/Foot";
import FoodTopArea from "./component/FoodTopArea";
import FoodSort from "./component/FoodSort";
import "./style.css";
import { Layout } from "antd";
class Food extends Component {
  render() {
    return (
      <Layout>
        <FoodTopArea />
        <FoodSort />
        <Foot />
      </Layout>
    );
  }
  componentDidMount() {
    this.props.changeFoodData();
  }
}
const mapDispatchToProps = dispatch => ({
  changeFoodData() {
    const action = actionCreator.changeFoodSort();
    dispatch(action);
  }
});
export default connect(
  // mapStateToProps,
  null,
  mapDispatchToProps
)(Food);
