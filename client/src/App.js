import React, { useState } from "react"
import {BrowserRouter as Router, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './components/Home/Home.js';
import Register from './components/Register/Register.js';
import Main from './components/Main/MainPage.js';
import PrivateRoute from './components/privateRoute.js';
import {AuthContext} from "./components/context/auth.js";
import Information from "./components/Main/Info.js";
import Highlights from "./components/Highlights/Highlights.js";
import Articles from "./components/Articles/Articles.js";

function App(props){

    const existingTokens = JSON.parse(localStorage.getItem("tokens"));
    const [authTokens, setAuthTokens] = useState(existingTokens);
    
    const setTokens = (data) => {
      localStorage.setItem("tokens", JSON.stringify(data));
      setAuthTokens(data);
    }
  return(
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
        <Router>
            <Route path = '/' exact component = {Home} />
            <Route path = '/reg' exact component = {Register} />
            <PrivateRoute path = '/main' exact component = {Main} />
            <PrivateRoute path = '/moreInfo' exact component = {Information} />
            <PrivateRoute path = '/highlights' exact component = {Highlights} />
            <PrivateRoute path = '/articles' exact component = {Articles} />
        </Router>
    </AuthContext.Provider>
  )
};

export default App;