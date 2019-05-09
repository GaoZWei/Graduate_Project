import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Input} from "antd";
const FormItem = Form.Item;
//form代码，没有什么改进，把下面的提交按钮去掉就行
class FoodAddFormItem extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    const { temporaryData } = this.props;
    return (
      <Form ref="formItem">
        <FormItem label="请输入食物名">
          {getFieldDecorator("food_name", {
            rules: [{ required: true, message: "请输入食物名!" }],
            initialValue: temporaryData != null ? temporaryData.food_name : ""
          })(<Input placeholder="请输入食物名" />)}
        </FormItem>
        <FormItem label="请选择食物分类">
          {getFieldDecorator("sort_id", {
            rules: [{ required: true, message: "请选择食物分类!" }],
            initialValue: temporaryData != null ? temporaryData.sort_id : ""
          })(<Input placeholder="请选择食物分类" />)}
        </FormItem>
        <FormItem label="请输入食物图片">
          {getFieldDecorator("food_pic", {
            rules: [{ required: true, message: "请输入食物图片!" }],
            initialValue: temporaryData != null ? temporaryData.food_pic : ""
          })(<Input placeholder="请输入食物图片" />)}
        </FormItem>
        <FormItem label="请输入食物热量">
          {getFieldDecorator("food_hots", {
            rules: [{ required: true, message: "请输入食物热量!" }],
            initialValue: temporaryData != null ? temporaryData.food_hots : ""
          })(<Input placeholder="请输入食物热量" />)}
        </FormItem>
        <FormItem label="请输入食物蛋白质">
          {getFieldDecorator("food_protein", {
            rules: [{ required: true, message: "请输入食物蛋白质!" }],
            initialValue: temporaryData != null ? temporaryData.food_protein : ""
          })(<Input placeholder="请输入食物蛋白质" />)}
        </FormItem>
        <FormItem label="请输入食物蛋白质占比">
          {getFieldDecorator("protein_account", {
            rules: [{ required: true, message: "请输入食物蛋白质占比!" }],
            initialValue: temporaryData != null ? temporaryData.protein_account : ""
          })(<Input placeholder="请输入食物蛋白质占比" />)}
        </FormItem>
        <FormItem label="请输入食物碳水化合物">
          {getFieldDecorator("food_carbohydrate", {
            rules: [{ required: true, message: "请输入食物碳水化合物!" }],
            initialValue: temporaryData != null ? temporaryData.food_carbohydrate : ""
          })(<Input placeholder="请输入食物碳水化合物" />)}
        </FormItem>
        <FormItem label="请输入食物碳水化合物占比">
          {getFieldDecorator("carbohydrate_account", {
            rules: [{ required: true, message: "请输入食物碳水化合物占比!" }],
            initialValue: temporaryData != null ? temporaryData.carbohydrate_account : ""
          })(<Input placeholder="请输入食物碳水化合物占比" />)}
        </FormItem>
        <FormItem label="请输入食物脂肪">
          {getFieldDecorator("food_fat", {
            rules: [{ required: true, message: "请输入食物脂肪!" }],
            initialValue: temporaryData != null ? temporaryData.food_fat : ""
          })(<Input placeholder="请输入食物脂肪" />)}
        </FormItem>
        <FormItem label="请输入食物脂肪占比">
          {getFieldDecorator("fat_account", {
            rules: [{ required: true, message: "请输入食物脂肪占比!" }],
            initialValue: temporaryData != null ? temporaryData.fat_account : ""
          })(<Input placeholder="请输入食物脂肪占比" />)}
        </FormItem>
        <FormItem label="请输入度量单位">
          {getFieldDecorator("measure_unit", {
            rules: [{ required: true, message: "请输入度量单位!" }],
            initialValue: temporaryData != null ? temporaryData.measure_unit : ""
          })(<Input placeholder="请输入度量单位" />)}
        </FormItem>
        <FormItem label="请输入卡路里">
          {getFieldDecorator("measure_calorie", {
            rules: [{ required: true, message: "请输入卡路里!" }],
            initialValue: temporaryData != null ? temporaryData.measure_calorie : ""
          })(<Input placeholder="请输入卡路里" />)}
        </FormItem>
        <FormItem label="请输入食物描述">
          {getFieldDecorator("food_description", {
            rules: [{ required: true, message: "请输入食物描述!" }],
            initialValue: temporaryData != null ? temporaryData.food_description : ""
          })(<Input placeholder="请输入食物描述" />)}
        </FormItem>
        <FormItem label="请输入食物是否为主页">
          {getFieldDecorator("is_main", {
            rules: [{ required: false, message: "请输入食物是否为主页!" }],
            initialValue: temporaryData != null ? temporaryData.is_main : ""
          })(<Input placeholder="请输入食物是否为主页" />)}
        </FormItem>
      </Form>
    );
  }
  componentDidMount() {
    this.props.onBindChild(this);
  }
}
const FoodAddForm = Form.create()(FoodAddFormItem);

const mapStateToProps = state => ({
  temporaryData: state.getIn(["admin", "temporaryData"])
});

export default connect(mapStateToProps)(FoodAddForm);
