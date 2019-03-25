import React, { Component } from "react";
import "../style.css";
import { Input } from "antd";
const Search = Input.Search;
class ExerciseNavSearch extends Component {
  render() {
    return (
      <div className="antd_input2">
        <Search
          placeholder="动作名"
          enterButton
          onSearch={value => console.log(value)}
          style={{ width: 300}}
          className="antd_input2_btn"
        />
      </div>
    );
  }
}
export default ExerciseNavSearch;
