import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Input } from "antd";
const FormItem = Form.Item;
//form代码，没有什么改进，把下面的提交按钮去掉就行
class PlanDetailAddFormItem extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    const { temporaryData } = this.props;
    return (
      <Form ref="formItem">
        <FormItem label="请输入日期">
          {getFieldDecorator("plan_day", {
            rules: [{ required: true, message: "请输入日期!" }],
            initialValue: temporaryData != null ? temporaryData.plan_day : ""
          })(<Input placeholder="请输入日期" />)}
        </FormItem>
        <FormItem label="请输入锻炼动作id">
          {getFieldDecorator("group_exercise_id", {
            rules: [{ required: true, message: "请输入锻炼动作!" }],
            initialValue: temporaryData != null ? temporaryData.group_exercise_id : ""
          })(<Input placeholder="请输入锻炼动作" />)}
        </FormItem>
        <FormItem label="请输入锻炼组数">
          {getFieldDecorator("group_exercise_group", {
            rules: [{ required: true, message: "请输入锻炼组数!" }],
            initialValue: temporaryData != null ? temporaryData.group_exercise_group : ""
          })(<Input placeholder="请输入锻炼组数" />)}
        </FormItem>
        <FormItem label="请输入锻炼每组个数">
          {getFieldDecorator("group_exercise_times", {
            rules: [{ required: true, message: "请输入锻炼每组个数!" }],
            initialValue:
              temporaryData != null ? temporaryData.group_exercise_times : ""
          })(<Input placeholder="请输入锻炼每组个数" />)}
        </FormItem>
      </Form>
    );
  }
  componentDidMount() {
    this.props.onBindChild1(this);
  }
}
const PlanDetailAddForm = Form.create()(PlanDetailAddFormItem);

const mapStateToProps = state => ({
  temporaryData: state.getIn(["admin", "temporaryData"])
});

export default connect(mapStateToProps)(PlanDetailAddForm);
