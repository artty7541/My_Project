//โมดูลการรักษา
import React,{Component} from 'react';
import HeaderLogin from './../../HeaderLogin';
import NavbarLogin from './../../Navbar';
import TableTeatment from './tableTreatment';
class Treatment extends Component{
  render(){
      return(
        <div className="container-fluid">
      <div className="row ">
        <HeaderLogin />
      </div>
      <div className="row Nav-shadow posi">
        <NavbarLogin />
      </div >
      <TableTeatment />
    </div>
      
      )
  }
}
export default Treatment;
