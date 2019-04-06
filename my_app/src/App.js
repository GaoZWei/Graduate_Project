import React, { Component } from "react";
import store from "./store";
import { Provider } from "react-redux";
import Register from "./pages/login/component/Register/register";
import Login from "./pages/login/component/Login/Login";
import Main from "./pages/main/index";
import Exercise from "./pages/exercise/index";
import ActionDetail from "./pages/exercise/component/ActionDetail/ActionDetail";
import Plan from "./pages/plan/index";
import PlanDetail from "./pages/plan/component/PlanDetail/PlanDetail";
import Food from "./pages/food/index";
import FoodSortList from "./pages/food/component/FoodSortList";
import FoodDetail from "./pages/food/component/FoodDetail/FoodDetail";
import News from "./pages/news/index";
import Personal from "./pages/personal/index";
import Implement from "./pages/implement/index";
import BMI from "./pages/implement/component/ImplementItem/BMI";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = { users: [] };
  }
  // fetchUsers() {
  //   return fetch("api/users", { accpet: "application/json" }).then(res => {
  //     return res.json().then(json => {
  //       this.setState({ users: json });
  //     });
  //   });
  // }
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Route path="/" exact component={Main} />
            <Route path="/exercise" exact component={Exercise} />
            <Route
              path="/exercise/:exercise_id"
              exact
              component={ActionDetail}
            />
            <Route path="/plan" exact component={Plan} />
            <Route path="/plan/detail" exact component={PlanDetail} />
            <Route path="/food" exact component={Food} />
            <Route path="/food/sortlist" exact component={FoodSortList} />
            <Route path="/food/detail" exact component={FoodDetail} />
            <Route path="/news" exact component={News} />
            <Route path="/implement" exact component={Implement} />
            <Route path="/implement/BMI" exact component={BMI} />
            <Route path="/personal" exact component={Personal} />
            <Route path="/register" exact component={Register} />
            <Route path="/login" exact component={Login} />
          </div>
        </BrowserRouter>
      </Provider>
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
