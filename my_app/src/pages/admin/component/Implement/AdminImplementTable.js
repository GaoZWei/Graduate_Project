import React, { Component } from "react";
import { connect } from "react-redux";
import { actionCreator } from "../../store";
import AdminNav from "../../component/AdminNav";
import ImplementAddForm from "./ImplementAddForm";
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
class AdminImplementTable extends Component {
  onBindChild = ref => {
    this.child = ref;
  };
  render() {
    const {
      implementList,
      deleteItem,
      showModal,
      modelVisible,
      hideModal,
      handleOK
    } = this.props;
    var implementListArr = implementList.toJS();
    const columns = [
      {
        title: "健身工具标题",
        dataIndex: "implement_title"
      },
      {
        title: "输入身高",
        dataIndex: "input_height"
      },
      {
        title: "输入体重",
        dataIndex: "input_weight"
      },
      {
        title: "输入年龄",
        dataIndex: "input_age"
      },
      {
        title: "输入性别",
        dataIndex: "input_sex"
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
                  dataSource={implementListArr}
                  bordered
                  title={() => (
                    <div>
                      <Row>
                        <Col span={22}>健身工具信息</Col>
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
                        <span className="expand_title">描述:</span>
                        {record.implement_description}
                      </p>
                      <p style={{ margin: 0 }}>
                        <span className="expand_title">内容:</span>
                        {record.implement_content}
                      </p>
                      <p style={{ margin: 0 }}>
                        <span className="expand_title">图片:</span>
                        {record.implement_pic}
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
                  <ImplementAddForm onBindChild={this.onBindChild} />
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
    this.props.getImplementData();
  }
}
const mapStateToProps = state => ({
  implementList: state.getIn(["admin", "implementList"]),
  modelVisible: state.getIn(["admin", "modelVisible"]),
  temporaryData: state.getIn(["admin", "temporaryData"])
});
const mapDispatchToProps = dispatch => ({
  getImplementData() {
    dispatch(actionCreator.getImplementInfo());
  },
  deleteItem(record) {
    var implement_id = record.implement_id;
    dispatch(actionCreator.deleteImplement(implement_id));
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
        if (_self.props.temporaryData.implement_id != null) {
          console.log("修改");
          values.implement_id = _self.props.temporaryData.implement_id;
          dispatch(actionCreator.updateImplementMessage(values));
        } else {
          console.log("添加");
          dispatch(actionCreator.insertImplementMessage(values));
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
)(AdminImplementTable);
