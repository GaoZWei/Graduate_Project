import React, { Component } from "react";
import Nav from "../common/Nav";
import Foot from "../common/Foot";
import Action from "./component/Action";
import ExerciseNav from './component/ExerciseNav'
import { Layout, Col, Row} from "antd";
const { Content } = Layout;
class Exercise extends Component {
  render() {
    return (
      <Layout>
        <Nav />
        <Content style={{ padding: "0 50px", marginTop: 64, height: 650 }}>
        <Row>
            <Col span={9}>
            <ExerciseNav/>
            </Col>
            <Col span={15}>
              <Action />
            </Col>
          </Row>
        </Content>
        <div />
        <Foot />
      </Layout>
    );
  }
}
export default Exercise;
