import React,{Component} from 'react';
import  firebase from './firebase/index';
import{Button,Form} from 'react-bootstrap';

class BackEnd extends Component {

constructor(props){
  super(props);
  this.state={
    username:[]//get JSON Object
  }
}
/*////////////////////////////////read data//////////////////////////
handleOnCilck=(e)=>{
  //read data
  e.preventDefault();
  var firebaseRef=firebase.database().ref('user/username');
  firebaseRef.once('value').then((snapshot)=>{
    console.log(snapshot.key);//username
    console.log(snapshot.val());//jay1

    this.setState({username:snapshot.val()});

  });
  //insert child and insert data

}
*/
//////////////////////////////////insert child///////////////////////////
handleOnCilck=(e)=>{
  e.preventDefault();
  var firebaseRef=firebase.database().ref();
      firebaseRef.child("user3").push().set("jay3")
  //.push() is random UID to node or child
}

  render() {  
    

    return (

        <div >
          
          
              <Form onSubmit={(e)=>{this.handleOnCilck(e)}}>


                <Form.Group controlId="formBasicEmail">
                  <Form.Label>User name</Form.Label>
                  <Form.Control 
                  
                      type="text" 
                      placeholder="กรอก username" 
                      name="username"
                      value={this.state.username}
                      onChange={(e)=>{
                        this.setState(
                                  {
                                    username:e.target.value
                                  }
                                  )
                                  }}/>
                </Form.Group>

               
                <Form.Group>
                
                  <Button variant="success" type="submit" name="insert">Insert</Button>{' '}
                  
                </Form.Group>
               </Form>
              </div>
          
          
        
      
    )
  }
}
export default BackEnd;


/**************************************** login
import React,{Component} from 'react';
import  firebase from '../firebase/index';
import App2 from './AppSignIn';
import{Button,Form} from 'react-bootstrap';
class App extends Component {
//state recive  user_Id
constructor(props){
  




  super(props);
  this.state={
      email: '',
      password: '',
      currentUser: null,
      message: ''
  }
  
}
reload=()=>{
  
}

//Fucntion Onclick (เมื่อกดปุ้ม เข้าสู่ระบบ)
  handleSignup=(e)=>{
    //console.log(this.state.email);
    //console.log(this.state.password);

    e.preventDefault();
    const { email, password } = this.state
 
    //firebase.auth().xxxMethod()
    //firebase.auth().xxxMethod().then(function()|| ()=>{}  )

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(response => {
        //console.log(response.user);
        this.setState({
          
          currentUser: response.user

        })
      })

      .catch(error => {
        this.setState({
         
          message: error.message

        })
      })
  }
  
//หลังจาก renderแล้วจะทำการเชคว่ามีการล็อคอินอยู่ไหม ถ้ามี ไป setState currentUser: user
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          currentUser: user
        })
         
        console.log("Login Success");
      }
    })
  }
  
   logout=(e)=>{
    e.preventDefault();
    firebase.auth().signOut().then(response => {
      this.setState({
        currentUser: null
      })
    })
 
    
   }



  render() {  
    

    const {currentUser } = this.state
//if user have id and password  return -->
    if (currentUser) {
      return (
        <div>
          <App2/>
          <button onClick={e=>this.logout(e)}>Logout</button>
        </div>
      )
    }
//if user haven't id and password  return -->
    return (

        <div >
          
          
              <Form onSubmit={(e)=>{this.handleSignup(e)}}>


                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control 
                      required
                      type="text" 
                      placeholder="Enter email" 
                      name="email"
                      value={this.state.email}
                      onChange={(e)=>{
                        this.setState(
                                  {
                                    email:e.target.value
                                  }
                                  )
                                  }}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                      required
                      type="password"
                      placeholder="Password" 
                      name="password" 
                      value={this.state.password}
                      onChange={(e)=>{
                                  this.setState(
                                    {
                                      password:e.target.value
                                    }
                                    )
                                    }}/>
                </Form.Group>
               
                <Form.Group>
                  <Button variant="primary" type="submit" name="signUp">เข้าสู่ระบบ</Button>{' '}
                  
                </Form.Group>
               </Form>
              </div>
          
          
        
      
    )
  }
}
export default App;*/