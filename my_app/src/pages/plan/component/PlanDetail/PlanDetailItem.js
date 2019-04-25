import React, { Component } from "react";
import { connect } from "react-redux";
import { actionCreator } from "../../store";
import { withRouter, Link } from "react-router-dom";
import "../../style.css";
import PlanItemTable from "./PlanItemTable";
import { Button, Popconfirm } from "antd";
class PlanDetailItem extends Component {
  render() {
    const { planDetialList, addToCommonPlan } = this.props;
    return (
      <div>
        {planDetialList.map((item, index) => {
          return (
            <div className="plan_detail_area" key={index}>
              <div className="plan_detail_head">
                <img src={item.get("plan_pic")} alt="" />
              </div>
              <div className="plan_detail_first">
                <div className="plan_detail_first_title">
                  {/* 吉姆·斯托帕尼六周极速脱脂计划 */}
                  {item.get("plan_name")}
                </div>
                <div>
                  <span>课时:</span> <span>5周</span>&nbsp;&nbsp;&nbsp;&nbsp;
                  <span>天/周:</span> <span>6天</span>&nbsp;&nbsp;&nbsp;&nbsp;
                  <span>强度:</span> <span>H4</span>
                  <hr className="plan_underline" />
                  <div>
                    {/* 吉姆·斯托帕尼（Jim
                    Stoppani），博士学位，致力于运动，营养和健康的研究，多本畅销书籍的作者，曾为像巨石强森和洛佩兹这样的名人做私人的营养和健康咨询。
                    他的这套课程将在6周内帮助你燃脂、增肌和增加力量，让你彻头彻尾的达到低体脂！ */}
                    {item.get("plan_description")}
                  </div>
                </div>
              </div>
              <div className="plan_detail_third">
                <PlanItemTable />
              </div>
              <div className="plan_detail_four">
                <div className="add_to_plan">
                  <Popconfirm
                    title="确认添加到我的公共计划?"
                    onConfirm={() => addToCommonPlan(this)}
                  >
                    <Button type="primary" className="add_btn" size="large">
                      添加至我的公共计划
                    </Button>
                  </Popconfirm>
                  <Button type="primary" className="add_btn" size="large">
                    <Link to="/personal">查看我的公共计划</Link>
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  componentDidMount() {
    this.props.getPlanDetail(this.props.match.params.plan_id);
  }
}

const mapStateToProps = state => ({
  planDetialList: state.getIn(["plan", "planDetialList"])
});
const mapDispatchToProps = dispatch => ({
  getPlanDetail(plan_id) {
    dispatch(actionCreator.getPlanById(plan_id));
  },
  addToCommonPlan(_self) {
    if (JSON.parse(sessionStorage.getItem("user")) != null) {
      var user_plan = {
        user_id: JSON.parse(sessionStorage.getItem("user")).user_id,
        plan_id: _self.props.match.params.plan_id
      };
      dispatch(actionCreator.addCommonPlan(user_plan, _self));
    } else {
      _self.props.history.push("/login");
    }
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PlanDetailItem));
