import React, { Component } from "react";
import { connect } from "react-redux";
import { actionCreator } from "./store";
import Nav from "../common/Nav";
import Foot from "../common/Foot";
import NavBreadcrumb from "../common/NavBreadcrumb";
import AddMuscle from "./component/NewsList/AddMuscle";
import ReduceFat from "./component/NewsList/ReduceFat";
import FoodKnowledge from "./component/NewsList/FoodKnowledge";
import "./style.css";
import { Layout } from "antd";
class News extends Component {
  render() {
    return (
      <Layout className="news_area_out">
        <Nav />
        <div className="news_area">
          <div className="news_area_nav">
            <NavBreadcrumb />
          </div>
          <div className="news_part">
            <div className="news_part_top">
              <div className="news_part_top_title">增肌</div>
              {/* <Button type="primary" className="news_part_top_btn">
                上肢
              </Button>
              <Button type="primary" className="news_part_top_btn">
                上肢
              </Button>
              <Button type="primary" className="news_part_top_btn">
                上肢
              </Button>
              <Button type="primary" className="news_part_top_btn">
                上肢
              </Button>
              <Button type="primary" className="news_part_top_btn">
                上肢
              </Button> */}
            </div>
            <div>
              <AddMuscle />
            </div>
            <div className="news_part_top">
              <div className="news_part_top_title">减脂</div>
            </div>
            <div>
              <ReduceFat />
            </div>
            <div className="news_part_top">
              <div className="news_part_top_title">饮食知识</div>
            </div>
            <div>
              <FoodKnowledge />
            </div>
          </div>
        </div>
        <Foot />
      </Layout>
    );
  }
  componentDidMount() {
    this.props.changeHealthData();
  }
}

const mapDispatchToProps = dispatch => ({
  changeHealthData() {
    const action = actionCreator.changeHealthInfo();
    dispatch(action);
  }
});
export default connect(
  null,
  mapDispatchToProps
)(News);
