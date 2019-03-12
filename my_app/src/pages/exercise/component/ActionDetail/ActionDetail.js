import React, { Component } from "react";
import '../../style.css';
import Nav from "../../../common/Nav";
import Foot from "../../../common/Foot";
import ExerciseNav from '../LeftNavComponent/ExerciseNav';
import ActionVideo from './ActionVideo';
import ActionBasic from './ActionBasic';
import { Layout, Col, Row} from "antd";
const { Content } = Layout;
class ActionDetail extends Component{
    render(){
        return (
            <Layout>
            <Nav />
            <Content className="contentArea">
            <Row>
                <Col span={9}>
                <ExerciseNav/>
                </Col>
                <Col span={13}>
                  <ActionVideo/>
                  <ActionBasic/>
                </Col>
                <Col span={3}></Col>
              </Row>
            </Content>
            <div />
            <Foot />
          </Layout>
        );
    }
}
export default ActionDetail;
