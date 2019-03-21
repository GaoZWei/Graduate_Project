import React, { Component } from "react";
import perasonal_bg from "../../../statics/personal_bg.jpg";
import user_default from "../../../statics/user-default.png";
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
          <div className="personal_message_content_title">我的基本信息</div>
          <div className="personal_message_content_detail01">昵称:123</div>
          <div className="personal_message_content_detail01">性别:男</div>
          <div className="personal_message_content_detail01">年龄:25</div>
          <div className="personal_message_content_detail01">我的计划总数:6</div>
          <div className="personal_message_content_detail01">我的公共计划总数:6</div>
          {/* <div className="personal_message_content_detail01">我的定制计划总数:6</div> */}
        </div>
      </div>
    );
  }
}
export default PersonalMessage;
