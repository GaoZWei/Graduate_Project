import React, { Component } from "react";
import { connect } from "react-redux";
import { actionCreator } from "../../store";
import { Form, Input, Select, Button } from "antd";
const FormItem = Form.Item;
const { Option } = Select;
//form代码，没有什么改进，把下面的提交按钮去掉就行
class FoodAddFormItem extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    const { temporaryData} = this.props;
    return (
      <Form ref="formItem">
        {/* <FormItem label="请输入锻炼组数">
          {getFieldDecorator("food_name", {
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
        </FormItem> */}
        <FormItem label="请输入食物名">
          {getFieldDecorator("food_name", {
            rules: [{ required: true, message: "请输入每组个数!" }],
            initialValue: temporaryData != null ? temporaryData.food_name : ""
          })(<Input placeholder="请输入每组个数" />)}
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
