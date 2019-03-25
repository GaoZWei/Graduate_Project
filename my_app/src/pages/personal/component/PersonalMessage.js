import React, { Component } from "react";
import perasonal_bg from "../../../statics/personal_bg.jpg";
import user_default from "../../../statics/user-default.png";
import { Button } from "antd";
class PersonalMessage extends Component {
  render() {
    return (
      <div className="personal_message">
        {/* <div>我的个人信息</div> */}
        {/* <hr
          style={{
            marginLeft: "-2%",
            width: "104.5%",
            color: "gray",
            opacity: "0.5"
          }}
        /> */}
        <div className="personal_message_top">
          <img src={perasonal_bg} alt="" />
          <div className="personal_message_headpicture">
            <img src={user_default} alt="" />
          </div>
          <div className="personal_message_name">高先森</div>
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
              123
            </span>
          </div>
          <div className="personal_message_content_detail01">
            性别:
            <span className="personal_message_content_detail01_params">男</span>
          </div>
          <div className="personal_message_content_detail01">
            年龄:
            <span className="personal_message_content_detail01_params">25</span>
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
            <span className="personal_message_content_detail01_params">65</span>
            kg
          </div>
          <div className="personal_message_content_detail01">
            身高:
            <span className="personal_message_content_detail01_params">
              180
            </span>
            cm
          </div>
          {/* <div className="personal_message_content_detail01">
            我的计划总数:6
          </div> */}
          <div className="personal_message_content_detail01">
            公共计划数:
            <span className="personal_message_content_detail01_params">6 </span>
          </div>
          {/* <div className="personal_message_content_detail01">我的定制计划总数:6</div> */}
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
      </div>
    );
  }
}
export default PersonalMessage;
