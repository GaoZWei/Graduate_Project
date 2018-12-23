import React, { Component } from "react";
import { Breadcrumb } from "antd";
class NavBreadcrumb extends Component {
  render() {
    return (
      <div style={{marginLeft:"10%",marginTop:"2%"}}>
        <Breadcrumb>
          <Breadcrumb.Item>主页</Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">健身工具</a>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    );
  }
}
export default NavBreadcrumb;
