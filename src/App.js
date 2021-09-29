import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');  // wether dark mode enable or not
  const [alert, setAlert] = useState(null);

  const ShowAlert=(message, type) =>{
    setAlert({
      msg: message,
      type:type,
    })
    setTimeout(() => {

      setAlert(null);

    }, 3000);
  
  }
  const toggleMode =() =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor= '#36061b';
      ShowAlert('dark mode has been activated' , "success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor= 'white';
      ShowAlert('light mode has been activated', "success");
    }
  }

  
  return (
    <>
<Router>

<Navbar title="TextUtils" home= "HOME" About="ABOUT US" mode={mode}  toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3 text-center">
<Switch>
          <Route exact path="/about">
            <About mode={mode} showAlert={ShowAlert}/>
          </Route>
          <Route exact path="/">
          <TextForm showAlert={ShowAlert} heading="Enter Text Here" mode={mode} />

          </Route>
        </Switch>

    
    
</div>

</Router>
    </>
  );
}

export default App;
