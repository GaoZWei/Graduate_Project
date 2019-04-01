import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../style.css";
import { List } from "antd";
class MainBottomLeft extends Component {
  render() {
    const data = [
      "Racing car sprays burning fuel into crowd.",
      "Japanese princess to wed commoner.",
      "Australian walks 100km after outback crash.",
      "Man charged over missing wedding girl.",
      "Los Angeles battles huge wildfires."
    ];

    return (
      <div>
        <div className="index_middle_content_small_title">
          &nbsp;&nbsp;健身计划<Link to="/" className="more_link"> 查看更多-></Link>
        </div>
        <div className="index_middle_content_left_list">
          <List
            size="large"
            // header={<div>Header</div>}
            // footer={<div>Footer</div>}
            bordered
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <Link to="/">{item} </Link>
              </List.Item>
            )}
          />
        </div>
      </div>
    );
  }
}
export default MainBottomLeft;
