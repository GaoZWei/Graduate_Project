import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Input } from "antd";
const FormItem = Form.Item;
//form代码，没有什么改进，把下面的提交按钮去掉就行
class HealthAddFormItem extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    const { temporaryData } = this.props;
    return (
      <Form ref="formItem">
        <FormItem label="请输入健康分类">
          {getFieldDecorator("health_sort", {
            rules: [{ required: true, message: "请输入健康分类!" }],
            initialValue: temporaryData != null ? temporaryData.health_sort : ""
          })(<Input placeholder="请输入健康分类" />)}
        </FormItem>
        <FormItem label="请选择健康知识标题">
          {getFieldDecorator("health_title", {
            rules: [{ required: true, message: "请选择健康知识标题!" }],
            initialValue: temporaryData != null ? temporaryData.health_title : ""
          })(<Input placeholder="请选择健康知识标题" />)}
        </FormItem>
        <FormItem label="请输入健康知识描述">
          {getFieldDecorator("health_description", {
            rules: [{ required: true, message: "请输入健康知识描述!" }],
            initialValue: temporaryData != null ? temporaryData.health_description : ""
          })(<Input placeholder="请输入健康知识描述" />)}
        </FormItem>
        <FormItem label="请输入健康知识内容一">
          {getFieldDecorator("health_content_first", {
            rules: [{ required: true, message: "请输入健康知识内容一!" }],
            initialValue: temporaryData != null ? temporaryData.health_content_first : ""
          })(<Input placeholder="请输入健康知识内容一" />)}
        </FormItem>
        <FormItem label="请输入健康知识内容二">
          {getFieldDecorator("health_content_second", {
            rules: [{ required: true, message: "请输入健康知识内容二!" }],
            initialValue:
              temporaryData != null ? temporaryData.health_content_second : ""
          })(<Input placeholder="请输入健康知识内容二" />)}
        </FormItem>
        <FormItem label="请输入健康知识内容三">
          {getFieldDecorator("health_content_third", {
            rules: [{ required: true, message: "请输入健康知识内容三!" }],
            initialValue:
              temporaryData != null ? temporaryData.health_content_third : ""
          })(<Input placeholder="请输入健康知识内容三" />)}
        </FormItem>
        <FormItem label="请输入健康知识图片一">
          {getFieldDecorator("health_img_first", {
            rules: [{ required: true, message: "请输入健康知识图片一!" }],
            initialValue:
              temporaryData != null ? temporaryData.health_img_first : ""
          })(<Input placeholder="请输入健康知识图片一" />)}
        </FormItem>
        <FormItem label="请输入健康知识图片二">
          {getFieldDecorator("health_img_second", {
            rules: [{ required: true, message: "请输入健康知识图片二!" }],
            initialValue:
              temporaryData != null ? temporaryData.health_img_second : ""
          })(<Input placeholder="请输入健康知识图片二" />)}
        </FormItem>
        <FormItem label="请输入健康知识图片三">
          {getFieldDecorator("health_img_third", {
            rules: [{ required: true, message: "请输入健康知识图片三!" }],
            initialValue: temporaryData != null ? temporaryData.health_img_third : ""
          })(<Input placeholder="请输入健康知识图片三" />)}
        </FormItem>
        <FormItem label="是否主页显示">
          {getFieldDecorator("is_main", {
            rules: [{ required: true, message: "是否主页显示!" }],
            initialValue: temporaryData != null ? temporaryData.is_main : ""
          })(<Input placeholder="是否主页显示" />)}
        </FormItem>
        <FormItem label="是否热点">
          {getFieldDecorator("is_hot", {
            rules: [{ required: true, message: "是否热点!" }],
            initialValue:
              temporaryData != null ? temporaryData.is_hot : ""
          })(<Input placeholder="是否热点" />)}
        </FormItem>
        <FormItem label="是否健康信息">
          {getFieldDecorator("is_health", {
            rules: [{ required: true, message: "是否健康信息!" }],
            initialValue:
              temporaryData != null ? temporaryData.is_health : ""
          })(<Input placeholder="是否健康信息" />)}
        </FormItem>
        <FormItem label="是否食物知识">
          {getFieldDecorator("is_food_knowledge", {
            rules: [{ required: true, message: "是否食物知识!" }],
            initialValue:
              temporaryData != null ? temporaryData.is_food_knowledge : ""
          })(<Input placeholder="是否食物知识" />)}
        </FormItem>
      </Form>
    );
  }
  componentDidMount() {
    this.props.onBindChild(this);
  }
}
const HealthAddForm = Form.create()(HealthAddFormItem);

const mapStateToProps = state => ({
  temporaryData: state.getIn(["admin", "temporaryData"])
});

export default connect(mapStateToProps)(HealthAddForm);
