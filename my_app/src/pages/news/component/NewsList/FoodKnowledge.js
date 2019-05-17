import React, { Component } from "react";
import "../../style.css";
import { connect } from "react-redux";
import { List } from "antd";
import { Link } from "react-router-dom";
class FoodKnowledge extends Component {
  render() {
    const { FoodKnowledge } = this.props;
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
            dataSource={FoodKnowledge}
            renderItem={item => (
              <List.Item
                key={item.get("health_title")}
                extra={
                  <img
                    width={272}
                    alt="logo"
                    src={item.get("health_img_first")}
                  />
                }
              >
                <Link to={"/news/" + item.get("health_id")}>
                  <List.Item.Meta
                    title={item.get("health_title")}
                    description={item.get("health_content_first")}
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

const mapStateToProps = state => ({
  FoodKnowledge: state.getIn(["news", "FoodKnowledge"])
});

export default connect(
  mapStateToProps,
  null
)(FoodKnowledge);
