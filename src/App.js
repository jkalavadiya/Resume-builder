import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Layout from "./hoc/layout/layout";
import Builder from "./features/builder/builder";
import Home from "./features/home/home";
import AuthService from './shared/services/helper';
import Login from './Login/Sign_in';
import SignUp from './Login/Register';
import Register from "./Login/Register";
// import { useState } from "react/cjs/react.production.min";
// import header from './features/header/header';
// import { Register } from './Login/Register';
// import { Sign_in } from './Login/Sign_in';

// let isLoggedin = true;
// const App = () => {

//     if (isLoggedin) {
//         return <Layout / >
//     } else {
//         return <Register / >
//     }
// };
// export default App;

const App = () => {

  // const [registerEmail, setRegisterEmail] = useState("");
  // const [registerPassword, setRegisterPassword] = useState("");
  // const [loginEmail, setLoginEmail] = useState("");
  // const [loginPassword, setLogPassword] = useState("");

  // const register = async () => {

  // };

  // const login = async () => {

  // };

  // const logout = async () => {

  // };
  // const isLoggedIn = AuthService.checkLogin();
  return (
    <div className="App">
      {/* {isLoggedIn ? ( */}
        <Layout>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/resume-builder' component={Builder} />
            <Route exact path='/register' component={Register} />
            <Redirect to='/' />
          </Switch>
        </Layout>
      {/* ) : (
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/signUp' component={SignUp} />
          <Redirect to='/login' />
        </Switch>
      )} */}
    </div>
  );
}

export default App;
