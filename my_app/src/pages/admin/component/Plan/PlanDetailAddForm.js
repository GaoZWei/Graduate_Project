import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Input } from "antd";
const FormItem = Form.Item;
//form代码，没有什么改进，把下面的提交按钮去掉就行
class PlanAddFormItem extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    const { temporaryData } = this.props;
    return (
      <Form ref="formItem">
        <FormItem label="请输入健身计划名">
          {getFieldDecorator("plan_name", {
            rules: [{ required: true, message: "请输入健身计划名!" }],
            initialValue: temporaryData != null ? temporaryData.plan_name : ""
          })(<Input placeholder="请输入健身计划名" />)}
        </FormItem>
        <FormItem label="请输入健身计划目标">
          {getFieldDecorator("plan_aim", {
            rules: [{ required: true, message: "请输入健身计划目标!" }],
            initialValue: temporaryData != null ? temporaryData.plan_aim : ""
          })(<Input placeholder="请输入健身计划目标" />)}
        </FormItem>
        <FormItem label="请输入健身计划天数">
          {getFieldDecorator("plan_day", {
            rules: [{ required: true, message: "请输入健身计划天数!" }],
            initialValue: temporaryData != null ? temporaryData.plan_day : ""
          })(<Input placeholder="请输入健身计划天数" />)}
        </FormItem>
        <FormItem label="请输入健身计划所需器械">
          {getFieldDecorator("plan_implement", {
            rules: [{ required: true, message: "请输入健身计划所需器械!" }],
            initialValue:
              temporaryData != null ? temporaryData.plan_implement : ""
          })(<Input placeholder="请输入健身计划所需器械" />)}
        </FormItem>
        <FormItem label="请输入健身计划锻炼部位">
          {getFieldDecorator("plan_body", {
            rules: [{ required: true, message: "请输入健身计划锻炼部位!" }],
            initialValue: temporaryData != null ? temporaryData.plan_body : ""
          })(<Input placeholder="请输入健身计划锻炼部位" />)}
        </FormItem>
        <FormItem label="请输入健身计划图片">
          {getFieldDecorator("plan_pic", {
            rules: [{ required: true, message: "请输入健身计划图片!" }],
            initialValue: temporaryData != null ? temporaryData.plan_pic : ""
          })(<Input placeholder="请输入健身计划图片" />)}
        </FormItem>
        <FormItem label="请输入健身计划描述">
          {getFieldDecorator("plan_description", {
            rules: [{ required: true, message: "请输入健身计划描述!" }],
            initialValue:
              temporaryData != null ? temporaryData.plan_description : ""
          })(<Input placeholder="请输入健身计划描述" />)}
        </FormItem>
      </Form>
    );
  }
  componentDidMount() {
    this.props.onBindChild(this);
  }
}
const PlanAddForm = Form.create()(PlanAddFormItem);

const mapStateToProps = state => ({
  temporaryData: state.getIn(["admin", "temporaryData"])
});

export default connect(mapStateToProps)(PlanAddForm);
