import React,{Component} from "react";
import Signout from "./Signout";
import "./styleNavbar.css";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import firebase from "./backEnd/firebase"

//import axios from "axios";
//react------ HOOK



class NavbarLogin extends Component {

 constructor(props){
   super(props);
   this.state={
     currentUser:""
   }
 }
   async componentDidMount() {
    
    await firebase.auth().onAuthStateChanged(user => {
   
      if (user) {
        this.setState({
          currentUser: user.email
        });
       
      }
    });


  }
  

render(){
 

  return (
    <div className="container-fluid posi">
      <nav className="row ">
        <div className="dropdown">
          <Link to="/login">
            {" "}
            <div className="dropbtn">หน้าหลัก</div>
          </Link>
        </div>

        <div className="dropdown">
          <Link to="/regiscow">
            <div className="dropbtn">ลงทะเบียนกระบือ</div>
          </Link>
        </div>

        <div className="dropdown">
          <div className="dropbtn">ค้นหาและตรวจสอบสถานะ</div>
          <div className="dropdown-content">
            
            <Link to="/induction">
              <div>ค้นหาและตรวจสอบสถานะการขึ้นทะเบียน</div>
            </Link>
            <Link to="/breed">
              <div>บันทึกการผสมพันธุ์</div>
            </Link>
            <Link to="/checkup">
              <div>บันทึกการตรวจท้อง</div>
            </Link>
            <Link to="/calve">
              <div>บันทึกการคลอดลูก</div>
            </Link>
            <Link to="/abortion">
              <div>บันทึกการแท้งลูก</div>
            </Link>
          </div>
        </div>

        <div className="dropdown">
          <Link to="/calfmanage">
            <div className="dropbtn">การจัดการลูกโค</div>
          </Link>
        </div>

        <div className="dropdown">
          <Link to="/treatment">
            <div className="dropbtn">บันทึกการรักษา</div>
          </Link>
        </div>

        <div className="dropdown">
          <Link to="/notification">
            <div className="dropbtn">การแจ้งเตือน</div>
          </Link>
        </div>

        <div className="dropdown">
          <div className="dropbtn">ตรวจสอบข้อมูลและออกรายงาน</div>
          <div className="dropdown-content">
            <Link to="/checkinformation">
              <div>ตรวจสอบข้อมูล</div>
            </Link>
            <Link to="/report">
              <div>ออกรายงาน</div>
            </Link>
          </div>
        </div>

        <div className="dropdown">
          <div className="dropbtn">ตั้งค่าระบบฟาร์ม</div>
          <div className="dropdown-content">
            <Link to="/brandsetting">
              <div>ตั้งค่าแบรนด์</div>
            </Link>
            <Link to="/usersetting">
              <div>ตั้งค่าข้อมูลผู้ใช้</div>
            </Link>
            <Link to="/farmsetting">
              <div>ตั้งค่าระบบฟาร์ม</div>
            </Link>
            <Link to="/drugsetting">
              <div>ตั้งค่าระบบยา</div>
            </Link>
          </div>
        </div>

        <div className="dropdown">
          <Link to="/instructionmanual">
            <div className="dropbtn">คู่มือการใช้งาน</div>
          </Link>
        </div>

        <div className="col-md-1"></div>
        <div className="col-md">
          <div className="row" style={{ float: "right", marginTop: "8px" ,marginRight:"5%"}}>
         
  <Avatar style={{ backgroundColor: "#ff5722" }}>{this.state.currentUser.substring(0,1)}</Avatar>
  <div style={{ color:"#ffffff", marginTop: "8px" ,paddingLeft:"5%"}}>{this.state.currentUser}</div>
         
          </div>
        </div>

        <div className="col-md-1 floatRight sigout-div ">
          <Signout />
        </div>
      </nav>
    </div>
  );
}
 
}

export default NavbarLogin;