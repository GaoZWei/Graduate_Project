import React, { Component } from "react";
import testVideo from "../../../../statics/exercise.mp4";
class ActionVideo extends Component {
  render() {
    return (
      <div
        style={{ border: "1px solid yellow" }}
      >
        <video id="my-video" controls preload="auto" width="85%" height="20%">
          <source src={testVideo} type="video/mp4" />
        </video>
      </div>
    );
  }
}
export default ActionVideo;
