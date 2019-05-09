import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Input } from "antd";
const FormItem = Form.Item;
//form代码，没有什么改进，把下面的提交按钮去掉就行
class ExerciseAddFormItem extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    const { temporaryData } = this.props;
    return (
      <Form ref="formItem">
        <FormItem label="请输入动作名">
          {getFieldDecorator("exercise_name", {
            rules: [{ required: true, message: "请输入动作名!" }],
            initialValue: temporaryData != null ? temporaryData.exercise_name : ""
          })(<Input placeholder="请输入动作名" />)}
        </FormItem>
        <FormItem label="请输入动作分类">
          {getFieldDecorator("exercise_sort", {
            rules: [{ required: false, message: "请输入动作分类!" }],
            initialValue: temporaryData != null ? temporaryData.exercise_sort : ""
          })(<Input placeholder="请输入动作分类" />)}
        </FormItem>
        <FormItem label="请输入动作难度">
          {getFieldDecorator("exercise_difficulty", {
            rules: [{ required: false, message: "请输入动作难度!" }],
            initialValue: temporaryData != null ? temporaryData.exercise_difficulty : ""
          })(<Input placeholder="请输入动作难度" />)}
        </FormItem>
        <FormItem label="请输入动作目标肌肉">
          {getFieldDecorator("exercise_sort_aim", {
            rules: [{ required: false, message: "请输入动作目标肌肉!" }],
            initialValue: temporaryData != null ? temporaryData.exercise_sort_aim : ""
          })(<Input placeholder="请输入动作目标肌肉" />)}
        </FormItem>
        <FormItem label="请输入动作其他肌肉">
          {getFieldDecorator("exercise_sort_other", {
            rules: [{ required: false, message: "请输入动作其他肌肉!" }],
            initialValue: temporaryData != null ? temporaryData.exercise_sort_other : ""
          })(<Input placeholder="请输入动作其他肌肉" />)}
        </FormItem>
        <FormItem label="请输入动作所需器械">
          {getFieldDecorator("exercise_sort_facility", {
            rules: [{ required: false, message: "请输入动作所需器械!" }],
            initialValue: temporaryData != null ? temporaryData.exercise_sort_facility : ""
          })(<Input placeholder="请输入动作所需器械" />)}
        </FormItem>
        <FormItem label="请输入动作描述">
          {getFieldDecorator("exercise_description", {
            rules: [{ required: false, message: "请输入动作描述!" }],
            initialValue: temporaryData != null ? temporaryData.exercise_description : ""
          })(<Input placeholder="请输入动作描述" />)}
        </FormItem>
        <FormItem label="请输入动作主图路径">
          {getFieldDecorator("exercise_pic_main", {
            rules: [{ required: false, message: "请输入动作主图路径!" }],
            initialValue: temporaryData != null ? temporaryData.exercise_pic_main : ""
          })(<Input placeholder="请输入动作主图路径" />)}
        </FormItem>
        <FormItem label="请输入动作第一张图">
          {getFieldDecorator("exercise_pic_first", {
            rules: [{ required: false, message: "请输入动作第一张图!" }],
            initialValue: temporaryData != null ? temporaryData.exercise_pic_first : ""
          })(<Input placeholder="请输入动作第一张图" />)}
        </FormItem>
        <FormItem label="请输入动作第二张图">
          {getFieldDecorator("exercise_pic_second", {
            rules: [{ required: false, message: "请输入动作第二张图!" }],
            initialValue: temporaryData != null ? temporaryData.exercise_pic_second : ""
          })(<Input placeholder="请输入动作第二张图" />)}
        </FormItem>
        <FormItem label="请输入动作视频">
          {getFieldDecorator("exercise_video", {
            rules: [{ required: false, message: "请输入动作视频!" }],
            initialValue: temporaryData != null ? temporaryData.exercise_video : ""
          })(<Input placeholder="请输入动作视频" />)}
        </FormItem>
        <FormItem label="请输入动作部位图">
          {getFieldDecorator("exercise_body_pic", {
            rules: [{ required: false, message: "请输入动作部位图!" }],
            initialValue: temporaryData != null ? temporaryData.exercise_body_pic : ""
          })(<Input placeholder="请输入动作部位图" />)}
        </FormItem>
        <FormItem label="请输入动作是否为主页">
          {getFieldDecorator("is_main", {
            rules: [{ required: false, message: "请输入动作是否为主页!" }],
            initialValue: temporaryData != null ? temporaryData.is_main : ""
          })(<Input placeholder="请输入动作是否为主页" />)}
        </FormItem>
      </Form>
    );
  }
  componentDidMount() {
    this.props.onBindChild(this);
  }
}
const ExerciseAddForm = Form.create()(ExerciseAddFormItem);

const mapStateToProps = state => ({
  temporaryData: state.getIn(["admin", "temporaryData"])
});

export default connect(mapStateToProps)(ExerciseAddForm);
