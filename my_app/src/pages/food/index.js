import React, { Component } from "react";
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
}
export default Food;
