import React, { Component } from "react";
import { Form, Icon, Input, Select } from "antd";
const FormItem = Form.Item;
const { Option } = Select;
//form代码，没有什么改进，把下面的提交按钮去掉就行
class ActionFormItem extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form>
        {/* <FormItem>
          {getFieldDecorator("userName", {
            rules: [{ required: true, message: "--" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "--" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </FormItem> */}
        <Form.Item label="请选择锻炼时间" hasFeedback>
          {getFieldDecorator("day", {
            rules: [{ required: true, message: "请选择锻炼时间!" }]
          })(
            <Select placeholder="请选择锻炼时间">
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
        <FormItem label="请输入锻炼组数">
          {getFieldDecorator("group", {
            rules: [{ required: true, message: "请输入锻炼组数!" }]
          })(
            <Select placeholder="请选择锻炼组数">
              <Option value="1">1</Option>
              <Option value="2">2</Option>
              <Option value="3">3</Option>
              <Option value="4">4</Option>
              <Option value="5">5</Option>
              <Option value="6">6</Option>
            </Select>
          )}
        </FormItem>
        <FormItem label="请输入每组个数">
          {getFieldDecorator("times", {
            rules: [{ required: true, message: "请输入每组个数!" }]
          })(<Input placeholder="请输入每组个数" />)}
        </FormItem>
      </Form>
    );
  }
}
const ActionForm = Form.create()(ActionFormItem);
export default ActionForm;
