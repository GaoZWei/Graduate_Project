import React, { Component } from "react";
import { connect } from "react-redux";
import { actionCreator } from "../../store";
import AdminNav from "../../component/AdminNav";
import PlanAddForm from "./PlanAddForm";
import { Table,
  Divider,
  Layout,
  Row,
  Col,
  Popconfirm,
  Modal,
  Button} from "antd";
class AdminPlanTable extends Component {
  onBindChild = ref => {
    this.child = ref;
  };
  render() {
    const { planList, deleteItem,showModal,
      modelVisible,
      hideModal,
      handleOK } = this.props;
    var planListArr = planList.toJS();
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
                  dataSource={planListArr}
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
                  expandedRowRender={record => (
                    <div>
                      <p style={{ margin: 0 }}>
                        <span className="expand_title">计划图片:</span>
                        {record.plan_pic}
                      </p>
                      <p style={{ margin: 0 }}>
                        <span className="expand_title">计划描述:</span>
                        {record.plan_description}
                      </p>
                      <p style={{ margin: 0 }}>
                        <span className="expand_title">计划内容:</span>
                        {record.plan_content}
                      </p>
                      <p style={{ margin: 0 }}>
                        <span className="expand_title">计划创建者:</span>
                        {record.plan_creator}
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
                  <PlanAddForm onBindChild={this.onBindChild} />
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
  temporaryData: state.getIn(["admin", "temporaryData"])
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
        if (_self.props.temporaryData.health_id != null) {
          console.log("修改");
          values.health_id = _self.props.temporaryData.health_id;
          dispatch(actionCreator.updateHealthMessage(values));
        } else {
          console.log("添加");
          dispatch(actionCreator.insertHealthMessage(values));
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
)(AdminPlanTable);
