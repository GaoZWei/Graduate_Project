import React, { Component } from "react";
import { connect } from "react-redux";
import { actionCreator } from "../../store";
import AdminNav from "../../component/AdminNav";
import HealthAddForm from "./HealthAddForm";
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
class AdminHealthTable extends Component {
  onBindChild = ref => {
    this.child = ref;
  };
  render() {
    const {
      healthList,
      deleteItem,
      showModal,
      modelVisible,
      hideModal,
      handleOK
    } = this.props;
    var healthListArr = healthList.toJS();
    const columns = [
      {
        title: "新闻标题",
        dataIndex: "health_title"
      },
      {
        title: "新闻分类",
        dataIndex: "health_sort"
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
            <a href="javascript:;" onClick={() => showModal(record, this)}>
              修改
            </a>
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
                  dataSource={healthListArr}
                  bordered
                  title={() => (
                    <div>
                      <Row>
                        <Col span={22}>健康知识信息</Col>
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
                        <span className="expand_title">健康知识描述:</span>
                        {record.health_description}
                      </p>
                      <p style={{ margin: 0 }}>
                        <span className="expand_title">健康知识内容1:</span>
                        {record.health_content_first}
                      </p>
                      <p style={{ margin: 0 }}>
                        <span className="expand_title">健康知识内容2:</span>
                        {record.health_content_second}
                      </p>
                      <p style={{ margin: 0 }}>
                        <span className="expand_title">健康知识内容3:</span>
                        {record.health_content_third}
                      </p>
                      <p style={{ margin: 0 }}>
                        <span className="expand_title">图片1:</span>
                        {record.health_img_first}
                      </p>
                      <p style={{ margin: 0 }}>
                        <span className="expand_title">图片2:</span>
                        {record.health_img_second}
                      </p>
                      <p style={{ margin: 0 }}>
                        <span className="expand_title">图片3:</span>
                        {record.health_img_third}
                      </p>
                      <p style={{ margin: 0 }}>
                        <span className="expand_title">主页显示:</span>
                        {record.is_main}
                      </p>
                      <p style={{ margin: 0 }}>
                        <span className="expand_title">热门:</span>
                        {record.is_hot}
                      </p>
                      <p style={{ margin: 0 }}>
                        <span className="expand_title">健康:</span>
                        {record.is_health}
                      </p>
                      <p style={{ margin: 0 }}>
                        <span className="expand_title">食物知识:</span>
                        {record.is_food_knowledge}
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
                  <HealthAddForm onBindChild={this.onBindChild} />
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
    this.props.getHealthData();
  }
}
const mapStateToProps = state => ({
  healthList: state.getIn(["admin", "healthList"]),
  modelVisible: state.getIn(["admin", "modelVisible"]),
  temporaryData: state.getIn(["admin", "temporaryData"])
});
const mapDispatchToProps = dispatch => ({
  getHealthData() {
    dispatch(actionCreator.getHealthInfo());
  },
  deleteItem(record) {
    var health_id = record.health_id;
    dispatch(actionCreator.deleteHealth(health_id));
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
    // console.log(_self.child.props.form)
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
)(AdminHealthTable);
