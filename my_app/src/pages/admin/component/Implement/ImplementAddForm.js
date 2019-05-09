import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Input, Select, Button } from "antd";
const FormItem = Form.Item;
//form代码，没有什么改进，把下面的提交按钮去掉就行
class ImplementAddFormItem extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    const { temporaryData } = this.props;
    return (
      <Form ref="formItem">
        <FormItem label="请选择健身工具标题">
          {getFieldDecorator("implement_title", {
            rules: [{ required: true, message: "请选择健身工具标题!" }],
            initialValue: temporaryData != null ? temporaryData.implement_title : ""
          })(<Input placeholder="请选择健身工具标题" />)}
        </FormItem>
        <FormItem label="请选择健身工具描述">
          {getFieldDecorator("implement_description", {
            rules: [{ required: true, message: "请选择健身工具描述!" }],
            initialValue: temporaryData != null ? temporaryData.implement_description : ""
          })(<Input placeholder="请选择健身工具描述" />)}
        </FormItem>
        <FormItem label="请输入健身工具内容">
          {getFieldDecorator("implement_content", {
            rules: [{ required: true, message: "请输入健身工具内容!" }],
            initialValue: temporaryData != null ? temporaryData.implement_content : ""
          })(<Input placeholder="请输入健身工具内容" />)}
        </FormItem>
        <FormItem label="请输入健身工具图片">
          {getFieldDecorator("implement_pic", {
            rules: [{ required: true, message: "请输入健身工具图片!" }],
            initialValue: temporaryData != null ? temporaryData.implement_pic : ""
          })(<Input placeholder="请输入健身工具图片" />)}
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
          {getFieldDecorator("implement_result", {
            rules: [{ required: true, message: "结果!" }],
            initialValue: temporaryData != null ? temporaryData.implement_result : ""
          })(<Input placeholder="结果" />)}
        </FormItem>
        <FormItem label="结果1">
          {getFieldDecorator("implement_result1", {
            rules: [{ required: true, message: "结果1!" }],
            initialValue: temporaryData != null ? temporaryData.implement_result1 : ""
          })(<Input placeholder="结果1" />)}
        </FormItem>
        <FormItem label="结果2">
          {getFieldDecorator("implement_result2", {
            rules: [{ required: true, message: "结果2!" }],
            initialValue:
              temporaryData != null ? temporaryData.implement_result2 : ""
          })(<Input placeholder="结果2" />)}
        </FormItem>
        <FormItem label="结果3">
          {getFieldDecorator("implement_result3", {
            rules: [{ required: true, message: "结果3!" }],
            initialValue:
              temporaryData != null ? temporaryData.implement_result3 : ""
          })(<Input placeholder="结果3" />)}
        </FormItem>
      </Form>
    );
  }
  componentDidMount() {
    this.props.onBindChild(this);
  }
}
const ImplementAddForm = Form.create()(ImplementAddFormItem);

const mapStateToProps = state => ({
  temporaryData: state.getIn(["admin", "temporaryData"])
});

export default connect(mapStateToProps)(ImplementAddForm);
