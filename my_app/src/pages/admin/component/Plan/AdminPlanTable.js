import React, { Component } from "react";
import { connect } from "react-redux";
import { actionCreator } from "../../store";
import AdminNav from "../../component/AdminNav";
import PlanAddForm from "./PlanAddForm";
import PlanDetailAddForm from "./PlanDetailAddForm";
import { groupBy } from "../../../../util/HttpUtil";
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
class AdminPlanTable extends Component {
  onBindChild = ref => {
    this.child = ref;
  };
  onBindChild1 = ref => {
    this.child1 = ref;
  };
  render() {
    const {
      planList,
      deleteItem,
      temporaryData,
      showModal,
      modelVisible,
      hideModal,
      handleOK,
      showModal1,
      modelVisible1,
      hideModal1,
      handleOK1,
      deleteItem1
    } = this.props;
    var planListArr = planList.toJS();
    var planInfo = planListArr.info;
    var planDetail = planListArr.detail;
    //将计划按plan_id分组,groupby函数
    var planDetailHandled = groupBy(planDetail, function(item) {
      return [item.plan_id];
    });
    // console.log(planDetailHandled);
    //扩展表格
    const expandeRow = record => {
      var detail = [];
      for (var i = 0; i < planDetailHandled.length; i++) {
        if (record.plan_id === planDetailHandled[i][0].plan_id) {
          detail = planDetailHandled[i];
        }
      }
      const columns = [
        { title: "日期", dataIndex: "plan_day", key: "plan_day" },
        {
          title: "动作",
          dataIndex: "group_exercise_name",
          key: "group_exercise_name"
        },
        {
          title: "组数",
          dataIndex: "group_exercise_group",
          key: "group_exercise_group"
        },
        {
          title: "每组个数",
          dataIndex: "group_exercise_times",
          key: "upgradeNum"
        },
        {
          title: "操作",
          key: "action",
          render: (text, record) => (
            <span>
              <Popconfirm
                title="确认删除?"
                onConfirm={() => deleteItem1(record, this)}
              >
                <a href="/">删除</a>
              </Popconfirm>
              <Divider type="vertical" />
              <Popconfirm
                title="确认修改?"
                onConfirm={() => showModal1(record, this)}
              >
                <a href="/">修改</a>
              </Popconfirm>
            </span>
          )
        }
      ];
      return <Table columns={columns} dataSource={detail} pagination={false} />;
    };
    const columns = [
      {
        title: "计划名",
        dataIndex: "plan_name"
      },
      {
        title: "计划目标",
        dataIndex: "plan_aim"
      },
      {
        title: "计划日期",
        dataIndex: "plan_day"
      },
      {
        title: "计划器械",
        dataIndex: "plan_implement"
      },
      {
        title: "目标肌肉",
        dataIndex: "plan_body"
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
                  dataSource={planInfo}
                  bordered
                  title={() => (
                    <div>
                      <Row>
                        <Col span={22}>健康计划信息</Col>
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
                  expandedRowRender={record => expandeRow(record)}
                />
                <Modal
                  title="请选择添加/修改属性"
                  visible={modelVisible}
                  onOk={() => handleOK(this)}
                  onCancel={() => hideModal(this)}
                  okText="确认"
                  cancelText="取消"
                >
                  <PlanAddForm onBindChild={this.onBindChild} />
                </Modal>
                <Modal
                  title="请选择添加/修改属性"
                  visible={modelVisible1}
                  onOk={() => handleOK1(this, temporaryData)}
                  onCancel={() => hideModal1(this)}
                  okText="确认"
                  cancelText="取消"
                >
                  <PlanDetailAddForm onBindChild1={this.onBindChild1} />
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
    this.props.getPlanData();
  }
}
const mapStateToProps = state => ({
  planList: state.getIn(["admin", "planList"]),
  modelVisible: state.getIn(["admin", "modelVisible"]),
  temporaryData: state.getIn(["admin", "temporaryData"]),
  modelVisible1: state.getIn(["admin", "modelVisible1"])
});
const mapDispatchToProps = dispatch => ({
  getPlanData() {
    dispatch(actionCreator.getPlanInfo());
  },
  deleteItem(record) {
    var plan_id = record.plan_id;
    dispatch(actionCreator.deletePlan(plan_id));
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
    _self.child.props.form.validateFields((err, values) => {
      if (!err) {
        if (_self.props.temporaryData.plan_id != null) {
          console.log("修改");
          values.plan_id = _self.props.temporaryData.plan_id;
          dispatch(actionCreator.updatePlanMessage(values));
        } else {
          console.log("添加");
          dispatch(actionCreator.insertPlanMessage(values));
        }
      }
    });
    //清空输入框内容
    _self.child.props.form.resetFields();
    _self.props.hideModal(_self);
  },
  showModal1(record, _self) {
    dispatch(actionCreator.updateTemporaryData(record));
    dispatch(actionCreator.showModal1());
  },
  hideModal1(_self) {
    dispatch(actionCreator.updateTemporaryData({}));
    _self.child1.props.form.resetFields();
    dispatch(actionCreator.hideModal1());
  },
  //提交结果,高级绑定
  handleOK1(_self, temporaryData) {
    // console.log(temporaryData);
    _self.child1.props.form.validateFields((err, values) => {
      if (!err) {
        if (_self.props.temporaryData.plan_id != null) {
          console.log("修改");
          values.plan_id = _self.props.temporaryData.plan_id;
          values.temporaryData = temporaryData;
          dispatch(actionCreator.updatePlanDetailMessage(values));
        } else {
          console.log("添加");
          dispatch(actionCreator.insertPlanMessage(values));
        }
      }
      // console.log( _self.child1.props.form)
      // console.log(values);
    });
    //清空输入框内容
    _self.child1.props.form.resetFields();
    _self.props.hideModal1(_self);
  },
  deleteItem1(record) {
    dispatch(actionCreator.deletePlanDetailMessage(record));
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminPlanTable);
