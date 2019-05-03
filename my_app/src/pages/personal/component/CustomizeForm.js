import React, { Component } from "react";
import { Form, Input, Select } from "antd";
const FormItem = Form.Item;
const { Option } = Select;
//form代码，没有什么改进，把下面的提交按钮去掉就行
class CustomizeFormItem extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form>
        <Form.Item label="请选择锻炼时间" hasFeedback>
          {getFieldDecorator("plan_day", {
            rules: [{ required: true, message: "请选择锻炼时间!" }]
          })(
            <Select placeholder="请选择锻炼时间" id='time'>
              <Option value="1">星期一</Option>
              <Option value="2">星期二</Option>
              <Option value="3">星期三</Option>
              <Option value="4">星期四</Option>
              <Option value="5">星期五</Option>
              <Option value="6">星期六</Option>
              <Option value="7">星期日</Option>
            </Select>
          )}
        </Form.Item>
        <FormItem label="请输入锻炼组数" hasFeedback>
          {getFieldDecorator("exercise_groups", {
            rules: [{ required: true, message: "请输入锻炼组数!" }]
          })(
            <Select placeholder="请选择锻炼组数" id='groups'>
              <Option value="1">1</Option>
              <Option value="2">2</Option>
              <Option value="3">3</Option>
              <Option value="4">4</Option>
              <Option value="5">5</Option>
              <Option value="6">6</Option>
            </Select>
          )}
        </FormItem>
        <FormItem label="请输入每组个数" hasFeedback>
          {getFieldDecorator("exercise_times", {
            rules: [{ required: true, message: "请输入每组个数!" }]
          })(<Input placeholder="请输入每组个数" id="group_times"/>)}
        </FormItem>
      </Form>
    );
  }
}
const CustomizeForm = Form.create()(CustomizeFormItem);
export default CustomizeForm;
