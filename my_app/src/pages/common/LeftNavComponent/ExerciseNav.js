import React, { Component, Fragment } from "react";
import ExerciseNavSearch from './ExerciseNavSearch';
import ExerciseNavItem from './ExerciseNavItem';
class ExerciseNav extends Component {
  render() {
    return (
      <Fragment>
        <ExerciseNavSearch/>
        <ExerciseNavItem/>
      </Fragment>
    );
  }
}
export default ExerciseNav;
