import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Nav from "../../../common/Nav";
import index_bg from "../../../../statics/index-bg.jpeg";
import "../../style.css";
import { Layout, Button } from "antd";
const { Content } = Layout;
class MainTop extends Component {
  render() {
    return (
      <Fragment>
        <Nav />
        <Content className="index_area">
          <div className="index_top_area">
            <img src={index_bg} alt="" />
          </div>
          <div className="index_top_left">
            橙子健身
            <br />
            Change your life
          </div>
          <div className="index_top_left_small">---简单的方法打造美</div>
          <div className="index_top_right">
            <div>免费定制个人计划</div>
            <div className="index_top_right_item">
              最专业的健身动作库：超过3000+动作
            </div>
            <div className="index_top_right_item">
              最全面的训练计划库：超过500+计划
            </div>
            <div className="index_top_right_item">
              <Link to="/exercise">
                <Button type="primary" className="index_top_right_item_btn">
                  进入健身工作库
                </Button>
              </Link>
              <Link to="/plan">
                <Button type="primary" className="index_top_right_item_btn">
                  进入训练计划库
                </Button>
              </Link>
            </div>
          </div>
        </Content>
      </Fragment>
    );
  }
}
export default MainTop;
