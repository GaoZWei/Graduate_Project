import React, { Component } from "react";
import './style.css';
import Nav from "../common/Nav";
import Foot from "../common/Foot";
import ActionList from "./component/ActionLIst/ActionList";
import ExerciseNav from '../common/LeftNavComponent/ExerciseNav'
import { Layout, Col, Row} from "antd";
const { Content } = Layout;
class Exercise extends Component {
  render() {
    return (
      <Layout>
        <Nav />
        <Content className="contentArea">
        <Row>
            <Col span={9}>
            <ExerciseNav/>
            </Col>
            <Col span={15}>
              <ActionList />
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
