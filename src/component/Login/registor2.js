import React, { Component } from "react";
import "../styleWebpage.css";

import FormData from "./Form2";

import Header from "./../../Header";
////////////////////////พนักงาน/////////////////////////
class Registor2 extends Component {
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
   
      
        <div className="row coler-bg1 border-c">
          <div className="container-fluid border-c2  "style={{ fontSize: "40px", textAlign: "center" ,backgroundColor: "#32a3ff", color: "white" }}>ระบบลงทะเบียนเจ้าหน้าที่</div>

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

export default Registor2;
