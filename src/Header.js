import React, { Component } from "react";

import { Link } from "react-router-dom";
import "./HeaderStyle.css";
class Header extends Component {
  render() {
    return (
      <div>
        <div className="row color-head1">
          <div className="col-md-5 color-head1" >
            <Link to="/" style={{ textDecoration: "none" }}>
              <div className="row container-fluid r2-c1 ">
              การขึ้นทะเบียนกระบือและออกใบพันธุ์ประวัติกระบือออนไลน์
              </div>
              <div className="row  container-fluid r2-c1-t2">
              Buffalo Registration and Pedigree Online
               </div>
            </Link>
          </div>
          <div className="col-md-5 " ></div>
          <div className="col-md-2 " >
        <div className="row float-right">
        
             <div className="dropdown" style={{textAlign:"center"}} >
            <Link to="/login"  style={{textDecorationLine:"none"}}><div className="dropbtn1" style={{paddingTop:"20px"}}>เข้าสู่ระบบ</div></Link> 
            </div>
            
            <div className="dropdown" style={{textAlign:"center"}}>
              <div className="dropbtn1" style={{paddingTop:"20px"}}>ลงทะเบียน  <i className="fa fa-caret-down"></i></div>
              <div className="dropdown-content" style={{textAlign:"left"}}>
                <Link to="/registor">เกษตรกร</Link>
                <Link to="/registor2">เจ้าหน้าที่</Link>
              </div>
            </div>

           
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
