//โมดูลการรักษา
import React,{Component} from 'react';
import HeaderLogin from './../../../HeaderLogin';
import NavbarLogin from './../../../Navbar';
import PaperUser from './PaperUser';
class Paperuser extends Component{
  render(){
      return(
        <div className="container-fluid">
      <div className="row ">
        <HeaderLogin />
      </div>
      <div className="row Nav-shadow posi">
        <NavbarLogin />
      </div >
      <PaperUser />
    </div>
      
      )
  }
}
export default Paperuser;
