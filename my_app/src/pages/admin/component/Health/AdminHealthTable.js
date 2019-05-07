import React, { Component } from "react";
import { connect } from "react-redux";
import { actionCreator } from "../../store";
import AdminNav from "../../component/AdminNav";
import { Table, Divider, Layout, Row, Col, Popconfirm } from "antd";
class AdminHealthTable extends Component {
  render() {
    const { healthList, deleteItem } = this.props;
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
                  dataSource={healthListArr}
                  bordered
                  title={() => "健康知识信息"}
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
  healthList: state.getIn(["admin", "healthList"])
});
const mapDispatchToProps = dispatch => ({
  getHealthData() {
    dispatch(actionCreator.getHealthInfo());
  },
  deleteItem(record) {
    var health_id = record.health_id;
    dispatch(actionCreator.deleteHealth(health_id));
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminHealthTable);
