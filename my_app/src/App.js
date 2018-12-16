import React, { Component } from "react";
import Nav from "./pages/common/Nav";
import Foot from "./pages/common/Foot";
// import "./App.css";
import Implement from "./pages/implement/index";
import { Layout} from "antd";
const { Content} = Layout;

class App extends Component {
  constructor() {
    super();
    this.state = { users: [] };
  }
  fetchUsers() {
    return fetch("api/users", { accpet: "application/json" }).then(res => {
      return res.json().then(json => {
        this.setState({ users: json });
      });
    });
  }
  render() {
    return (
      <Layout>
        <Nav />
        <Content style={{ padding: "0 50px", marginTop: 64 }}>
          {/* <div style={{ background: "#fff", padding: 24, minHeight: 380 }}>
            Content
            <div>健身知识库</div>
            <div>dasda</div>
          </div> */}
          <Implement />
        </Content>
        
        <Foot />
      </Layout>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome</h1>
      //   </header>
      //   <Button type="primary">Button</Button>
      //   <p className="App-intro" onClick={this.fetchUsers.bind(this)}>
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      //   {this.state.users.map((user, index) => {
      //     return (<h1 key={index}>{user.name}</h1>)
      //   })}
      // </div>
    );
  }
}

export default App;
