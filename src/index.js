import React, { StrictMode } from "react";
import ReactDOM from 'react-dom';
import './index.css'
import App from './App'
import { BrowserRouter as Router} from "react-router-dom";
import StateProvider from "./components/Context/StateProvider";
import initialState from "./components/Context/initialState";
import reducer from "./components/Context/reducer"


ReactDOM.render(
    <Router> 
      <StateProvider initialState={initialState} reducer={reducer}>
       <App/>
      </StateProvider>
    </Router>
,
document.getElementById('root'))