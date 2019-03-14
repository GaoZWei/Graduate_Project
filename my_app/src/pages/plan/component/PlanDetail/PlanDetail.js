import React, { Component } from "react";
import "../../style.css";
import bg01 from "../../../../statics/bg01.jpg";
class PlanDetail extends Component {
  render() {
    return (
      <div>
        <div className="plan_detail_content">
          <img src={bg01} alt="" />
        </div>
        这是计划详情页面
      </div>
    );
  }
}
export default PlanDetail;
