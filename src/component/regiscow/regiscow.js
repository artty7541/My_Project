import React, { Component } from "react";
import HeaderLogin from "./../../HeaderLogin";
import NavbarLogin from "./../../Navbar";
import FromRegiscow from "./FormRegiscow";
class Header extends Component {
  render() {
    return (
      <div className="container-fluid">
      <div className="row ">
        <HeaderLogin />
      </div>
      <div className="row Nav-shadow posi">
        <NavbarLogin />
      </div >
      <FromRegiscow />
    </div>
    );
  }
}
export default Header;
