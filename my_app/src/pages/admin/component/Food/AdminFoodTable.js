import React, { Component } from "react";
import { connect } from "react-redux";
import { actionCreator } from "../../store";
import AdminNav from "../../component/AdminNav";
import FoodAddForm from "./FoodAddForm";
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
      foodList,
      deleteItem,
      showModal,
      modelVisible,
      hideModal,
      handleOK
    } = this.props;
    var foodListArr = foodList.toJS();

    const columns = [
      {
        title: "食物名",
        dataIndex: "food_name",
      },
      {
        title: "分类",
        dataIndex: "sort_id"
      },
      {
        title: "热量",
        dataIndex: "food_hots"
      },
      {
        title: "蛋白质含量",
        dataIndex: "food_protein"
      },
      {
        title: "碳水化合物",
        dataIndex: "food_carbohydrate"
      },
      {
        title: "脂肪",
        dataIndex: "food_fat"
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
                  dataSource={foodListArr}
                  bordered
                  title={() => (
                    <div>
                      <Row>
                        <Col span={22}>食物信息</Col>
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
                        <span className="expand_title">蛋白质占比:</span>
                        {record.protein_account}
                      </p>
                      <p style={{ margin: 0 }}>
                        <span className="expand_title">碳水化合物占比:</span>
                        {record.carbohydrate_account}
                      </p>
                      <p style={{ margin: 0 }}>
                        <span className="expand_title">脂肪占比:</span>
                        {record.fat_account}
                      </p>
                      <p style={{ margin: 0 }}>
                        <span className="expand_title">度量单位:</span>
                        {record.measure_unit}
                      </p>
                      <p style={{ margin: 0 }}>
                        <span className="expand_title">单位结果:</span>
                        {record.measure_calorie}
                      </p>
                      <p style={{ margin: 0 }}>
                        <span className="expand_title">主页显示:</span>
                        {record.is_main}
                      </p>
                      <p style={{ margin: 0 }}>
                        <span className="expand_title">食物图片:</span>
                        {record.food_pic}
                      </p>
                      <p style={{ margin: 0 }}>
                        <span className="expand_title">描述:</span>
                        {record.food_description}
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
                  <FoodAddForm onBindChild={this.onBindChild} />
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
    this.props.getFoodData();
  }
}
const mapStateToProps = state => ({
  foodList: state.getIn(["admin", "foodList"]),
  modelVisible: state.getIn(["admin", "modelVisible"]),
  temporaryData: state.getIn(["admin", "temporaryData"])
});
const mapDispatchToProps = dispatch => ({
  getFoodData() {
    dispatch(actionCreator.getFoodInfo());
  },
  deleteItem(record) {
    var food_id = record.food_id;
    dispatch(actionCreator.deleteFoodList(food_id));
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
        if (_self.props.temporaryData.food_id != null) {
          console.log("修改");
          values.food_id = _self.props.temporaryData.food_id;
          dispatch(actionCreator.updateFoodMessage(values));
        } else {
          console.log("添加");
          dispatch(actionCreator.insertFoodMessage(values));
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
