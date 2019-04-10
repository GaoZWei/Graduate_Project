import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { actionCreator } from "../../store";
import NavBreadcrumb from "../../../common/NavBreadcrumb";
import Foot from "../../../common/Foot";
import FoodTopArea from "../FoodTopArea";
import "../../style.css";
// import rice from "../../../../statics/rice.jpg";
import { Row, Col, Layout, Button } from "antd";
class FoodDetail extends Component {
  render() {
    const { fooddetailList, relateList } = this.props;
    return (
      <Layout>
        <FoodTopArea />
        <div className="food_detail">
          <div className="food_detail_top">
            <NavBreadcrumb />
          </div>
          {fooddetailList.map((item, index) => {
            return (
              <div className="food_detail_content" key={index}>
                <div className="food_detail_content_top">
                  <Row>
                    <Col span={6}>
                      <div className="food_detail_content_top_left">
                        <img src={item.get("food_pic")} alt="" />
                      </div>
                    </Col>
                    <Col span={18}>
                      <div className="food_detail_content_top_message">
                        <div className="food_detail_content_top_message_title">
                          <span style={{ color: "red" }}>
                            {item.get("food_name")}
                          </span>
                          每100g营养
                        </div>
                        <Row>
                          <Col span={6}>
                            <div className="food_detail_content_top_message_param">
                              {item.get("food_hots")}
                            </div>
                            <div className="food_detail_content_top_message_param_name">
                              热量
                            </div>
                          </Col>
                          <Col span={6}>
                            <div className="food_detail_content_top_message_param">
                              {item.get("food_protein")}g
                            </div>
                            <div className="food_detail_content_top_message_param_name">
                              蛋白质
                            </div>
                          </Col>
                          <Col span={6}>
                            <div className="food_detail_content_top_message_param">
                              {item.get("food_carbohydrate")}g
                            </div>
                            <div className="food_detail_content_top_message_param_name">
                              碳水化合物
                            </div>
                          </Col>
                          <Col span={6}>
                            <div className="food_detail_content_top_message_param">
                              {item.get("food_fat")}g
                            </div>
                            <div className="food_detail_content_top_message_param_name">
                              脂肪
                            </div>
                          </Col>
                        </Row>
                        <div className="food_detail_content_top_message_bottom_title">
                          <span>减肥人群:</span>推荐食用
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <div className="food_detail_content_top_description">
                    {/* 提示：一种碳水化合物和水分含量都较高的主食，它是身体所需热量的主要来源之一，可占全天热量的55%左右，适宜减肥期间食用。 */}
                    {item.get("food_description")}
                  </div>
                </div>
                <div className="food_detail_content_middle">
                  <Row>
                    <Col span={1} />
                    <Col span={10}>
                      <div className="food_detail_content_middle_left">
                        热量分解
                      </div>
                      <div className="food_detail_content_middle_left_content">
                        <ul>
                          <li>
                            蛋白质 &nbsp; &nbsp; ( {item.get("protein_account")}
                            % )
                          </li>
                          <li>
                            碳水化合物 &nbsp; &nbsp; (
                            {item.get("carbohydrate_account")}% )
                          </li>
                          <li>
                            脂肪 &nbsp; &nbsp; ( {item.get("fat_account")}% )
                          </li>
                        </ul>
                      </div>
                    </Col>
                    <Col span={2} />
                    <Col span={10}>
                      <div className="food_detail_content_middle_right">
                        食用分量
                      </div>
                      <div className="food_detail_content_middle_right_content">
                        <Row>
                          <Col span={12}>
                            <div className="food_detail_content_middle_right_content_left">
                              度量单位
                            </div>
                            <div className="food_detail_content_middle_right_content_left1">
                              {item.get("measure_unit")}
                            </div>
                          </Col>
                          <Col span={12}>
                            <div className="food_detail_content_middle_right_content_right">
                              热量
                            </div>
                            <div className="food_detail_content_middle_right_content_right1">
                              {item.get("measure_calorie")}
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                    <Col span={1} />
                  </Row>
                </div>
                <div className="food_detail_three">
                  <div className="add_to_food">
                    <Button type="primary" className="add_btn" size="large">
                      添加至我的食物清单
                    </Button>
                    <Button type="primary" className="add_btn" size="large">
                      <Link to="/personal"> 查看我的食物清单</Link>
                    </Button>
                  </div>
                </div>
                <hr style={{ opacity: "0.2" }} />
                <div className="food_detail_content_bottom">
                  <div className="food_detail_content_bottom_title">
                    相关食物
                  </div>
                  <div className="food_detail_content_bottom_content">
                    {relateList.map((items, index) => {
                      return (
                        <div key={index}>
                          <Col span={1} />
                          <Col span={5}>
                            <img src={items.get("food_pic")} alt="" />
                            <br />
                            <div className="food_detail_content_bottom_content_name">
                              {items.get("food_name")}
                            </div>
                          </Col>
                        </div>
                      );
                    })}
                    {/* <Row>
                      <Col span={1} />
                      <Col span={5}>
                        <img src={rice} alt="" />
                        <br />
                        <div className="food_detail_content_bottom_content_name">
                          米饭
                        </div>
                      </Col>
                      <Col span={1} />
                      <Col span={5}>
                        <img src={rice} alt="" />
                        <br />
                        <div className="food_detail_content_bottom_content_name">
                          米饭
                        </div>
                      </Col>
                      <Col span={1} />
                      <Col span={5}>
                        <img src={rice} alt="" />
                        <br />
                        <div className="food_detail_content_bottom_content_name">
                          米饭
                        </div>
                      </Col>
                      <Col span={1} />
                      <Col span={5}>
                        <img src={rice} alt="" />
                        <br />
                        <div className="food_detail_content_bottom_content_name">
                          米饭
                        </div>
                      </Col>
                    </Row> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Foot />
      </Layout>
    );
  }
  componentDidMount() {
    this.props.getFoodDetail(this.props.match.params.food_id);
    this.props.getRelateFood(this.props.match.params.food_id);
  }
}

const mapStateToProps = state => {
  return {
    fooddetailList: state.getIn(["food", "fooddetailList"]),
    foodList: state.getIn(["food", "foodList"]),
    relateList: state.getIn(["food", "relateList"])
  };
};
const mapDispatchToProps = dispatch => ({
  getFoodDetail(food_id) {
    const action = actionCreator.getFoodDetail(food_id);
    dispatch(action);
  },
  getRelateFood(food_id) {
    const action = actionCreator.getRelateFood(food_id);
    dispatch(action);
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(FoodDetail));
