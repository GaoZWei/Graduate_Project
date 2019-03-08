import React, { Component } from "react";
import { Input } from "antd";
const Search = Input.Search;
class ExerciseNavSearch extends Component {
  render() {
    return (
      <div style={{ marginTop: 15 }}>
        <Search
          placeholder="动作名"
          onSearch={value => console.log(value)}
          style={{ width: 300 }}
        />
      </div>
    );
  }
}
export default ExerciseNavSearch;
