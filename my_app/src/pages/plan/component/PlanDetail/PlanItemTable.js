import React, { Component } from "react";
import "../../style.css";
import { Table, Divider, Tag } from "antd";
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
      {
        title: "训练动作",
        dataIndex: "address",
        key: "address"
      },
      {
        title: "训练动作",
        key: "tags",
        dataIndex: "tags",
        render: tags => (
          <span>
            {tags.map(tag => {
              let color = tag.length > 5 ? "geekblue" : "green";
              if (tag === "loser") {
                color = "volcano";
              }
              return (
                <a href="/">
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                </a>
              );
            })}
          </span>
        )
      },
      {
        title: "操作",
        key: "action",
        render: (text, record) => (
          <span>
            {/* <a href="javascript:;"></a> */}
            点击查看 {record.name}
            <Divider type="vertical" />
            {/* <a href="javascript:;"></a> */}
            Delete
          </span>
        )
      }
    ];

    const data = [
      {
        key: "1",
        time: "周一",
        body: "胸部",
        address: "New York No. 1 Lake Park",
        tags: ["平板卧推", "哑铃弯举ad", "自由飞鸟"]
      },
      {
        key: "2",
        time: "周二",
        body: "肩部",
        address: "London No. 1 Lake Park",
        tags: ["loser"]
      },
      {
        key: "3",
        time: "周三",
        body: "腹部",
        address: "Sidney No. 1 Lake Park",
        tags: ["平板卧推", "哑铃弯举", "自由飞鸟"]
      },
      {
        key: "4",
        time: "周四",
        body: "前臂",
        address: "Sidney No. 1 Lake Park",
        tags: ["平板卧推", "哑铃弯举", "自由飞鸟"]
      },
      {
        key: "5",
        time: "周五",
        body: "下背",
        address: "Sidney No. 1 Lake Park",
        tags: ["平板卧推", "哑铃弯举", "自由飞鸟"]
      },
      {
        key: "6",
        time: "周六",
        body: "肱四头肌",
        address: "Sidney No. 1 Lake Park",
        tags: ["平板卧推", "哑铃弯举", "自由飞鸟"]
      },
      {
        key: "7",
        time: "周日",
        body: "休息日",
        address: "休息日",
        tags: ["cool", "teacher"]
      }
    ];
    return <Table columns={columns} dataSource={data} />;
  }
}
export default PlanDetailItemTable;
