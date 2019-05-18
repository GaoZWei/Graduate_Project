import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../../style.css";
import { List, Card } from "antd";
const { Meta } = Card;
class MainBottomRight extends Component {
  render() {
    const { exerciseList } = this.props;
    return (
      <Fragment>
        <div className="index_middle_content_small_title">
          &nbsp;&nbsp;健身动作
          <Link to="/exercise" className="more_link">
            查看更多->
          </Link>
        </div>
        <div className="index_middle_content_right_list">
          {/* 这里是健身的知识列表 */}
          <List
            grid={{ gutter: 12, column: 2 }}
            dataSource={exerciseList}
            renderItem={(item,index) => (
              <List.Item
              // pagination="bottom"
              // pagination={{
              //   onChange: page => {
              //     console.log(page);
              //   },
              //   pageSize: 2
              // }}
              >
                <Link key={index} to={"/exercise/" + item.get("exercise_id")}>
                  <Card
                    hoverable
                    style={{ width: "80%", height: "210px", marginTop: "6%" }}
                    cover={
                      <img alt="example" src={item.get("exercise_pic_main")} />
                    }
                    key={item.get("exercise_id")}
                  >
                    <Meta
                      // title={item.exercise_name}
                      title={item.get("exercise_name")}
                      description={
                        item.get("difficult_name") + " " + item.get("sort_name")
                      }
                    />
                  </Card>
                </Link>
              </List.Item>
            )}
          />
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  exerciseList: state.getIn(["index", "exerciseList"])
});

export default connect(
  mapStateToProps,
  null
)(MainBottomRight);
