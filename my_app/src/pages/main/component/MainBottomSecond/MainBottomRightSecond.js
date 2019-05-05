import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../../style.css";
import { List, Card } from "antd";
const { Meta } = Card;
class MainBottomRightSecond extends Component {
  render() {
    const { foodList } = this.props;
    return (
      <Fragment>
        <div className="index_middle_content_small_title">
          &nbsp; 饮食信息
          <Link to="/exercise" className="more_link">
            查看更多->
          </Link>
        </div>
        <div className="index_middle_content_right_list">
          <List
            grid={{ gutter: 12, column: 2 }}
            dataSource={foodList}
            renderItem={(item, index) => (
              <List.Item>
                <Link key={index} to={"/food/detail/" + item.get("food_id")}>
                  <Card
                    hoverable
                    style={{ width: "80%", height: "210px", marginTop: "6%" }}
                    cover={<img alt="example" src={item.get("food_pic")} />}
                    key={item.get("food_id")}
                  >
                    <Meta
                      title={item.get("food_name")}
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
  foodList: state.getIn(["index", "foodList"])
});

export default connect(
  mapStateToProps,
  null
)(MainBottomRightSecond);
