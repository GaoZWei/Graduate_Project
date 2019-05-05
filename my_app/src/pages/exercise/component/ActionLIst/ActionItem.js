import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Col, Row, List, Pagination } from "antd";
// import first_hand_chest_01 from "../../../../statics/chest/first_hand_chest_01.jpg";
import { Link } from "react-router-dom";
const { Meta } = Card;
class ActionItem extends Component {
  render() {
    const { exerciseList } = this.props;
    return (
      <Row>
        {exerciseList.size === 0 ? (
          <div style={{ height: "600", fontSize: "5em" }}> 结果为空</div>
        ) : (
          <Row>
            {/* {exerciseList.map((item, index) => {
              return (
                <Col span={6} key={item.get("exercise_id")}>
                  <Link key={index} to={"/exercise/" + item.get("exercise_id")}>
                    <Card
                      hoverable
                      style={{ width: "90%", height: "200px", marginTop: "6%" }}
                      cover={
                        <img
                          alt="example"
                          src={item.get("exercise_pic_main")}
                        />
                      }
                      key={item.get("exercise_id")}
                    >
                      <Meta
                        title={item.get("exercise_name")}
                        description={
                          item.get("difficult_name") +
                          " " +
                          item.get("sort_name")
                        }
                      />
                    </Card>
                  </Link>
                </Col>
              );
            })} */}
            <List
              grid={{ gutter: 12, column: 4 }}
              dataSource={exerciseList}
              pagination={{
                defaultCurrent: 1,
                total: exerciseList.size,
                defaultPageSize:3,
                // pageSize: 3
              }}
              renderItem={(item, index) => (
                <List.Item>
                  <Link key={index} to={"/exercise/" + item.get("exercise_id")}>
                    <Card
                      hoverable
                      style={{ width: "90%", height: "210px", marginTop: "6%" }}
                      cover={
                        <img
                          alt="example"
                          src={item.get("exercise_pic_main")}
                        />
                      }
                      key={item.get("exercise_id")}
                    >
                      <Meta
                        title={item.get("exercise_name")}
                        description={
                          item.get("difficult_name") +
                          " " +
                          item.get("sort_name")
                        }
                      />
                    </Card>
                  </Link>
                </List.Item>
              )}
            />
            {/* <Pagination
              defaultCurrent={1}
              total={exerciseList.size}
              pageSize={3}
            /> */}
          </Row>
        )}
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
