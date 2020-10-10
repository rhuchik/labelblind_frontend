import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';



class Main extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        selectedFile: null,
        msg:''
      }
   
  }
  onChangeHandler=event=>{
    this.setState({
      files: event.target.files[0],
      loaded: 0,
      
    })
  }
  onClickHandler = () => {
    const data = new FormData()
    data.append('file', this.state.files)
    axios.post("http://localhost:8080/api/upload", data, { 
       // receive two    parameter endpoint url ,form data
   }).then(res => { // then print response status
   
    this.setState={
      msg:res.data.msg
    }
   })
}
  

  render() {
    return (
      <div className="container  text-center" style={{marginTop:'15rem'}}>
        <h1>File Upload</h1>
	      <div className="row">
	      <div className="col-md-6">
	      <form method="post" action="#" id="#">
           <div className="form-group files" style={{marginTop:'4rem'}}>
                
                <input className="align-items-center" style={{marginLeft:'25rem'}} type="file" name="file" onChange={this.onChangeHandler}/>
                
                <Link to="/result" className="btn my-4 btn-success btn-block" style={{marginLeft:'20rem',marginTop:'4rem'}} onClick={this.onClickHandler} >
                  Convert Currency
                </Link>
                
                <h2>{this.state.msg}</h2>
              </div>
              
            
          </form>
	      
	      </div>
        </div>
	  </div>
   
    )
  }
}

export default Main;