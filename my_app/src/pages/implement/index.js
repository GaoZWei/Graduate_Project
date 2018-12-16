import React, { Component } from "react";
import BMI from "./component/BMI";
import "./style.css";
import { Row, Col } from "antd";

class Implement extends Component {
  render() {
    return (
      <div className="implement_body">
        <span className="implement_title"> 实用工具集合</span>
        <BMI />
        <div>
          <Row gutter={16}>
            <Col className="gutter-row" span={12}>
              <div className="gutter-box">一分钟了解自己</div>
              <div>
                <p className="introduce">
                  1分钟彻底了解自己的标准体重、健康体重范围、BMI指数（即身体质量指数）、基础代谢率和燃脂运动中低强度运动心率，看看自己是否需要减肥了。身体质量指数(BMI)：评估体重与身高比例的常用工具，适用范围：18至65岁的人士。儿童、发育中的青少年、孕妇、乳母、老人及身型健硕的运动员除外。
                </p>
              </div>
            </Col>
            <Col className="gutter-row" span={12}>
              <div className="gutter-box">BMI指数组件</div>
              <p className="introduce">
                BMI[Body Mass Index]
                即BMI指数，也叫身体质量指数，是衡量是否肥胖和标准体重的重要指标。适用范围：18至65岁的人士。儿童、发育中的青少年、孕妇、乳母、老人及身型健硕的运动员除外。世界卫生组织认为BMI指数保持在22左右是比较理想的。
              </p>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col className="gutter-row" span={12}>
              <div className="gutter-box">燃脂运动计算</div>
              <div>
                <p className="introduce">
                  燃脂运动就是燃烧脂肪的运动，需要满足下面三个必要条件：
                  1、该运动要达到中低强度的运动心率；
                  2、这种中低强度运动心率的运动要持续20分钟以上；
                  3、这种运动必须是大肌肉群的运动，如慢跑、游泳、健身操等。
                  用下面的计算器，马上得到适合你的中低强度运动心率，低于这个范围或者高于这个范围，都不是以燃烧脂肪供能为主，减脂效果略差
                </p>
              </div>
            </Col>
            <Col className="gutter-row" span={12}>
              <div className="gutter-box">基础代谢</div>
              <div>
                <p className="introduce">
                  基础代谢率（BMR）是指人体在清醒而又极端安静的状态下，不受肌肉活动、环境温度、食物及精神紧张等影响时的能量代谢率。
                  基础代谢率对减肥有非常大的影响，每天适量的运动有助于提高身体的基础代谢率，而节食(极端是绝食)会降低人的基础代谢率。通过性别，年龄，身高和体重能粗略计算基础代谢率。
                </p>
              </div>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col className="gutter-row" span={12}>
              <div className="gutter-box">补水计算器</div>
              <div>
                <p className="introduce">
                  喝多少水和体重也有关，和是否活动有关。此计算器可以根据你的体重，计算出每天你的最佳喝水量
                </p>
              </div>
            </Col>

            <Col className="gutter-row" span={12}>
              <div className="gutter-box">标准体重计算</div>
              <div>
                <p className="introduce">
                  您的体重符合标准吗？使用标准体重计算器，请在下面选择您的性别，输入身高，最后计算得出标准体重。计算适用范围：
                  女性：19岁到69岁，身高在152cm到176cm。
                  男性：19岁到69岁，身高在152cm到188cm。
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
export default Implement;
