import React, { Component } from "react";
import "../../style.css";
import bg01 from "../../../../statics/bg01.jpg";
import PlanItemTable from "./PlanItemTable";
class PlanDetailItem extends Component {
  render() {
    return (
      <div>
        <div className="plan_detail_head">
          <img src={bg01} alt="" />
        </div>
        <div className="plan_detail_first">
          <div className="plan_detail_first_title">
            吉姆·斯托帕尼六周极速脱脂计划
          </div>
          <div>
            <span>课时:</span> <span>5周</span>&nbsp;&nbsp;&nbsp;&nbsp;
            <span>天/周:</span> <span>5天</span>&nbsp;&nbsp;&nbsp;&nbsp;
            <span>强度:</span> <span>H4</span>
          </div>
          <div>
            <PlanItemTable />
          </div>
        </div>
      </div>
    );
  }
}
export default PlanDetailItem;
