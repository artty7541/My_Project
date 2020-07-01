import React, { Component } from 'react';

 //หน้าComponent อัพโหลดรูป
class FormImg extends Component {
    constructor(props){
        super(props);

        this.state =  {
            selectedFile: null,
            imagePreviewUrl: "https://mdbootstrap.com/img/Photos/Others/placeholder.jpg"
          };
    }

 
  fileChangedHandler = (event) => {
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
 
 
  render() {
 
    let $imagePreview = (<div className="previewText image-container">Please select an Image for Preview</div>);
    if (this.state.imagePreviewUrl) {
      $imagePreview = (<div className="image-container" ><img src={this.state.imagePreviewUrl} alt="icon" width="300px" height="300px" /> </div>);
    }
 
    return (
        <div className="container-fluid boxImgFrom  " >
      
        { $imagePreview }
        <hr/>
         <input type="file" name="avatar" onChange={this.fileChangedHandler} />
         
         
      </div>
    );
  }
}
 
export default FormImg;