import React, { Component } from "react";
import { Card, Col, Row } from "antd";
import first_hand_chest_01 from "../../../../statics/chest/first_hand_chest_01.jpg";
import { Link } from "react-router-dom";
const { Meta } = Card;
class ActionItem extends Component {
  constructor(props){
    super(props);
    this.state = { users: [] };
  }
  fetchUsers() {
    return fetch("/exercise", { accpet: "application/json" }).then(res => {
      return res.json().then(json => {
        // console.log(json)
        this.setState({ users: json });
      });
    });
  }
  render() {
    // this.fetchUsers();
    return (
      <Row>
        <Col span={6}>
          <Link to="/action/detail">
            <Card
              hoverable
              style={{ width: "90%" }}
              cover={<img alt="example" src={first_hand_chest_01} />}
            >
              <Meta title="具体动作名" description="所属相关分类" />
            </Card>
          </Link>
        </Col>
        <Col span={6}>
          <Card
            hoverable
            style={{ width: "90%" }}
            cover={<img alt="example" src={first_hand_chest_01} />}
          >
            <Meta title="具体动作名" description="所属相关分类" />
          </Card>
        </Col>
        <Col span={6}>
          <Card
            hoverable
            style={{ width: "90%" }}
            cover={<img alt="example" src={first_hand_chest_01} />}
          >
            <Meta title="具体动作名" description="所属相关分类" />
          </Card>
        </Col>
        <Col span={6}>
          <Card
            hoverable
            style={{ width: "90%" }}
            cover={<img alt="example" src={first_hand_chest_01} />}
          >
            <Meta title="具体动作名" description="所属相关分类" />
          </Card>
        </Col>
      </Row>
    );
  }
}
export default ActionItem;
