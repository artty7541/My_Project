import React, { Component } from "react";
//import firebase from "./../../backEnd/firebase/index";
//import { Button, Navbar, Nav, NavDropdown,Dropdown } from "react-bootstrap";
import HeaderLogin from "./../../HeaderLogin";
import "./styh.css";
import NavbarLogin from "./../../Navbar";
import thor from "../Img/ss1.jpg";
import { Card, Form } from "react-bootstrap";
import axios from "axios";
// import imgcow1 from "../Img/ควายป่า.jpg";
// หน้า login แล้ว
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      param: this.props
    };
  }

  async componentDidMount() {
    await axios
      .get(
        "http://localhost:4000/user/logIn/" + this.state.param.currentUser.email
      )
      .then(res => {
        const getUser = res.data[0];
        this.setState({ user: getUser });
      });
    //await console.log(this.state.user.email)
  }

  render() {
    return (
      
      <div className="container-fluid ">
       
        <div className="row ">
          <HeaderLogin />
        </div>
        <div className="row">
          <NavbarLogin />
        </div>
        <div className="row ">
          
          <div className="row container-fluid bg-boxbox">
            <div className="col-md-3">
              <Card style={{ width: "99%", height: "546px" }}>
                <Card.Img variant="top" src={thor} />
                <Card.Body>
                  <Card.Title className="title">ยีนดีต้อนรับ!!</Card.Title>
                  <Card.Text>คูณ : {this.state.user.fname || ""}</Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-8 pad-l "  >
          <div className="row coler-bg2 border-c4">
          <div className="row r-margin">
            <Card border="primary" style={{ width: "18rem" , marginRight: "50px"}}>
              <Card.Header>ตรวจสอบสถานะการจัดทำ</Card.Header>
              <Card.Body>
                <Card.Title>0</Card.Title>
                <Card.Text>
                  จำนวนรายการสั่งทำทั้งหมด
                </Card.Text>
              </Card.Body>
            </Card>
            <Card border="primary" style={{ width: "18rem" , marginRight: "50px"}}>
              <Card.Header>ตรวจสอบสถานะการจัดทำ</Card.Header>
              <Card.Body>
                <Card.Title>0</Card.Title>
                <Card.Text>
                  จำนวนรายการที่รอดำเนินการ
                </Card.Text>
              </Card.Body>
            </Card>
            <Card border="primary" style={{ width: "18rem", marginRight: "10px" }}>
              <Card.Header>ตรวจสอบสถานะการจัดทำ</Card.Header>
              <Card.Body>
                <Card.Title>0</Card.Title>
                <Card.Text>
                  จำนวนรายการที่กำลังดำเนินการ
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="row">
          <Card border="primary" style={{ width: "18rem" , marginRight: "50px"}}>
              <Card.Header>ตรวจสอบสถานะการจัดทำ</Card.Header>
              <Card.Body>
                <Card.Title>0</Card.Title>
                <Card.Text>
               จำนวนรายการที่เสร็จสิ้น
                </Card.Text>
              </Card.Body>
            </Card>
            <Card border="primary" style={{ width: "18rem" , marginRight: "50px"}}>
              <Card.Header>ตรวจสอบสถานะการจัดทำ</Card.Header>
              <Card.Body>
                <Card.Title>0</Card.Title>
                <Card.Text>
                  จำนวนรายการสั่งทำที่ถูกยกเลิก
                </Card.Text>
              </Card.Body>
            </Card>
            <Card border="primary" style={{ width: "18rem" , marginRight: "50px"}}>
              <Card.Header>ตรวจสอบสถานะการจัดส่ง</Card.Header>
              <Card.Body>
                <Card.Title>0</Card.Title>
                <Card.Text>
                  จำนวนรายการสั่งทำที่กำลังจัดส่ง
                </Card.Text>
              </Card.Body>
            </Card>
           
          </div>
          </div>
        </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;

/*<Card style={{ width: "100%" }}>
                <Card.Header style={{ backgroundColor: "#0044ffde",color:"#ffffff" }}>สมาชิก</Card.Header>
                <ListGroup variant="flush">
                  <ListGroup.Item>Mr.hunk</ListGroup.Item>
                  <ListGroup.Item>Mr.Captain Americar</ListGroup.Item>
                  <ListGroup.Item>Mr. iron man</ListGroup.Item>
                </ListGroup>
              </Card>*/
