import React, { Component } from "react";
//import firebase from "./../../backEnd/firebase/index";
//import { Button, Navbar, Nav, NavDropdown,Dropdown } from "react-bootstrap";
import HeaderLogin from "./../../HeaderLogin";
import "./styh.css";
import NavbarLogin from "./../../Navbar";
import thor from "../Img/thor.jpg";
import { Card, Form } from "react-bootstrap";
import axios from "axios";

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
            <div className="col-md-7">
              <Card.Header
                style={{ backgroundColor: "#0044ffde", color: "#ffffff" }}
              >
                ข้อมูลฟาร์ม
              </Card.Header>
              <Form className="col-border">
                <Form.Group controlId="formGridEmail">
                  <Form.Label className="title2">ชื่อฟาร์ม</Form.Label>
                  <Form.Control disabled value={this.state.user.user || ""} />
                </Form.Group>
                <Form.Group controlId="formGridEmail">
                  <Form.Label className="title2">เจ้าของฟาร์ม</Form.Label>
                  <Form.Control disabled value={this.state.user.fname || ""} />
                </Form.Group>
                <Form.Group controlId="formGridEmail">
                  <Form.Label className="title2">ตำแหน่ง</Form.Label>
                  <Form.Control
                    disabled
                    value={this.state.user.privilege || ""}
                  />
                </Form.Group>
                <Form.Group controlId="formGridEmail">
                  <Form.Label className="title2">ที่อยู่</Form.Label>
                  <Form.Control
                    disabled
                    value={this.state.user.address || ""}
                  />
                </Form.Group>
                <Form.Group controlId="formGridEmail">
                  <Form.Label className="title2">ข้อมูลติดต่อ</Form.Label>
                  <Form.Control
                    disabled
                    value={this.state.user.phone_num || ""}
                  />
                </Form.Group>
              </Form>
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
