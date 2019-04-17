import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { actionCreator } from "../../store";
import Nav from "../../../common/Nav";
import Foot from "../../../common/Foot";
import NavBreadcrumb from "../../../common/NavBreadcrumb";
import "../../style.css";
import { Layout, Input, Row, Col, Button } from "antd";
class BMI extends Component {
  render() {
    const { implement_detailList } = this.props;
    return (
      <Layout>
        <Nav />
        <NavBreadcrumb />
        {implement_detailList.map((item, index) => {
          return (
            <div className="implement_bmi" key={index}>
              <div className="implement_bmi_title">
                {item.get("implement_title")}
              </div>
              <div className="implement_bmi_content">
                {item.get("implement_content")}
              </div>
              <hr className="under_line" />
              <div>
                <div className="implement_bmi_prompt">
                  请输入您的身高、体重：
                </div>
                <div className="implement_bmi_input">
                  <Row gutter={16}>
                    <Col span={12}>
                      <Col span={4}> 身高:</Col>
                      <Col span={13}>
                        <Input
                          placeholder="身高"
                          className="implement_bmi_input_place"
                        />
                      </Col>
                      <Col span={7}> CM(厘米)</Col>
                    </Col>
                    <Col span={12}>
                      <Col span={4}> 体重:</Col>
                      <Col span={13}>
                        <Input
                          placeholder="体重"
                          className="implement_bmi_input_place"
                        />
                      </Col>
                      <Col span={7}> KG(公斤)</Col>
                    </Col>
                  </Row>
                </div>
                <div className="implement_bmi_summit">
                  <Row>
                    <Col span={3} />
                    <Col span={18}>
                      <Col span={10}>
                        <Button
                          type="primary"
                          size="large"
                          className="implement_bmi_submit_btn"
                        >
                          计算
                        </Button>
                      </Col>
                      <Col span={4} />
                      <Col span={10}>
                        <Button
                          type="primary"
                          size="large"
                          className="implement_bmi_submit_btn"
                        >
                          重置
                        </Button>
                      </Col>
                    </Col>
                    <Col span={3} />
                  </Row>
                </div>
                <div className="implement_bmi_extend_content">
                  <li>您的身体质量指数(BMI)为19.1</li>
                </div>
              </div>
            </div>
          );
        })}

        <Foot />
      </Layout>
    );
  }
  componentDidMount() {
    this.props.getImplementDetail(this.props.match.params.implement_id);
  }
}
const mapStateToProps = state => {
  return {
    implement_detailList: state.getIn(["implement", "implement_detailList"])
  };
};
const mapDispatchToProps = dispatch => ({
  getImplementDetail(implement_id) {
    const action = actionCreator.getImplementDetail(implement_id);
    dispatch(action);
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(BMI));
