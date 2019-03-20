import React, { Component } from "react";
import Nav from "../common/Nav";
import Foot from "../common/Foot";
import NavBreadcrumb from "../common/NavBreadcrumb";
import PersonalPublic from "./component/PersonalPublic";
import PersonalCustomize from "./component/PersonalCustomize";
import PersonalMessage from "./component/PersonalMessage";
import "./style.css";
import { Layout, Row, Col } from "antd";
const { Content } = Layout;
class Personal extends Component {
  render() {
    return (
      <Layout>
        <Nav />
        <Content className="personal_content">
          <div className="personal_content_navbread">
            <NavBreadcrumb />
          </div>
          <div className="personal_content_main">
            <Row>
              {/* <Col span={2} /> */}
              <Col span={14}>
                <PersonalPublic />
                <PersonalCustomize />
              </Col>
              <Col span={1} />
              <Col span={8}>
                <PersonalMessage />
              </Col>
            </Row>
          </div>
        </Content>
        <Foot />
      </Layout>
    );
  }
}
export default Personal;
