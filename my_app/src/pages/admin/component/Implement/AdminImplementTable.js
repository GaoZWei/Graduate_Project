import React, { Component } from "react";
import { connect } from "react-redux";
import { actionCreator } from "../../store";
import AdminNav from "../../component/AdminNav";
import { Table, Divider, Layout, Row, Col, Popconfirm } from "antd";
class AdminImplementTable extends Component {
  render() {
    const { implementList, deleteItem } = this.props;
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
                  dataSource={implementListArr}
                  bordered
                  title={() => "健康知识信息"}
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
  implementList: state.getIn(["admin", "implementList"])
});
const mapDispatchToProps = dispatch => ({
  getImplementData() {
    dispatch(actionCreator.getImplementInfo());
  },
  deleteItem(record) {
    var implement_id = record.implement_id;
    dispatch(actionCreator.deleteImplement(implement_id));
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminImplementTable);
