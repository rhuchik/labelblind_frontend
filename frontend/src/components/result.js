import React ,{useEffect,useState}from 'react'
import './result.css';
import axios from 'axios';
//var msg="";
export const Result = ({getcurrency,js}) => {
const[state,setState]=useState({value:''})
    //const [state,setState]=useState(j)
    // eslint-disable-next-line
    useEffect(()=>{
        getcurrency()
      
    },[])
    const onChangeHandler=event=>{
        setState({value:event.target})
      }
    const onClickHandler = () => {
        const data = new FormData()
        data.append('email', state.value)
        axios.post("http://localhost:8080/api/sendemail", data, { 
           // receive two    parameter endpoint url ,form data
       }).then(res => { // then print response status
        
        this.setState={
          msg:res.data.msg
        }
       })
    }
    let t=[]
    for(var key in js){
        if(js.hasOwnProperty(key)){
          var va=js[key];
          //setState(va)
          
          t.push(va)
          

        }}
       
        
    return (
        <div >
            <h2 className="text-left mx-3 my-4">Converted Values</h2>
            
            <div className="table-dark  mx-2 my-5 rounded " style={{maxWidth: '100vw'}}>
           
           <tbody className="d-flex "><th >Converted Amount</th>
                    {
                        t.slice(0,8).map((item) => (
                            <tr className="d-flex " style={{marginLeft: '3rem'}} >
                                <td className="">{item}</td>
                                
                                <td/>
                            </tr>
                        ))
                    }
                    
                </tbody>
                <tbody>
                <th>Maximum value</th>
                {
                        t.slice(11,12).map((item) => (
                            <tr className="d-flex " style={{marginLeft: '4.5rem'}}>
                                <td className="">{item.max}</td>
                                
                                <td/>
                            </tr>
                        ))
                    }
                </tbody>
                <tbody>
                <th>Minimum value</th>
                {
                        t.slice(12,13).map((item) => (
                            <tr className="d-flex "  style={{marginLeft: '4.5rem'}}>
                                <td className="">{item.min}</td>
                                
                                <td/>
                            </tr>
                        ))
                    }
                </tbody>
                <tbody>
                <th>sum value</th>
                {
                        t.slice(13,14).map((item) => (
                            <tr className="d-flex " style={{marginLeft: '4.5rem'}} >
                                <td className="">{item.sum}</td>
                                
                                <td/>
                            </tr>
                        ))
                    }
                </tbody>
                <tbody>
                <th>Average value</th>
                {
                        t.slice(14).map((item) => (
                            <tr className="d-flex " style={{marginLeft: '4.5rem'}} >
                                <td className="">{item.average}</td>
                                
                                <td/>
                            </tr>
                        ))
                    }
                </tbody>
                
        </div>
        <div class="form-group mx-3" >
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" onChange={onChangeHandler} aria-describedby="emailHelp" style={{maxWidth:'60vw'}}/>
            
        </div>
        <button className="btn btn-dark my-3 mx-3"  onClick={onClickHandler}>Email Result</button>
        </div>
        
    )
}
export default Result