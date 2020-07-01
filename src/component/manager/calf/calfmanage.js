import React,{useEffect,useState} from "react";
import axios from 'axios';
import TableCalve from './tablecalf';
import HeaderLogin from './../../../HeaderLogin';
import NavbarLogin from "./../../../Navbar";

export default function Induction() {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);





useEffect(()=>{
  const fetchPost=async()=>{
    setLoading(true);
    //set เป็น true เพื่อเข้าสู่สถานะโหลดข้อมูล
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
    //await บรรทัดอยู้ข้างล่าง นี้   รอไปก่อน จนกว่าจะโลหดเสร็จ
    setPosts(res.data);
    setLoading(false);
  }
  fetchPost();
},[]);


  return (
    <div className="container-fluid">
      <div className="row ">
        <HeaderLogin />
      </div>
      <div className="row Nav-shadow posi">
        <NavbarLogin />
      </div>
     
           
<TableCalve  posts={posts} loading={loading}/>
      <div className="row mar"></div>
    </div>
  );
}
/*
 https://mdbootstrap.com/docs/react/tables/datatables/

//npm install  mdbreact
//น่าจะเอาไว้รับผลมั้ง <Result> {checkbox1 && <p>{JSON.stringify(delete checkbox1.checkbox && checkbox1)}</p>}</Result>
 */
