

///////////////////////////////น่าจะไม่ได้ใช้//////////////////////////



/*import React, { Component } from "react";
import firebase from "./../../backEnd/firebase/index";
//import Home from './../Home/homepage.js';

import Home from "./../Home/homepage";
import { BrowserRouter, Route, Switch, Router,Redirect,Link } from "react-router-dom";

class Loginpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    
    };
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          currentUser: user
        });
        //console.log("Login Success");
      }
    });
  
  }
 
  render() {
    return (
      <div>
        {this.state.currentUser ? (<Home/>
        ) : (<Link to="/login" />
          
        )}
      </div>
    );
  }
}
export default Loginpage;
*/