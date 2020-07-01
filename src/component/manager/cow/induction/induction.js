import React, { Component } from "react";
import axios from "axios";
//import TableInduction from "./tableintrution";
import HeaderLogin from "./../../../../HeaderLogin";
import NavbarLogin from "../../../../Navbar";
import firebase from "./../../../../backEnd/firebase";
import "./../CowStyle.css";



class Induction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: false,
    };
  }

  componentDidMount () {
    this.setState({...this.state,loading:true})
  firebase.auth().onAuthStateChanged(user => {
      if (user) {
        axios.get("http://localhost:4000/user/logIn/" + user.email).then(res=>{
            return res.data[0].user
        }).then(resEmail=>{
          axios.get(
              "http://localhost:4000/notification/"+resEmail
            ).then(res=>{this.setState({posts:res.data,loading:false})}).then(()=>console.log(Object.keys(this.state.posts)))
        })
      }
    });
   
  }
   

  render() {
 
    return (
      <div className="container-fluid">
        <div className="row ">
          <HeaderLogin />
        </div>
        <div className="row Nav-shadow posi">
          <NavbarLogin />
        </div>
    
        <div className="row mar"></div>
      </div>
    );
  }
}

export default Induction;

// <TableInduction posts={this.state}/>