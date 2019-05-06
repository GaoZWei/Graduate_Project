import React, { Component } from "react";
import { connect } from "react-redux";
import { actionCreator } from "../store";
import AdminNav from "../component/AdminNav";
import { Table, Divider, Layout, Row, Col } from "antd";
class AdminPlanTable extends Component {
  render() {
    const { planList } = this.props;
    var planListArr = planList.toJS();
    const columns = [
      {
        title: "计划名",
        dataIndex: "plan_name",
        render: text => <a href="javascript:;"> {text} </a>
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
                  dataSource={planListArr}
                  bordered
                  title={() => "计划信息"}
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
  planList: state.getIn(["admin", "planList"])
});
const mapDispatchToProps = dispatch => ({
  getPlanData() {
    dispatch(actionCreator.getPlanInfo());
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminPlanTable);
