import React, { Component } from "react";
import NavBreadcrumb from "../../../common/NavBreadcrumb";
import Foot from "../../../common/Foot";
import FoodTopArea from "../FoodTopArea";
import "../../style.css";
import rice from "../../../../statics/rice.jpg";
import { Row, Col, Layout, Button } from "antd";
class FoodDetail extends Component {
  render() {
    return (
      <Layout>
        <FoodTopArea />
        <div className="food_detail">
          <div className="food_detail_top">
            <NavBreadcrumb />
          </div>
          <div className="food_detail_content">
            <div className="food_detail_content_top">
              <Row>
                <Col span={6}>
                  <div className="food_detail_content_top_left">
                    <img src={rice} alt="" />
                  </div>
                </Col>
                <Col span={18}>
                  <div className="food_detail_content_top_message">
                    <div className="food_detail_content_top_message_title">
                      <span>米饭 </span>每100g营养
                    </div>
                    <Row>
                      <Col span={6}>
                        <div className="food_detail_content_top_message_param">
                          116千卡
                        </div>
                        <div className="food_detail_content_top_message_param_name">
                          热量
                        </div>
                      </Col>
                      <Col span={6}>
                        <div className="food_detail_content_top_message_param">
                          2.6g
                        </div>
                        <div className="food_detail_content_top_message_param_name">
                          蛋白质
                        </div>
                      </Col>
                      <Col span={6}>
                        <div className="food_detail_content_top_message_param">
                          25.9g
                        </div>
                        <div className="food_detail_content_top_message_param_name">
                          碳水化合物
                        </div>
                      </Col>
                      <Col span={6}>
                        <div className="food_detail_content_top_message_param">
                          25.9g
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
                提示：一种碳水化合物和水分含量都较高的主食，它是身体所需热量的主要来源之一，可占全天热量的55%左右，适宜减肥期间食用。
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
                      <li>蛋白质 &nbsp; &nbsp; (70%)</li>
                      <li>碳水化合物 &nbsp; &nbsp; (20%) </li>
                      <li>脂肪 &nbsp; &nbsp; (10%)</li>
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
                          1碗米饭(219.0克)
                        </div>
                      </Col>
                      <Col span={12}>
                        <div className="food_detail_content_middle_right_content_right">
                          热量
                        </div>
                        <div className="food_detail_content_middle_right_content_right1">
                          234千卡
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
                  查看我的食物清单
                </Button>
              </div>
            </div>
            <hr style={{ opacity: "0.2" }} />
            <div className="food_detail_content_bottom">
              <div className="food_detail_content_bottom_title">相关食物</div>
              <div className="food_detail_content_bottom_content">
                <Row>
                  <Col span={1} />
                  <Col span={5}>
                    <img src={rice} alt="" /><br/>
                    <div className="food_detail_content_bottom_content_name">米饭</div>
                  </Col>
                  <Col span={1} />
                  <Col span={5}>
                    <img src={rice} alt="" /><br/>
                    <div className="food_detail_content_bottom_content_name">米饭</div>
                  </Col>
                  <Col span={1} />
                  <Col span={5}>
                    <img src={rice} alt="" /><br/>
                    <div className="food_detail_content_bottom_content_name">米饭</div>
                  </Col>
                  <Col span={1} />
                  <Col span={5}>
                    <img src={rice} alt="" /><br/>
                    <div className="food_detail_content_bottom_content_name">米饭</div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
        <Foot />
      </Layout>
    );
  }
}
export default FoodDetail;
