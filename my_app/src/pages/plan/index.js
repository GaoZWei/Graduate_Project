import React, { Component } from "react";
import "./style.css";
import Nav from "../common/Nav";
import Foot from "../common/Foot";
import ExerciseNav from "../common/LeftNavComponent/ExerciseNav";
import PlanList from "./component/PlanList/PlanList";
import { Layout, Col, Row } from "antd";
const { Content } = Layout;
class Plan extends Component {
  render() {
    return (
      <Layout>
        <Nav />
        <Content className="contentArea">
          <Row>
            <Col span={9}>
              <ExerciseNav />
            </Col>
            <Col span={15}>
              <PlanList />
            </Col>
          </Row>
        </Content>
        <div />
        <Foot />
      </Layout>
    );
  }
}
export default Plan;
