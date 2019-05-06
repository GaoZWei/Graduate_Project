import React, { Component } from "react";
import { connect } from "react-redux";
import { actionCreator } from "../store";
import AdminNav from "../component/AdminNav";
import { Table, Divider, Layout, Row, Col } from "antd";
class AdminExerciseTable extends Component {
  render() {
    const { exerciseList } = this.props;
    var exerciseListArr = exerciseList.toJS();
    const columns = [
      {
        title: "动作名",
        dataIndex: "exercise_name",
        render: text => <a href="javascript:;"> {text} </a>
      },
      {
        title: "动作分类",
        dataIndex: "exercise_sort"
      },
      {
        title: "动作难度",
        dataIndex: "exercise_difficulty"
      },
      {
        title: "所需器械",
        dataIndex: "exercise_sort_facility"
      },
      {
        title: "目标肌肉",
        dataIndex: "exercise_sort_aim"
      },
      {
        title: "操作",
        key: "action",
        render: (text, record) => (
          <span>
            <a href="javascript:;"> 删除 </a>
            <Divider type="vertical" />
            <a href="javascript:;"> 修改 </a>
            <Divider type="vertical" />
            <a href="javascript:;"> 增加 </a>
          </span>
        )
      }
    ];
    return (
      <Layout>
        <AdminNav />
        <div className="admin_table">
          <Row>
            <Col span={2} />
            <Col span={20}>
              <div>
                <Table
                  columns={columns}
                  dataSource={exerciseListArr}
                  bordered
                  title={() => "动作信息"}
                  footer={() => "Footer"}
                  expandedRowRender={record => (
                    <div>
                      <p style={{ margin: 0 }}>
                        <span className="expand_title">动作描述:</span>
                        {record.exercise_description}
                      </p>
                      <p style={{ margin: 0 }}>
                        <span className="expand_title">动作主要图片:</span>
                        {record.exercise_pic_main}
                      </p>
                      <p style={{ margin: 0 }}>
                        <span className="expand_title">动作第一张图:</span>
                        {record.exercise_pic_first}
                      </p>
                      <p style={{ margin: 0 }}>
                        <span className="expand_title">动作第二张图:</span>
                        {record.exercise_pic_second}
                      </p>
                      <p style={{ margin: 0 }}>
                        <span className="expand_title">动作视频:</span>
                        {record.exercise_video}
                      </p>
                      <p style={{ margin: 0 }}>
                        <span className="expand_title">主页显示:</span>
                        {record.is_main}
                      </p>
                    </div>
                  )}
                />
              </div>
            </Col>
            <Col span={2} />
          </Row>
        </div>
      </Layout>
    );
  }
  componentDidMount() {
    this.props.getExerciseData();
  }
}
const mapStateToProps = state => ({
  exerciseList: state.getIn(["admin", "exerciseList"])
});
const mapDispatchToProps = dispatch => ({
  getExerciseData() {
    dispatch(actionCreator.getExerciseInfo());
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminExerciseTable);
