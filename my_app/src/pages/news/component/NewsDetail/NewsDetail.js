import React, { Component } from "react";
import { connect } from "react-redux";
import Nav from "../../../common/Nav";
import Foot from "../../../common/Foot";
import NavBreadcrumb from "../../../common/NavBreadcrumb";
import "../../style.css";
import rice from "../../../../statics/rice.jpg";
import { Layout, Row, Col } from "antd";
class NewsDetail extends Component {
  render() {
    return (
      <Layout>
        <Nav />
        <div className="news_detail">
          <div className="news_detail_nav">
            <NavBreadcrumb />
          </div>
          <div className="news_detail_area">
            <div className="news_detail_title">健身新闻的标题</div>
            <div className="news_detail_title_under">所属分类:增肌</div>
            <hr style={{ width: "100%", color: "gray", opacity: "0.3" }} />
            <div className="news_detail_content">
              <div className="news_detail_p">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;健身界有很多的新秀，比如这位叫做张钧的帅哥，就是获得过健体青年组比赛的第一名。在他19岁的时候才开始健身，因为去国外留学念书，也是处于半工半读的情况。
              </div>
              <div className="news_detail_img">
                {/* <img src /> */}
                ------------照 片-------------
              </div>
              <div className="news_detail_p">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;以前的他只是一个喜欢打篮球的小伙子，看上去还是非常的瘦弱，之后接触到健身后，也一直处于自我摸索的阶段，但是他意识到这样只能作为一个健身爱好者，不能把身体练到极致。尽管国外的健身发展的很好，但是如果不努力想要取得一个好的成绩还是非常有困难。
              </div>
              <div className="news_detail_img">
                {/* <img src /> */}
                -------------照 片------------
              </div>
              <div className="news_detail_p">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在这样一个竞争还是很激烈的环境下，张钧还请了私教进行专业的训练，虽然他能在4年的时间中就取得这样的好成绩，其实最重要的还是坚持和自律，才让他在健体的路上越走越远。
              </div>
              <div className="news_detail_img">
                {/* <img src /> */}
                -------------照 片------------
              </div>
              <div className="news_detail_p_last">
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
              </div>
            </div>
          </div>
        </div>
        <Foot />
      </Layout>
    );
  }
}
// const mapStateToProps = state => {
//   return {
//     exerciseList: state.getIn(["exercise", "exerciseList"])
//   };
// };
// const mapDispatchToProps = dispatch => ({
//   changeHomeData() {
//     const action = actionCreator.changeHomeInfo();
//     dispatch(action);
//   }
// });
export default connect(
  // mapStateToProps,
  null,
  null
)(NewsDetail);
