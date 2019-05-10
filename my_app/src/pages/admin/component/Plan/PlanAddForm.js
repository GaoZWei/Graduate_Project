import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Input } from "antd";
const FormItem = Form.Item;
//form代码，没有什么改进，把下面的提交按钮去掉就行
class PlanAddFormItem extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    const { temporaryData } = this.props;
    // plan_name,
    //   plan_aim,
    //   plan_day,
    //   plan_implement,
    //   plan_body,
    //   plan_pic,
    //   plan_description,
    //   plan_content,
    //   plan_creator,
    //   is_main;
    return (
      <Form ref="formItem">
        <FormItem label="请选择健身计划标题">
          {getFieldDecorator("plan_name", {
            rules: [{ required: true, message: "请选择健身计划标题!" }],
            initialValue: temporaryData != null ? temporaryData.plan_name : ""
          })(<Input placeholder="请选择健身计划标题" />)}
        </FormItem>
        <FormItem label="请选择健身计划描述">
          {getFieldDecorator("plan_aim", {
            rules: [{ required: true, message: "请选择健身计划描述!" }],
            initialValue: temporaryData != null ? temporaryData.plan_aim : ""
          })(<Input placeholder="请选择健身计划描述" />)}
        </FormItem>
        <FormItem label="请输入健身计划内容">
          {getFieldDecorator("plan_day", {
            rules: [{ required: true, message: "请输入健身计划内容!" }],
            initialValue: temporaryData != null ? temporaryData.plan_day : ""
          })(<Input placeholder="请输入健身计划内容" />)}
        </FormItem>
        <FormItem label="请输入健身计划图片">
          {getFieldDecorator("plan_implement", {
            rules: [{ required: true, message: "请输入健身计划图片!" }],
            initialValue:
              temporaryData != null ? temporaryData.plan_implement : ""
          })(<Input placeholder="请输入健身计划图片" />)}
        </FormItem>
        <FormItem label="是否输入高度">
          {getFieldDecorator("plan_body", {
            rules: [{ required: true, message: "是否输入高度!" }],
            initialValue: temporaryData != null ? temporaryData.plan_body : ""
          })(<Input placeholder="是否输入高度" />)}
        </FormItem>
        <FormItem label="是否输入体重">
          {getFieldDecorator("plan_pic", {
            rules: [{ required: true, message: "是否输入体重!" }],
            initialValue: temporaryData != null ? temporaryData.plan_pic : ""
          })(<Input placeholder="是否输入体重" />)}
        </FormItem>
        <FormItem label="是否输入年龄">
          {getFieldDecorator("plan_description", {
            rules: [{ required: true, message: "是否输入年龄!" }],
            initialValue:
              temporaryData != null ? temporaryData.plan_description : ""
          })(<Input placeholder="是否输入年龄" />)}
        </FormItem>
        <FormItem label="是否输入性别">
          {getFieldDecorator("plan_content", {
            rules: [{ required: true, message: "是否输入性别!" }],
            initialValue:
              temporaryData != null ? temporaryData.plan_content : ""
          })(<Input placeholder="是否输入性别" />)}
        </FormItem>
        <FormItem label="结果">
          {getFieldDecorator("plan_creator", {
            rules: [{ required: true, message: "结果!" }],
            initialValue:
              temporaryData != null ? temporaryData.plan_creator : ""
          })(<Input placeholder="结果" />)}
        </FormItem>
        <FormItem label="结果1">
          {getFieldDecorator("is_main", {
            rules: [{ required: true, message: "结果1!" }],
            initialValue: temporaryData != null ? temporaryData.is_main : ""
          })(<Input placeholder="结果1" />)}
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
