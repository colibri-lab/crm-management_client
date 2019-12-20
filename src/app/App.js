import React, { memo } from "react";
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from "react-router-dom";
import Home from "./home/homeContainer/Home";
import NotFound from "./home/NotFound/NotFound";
import LoginContainer from "./home/authentification/loginContainer/LoginContainer";
import RegisterContainer from "./home/authentification/registerContainer/RegisterContainer";
import { connect } from 'react-redux'
import { getUsers } from './home/@duck/operations'
import { compose } from "redux";


const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={LoginContainer} />
        <Route path="/register" component={RegisterContainer} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
const mapStateToProps = state => ({
  users: state.home.users
})
export default compose(
  connect(mapStateToProps, { getUsers }),
  memo
)(App)
