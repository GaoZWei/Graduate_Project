import React, { Component } from "react";
import { connect } from "react-redux";
import { actionCreator } from "./store";
import Nav from "../common/Nav";
import Foot from "../common/Foot";
import NavBreadcrumb from "../common/NavBreadcrumb";
import PersonalPublic from "./component/PersonalPublic";
import PersonalCustomize from "./component/PersonalCustomize";
import PersonalFoodList from "./component/PersonalFoodList";
import PersonalMessage from "./component/PersonalMessage";
import { withRouter } from "react-router-dom";
import "./style.css";
import { Layout, Row, Col } from "antd";
const { Content } = Layout;
class Personal extends Component {
  render() {
    return (
      <div>
        {JSON.parse(sessionStorage.getItem("user")) != null ? (
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
                    <br />
                    <PersonalCustomize />
                    <br />
                    <PersonalFoodList />
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
        ) : (
          ""
        )}
      </div>
    );
  }
  componentDidMount() {
    this.props.getUserMessage(this);
  }
}
const mapDispatchToProps = dispatch => ({
  getUserMessage(_self) {
    if (JSON.parse(sessionStorage.getItem("user")) != null) {
      var user_id = JSON.parse(sessionStorage.getItem("user")).user_id;
      dispatch(actionCreator.getUserBasicMessage(user_id));
    } else {
      _self.props.history.push("/login");
    }
  }
});
export default connect(
  null,
  mapDispatchToProps
)(withRouter(Personal));
