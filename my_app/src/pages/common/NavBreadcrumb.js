import React, { Component } from "react";
import { Breadcrumb, Row, Col } from "antd";
class NavBreadcrumb extends Component {
  render() {
    return (
      <div style={{ marginLeft: "10%", marginTop: "2%" }}>
        <Row>
          <Col span={2}>当前位置:</Col>
          <Col span={22}>
            <Breadcrumb>
              <Breadcrumb.Item>主页/<a href="/">{window.location.href.slice(22)}</a></Breadcrumb.Item>
              {/* <Breadcrumb.Item>
                <a href="/">{window.location.href.slice(22)}</a>
              </Breadcrumb.Item> */}
            </Breadcrumb>
          </Col>
        </Row>
      </div>
    );
  }
}
export default NavBreadcrumb;
