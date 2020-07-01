import React, { useState } from "react";
import { Form, Col, Button } from "react-bootstrap";
//import { Button } from "react-bootstrap";
import FormImg from "./FormImg";

import { Link } from "react-router-dom";
import firebase from "./../../backEnd/firebase/index";
import axios from "axios";
//ยังไม่ได้ทำ ระบบบลงทะเบียน

////////////////////////หน้าสำหรับกรอกข้อมูลการสมัคร [เจ้าของฟาร์ม]/////////////////////
export default function FormData() {
  const intailState = {
    user: "",
    pass: "",
    question: "",
    anwser: "",
    email: "",
    fname: "",
    lname: "",
    gender: "",
    id_card: "",
    address: "",
    day_of_birth: "",
    phone_num: "",
    fax: "",
    privilege: "เจ้าของฟาร์ม",
  };
  const [account, setAccount] = useState(intailState);
  const [checkpass, setCheckpass] = useState("");
  const [validated] = useState(false);
  //ยังไม่ได้ทำ  check Form
  const handleSubmit = (event) => {
    event.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(account.email, account.pass)
      .then((res) => {
        console.log(res.user);
        alert("สำเร็จ");
        
        axios.post(`http://localhost:4000/user/registor`, {
        user: account.user,
        pass:  account.pass,
        question: account.question,
        anwser: account.anwser,
        email: account.email,
        fname: account.fname,
        lname: account.lname,
        gender: account.gender,
        id_card: account.id_card,
        address: account.address,
        day_of_birth: account.day_of_birth,
        phone_num: account.phone_num,
        fax: account.fax,
        privilege: account.privilege
      })
      .then(res => {
        console.log(res);
        console.log(res.data);
        console.log(res.status);
        alert('ลงทะเบียนสำเร็จ');
      })
      .catch(error => {
        console.log(error);
        alert('เกิดความผิดพลาด');

      });
      })
      .catch((error) => {
        var errorCode = error.code;
        

        if (errorCode === "auth/email-already-in-use") {
          alert("Email มีผู้ใช้แล้ว");
        }
        if (errorCode === "auth/invalid-email") {
          alert("กรอกข้อมููลให้ครบ");
        }
        if (errorCode === "auth/weak-password") {
          alert("รหัสผ่านไม่ถูกต้อง");
        }
     
        
      });
 
  };

  return (
    <div>
      <Form noValidate validated={validated}>
        <Form.Row>
          <Col md={{ span: 4, offset: 1 }}>
            <Form.Group controlId="formUserId">
              <Form.Label>ไอดี</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="กรอกไอดี 6 ตัว ขึ้นไป"
                value={account.user}
                onChange={(e) => {
                  setAccount({ ...account, user: e.target.value });
                }}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>รหัสผ่าน</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="กรอกรหัสผ่าน 6 หลัก ขึ้นไป"
                value={account.pass}
                onChange={(e) => {
                  setAccount({ ...account, pass: e.target.value });
                }}
              />
            </Form.Group>

            <Form.Group controlId="formBasicRePassword">
              <Form.Label>ยืนยันรหัสผ่าน</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="กรอกรหัสผ่านอีกครัง"
                value={checkpass}
                onChange={(e) => {
                  setCheckpass(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group controlId="formGroupEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="กรอก Email"
                value={account.email}
                onChange={(e) => {
                  setAccount({ ...account, email: e.target.value });
                }}
              />
            </Form.Group>

            <Form.Group controlId="validationCustom01">
              <Form.Label>ชื่อ</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="กรอกชื่อ"
                value={account.fname}
                onChange={(e) => {
                  setAccount({ ...account, fname: e.target.value });
                }}
              />
            </Form.Group>

            <Form.Group controlId="validationCustom02">
              <Form.Label>นามสกุล</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="กรอกนามสกุล"
                value={account.lname}
                onChange={(e) => {
                  setAccount({ ...account, lname: e.target.value });
                }}
              />
            </Form.Group>

            <Form.Group controlId="formGridState">
              <Form.Label>เพศ</Form.Label>
              <Form.Control
                as="select"
                value={account.gender}
                onChange={(e) => {
                  setAccount({ ...account, gender: e.target.value });
                }}
              >
                <option>ชาย</option>
                <option>หญิง</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="validationCustom03">
              <Form.Label>เลขบัตรประชาชน</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="เลขบัตร 13 หลัก"
                value={account.id_card}
                onChange={(e) => {
                  setAccount({ ...account, id_card: e.target.value });
                }}
              />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea4">
              <Form.Label>วันเกิด</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="วันเกิด"
                value={account.day_of_birth}
                onChange={(e) => {
                  setAccount({ ...account, day_of_birth: e.target.value });
                }}
              />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>ที่อยู่</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="บ้านเลขที่ หมู่"
                value={account.address}
                onChange={(e) => {
                  setAccount({ ...account, address: e.target.value });
                }}
              />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea2">
              <Form.Label>เบอร์โทร</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="เบอร์โทรศัพท์"
                value={account.phone_num}
                onChange={(e) => {
                  setAccount({ ...account, phone_num: e.target.value });
                }}
              />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea3">
              <Form.Label>fax.</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="fax"
                value={account.fax}
                onChange={(e) => {
                  setAccount({ ...account, fax: e.target.value });
                }}
              />
            </Form.Group>
            <Form.Group controlId="formGridquestion">
              <Form.Label>คำถาม</Form.Label>
              <Form.Control
                as="select"
                value={account.question}
                onChange={(e) => {
                  setAccount({ ...account, question: e.target.value });
                }}
              >
                <option>สัตว์เลี้ยงของคุณชื่ออะไร</option>
                <option>คุณชอบสีอะไร</option>
                <option>แฟนของคุณคือใคร</option>
                <option>คูณสอบเที่ยวที่ไหน</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.aswer">
              <Form.Label>คำตอบ</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="คำตอบ"
                value={account.anwser}
                onChange={(e) => {
                  setAccount({ ...account, anwser: e.target.value });
                }}
              />
            </Form.Group>
          </Col>

          <Col md={{ span: 4, offset: 1 }} className="text-center ">
            <div>
              <FormImg />
            </div>
          </Col>
        </Form.Row>
        <hr />
        <div className="row  ">
          <div className="text-center container-fluid">
            <Form.Group>
              <Button
                type="submit"
                className="button-w2"
                onClick={(event) => handleSubmit(event)}
              >
                ตกลง
              </Button>

              <Link to="/login">
                <Button variant="danger" className="button-w2">
                  ยกเลิก
                </Button>
              </Link>
            </Form.Group>
          </div>
        </div>
      </Form>
    </div>
  );
}
//form กรอกข้อมูลสมัคร
//...account   ไม่ต้อง พิมพ์เยอะ

//useEffect  ดัก การเปลี่ยนแปลงcomponent

/*firebase.auth().createUserWithEmailAndPassword(account.email, account.password).then(function(){
      
    })
      .catch(function(error) {
        var errorMessage = error.message;
        alert(errorMessage);
      });
*/
