import React, { Component } from "react";
import NavBreadcrumb from "../../common/NavBreadcrumb";
import { Link } from "react-router-dom";
import "../style.css";
import { Row, Col } from "antd";
class FoodSort extends Component {
  render() {
    return (
      <div className="food_sort">
        <div className="food_sort_top">
          <NavBreadcrumb />
          <span className="food_sort_title"> 常见食物分类</span>
          <div className="food_sort_content">
            <Row>
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
            </Row>
          </div>
          <div />
        </div>
      </div>
    );
  }
}
export default FoodSort;
