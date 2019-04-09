import React, { Component } from "react";
import Nav from "../common/Nav";
import Foot from "../common/Foot";
import NavBreadcrumb from "../common/NavBreadcrumb";
import NewsList from "./component/NewsList/NewsList";
import "./style.css";
import { Layout, Button } from "antd";
class News extends Component {
  render() {
    return (
      <Layout className="news_area_out">
        <Nav />
        <div className="news_area">
          <div className="news_area_nav">
            <NavBreadcrumb />
          </div>
          <div className="news_part">
            <div className="news_part_top">
              <div className="news_part_top_title">增肌</div>

              <Button type="primary" className="news_part_top_btn">
                上肢
              </Button>
              <Button type="primary" className="news_part_top_btn">
                上肢
              </Button>
              <Button type="primary" className="news_part_top_btn">
                上肢
              </Button>
              <Button type="primary" className="news_part_top_btn">
                上肢
              </Button>
              <Button type="primary" className="news_part_top_btn">
                上肢
              </Button>
            </div>
            <div>
              <NewsList />
            </div>
          </div>
        </div>
        <Foot />
      </Layout>
    );
  }
}
export default News;
