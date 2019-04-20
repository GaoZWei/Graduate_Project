import React, { Component } from "react";
import "../../style.css";
import { connect } from "react-redux";
import { actionCreator } from "../../store";
import { List } from "antd";
import { Link } from "react-router-dom";
class NewsList extends Component {
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
    const { newsList } = this.props;
    return (
      <div className="newslist_area">
        <div className="newslist_content">
          <List
            itemLayout="vertical"
            size="large"
            pagination={{
              onChange: page => {
                console.log(page);
              },
              pageSize: 3
            }}
            dataSource={newsList}
            footer={
              <div>
                <b>--下 面 没 有 了 呢--</b>
              </div>
            }
            renderItem={item => (
              <List.Item
                key={item.get("health_title")}
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
                <Link to={"/news/" + item.get("health_id")}>
                  <List.Item.Meta
                    // avatar={<Avatar src={item.avatar} />}
                    // title={<a href={item.href}>{item.title}</a>}
                    title={item.get("health_title")}
                    description={item.get("health_description")}
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
  componentDidMount() {
    this.props.changeHealthData();
  }
}

const mapStateToProps = state => ({
  newsList: state.getIn(["news", "newsList"])
});

const mapDispatchToProps = dispatch => ({
  changeHealthData() {
    const action = actionCreator.changeHealthInfo();
    dispatch(action);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsList);
