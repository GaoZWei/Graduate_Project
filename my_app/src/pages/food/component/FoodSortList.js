import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { actionCreator } from "../store";
import Foot from "../../common/Foot";
import FoodTopArea from "./FoodTopArea";
import NavBreadcrumb from "../../common/NavBreadcrumb";
import "../style.css";
import { Link } from "react-router-dom";
import { Layout, Row, Col, List, Avatar } from "antd";
class FoodSortList extends Component {
  render() {
    const { foodList } = this.props;
    return (
      <Layout>
        <FoodTopArea />
        <div className="food_sort">
          <div className="food_sortlist_top">
            <NavBreadcrumb />
          </div>
          <div className="food_sortlist_content">
            <Row>
              <Col span={15}>
                <div className="food_sortlist_content_left">
                  <div className="food_sortlist_content_left_title">
                    {foodList.map(item => {
                      return item.get("sort_name");
                    })}
                  </div>
                  <hr
                    style={{
                      opacity: "0.25",
                      width: "104.1%",
                      marginLeft: "-2%"
                    }}
                  />
                  <List
                    itemLayout="horizontal"
                    dataSource={foodList}
                    renderItem={item => (
                      <Link to="/food/detail">
                        <List.Item className="food_sortlist_content_left_list">
                          <List.Item.Meta
                            avatar={
                              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                            }
                            title={item.get("food_name")}
                            description={
                              <span>
                                热量: {item.get("food_hots")}
                                大卡(100 克可食部分)
                              </span>
                            }
                          />
                        </List.Item>
                      </Link>
                    )}
                  />
                </div>
              </Col>
              <Col span={1} />
              <Col span={7}>
                <div className="food_sortlist_content_right">
                  <div className="food_sortlist_content_right_title">
                    常见食物分类
                  </div>
                  <hr
                    style={{
                      opacity: "0.25",
                      width: "104.1%",
                      marginLeft: "-2%"
                    }}
                  />
                  <div className="food_sort_item">
                    <Link to="/"> 蛋类, 肉类, 肉制品 </Link>
                  </div>
                  <hr
                    style={{
                      opacity: "0.25",
                      width: "104.1%",
                      marginLeft: "-2%"
                    }}
                  />
                  <div className="food_sort_item">
                    <Link to="/"> 蔬果和菌藻, 坚果, 大豆及制品, 饮料 </Link>
                  </div>
                  <hr
                    style={{
                      opacity: "0.25",
                      width: "104.1%",
                      marginLeft: "-2%"
                    }}
                  />
                  <div className="food_sort_item">
                    <Link to="/">
                      食用油, 油脂及制品, 调味品, 零食, 点心, 冷饮
                    </Link>
                  </div>
                </div>
              </Col>
              <Col span={1} />
            </Row>
          </div>
        </div>
        <Foot />
      </Layout>
    );
  }
  componentDidMount() {
    this.props.getFoodItem(this.props.match.params.sort_id);
  }
}

const mapStateToProps = state => {
  return {
    foodList: state.getIn(["food", "foodList"])
  };
};
const mapDispatchToProps = dispatch => ({
  getFoodItem(sort_id) {
    const action = actionCreator.getFoodItem(sort_id);
    dispatch(action);
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(FoodSortList));
