import React, { Component } from "react";
import { connect } from "react-redux";
class ActionVideo extends Component {
  render() {
    const { detailList } = this.props;
    return (
      <div>
        {detailList.map((item, index) => {
          return (
            <div style={{ border: "1px solid yellow" }} key={index}>
              <video
                id="my-video"
                controls
                preload="auto"
                width="100%"
                height="20%"
              >
                <source src={item.get("exercise_video")} type="video/mp4" />
              </video>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  detailList: state.getIn(["exercise", "detailList"])
});

export default connect(
  mapStateToProps,
  null
)(ActionVideo);
