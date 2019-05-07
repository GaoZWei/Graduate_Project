import React, { Component } from "react";
import { connect } from "react-redux";
import AdminNav from "./component/AdminNav";
import { Layout, Col, Row } from "antd";
class Admin extends Component {
  render() {
    return (
      <Layout>
        <AdminNav />
        <div className="admin_table">
          <Row>
            <Col span={2} />
            <Col span={20}>
              {/* <AdminExerciseTable /> */}
            </Col>
            <Col span={2} />
          </Row>
        </div>
      </Layout>
    );
  }
}
const mapStateToProps = state => ({
  // detailList: state.getIn(["exercise", "detailList"]),
});
const mapDispatchToProps = dispatch => ({
  // changeHomeData() {
  //   dispatch(actionCreator.changeHomeInfo());
  // }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin);
