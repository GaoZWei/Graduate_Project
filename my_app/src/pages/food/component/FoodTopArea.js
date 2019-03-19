import React, { Component, Fragment } from "react";
import Nav from "../../common/Nav";
import food_bg from "../../../statics/food-bg.jpg";
import "../style.css";
import { Layout, Input } from "antd";
const Search = Input.Search;
const { Content } = Layout;
class FoodTopArea extends Component {
  render() {
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
              onSearch={value => console.log(value)}
            />
          </div>
        </Content>
      </Fragment>
    );
  }
}
export default FoodTopArea;
