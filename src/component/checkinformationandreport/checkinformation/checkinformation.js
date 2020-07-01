import React,{Component} from 'react';
import HeaderLogin from '../../../HeaderLogin';
import NavbarLogin from '../../../Navbar';
import Chardata from './ChartData';
import TableCheckinfo from './tablecheckinfo';
class CheckingInformation extends Component{
  render(){
      return(
          <div >
            <HeaderLogin/>
            <NavbarLogin/>
            <TableCheckinfo/>
            
        </div>
      
      )
  }
}
export default CheckingInformation;
//<TableCheckinfo/>