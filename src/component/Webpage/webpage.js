import React, { Component } from 'react';
import "../styleWebpage.css";
//ยังไม่ได้ชื่อมภาพกับserver
import imgcow1 from "../Img/ควายป่า.jpg";
/*import cow from "../Img/cow.png";
import cow2 from "../Img/cow2.png";
import cow3 from "../Img/cow3.png";
import cow4 from "../Img/cow4.png";
import cow5 from "../Img/cow5.png";
import cow6 from "../Img/cow6.png";*/
import Header from '../../Header';





class Webpage extends Component{

  render(){
    return(
      <div className="container-fluid">
        
    

        <Header/>
            
        <div className="row" >
     
       <img className="bg-img" src={imgcow1} alt="asd"/>
      
       <div  className="slide-right center2 coler-bg"><div style={{fontSize:"2.5vw"}} className="slide-right-text01">   Buffalo Registration and Pedigree Online</div><div style={{fontSize:"2vw"}} className="slide-right-text01">การขึ้นทะเบียนกระบือและออกใบพันธุ์ประวัติกระบือออนไลน์ </div></div>
        </div>
        <div className="footer-style2 row ">
          <div className="row footer-padding container-fluid">
            <div className="col-md-3">
              <li>ผู้พัฒนา</li>
              <ul>
                <li>นายกิตติวัฒน์ ศรีชัยพล</li>
                <li>นายไชยวัฒน์ อธิกรม</li>
              </ul>
            </div>
            <div className="col-md-3">
              <li>ที่ปรึกษา</li>
              <ul>
                <li>ดร.ภูวิศสรณ์ ภูมิสรณคมณ์</li>
              </ul>
            </div>
            <div className="col-md-3">
              <li>ติดต่อได้ที่</li>
              <ul>
                <li>0928412006</li>
                <li>jaykittiwat2542@gmail.com</li>
              </ul>
            </div>
            <div className="col-md-3">
              <li>หมายเหตุ</li>
              <ul>
                <li>version 0.1(Beta)</li>
              
              </ul>
            </div>
          </div>
        </div>
      
        
      </div>
    )
  }
}

export default Webpage;

/*
<div className="r4-pad container-fluid" >
<div className="row">
    <div className="col-md box-bg"><img src={cow} alt="cow" className="img1-box" ></img> <p className="box-style1">ระบบบันทึกพันธุ์ประวัติโค</p>   <p className="box-style2">สามารถบันทึกสายพันธุ์ประวัติโคได้ </p></div>
    <div className="col-md box-bg "><img src={cow2} alt="cow2" className="img2-box" ></img> <p  className="box-style1">ระบบบันทึกการสืบพันธุ์แม่โค</p> <p className="box-style2"> TEXT</p></div>
    <div className="col-md box-bg"><img src={cow3} alt="cow3" className="img3-box" ></img> <p   className="box-style1">ระบบบันทึกการจัดการลูกโค</p>  <p className="box-style2">บันทึกข้อมูล การสูญเขา อย่านม ตีเบอร์ ของลูกโค</p></div>
</div>
<div className="row">
    <div className="col-md box-bg"><img src={cow4} alt="cow4" className="img4-box" ></img> <p  className="box-style1">ระบบบันทึกการรักษา</p>         <p className="box-style2">บันทึกการรักษา โรคทั่วไป การถ่ายพยาธิ การฉีดวัคซีน ของโค</p></div>
    <div className="col-md box-bg"><img src={cow5} alt="cow5" className="img5-box" ></img> <p  className="box-style1">แจ้งเตือนกิจกรรมต่าง ๆ</p>       <p className="box-style2">แจ้งเตือนวันที่ สำหรับดำเนินกิจกรรมต่าง ๆ ให้ผู้ใช้ได้รับทราบ </p></div>
    <div className="col-md box-bg"><img src={cow6} alt="cow6" className="img6-box" ></img> <p  className="box-style1">ออกรายงาน</p>                <p className="box-style2">ออกรายงาน และแสดงข้อมูลสถิติ </p></div>
</div>
</div>





    <div className="row footer-padding container-fluid">
            <div className="col-md-4"><h3>ผู้พัฒนา</h3><ul><li>นายกิตติวัฒน์ ศรีชัยพล</li><li>นายไชยวัฒน์  อธิกรม</li></ul></div> 
            <div className="col-md-4"><h3>ที่ปรึกษา</h3><ul><li>ดร.ภูวิศสรณ์ ภูมิสรณคมณ์</li></ul></div> 
            <div className="col-md-4"><h3>ติดต่อได้ที่</h3><ul><li>0928412006</li></ul></div>
          </div>
*/