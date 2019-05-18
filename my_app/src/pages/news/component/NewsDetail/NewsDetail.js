import React, { Component } from "react";
import { connect } from "react-redux";
import { actionCreator } from "../../store";
import { withRouter } from "react-router-dom";
import Nav from "../../../common/Nav";
import Foot from "../../../common/Foot";
import NavBreadcrumb from "../../../common/NavBreadcrumb";
import "../../style.css";
// import rice from "../../../../statics/rice.jpg";
import { Layout } from "antd";
class NewsDetail extends Component {
  render() {
    const { detailList } = this.props;
    return (
      <Layout>
        <Nav />
        <div className="news_detail">
          <div className="news_detail_nav">
            <NavBreadcrumb />
          </div>
          {detailList.map((item, index) => {
            return (
              <div className="news_detail_area" key={index}>
                <div className="news_detail_title">
                  {item.get("health_title")}
                </div>
                <div className="news_detail_title_under">所属分类:{item.get("sort_name")}</div>
                <hr style={{ width: "100%", color: "gray", opacity: "0.3" }} />
                <div className="news_detail_content">
                  <div className="news_detail_p">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {item.get("health_content_first")}
                  </div>
                  <div className="news_detail_img">
                    <img src={item.get("health_img_first")} alt="first" />
                  </div>
                  <div className="news_detail_p">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {item.get("health_content_second")}
                  </div>
                  <div className="news_detail_img">
                    <img src={item.get("health_img_second")} alt="second" />
                  </div>
                  <div className="news_detail_p">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {item.get("health_content_third")}
                  </div>
                  <div className="news_detail_img">
                    <img src={item.get("health_img_third")} alt="third" />
                  </div>
                  {/* <div className="news_detail_p_last">
                    小编今天就给大家推荐一组训练，不妨一起来了解一下吧。
                  </div>
                  <div className="news_detail_content_bottom_content">
                    <Row>
                      <Col span={2} />
                      <Col span={6}>
                        <img src={rice} alt="" />
                        <br />
                        <div className="news_detail_content_bottom_content_name">
                          动作一
                        </div>
                      </Col>
                      <Col span={2} />
                      <Col span={6}>
                        <img src={rice} alt="" />
                        <br />
                        <div className="news_detail_content_bottom_content_name">
                          动作二
                        </div>
                      </Col>
                      <Col span={2} />
                      <Col span={6}>
                        <img src={rice} alt="" />
                        <br />
                        <div className="news_detail_content_bottom_content_name">
                          动作三
                        </div>
                      </Col>
                    </Row>
                  </div> */}
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
    this.props.getNewsDetail(this.props.match.params.health_id);
  }
}
const mapStateToProps = state => {
  return {
    detailList: state.getIn(["news", "detailList"])
  };
};
const mapDispatchToProps = dispatch => ({
  getNewsDetail(health_id) {
    const action = actionCreator.getHealthDetail(health_id);
    dispatch(action);
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(NewsDetail));
