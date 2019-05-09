import React, { Component } from "react";
import { connect } from "react-redux";
import { actionCreator } from "../../store";
import AdminNav from "../../component/AdminNav";
import ExerciseAddForm from "./ExerciseAddForm";
import {
  Table,
  Divider,
  Layout,
  Row,
  Col,
  Popconfirm,
  Modal,
  Button
} from "antd";
class AdminExerciseTable extends Component {
  onBindChild = ref => {
    this.child = ref;
  };
  render() {
    const {
      exerciseList,
      deleteItem,
      showModal,
      modelVisible,
      hideModal,
      handleOK
    } = this.props;
    var exerciseListArr = exerciseList.toJS();
    const columns = [
      {
        title: "动作名",
        dataIndex: "exercise_name"
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
            <Popconfirm
              title="确认删除?"
              onConfirm={() => deleteItem(record, this)}
            >
              <a href="/">删除</a>
            </Popconfirm>
            <Divider type="vertical" />
            <Popconfirm
              title="确认修改?"
              onConfirm={() => showModal(record, this)}
            >
              <a href="/">修改</a>
            </Popconfirm>
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
                  title={() => (
                    <div>
                      <Row>
                        <Col span={22}>动作信息</Col>
                        <Col span={2}>
                          <Button
                            type="primary"
                            onClick={() => showModal({}, this)}
                          >
                            增加
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  )}
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
                <Modal
                  title="请选择添加/修改属性"
                  visible={modelVisible}
                  onOk={() => handleOK(this)}
                  onCancel={() => hideModal(this)}
                  okText="确认"
                  cancelText="取消"
                >
                  <ExerciseAddForm onBindChild={this.onBindChild} />
                </Modal>
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
  exerciseList: state.getIn(["admin", "exerciseList"]),
  modelVisible: state.getIn(["admin", "modelVisible"]),
  temporaryData: state.getIn(["admin", "temporaryData"])
});
const mapDispatchToProps = dispatch => ({
  getExerciseData() {
    dispatch(actionCreator.getExerciseInfo());
  },
  deleteItem(record) {
    var exercise_id = record.exercise_id;
    dispatch(actionCreator.deleteExerciseList(exercise_id));
  },
  showModal(record, _self) {
    dispatch(actionCreator.updateTemporaryData(record));
    dispatch(actionCreator.showModal());
  },
  hideModal(_self) {
    dispatch(actionCreator.updateTemporaryData({}));
    _self.child.props.form.resetFields();
    dispatch(actionCreator.hideModal());
  },
  //提交结果,高级绑定
  handleOK(_self) {
    console.log(_self.props.temporaryData);
    _self.child.props.form.validateFields((err, values) => {
      if (!err) {
        if (_self.props.temporaryData.exercise_id != null) {
          console.log("修改");
          values.exercise_id = _self.props.temporaryData.exercise_id;
          dispatch(actionCreator.updateExerciseMessage(values));
        } else {
          console.log("添加");
          dispatch(actionCreator.insertExerciseMessage(values));
        }
      }
    });
    //清空输入框内容
    _self.child.props.form.resetFields();
    _self.props.hideModal(_self);
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminExerciseTable);
