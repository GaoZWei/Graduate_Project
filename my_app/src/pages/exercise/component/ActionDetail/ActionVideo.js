import React, { Component } from "react";
import { Player ,BigPlayButton} from "video-react";
import { connect } from "react-redux";
import { actionCreator } from "../../store";
import { withRouter } from "react-router-dom";
class ActionVideo extends Component {
  render() {
    const { detailList } = this.props;
    return (
      <div>
        {detailList.map((item, index) => {
          return (
            // <div style={{ border: "1px solid yellow" }} key={index}>
            //   <video
            //     id="my-video"
            //     controls
            //     preload="auto"
            //     width="100%"
            //     height="20%"
            //   >
            //     <source src={item.get("exercise_video")} type="video/mp4" />
            //   </video>
            // </div>
              <Player
                playsInline
                // fluid="false"
                // width="100px"
                // height="100px"
                src={item.get("exercise_video")} 
              >
   <BigPlayButton position="center" />
              </Player>
        
          );
        })}
      </div>
    );
  }
  componentDidMount() {
    this.props.getExerciseDetail(this.props.match.params.exercise_id);
  }
}

const mapStateToProps = state => ({
  detailList: state.getIn(["exercise", "detailList"])
});
const mapDispatchToProps = dispatch => ({
  getExerciseDetail(exercise_id) {
    dispatch(actionCreator.getExerciseDetail(exercise_id));
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ActionVideo));
