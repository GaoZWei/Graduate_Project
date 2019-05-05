import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Col, Row, List, Pagination } from "antd";
// import first_hand_chest_01 from "../../../../statics/chest/first_hand_chest_01.jpg";
import { Link } from "react-router-dom";
const { Meta } = Card;
class ActionItem extends Component {
  render() {
    const { exerciseList } = this.props;
    const exerciseListArr = exerciseList.toJS();
    return (
      <Row>
        <Row>
          <List
            grid={{ gutter: 12, column: 4 }}
            dataSource={exerciseListArr}
            pagination={{
              defaultCurrent: 1,
              total: exerciseListArr.length,
              pageSize: 12
            }}
            locale={{
              emptyText: "暂无数据"
            }}
            size="small"
            renderItem={(item, index) => (
              <List.Item>
                <Link key={index} to={"/exercise/" + item.exercise_id}>
                  <Card
                    hoverable
                    style={{ width: "90%", height: "210px", marginTop: "6%" }}
                    cover={<img alt="example" src={item.exercise_pic_main} />}
                    key={item.exercise_id}
                  >
                    <Meta
                      title={item.exercise_name}
                      description={item.difficult_name + " " + item.sort_name}
                    />
                  </Card>
                </Link>
              </List.Item>
            )}
          />
        </Row>
      </Row>
    );
  }
}
const mapStateToProps = state => ({
  exerciseList: state.getIn(["exercise", "exerciseList"])
});

export default connect(
  mapStateToProps,
  null
)(ActionItem);
