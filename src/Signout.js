import React,{Component} from "react";
//import { Button } from "react-bootstrap";
import firebase from "./backEnd/firebase/index";
import './styleNavbar.css'; 
import {Link} from "react-router-dom";




class Signout extends Component {
 

   logout = e => {
    //console.log("Logout");
    firebase.auth().signOut();
  };


  render() {
    return (
      <div >
            
                 <Link to ="/"><div className=" floatRight sigOut-color"  onClick={(e)=>this.logout(e)} >ออกจากระบบ</div></Link>

            
         
          </div>

          

    );
  }
}
export default Signout;
/* */