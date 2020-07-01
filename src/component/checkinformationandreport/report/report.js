import React,{Component} from 'react';
import HeaderLogin from '../../../HeaderLogin';
import NavbarLogin from '../../../Navbar';
import TableReport from './tableReport';
class Header extends Component{
  render(){
      return(
          <div >
            <HeaderLogin/>
            <NavbarLogin/>
            <TableReport/>
        </div>
      
      )
  }
}
export default Header;
