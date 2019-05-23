import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Breadcrumb, Row, Col } from "antd";
class NavBreadcrumb extends Component {
  render() {
    var recent_path1 = this.props.location.pathname;
    var selectBreadcrumb = "";
    if (recent_path1.indexOf("/exercise") > -1) {
      selectBreadcrumb = "1";
    } else if (recent_path1.indexOf("/plan") > -1) {
      selectBreadcrumb = "2";
    } else if (recent_path1.indexOf("/food") > -1) {
      selectBreadcrumb = "饮食查询";
    } else if (recent_path1.indexOf("/news") > -1) {
      selectBreadcrumb = "健康知识";
    } else if (recent_path1.indexOf("/implement") > -1) {
      selectBreadcrumb = "健身工具";
    } else if (recent_path1.indexOf("/personal") > -1) {
      selectBreadcrumb = "个人中心";
    }
    return (
      <div style={{ marginLeft: "10%", marginTop: "2%" }}>
        <Row>
          <Col span={2}>当前位置:</Col>
          <Col span={22}>
            <Breadcrumb>
              <Breadcrumb.Item>
                <a href="/">主页</a>/{selectBreadcrumb}
              </Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
      </div>
    );
  }
}
export default withRouter(NavBreadcrumb);
