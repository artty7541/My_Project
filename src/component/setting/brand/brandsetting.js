//โมดูลการรักษา
import React,{Component} from 'react';
import HeaderLogin from './../../../HeaderLogin';
import NavbarLogin from './../../../Navbar';
import PaperBrand from './PaperBrand';
class Paperbrand extends Component{
  render(){
      return(
        <div className="container-fluid">
      <div className="row ">
        <HeaderLogin />
      </div>
      <div className="row Nav-shadow posi">
        <NavbarLogin />
      </div >
      <PaperBrand />
    </div>
      
      )
  }
}
export default Paperbrand;
