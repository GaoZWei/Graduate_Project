import React, { Component } from "react";
import "../../style.css";
import { Table, Tag, Col, Row } from "antd";
class PlanDetailItemTable extends Component {
  render() {
    const columns = [
      {
        title: "训练时间",
        dataIndex: "time",
        key: "time"
        // render: text => <a href="javascript:;">{text}</a>
      },
      {
        title: "训练部位",
        dataIndex: "body",
        key: "body"
      },
      // {
      //   title: "训练动作",
      //   dataIndex: "address",
      //   key: "address"
      // },
      {
        title: "训练动作",
        key: "tags",
        dataIndex: "tags",
        render: tags => (
          <span>
            {tags.map(tag => {
              var random1 = new Date() + Math.random();
              let color = tag.length > 5 ? "geekblue" : "green";
              if (tag === "loser") {
                color = "volcano";
              }
              return (
                <Tag color={color} key={random1}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </span>
        )
      }
      // {
      //   title: "操作",
      //   key: "action",
      //   render: (text, record) => (
      //     <span>
      //       {/* <a href="javascript:;"></a> */}
      //       点击查看 {record.name}
      //       <Divider type="vertical" />
      //       {/* <a href="javascript:;"></a> */}
      //       Delete
      //     </span>
      //   )
      // }
    ];

    const data = [
      {
        key: 1,
        time: "周一",
        body: "胸部",
        address: "New York No. 1 Lake Park",
        tags: ["平板卧推", "哑铃弯举ad", "自由飞鸟"],
        groups: [3, 4, 5],
        group_number:[12,10,12]
      },
      {
        key: 2,
        time: "周二",
        body: "肩部",
        address: "London No. 1 Lake Park",
        tags: ["平板卧推", "哑铃弯举ad", "自由飞鸟"],
        groups: [3, 4, 5],
        group_number:[12,10,12]
      },
      {
        key: 3,
        time: "周三",
        body: "腹部",
        address: "Sidney No. 1 Lake Park",
        tags: ["平板卧推", "哑铃弯举qwq", "自由飞鸟","自由飞鸟2","自由飞鸟2","自由飞鸟4"],
        groups: [3, 4, 5,6,3,3],
        group_number:[12,10,12,8,5,8]
      },
      {
        key: 4,
        time: "周四",
        body: "前臂",
        address: "Sidney No. 1 Lake Park",
        tags: ["平板卧推", "哑铃弯举", "自由飞鸟"],
        groups: [3, 4, 5],
        group_number:[12,10,12]
      },
      {
        key: 5,
        time: "周五",
        body: "下背",
        address: "Sidney No. 1 Lake Park",
        tags: ["平板卧推", "哑铃弯举", "自由飞鸟"],
        groups: [3, 4, 5],
        group_number:[12,10,12]
      },
      {
        key: 6,
        time: "周六",
        body: "肱四头肌",
        address: "Sidney No. 1 Lake Park",
        tags: ["平板卧推", "哑铃弯举", "自由飞鸟"],
        groups: [3, 4, 5],
        group_number:[12,10,12]
      },
      {
        key: 7,
        time: "周日",
        body: "休息日",
        address: "休息日",
        tags: ["休息日"],
        groups: [0],
        group_number:[0]
      }
    ];
    return (
      <Table
        columns={columns}
        expandedRowRender={record => (
          <div style={{ margin: 0 }}>
            <Row>
              <Col span={6}>
                {record.tags.map(tag => {
                   var random2 = new Date() + Math.random();
                  return (<div key={random2}>{tag}(组数):&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/></div>);
                })}
              </Col>
              <Col span={7}>
                {record.groups.map(tag => {     
                  var random3 = new Date() + Math.random();          
                  // let color = tag.length > 5 ? "geekblue" : "green";
                  // if (tag === "loser") {
                  //   color = "volcano";
                  // }
                  return (<div key={random3}>{tag}组<br/></div>);
                })}
              </Col>

              <Col span={5}>
                {record.tags.map(tag => {
                   var random4 = new Date() + Math.random();
                  return (<div key={random4}>
                    {/* {tag} */}
                    每组个数:
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/></div>);
                })}
              </Col>
              <Col span={6}>
                {record.group_number.map(tag => {   
                  var random5 = new Date() + Math.random();            
                  // let color = tag.length > 5 ? "geekblue" : "green";
                  // if (tag === "loser") {
                  //   color = "volcano";
                  // }
                  return (<div key={random5}>{tag}个<br/></div>);
                })}
              </Col>
            </Row>
          </div>
        )}
        dataSource={data}
      />
    );
  }
}
export default PlanDetailItemTable;
