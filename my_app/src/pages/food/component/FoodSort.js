import React, { Component } from "react";
import { connect } from "react-redux";
import NavBreadcrumb from "../../common/NavBreadcrumb";
import { Link } from "react-router-dom";
import "../style.css";
import { Col } from "antd";
class FoodSort extends Component {
  render() {
    const { foodsortList } = this.props;
    return (
      <div className="food_sort">
        <div className="food_sort_top">
          <div className="food_sort_nav">
            <NavBreadcrumb />
          </div>
          <div className="food_sort_title"> 常见食物分类</div>
          <div className="food_sort_content">
            {/* <Row>
              <Col span={2} />
              <Col span={10}>
                <Link to="/food/sortlist">
                  <Col span={6}>图片占位符</Col>
                  <Col span={18}>
                    <div>薯类,杂粮,主食</div>
                    <div className="food_sort_item">米饭,玉米,馒头,面包</div>
                    <div className="food_sort_item">更多的-></div>
                  </Col>
                </Link>
              </Col>
              <Col span={10}>
                <Link to="/food/sortlist">
                  <Col span={6}>图片占位符</Col>
                  <Col span={18}>
                    <div>蛋类,肉类,肉制品</div>
                    <div className="food_sort_item">
                      鸡蛋，猪肉(瘦)，鸡蛋（煮），鸡，火腿肠
                    </div>
                    <div className="food_sort_item">更多的-></div>
                  </Col>
                </Link>
              </Col>
              <Col span={2} /> */}
            {foodsortList.map((item, index) => {
              return (
                <Col span={12} key={index}>
                  <Col span={2} />
                  <Col span={22}>
                    <Link to={"/food/" + item.get("sort_id")}>
                      <Col span={8}>
                        <img src={item.get("sort_pic")} alt="food_sort" />
                      </Col>
                      <Col span={16}>
                        <div className="food_sort_item_title">
                          {item.get("sort_name")}
                        </div>
                        <div className="food_sort_item">
                          {item.get("sort_description")}
                        </div>
                        <div className="food_sort_item">更多的-></div>
                      </Col>
                    </Link>
                  </Col>
                </Col>
              );
            })}
            {/* <hr style={{ width: "80%", color: "gray", opacity: "0.5" }} /> */}
            {/* </Row>
           <hr style={{ width: "80%", color: "gray", opacity: "0.5" }} />
            <Row>
              <Col span={2} />
              <Col span={10}>
                <Link to="/">
                  <Col span={6}>图片占位符</Col>
                  <Col span={18}>
                    <div>薯类,杂粮,主食</div>
                    <div className="food_sort_item">米饭,玉米,馒头,面包</div>
                    <div className="food_sort_item">更多的-></div>
                  </Col>
                </Link>
              </Col>
              <Col span={10}>
                <Link to="/">
                  <Col span={6}>图片占位符</Col>
                  <Col span={18}>
                    <div>蛋类,肉类,肉制品</div>
                    <div className="food_sort_item">
                      鸡蛋，猪肉(瘦)，鸡蛋（煮），鸡，火腿肠
                    </div>
                    <div className="food_sort_item">更多的-></div>
                  </Col>
                </Link>
              </Col>
              <Col span={2} />
            </Row>
            <hr style={{ width: "80%", color: "gray", opacity: "0.5" }} />
            <Row>
              <Col span={2} />
              <Col span={10}>
                <Link to="/">
                  <Col span={6}>图片占位符</Col>
                  <Col span={18}>
                    <div>薯类,杂粮,主食</div>
                    <div className="food_sort_item">米饭,玉米,馒头,面包</div>
                    <div className="food_sort_item">更多的-></div>
                  </Col>
                </Link>
              </Col>
              <Col span={10}>
                <Link to="/">
                  <Col span={6}>图片占位符</Col>
                  <Col span={18}>
                    <div>蛋类,肉类,肉制品</div>
                    <div className="food_sort_item">
                      鸡蛋，猪肉(瘦)，鸡蛋（煮），鸡，火腿肠
                    </div>
                    <div className="food_sort_item">更多的-></div>
                  </Col>
                </Link>
              </Col>
              <Col span={2} />
            </Row> */}
          </div>
          <div />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    foodsortList: state.getIn(["food", "foodsortList"])
  };
};
// const mapDispatchToProps = dispatch => ({
//   changeHomeData() {
//     const action = actionCreator.changeHomeInfo();
//     dispatch(action);
//   }
// });
export default connect(
  mapStateToProps,
  null
  // mapDispatchToProps
)(FoodSort);
