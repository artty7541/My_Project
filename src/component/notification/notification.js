import React,{Component} from 'react';
import HeaderLogin from './../../HeaderLogin';
import NavbarLogin from './../../Navbar';
import PaperNotificaion from './paper';

class Notification extends Component{
  render(){
      return(
          <div  >
            <HeaderLogin/>
            <div className="row Nav-shadow">
        <NavbarLogin />
      </div>
            
            <PaperNotificaion/>
     

        </div>
      
      )
  }
}
export default Notification;
