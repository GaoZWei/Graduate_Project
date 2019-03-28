import React, { Component } from "react";
import "../../style.css";
import bg01 from "../../../../statics/bg01.jpg";
import PlanItemTable from "./PlanItemTable";
import { Button } from "antd";
class PlanDetailItem extends Component {
  render() {
    return (
      <div className="plan_detail_area">
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
            <hr className="plan_underline"/>
            <div>
              吉姆·斯托帕尼（Jim
              Stoppani），博士学位，致力于运动，营养和健康的研究，多本畅销书籍的作者，曾为像巨石强森和洛佩兹这样的名人做私人的营养和健康咨询。
              他的这套课程将在6周内帮助你燃脂、增肌和增加力量，让你彻头彻尾的达到低体脂！
            </div>
          </div>
          </div>
          <div className="plan_detail_third">
            <PlanItemTable />
          </div>
          <div className="plan_detail_four">
            <div className="add_to_plan">
              <Button type="primary" className="add_btn" size="large">
                添加至我的公共计划
              </Button>
              <Button type="primary" className="add_btn" size="large">
                查看我的公共计划
              </Button>
            </div>
          </div>
   
      </div>
    );
  }
}
export default PlanDetailItem;
