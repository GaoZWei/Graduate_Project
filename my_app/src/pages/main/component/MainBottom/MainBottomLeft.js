import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../../style.css";
import { List } from "antd";
class MainBottomLeft extends Component {
  render() {
    const { planList } = this.props;
    return (
      <div>
        <div className="index_middle_content_small_title">
          &nbsp;&nbsp;健身计划
          <Link to="/plan" className="more_link">
            查看更多->
          </Link>
        </div>
        <div className="index_middle_content_left_list">
          <List
            size="large"
            // header={<div>Header</div>}
            // footer={<div>Footer</div>}
            bordered
            dataSource={planList}
            renderItem={item => (
              <List.Item>
                <Link to={"/plan/" + item.get("plan_id")}>
                  {item.get("plan_description")}
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
  planList: state.getIn(["index", "planList"])
});

export default connect(
  mapStateToProps,
  null
)(MainBottomLeft);
