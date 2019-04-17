import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreator } from "./store";
import Nav from "../common/Nav";
import NavBreadcrumb from "../common/NavBreadcrumb";
import Foot from "../common/Foot";
import "./style.css";
import { Layout, Col } from "antd";
const { Content } = Layout;

class Implement extends Component {
  render() {
    const { implementList } = this.props;
    return (
      <Layout>
        <Nav />
        <Content className="implement_contentarea">
          <NavBreadcrumb />
          <div className="implement_body">
            <div className="implement_title"> 实用工具集合</div>
            <div className="implement_listarea">
              {implementList.map((item, index) => {
                return (
                  <Col span={12} key={index}>
                    <Link
                      to={"/implement/" + item.get("implement_id")}
                    >
                      <div className="implement_item">
                        <Col span={2} />
                        <Col span={6}>左侧图片
                       { item.get("implement_id")}
                        </Col>
                        <Col span={16}>
                          <div className="implement_topic">
                            {item.get("implement_title")}
                          </div>
                          <div className="introduce">
                            {item.get("implement_description")}
                          </div>
                        </Col>
                      </div>
                    </Link>
                  </Col>
                );
              })}
            </div>
          </div>
        </Content>
        <Foot />
      </Layout>
    );
  }
  componentDidMount() {
    this.props.changeImplementData();
  }
}
const mapStateToProps = state => {
  return {
    implementList: state.getIn(["implement", "implementList"])
  };
};
const mapDispatchToProps = dispatch => ({
  changeImplementData() {
    const action = actionCreator.changeImplementInfo();
    dispatch(action);
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Implement);
