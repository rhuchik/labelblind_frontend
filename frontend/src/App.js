
import React,{Fragment,useState} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Main from './components/Main';
import Result from './components/result';
import axios from 'axios';

const App = () =>{ 
  const [js,setjson]=useState([])
  const getcurrency = async (text) => {
    const res = await axios.get(
      'http://localhost:8080/api/currency'
    );
   setjson(res.data)
   
  };
 
  return(
  <Router>
    <div>
    
    <Route exact
              path="/"
              render={(props) => (
                <Fragment>
                  <Main {...props} />
                 
                </Fragment>
              )} />
    
    <Route exact
              path="/result"
              render={(props) => (
                <Fragment>
                  <Result
                    
                    js={js}
                    getcurrency={getcurrency}
                  />
                </Fragment>
              )} />
  </div>
  </Router>
  
);

}
export default App;