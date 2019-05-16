import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../../style.css";
import { List, Card } from "antd";
const { Meta } = Card;
class MainMiddleRight extends Component {
  render() {
    const { healthList } = this.props;
    return (
      <Fragment>
        <div className="index_middle_content_small_title">
          &nbsp; 健康知识
          <Link to="/news" className="more_link">
            查看更多->
          </Link>
        </div>
        <div className="index_middle_content_right_list">
          <List
            grid={{ gutter: 12, column: 2 }}
            dataSource={healthList}
            renderItem={(item, index) => (
              <List.Item>
                <Link key={index} to={"/news/" + item.get("health_id")}>
                  <Card
                    hoverable
                    style={{ width: "80%", height: "210px", marginTop: "6%" }}
                    cover={<img alt="example" src={item.get("health_img_first")} />}
                    key={item.get("health_id")}
                  >
                    <Meta title={item.get("health_title")} />
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
  healthList: state.getIn(["index", "healthList"])
});

export default connect(
  mapStateToProps,
  null
)(MainMiddleRight);
