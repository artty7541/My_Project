////////////////////////////หน้า  Login/////////////////////////////

import React, { Component } from "react";
import "../styleWebpage.css";
import { Form, Button } from "react-bootstrap";
import Header from "../../Header";
import firebase from "./../../backEnd/firebase/index";
import Home from "./../Home/homepage";

//import { BrowserRouter, Route, Switch, Router,Redirect,Link } from "react-router-dom";
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      message: "",
      currentUser: null
    };
  }

  // setState ตาม name ที่ได้รับมาจากForm
  onChange = e => {
    const { name, value } = e.target;
    //console.log(name + ":" + value);
    this.setState({
      [name]: value
    });
  };

  handleSignIn = e => {
    //console.log(this.state.email);
    //console.log(this.state.password);

    e.preventDefault();
    const { email, password } = this.state;

    //firebase.auth().xxxMethod()
    //firebase.auth().xxxMethod().then(function() || ()=>{}  )

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {})
      .catch(error => {
        this.setState({
          message: error.message
        });
        alert("ไอดี หรือ  รหัสผ่าน ของท่านไม่ถูกต้อง");
      });
  };
  //หลังจาก renderแล้วจะทำการเชคว่ามีการล็อคอินอยู่ไหม ถ้ามี ไป setState currentUser: user

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          currentUser: user
        });
      }
    });
  }

  showpageLogin = () => {
    return (
      <>
        {" "}
        <Header />
        <div className="row">
          <div className="center3 bg-img slide-right  image-bg1">
            <div className="container-fluid">
              <div className="row r-martop">
                <Form
                  className="container-fluid form-padding bg-box-log-color"
                  onSubmit={this.handleSignIn}
                >
                  <div className="title1">เข้าสู่ระบบ</div>
                  <Form.Group
                    controlId="formBasicEmail"
                    className="form-padding-top"
                  >
                    <Form.Label>ไอดีผู้ใช้</Form.Label>
                    <Form.Control
                      required
                      name="email"
                      type="text"
                      placeholder="Enter email"
                      onChange={this.onChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>รหัสผ่าน</Form.Label>
                    <Form.Control
                      required
                      name="password"
                      type="password"
                      placeholder="Password"
                      onChange={this.onChange}
                    />
                  </Form.Group>
                  <div className="row">
                    <Form.Group controlId="formBasicCheckbox" className="col-6">
                      <Form.Check type="checkbox" label="จำรหัสผ่าน" />
                    </Form.Group>
                    <div className="col-6 text-right">
                      <a href="#restpassword">ลืมรหัสผ่าน</a>
                    </div>
                  </div>
                  <Button
                    className="container-fluid bt "
                    aria-disabled="true"
                    type="submit"
                  >
                    เข้าสู่ระบบ
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
        
      
      </>
    );
  };

  render() {
    if (this.state.currentUser) {
      return <Home currentUser={this.state.currentUser} />;
    }
    //if user haven't id and password  return -->
    return <div className="container-fluid ">{this.showpageLogin()}</div>;
  }
}
export default Login;

//กดปุ่ม ---->link to component (ส่งprop ไปตาม link) อีกทีหนึ่ง น่าจะแก้ได้
