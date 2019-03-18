import React, { Component } from "react";
import "../../style.css";
// import { List,  Icon } from "antd";
import { List } from "antd";
import { Link } from "react-router-dom";
class PlanList extends Component {
  render() {
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
      <div>
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
            dataSource={listData}
            footer={
              <div>
                <b>--下 面 没 有 了 呢--</b>
              </div>
            }
            renderItem={item => (
              <List.Item
                key={item.title}
                // actions={[
                //   <IconText type="star-o" text="156" />,
                //   <IconText type="like-o" text="156" />,
                //   <IconText type="message" text="2" />
                // ]}
                extra={
                  <img
                    width={272}
                    alt="logo"
                    src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                  />
                }
              >
                <Link to="/plan/detail">
                  <List.Item.Meta
                    // avatar={<Avatar src={item.avatar} />}
                    // title={<a href={item.href}>{item.title}</a>}
                    title={item.title}
                    description={item.description}
                  />
                  {item.content}
                </Link>
              </List.Item>
            )}
          />
        </div>
      </div>
    );
  }
}
export default PlanList;
