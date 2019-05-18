import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../../style.css";
import { List } from "antd";
class MainMiddleLeft extends Component {
  render() {
    const { hotList } = this.props;
    return (
      <div>
        <div className="index_middle_content_small_title">
          &nbsp;&nbsp;热门新闻
          <Link to="/" className="more_link">
            查看更多->
          </Link>
        </div>
        <div className="index_middle_content_left_list">
          <List
            size="large"
            // header={<div>Header</div>}
            // footer={<div>Footer</div>}
            bordered
            dataSource={hotList}
            renderItem={item => (
              <List.Item>
                <Link to={"/news/" + item.get("health_id")} className="main_a">
                  {item.get("health_title")}
                </Link>
              </List.Item>
            )}
          />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  hotList: state.getIn(["index", "hotList"])
});

export default connect(
  mapStateToProps,
  null
)(MainMiddleLeft);
