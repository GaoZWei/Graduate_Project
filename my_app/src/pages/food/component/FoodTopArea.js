import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { actionCreator } from "../store";
import Nav from "../../common/Nav";
import food_bg from "../../../statics/food-bg.jpg";
import "../style.css";
import { Layout, Input } from "antd";
const Search = Input.Search;
const { Content } = Layout;
class FoodTopArea extends Component {
  render() {
    const { SearchFood } = this.props;
    return (
      <Fragment>
        <Nav />
        <Content className="contentArea1">
          <div className="food_top_area">
            <img src={food_bg} alt="" />
          </div>
          <div className="food_big_title">专业全面的食物数据库</div>
          <div className="food_search">
            <Search
              placeholder="搜索食物查询热量"
              enterButton="搜索"
              size="large"
              onSearch={value => SearchFood(value, this.props)}
            />
          </div>
        </Content>
      </Fragment>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  //保证了当前页是搜索页也可以改状态
  SearchFood(food_name, props) {
    const action = actionCreator.getSearchFood(food_name);
    dispatch(action);
    props.history.push("/food/search/" + food_name);
    // props.history.push("/food/" + food_name);
  }
});
export default connect(
  null,
  mapDispatchToProps
)(withRouter(FoodTopArea));
