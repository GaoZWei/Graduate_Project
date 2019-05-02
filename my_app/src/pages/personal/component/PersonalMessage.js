import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import personal_bg from "../../../statics/personal_bg.jpg";
import user_default from "../../../statics/user-default.png";
import { Button } from "antd";
class PersonalMessage extends Component {
  render() {
    const { userBasicList } = this.props;
    return (
      <div className="personal_message">
        {userBasicList.map((item, index) => {
          return (
            <Fragment key={index}>
              <div className="personal_message_top">
                <img src={personal_bg} alt="" />
                <div className="personal_message_headpicture">
                  <img src={user_default} alt="" />
                </div>
                <div className="personal_message_name">
                  {item.get("user_name")}
                </div>
                <div className="personal_message_modifymessage">
                  <a href="/">修改信息</a>
                </div>
              </div>
              <div className="personal_message_content">
                <div className="personal_message_content_title">基本信息</div>
                <hr
                  style={{
                    marginLeft: "-2%",
                    width: "104.5%",
                    color: "gray",
                    opacity: "0.5"
                  }}
                />
                <div className="personal_message_content_detail01">
                  昵称:
                  <span className="personal_message_content_detail01_params">
                    {item.get("user_name")}
                  </span>
                </div>
                <div className="personal_message_content_detail01">
                  性别:
                  <span className="personal_message_content_detail01_params">
                    {item.get("user_sex")}
                  </span>
                </div>
                <div className="personal_message_content_detail01">
                  年龄:
                  <span className="personal_message_content_detail01_params">
                    {item.get("user_age")}
                  </span>
                </div>
                <div className="personal_message_content_title">身体素质</div>
                <hr
                  style={{
                    marginLeft: "-2%",
                    width: "104.5%",
                    color: "gray",
                    opacity: "0.5"
                  }}
                />
                <div className="personal_message_content_detail01">
                  体重:
                  <span className="personal_message_content_detail01_params">
                    {item.get("user_weight")}
                  </span>
                  kg
                </div>
                <div className="personal_message_content_detail01">
                  身高:
                  <span className="personal_message_content_detail01_params">
                    {item.get("user_height")}
                  </span>
                  cm
                </div>
                <div className="personal_message_content_detail01">
                  公共计划数:
                  <span className="personal_message_content_detail01_params">
                    {item.get("user_common_plan")}
                  </span>
                </div>
                <div className="personal_message_content_detail01">
                  已收藏食物数:
                  <span className="personal_message_content_detail01_params">
                    {item.get("user_food_list")}
                  </span>
                </div>
              </div>
              <div>
                <div className="personal_message_setcard">
                  <div className="personal_message_setcard_title">
                    打卡记录
                    <br />
                    您已经累计打卡
                    <span className="personal_message_setcard_days">2</span>天
                  </div>
                  <Button
                    type="primary"
                    className="personal_message_setcard_add_btn"
                    size="large"
                  >
                    打卡
                  </Button>
                </div>
              </div>
            </Fragment>
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  userBasicList: state.getIn(["personal", "userBasicList"])
});
export default connect(
  mapStateToProps,
  null
)(PersonalMessage);
