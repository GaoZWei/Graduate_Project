import React, { Component } from "react";
import { connect } from "react-redux";
import { actionCreator } from "../store";
import AdminNav from "../component/AdminNav";
import { Table, Divider, Layout, Row, Col } from "antd";
class AdminExerciseTable extends Component {
  render() {
    const { foodList } = this.props;
    var foodListArr = foodList.toJS();
    const columns = [
      {
        title: "食物名",
        dataIndex: "food_name",
        render: text => <a href="javascript:;"> {text} </a>
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
                  dataSource={foodListArr}
                  bordered
                  title={() => "食物信息"}
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
  foodList: state.getIn(["admin", "foodList"])
});
const mapDispatchToProps = dispatch => ({
  getFoodData() {
    dispatch(actionCreator.getFoodInfo());
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminExerciseTable);
