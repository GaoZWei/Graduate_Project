import React, { Component } from "react";
import Exercise from "./pages/exercise/index";
import Plan from "./pages/plan/index";
import Food from "./pages/food/index";
import News from "./pages/news/index";
import Personal from "./pages/personal/index";
import Implement from "./pages/implement/index";
import BMI from "./pages/implement/component/BMI"


import { BrowserRouter, Route } from "react-router-dom";

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
      <BrowserRouter>
        <div>
          <Route path="/exercise" exact component={Exercise} />
          <Route path="/plan" exact component={Plan} />
          <Route path="/food" exact component={Food} />
          <Route path="/news" exact component={News} />
          <Route path="/implement" exact component={Implement} />
          <Route path="/implement/BMI" exact component={BMI} />
          <Route path="/personal" exact component={Personal} />
        </div>
      </BrowserRouter>
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
