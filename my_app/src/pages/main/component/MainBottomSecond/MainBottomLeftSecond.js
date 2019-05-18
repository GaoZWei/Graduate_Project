import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../../style.css";
import { List } from "antd";
class MainBottomLeftSecond extends Component {
  render() {
    const { foodKnowledgeList } = this.props;
    return (
      <div>
        <div className="index_middle_content_small_title">
          &nbsp;&nbsp;食物百科
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
            dataSource={foodKnowledgeList}
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
  foodKnowledgeList: state.getIn(["index", "foodKnowledgeList"])
});

export default connect(
  mapStateToProps,
  null
)(MainBottomLeftSecond);
