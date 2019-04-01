import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "../../style.css";
import { List, Card } from "antd";
class MainMiddleRight extends Component {
  render() {
    const data = [
      {
        title: "Title 1"
      },
      {
        title: "Title 2"
      },
      {
        title: "Title 3"
      },
      {
        title: "Title 4"
      },
      {
        title: "Title 1"
      },
      {
        title: "Title 2"
      },
      {
        title: "Title 3"
      },
      {
        title: "Title 4"
      }
    ];
    return (
      <Fragment>
        <div className="index_middle_content_small_title">
          &nbsp;&nbsp;推 荐 &nbsp;&nbsp; &nbsp;&nbsp;<Link to="/" className="more_link"> 查看更多-></Link>
        </div>
        <div className="index_middle_content_right_list">
          {/* 这里是健身的知识列表 */}
          <List
            grid={{ gutter: 16, column: 4 }}
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <Card title={item.title}>内容区</Card>
              </List.Item>
            )}
          />
        </div>
      </Fragment>
    );
  }
}
export default MainMiddleRight;
