import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Input} from "antd";
const FormItem = Form.Item;
//form代码，没有什么改进，把下面的提交按钮去掉就行
class PlanAddFormItem extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    const { temporaryData } = this.props;
    return (
      <Form ref="formItem">
        <FormItem label="请选择健身计划标题">
          {getFieldDecorator("plan_title", {
            rules: [{ required: true, message: "请选择健身计划标题!" }],
            initialValue: temporaryData != null ? temporaryData.plan_title : ""
          })(<Input placeholder="请选择健身计划标题" />)}
        </FormItem>
        <FormItem label="请选择健身计划描述">
          {getFieldDecorator("plan_description", {
            rules: [{ required: true, message: "请选择健身计划描述!" }],
            initialValue: temporaryData != null ? temporaryData.plan_description : ""
          })(<Input placeholder="请选择健身计划描述" />)}
        </FormItem>
        <FormItem label="请输入健身计划内容">
          {getFieldDecorator("plan_content", {
            rules: [{ required: true, message: "请输入健身计划内容!" }],
            initialValue: temporaryData != null ? temporaryData.plan_content : ""
          })(<Input placeholder="请输入健身计划内容" />)}
        </FormItem>
        <FormItem label="请输入健身计划图片">
          {getFieldDecorator("plan_pic", {
            rules: [{ required: true, message: "请输入健身计划图片!" }],
            initialValue: temporaryData != null ? temporaryData.plan_pic : ""
          })(<Input placeholder="请输入健身计划图片" />)}
        </FormItem>
        <FormItem label="是否输入高度">
          {getFieldDecorator("input_height", {
            rules: [{ required: true, message: "是否输入高度!" }],
            initialValue:
              temporaryData != null ? temporaryData.input_height : ""
          })(<Input placeholder="是否输入高度" />)}
        </FormItem>
        <FormItem label="是否输入体重">
          {getFieldDecorator("input_weight", {
            rules: [{ required: true, message: "是否输入体重!" }],
            initialValue:
              temporaryData != null ? temporaryData.input_weight : ""
          })(<Input placeholder="是否输入体重" />)}
        </FormItem>
        <FormItem label="是否输入年龄">
          {getFieldDecorator("input_age", {
            rules: [{ required: true, message: "是否输入年龄!" }],
            initialValue:
              temporaryData != null ? temporaryData.input_age : ""
          })(<Input placeholder="是否输入年龄" />)}
        </FormItem>
        <FormItem label="是否输入性别">
          {getFieldDecorator("input_sex", {
            rules: [{ required: true, message: "是否输入性别!" }],
            initialValue:
              temporaryData != null ? temporaryData.input_sex : ""
          })(<Input placeholder="是否输入性别" />)}
        </FormItem>
        <FormItem label="结果">
          {getFieldDecorator("plan_result", {
            rules: [{ required: true, message: "结果!" }],
            initialValue: temporaryData != null ? temporaryData.plan_result : ""
          })(<Input placeholder="结果" />)}
        </FormItem>
        <FormItem label="结果1">
          {getFieldDecorator("plan_result1", {
            rules: [{ required: true, message: "结果1!" }],
            initialValue: temporaryData != null ? temporaryData.plan_result1 : ""
          })(<Input placeholder="结果1" />)}
        </FormItem>
        <FormItem label="结果2">
          {getFieldDecorator("plan_result2", {
            rules: [{ required: true, message: "结果2!" }],
            initialValue:
              temporaryData != null ? temporaryData.plan_result2 : ""
          })(<Input placeholder="结果2" />)}
        </FormItem>
        <FormItem label="结果3">
          {getFieldDecorator("plan_result3", {
            rules: [{ required: true, message: "结果3!" }],
            initialValue:
              temporaryData != null ? temporaryData.plan_result3 : ""
          })(<Input placeholder="结果3" />)}
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
