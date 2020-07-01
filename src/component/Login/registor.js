import React, { Component } from "react";
import "../styleWebpage.css";
//import {Form} from 'react-bootstrap';
import FormData from "./Form";
//import imgcow1 from "../Img/imgcow1.jpg";
//import FormImg from './FormImg';
//import { Button } from "react-bootstrap";
import Header from "./../../Header";

class Registor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getLink: "https://mdbootstrap.com/img/Photos/Others/placeholder.jpg",
    };
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="container-fluid shadowstyle">
            <Header />
          </div>
        </div>
   
      
        <div className="row ">
          <div className="title-regis container-fluid">ระบบลงทะเบียนเจ้าของฟาร์ม</div>

          <div className="col-md-12">
            <FormData />
          </div>
        </div>
        <hr />

        <div className="row"></div>
      </div>
    );
  }
}

export default Registor;
