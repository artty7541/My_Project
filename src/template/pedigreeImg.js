import React, { Component } from 'react';
import firebaseStorage from './../../backEnd/firebase';
import Button from '@material-ui/core/Button'
import axios from "axios";
 //หน้าComponent อัพโหลดรูป
class PeddigreeImg extends Component {
    constructor(props){
        super(props);

        this.state =  {
            UID:"",
            selectedFile: null,
            imagePreviewUrl: "https://mdbootstrap.com/img/Photos/Others/placeholder.jpg",
            
          };
    }

 
  fileChangedHandler = (event) => {
      console.log(event.target.files[0])
    this.setState({
      selectedFile: event.target.files[0]
    })
 
    let reader = new FileReader();
     
    reader.onloadend = () => {
      this.setState({
        imagePreviewUrl: reader.result
      });
    }
 
    reader.readAsDataURL(event.target.files[0])
 
  }
 


componentDidMount(){
  
}

  savePeddigreeImage =()=>{
      console.log(this.props.user)
 firebaseStorage.storage().ref("Photo/"+this.props.user+"/").child(this.state.selectedFile.name).put(this.state.selectedFile).then(res=>{
    //Photo/ชื่อid/ชื่อไฟร์
 })
  }


 
  render() {
 
    let $imagePreview = (<div className="previewText image-container">Please select an Image for Preview</div>);
    if (this.state.imagePreviewUrl) {
      $imagePreview = (<div className="image-container" ><img src={this.state.imagePreviewUrl} alt="icon" width="300px" height="300px" /> </div>);
    }
 
    return (
        <div className="container-fluid   " >
      
        { $imagePreview }
        <hr/>
         <input type="file" name="avatar" onChange={this.fileChangedHandler} ></input>
        
         <Button type="button" style={{outline:"none" }} variant="outlined" color="primary" onClick={()=>this.savePeddigreeImage()}>บันทึกภาพ</Button>
         
      </div>
    );
  }
}
 
export default PeddigreeImg;