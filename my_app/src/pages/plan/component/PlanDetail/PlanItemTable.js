import React, { Component } from "react";
import "../../style.css";
import { connect } from "react-redux";
// import { actionCreator } from "../../store";
// import { toJS } from "immutable";
import { withRouter} from "react-router-dom";
import { Table, Tag, Col, Row } from "antd";
class PlanDetailItemTable extends Component {
  render() {
    const { planDetialTable } = this.props;
    var planDetialTableArr = planDetialTable.toJS();
    const columns = [
      {
        title: "训练时间",
        dataIndex: "plan_day",
        key: "1"
      },
      {
        title: "训练动作",
        key: "2",
        dataIndex: "group_name",
        render: group_name => (
          <span>
            {group_name.map(item => {
              var random1 = new Date() + Math.random();
              let color = item.length > 5 ? "geekblue" : "green";
              if (item.indexOf("宽")) {
                color = "volcano";
              }
              return (
                <Tag color={color} key={random1}>
                  {item.toUpperCase()}
                </Tag>
              );
            })}
          </span>
        )
      }
    ];
    return (
      <Table
        columns={columns}
        expandedRowRender={record => (
          <div style={{ margin: 0 }} key={record.plan_day + record.plan_id}>
            <Row>
              <Col span={6}>
                {record.group_name.map(tag => {
                  var random2 = new Date() + Math.random();
                  return (
                    <div key={random2}>
                      {tag}
                      (组数):&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <br />
                    </div>
                  );
                })}
              </Col>
              <Col span={7}>
                {record.group_group.map(tag => {
                  var random3 = new Date() + Math.random();
                  return (
                    <div key={random3}>
                      {tag}组<br />
                    </div>
                  );
                })}
              </Col>
              <Col span={5}>
                {record.group_times.map(tag => {
                  var random4 = new Date() + Math.random();
                  return (
                    <div key={random4}>
                      每组个数: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <br />
                    </div>
                  );
                })}
              </Col>
              <Col span={6}>
                {record.group_times.map(tag => {
                  var random5 = new Date() + Math.random();
                  return (
                    <div key={random5}>
                      {tag}个<br />
                    </div>
                  );
                })}
              </Col>
            </Row>
          </div>
        )}
        dataSource={planDetialTableArr}
      />
    );
  }
}

const mapStateToProps = state => ({
  planDetialTable: state.getIn(["plan", "planDetialTable"])
});

export default connect(
  mapStateToProps,
  null
)(withRouter(PlanDetailItemTable));
