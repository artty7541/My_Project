import React, { Component } from 'react';
import Monitor from './Monitor';
import {BrowserRouter,Route,Switch} from "react-router-dom";
//import Loginpage from './component/Login/Loginpage';
import Registor from './component/Login/registor';
import Registor2 from './component/Login/registor2';
import login from "./component/Login/login";
import regiscow from './component/regiscow/regiscow';

import induction from "./component/manager/cow/induction/induction";
import breed from "./component/manager/cow/breed/breed";
import checkup from "./component/manager/cow/checkUp/checkup";
import calve from "./component/manager/cow/calve/calve";
import abortion from "./component/manager/cow/abortion/abortion";
import calfmanage from "./component/manager/calf/calfmanage";
import treatment from "./component/treatment/treatment";
import notification from "./component/notification/notification";
import checkinformation from "./component/checkinformationandreport/checkinformation/checkinformation";
import report from "./component/checkinformationandreport/report/report";
import brandsetting from "./component/setting/brand/brandsetting";
import drugsetting from "./component/setting/drug/drugsetting";
import farmsetting from "./component/setting/farm/farmsetting";
import usersetting from "./component/setting/user/usersetting";
import instructionmanual from "./component/instructionmanual/instructionmanual";

// Router to path componen
class App extends Component{
  
  renderRouter(){
    return(
      <Switch>
        <Route exact path="/" component={Monitor}/>
        <Route path="/login" component={login}/>
        <Route path="/registor" component={Registor}/>
        <Route path="/registor2" component={Registor2}/>
        <Route path="/regiscow" component={regiscow}/>
      
        <Route path="/induction" component={induction}/>
        <Route path="/breed" component={breed}/>
        <Route path="/checkup" component={checkup}/>
        <Route path="/calve" component={calve}/>
        <Route path="/abortion" component={abortion}/>
        <Route path="/calfmanage" component={calfmanage}/>
        <Route path="/treatment" component={treatment}/>
        <Route path="/notification" component={notification}/>
        <Route path="/checkinformation" component={checkinformation}/>
        <Route path="/report" component={report}/>
        <Route path="/brandsetting" component={brandsetting}/>
        <Route path="/drugsetting" component={drugsetting}/>
        <Route path="/farmsetting" component={farmsetting}/>
        <Route path="/usersetting" component={usersetting}/>
        <Route path="/instructionmanual" component={instructionmanual}/>
      </Switch>
    )
  }
  render(){
    
    return(
      <div>
      <BrowserRouter>{this.renderRouter()}</BrowserRouter>
      </div>
    )
  }
}

export default App;