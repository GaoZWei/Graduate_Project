import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { actionCreator } from "../../store";
import Nav from "../../../common/Nav";
import Foot from "../../../common/Foot";
import NavBreadcrumb from "../../../common/NavBreadcrumb";
import "../../style.css";
import { Layout, Input, Row, Col, Button, Form, Radio } from "antd";
const RadioGroup = Radio.Group;
class BMIItem extends Component {
  render() {
    const {
      implement_detailList,
      getResult,
      height,
      weight,
      sex,
      age
    } = this.props;
    const { getFieldDecorator } = this.props.form;
    return (
      <Layout>
        <Nav />
        <NavBreadcrumb />
        {implement_detailList.map((item, index) => {
          return (
            <div className="implement_bmi" key={index}>
              <Form>
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
                      {item.get("input_height") === "0" ? (
                        ""
                      ) : (
                        <Col span={12}>
                          <Col span={4}>
                            <div className="implement_bmi_input_name">
                              身高:
                            </div>
                          </Col>
                          <Col span={13}>
                            <Form.Item>
                              {getFieldDecorator("height", {
                                rules: [
                                  { required: true, message: "请输入你的身高" }
                                ]
                              })(
                                <Input
                                  placeholder="身高"
                                  className="implement_bmi_input_place"
                                />
                              )}
                            </Form.Item>
                          </Col>
                          <Col span={7}> CM(厘米)</Col>
                        </Col>
                      )}

                      {item.get("input_weight") === "0" ? (
                        ""
                      ) : (
                        <Col span={12}>
                          <Col span={4}>
                            <div className="implement_bmi_input_name">
                              体重:
                            </div>
                          </Col>
                          <Col span={13}>
                            <Form.Item>
                              {getFieldDecorator("weight", {
                                rules: [
                                  {
                                    required: true,
                                    message: "请输入你的体重"
                                  }
                                ]
                              })(
                                <Input
                                  placeholder="体重"
                                  className="implement_bmi_input_place"
                                />
                              )}
                            </Form.Item>
                          </Col>
                          <Col span={7}> KG(公斤)</Col>
                        </Col>
                      )}
                      {item.get("input_sex") === "0" ? (
                        ""
                      ) : (
                        <Col span={12}>
                          <div className="implement_bmi_input_out">
                            <Col span={4}>
                              <div className="implement_bmi_input_name">
                                性别:
                              </div>
                            </Col>

                            <Col span={20}>
                              <Form.Item>
                                {getFieldDecorator("sex", {
                                  rules: [
                                    {
                                      required: true,
                                      message: "请选择你的性别"
                                    }
                                  ]
                                })(
                                  <div className="implement_bmi_input_sex">
                                    <RadioGroup>
                                      <Radio value="男">男 </Radio>
                                      <Radio value="女">女 </Radio>
                                    </RadioGroup>
                                  </div>
                                )}
                              </Form.Item>
                              {/* <Input
                                placeholder="性别"
                                className="implement_bmi_input_place"
                              /> */}
                            </Col>
                          </div>
                          {/* <Col span={7}> 男/女</Col> */}
                        </Col>
                      )}
                      {item.get("input_age") === "0" ? (
                        ""
                      ) : (
                        <Col span={12}>
                          <div className="implement_bmi_input_out">
                            <Col span={4}>
                              <div className="implement_bmi_input_name">
                                年龄:
                              </div>
                            </Col>
                            <Col span={13}>
                              <Form.Item>
                                {getFieldDecorator("age", {
                                  rules: [
                                    {
                                      required: true,
                                      message: "请正确输入你的年龄",
                                      max: 2
                                    }
                                  ]
                                })(
                                  <Input
                                    placeholder="年龄"
                                    className="implement_bmi_input_place"
                                  />
                                )}
                              </Form.Item>
                            </Col>
                            <Col span={7}> 岁</Col>
                          </div>
                        </Col>
                      )}
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
                            onClick={() => getResult(this.props)}
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
              </Form>
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
    implement_detailList: state.getIn(["implement", "implement_detailList"]),
    height: state.getIn(["implement", "height"]),
    weight: state.getIn(["implement", "weight"]),
    sex: state.getIn(["implement", "sex"]),
    age: state.getIn(["implement", "age"]),
    bmiResult: state.getIn(["implement", "bmiResult"]),
    standardWeight: state.getIn(["implement", "standardWeight"]),
    heartRate: state.getIn(["implement", "heartRate"])
  };
};
const mapDispatchToProps = dispatch => ({
  getImplementDetail(implement_id) {
    const action = actionCreator.getImplementDetail(implement_id);
    dispatch(action);
  },
  getResult(props, e) {
    if (e) e.preventDefault();
    const { form } = props;
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      //获取输入的值
      var height = fieldsValue["height"];
      var weight = fieldsValue["weight"];
      var sex = fieldsValue["sex"];
      var age = fieldsValue["age"];
      var result = 0;
      var bmiResult;
      var standardWeight;
      var heartRate;
      var waterResult;
      //获取查询条件
      const values = {
        ...fieldsValue
      };
      if (height != null && weight != null && sex != null && age != null) {
        if (props.match.params.implement_id === "1") {
          // 一分钟了解自己
        } else if (props.match.params.implement_id === "4") {
          //基础代谢
          // 女性:65.5 + (9.6 x 体重) + (1.7 x 身高) - (4.7X年龄) (体重=kg 身高=cm)
          // 男性:66 + (13.7 x 体重) + (5.0 x 身高) - (6.8x年龄) (体重=kg 身高=cm)
          console.log(444);
          if (sex == "男") {
            console.log(123);
          } else if ((sex = "女")) {
            console.log(214);
          }
        }
      }
      if (height != null && weight != null && age == null && sex == null) {
        //BMI指数
        //BMI = 体重(公斤) / (身高/100)的平方
        height = height / 100;
        result = weight / Math.pow(height, 2);
        bmiResult = result.toFixed(2);
        props.updateBmi(bmiResult);
      }
      // 燃脂运动心率
      if (age != null && height == null && weight == null && sex == null) {
        //首先确定你的最大心率（MHR）。如果你是男生，就用220减去你的年龄。
        //如果你是女生，用226减去你的年龄。
        //你的燃脂心率区间就介于最大心率的60%到70%之间（用你的最大心率乘以.6或.7）。
        //例如，一个40岁男性的最大心率是180，他的燃脂心率区间是108到126次/分钟。
        heartRate =
          ((220 - age) * 0.6).toFixed(1) +
          "到" +
          ((220 - age) * 0.7).toFixed(1) +
          "次/分钟";
        props.updateHeartRate(heartRate);
      }
      if (height == null && weight != null && age == null && sex == null) {
        //补水计算器
        waterResult=weight*40+'毫升'
        props.updateWater(waterResult);
      }
      // 标准体重
      if (height != null && weight == null && age == null && sex != null) {
        // 男性:身高(cm)-105=标准体重(kg)；女性:身高(cm)-100=标准体重(kg)
        if (sex == "男") {
          standardWeight = height - 105;
        } else if ((sex = "女")) {
          standardWeight = height - 100;
        }
        props.updateStandartWeight(standardWeight);
      }
    });
  },
  updateBmi(bmiResult) {
    const action = actionCreator.updateBmiResult(bmiResult);
    dispatch(action);
  },
  updateStandartWeight(standardWeight) {
    const action = actionCreator.updateStandardResult(standardWeight);
    dispatch(action);
  },
  updateHeartRate(heartRate) {
    const action = actionCreator.updateHeartRateResult(heartRate);
    dispatch(action);
  },
  updateWater(waterResult){
    const action = actionCreator.updateWaterResult(waterResult);
    dispatch(action);
  }
});
const BMI = Form.create()(BMIItem);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(BMI));
