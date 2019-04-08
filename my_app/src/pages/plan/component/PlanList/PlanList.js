import React, { Component } from "react";
import { connect } from "react-redux";
import { actionCreator } from "../../store";
import "../../style.css";
// import { List,  Icon } from "antd";
// import plan_list_01 from "../../../../statics/plan_list_01.jpg";
import { List } from "antd";
import { Link } from "react-router-dom";
class PlanList extends Component {
  render() {
    const { planlist } = this.props;
    const listData = [];
    for (let i = 0; i < 10; i++) {
      listData.push({
        href: "http://ant.design",
        title: `吉姆·斯托帕尼六周极速脱脂计划 ${i}`,
        // avatar:
        //   "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        description:
          "Ant Design, a design language for background applications, is refined by Ant UED Team.",
        content:
          "准备好燃脂，增肌，增加力量，并在6周内彻头彻尾的达到低体脂。准备好实现最佳身材吧。准备好极速脱脂计划吧！"
      });
    }
    // const IconText = ({ type, text }) => (
    //   <span>
    //     <Icon type={type} style={{ marginRight: 8 }} />
    //     {text}
    //   </span>
    // );
    return (
      <div className="planlist_area">
        <div className="planlist_title">所有计划训练</div>
        <div className="planlist_content">
          <List
            itemLayout="vertical"
            size="large"
            pagination={{
              onChange: page => {
                console.log(page);
              },
              pageSize: 3
            }}
            dataSource={planlist}
            footer={
              <div>
                <b>--下 面 没 有 了 呢--</b>
              </div>
            }
            renderItem={item => (
              <List.Item
                key={item.get("plan_id")}
                // actions={[
                //   <IconText type="star-o" text="156" />,
                //   <IconText type="like-o" text="156" />,
                //   <IconText type="message" text="2" />
                // ]}
                extra={
                  <img width={270} alt="logo" src={item.get("plan_pic")} />
                }
              >
                {/* <Link to="/plan/detail" */}
                <Link to={"/plan/" + item.get("plan_id")}>
                  <List.Item.Meta
                    // avatar={<Avatar src={item.avatar} />}
                    // title={<a href={item.href}>{item.title}</a>}
                    title={item.get("plan_name")}
                    description={item.get("plan_description")}
                  />
                  {item.get("plan_content")}
                </Link>
              </List.Item>
            )}
          />
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.props.changePlanList();
  }
}
const mapStateToProps = state => ({
  planlist: state.getIn(["plan", "planlist"])
});
const mapDispatchToProps = dispatch => ({
  changePlanList() {
    dispatch(actionCreator.changePlanData());
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlanList);
