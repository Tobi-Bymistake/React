
import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import About from './components/About';
import React,{ useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Home from 
// import React, { useState } from 'react';



// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {

 
  const [mode , setMode] = useState('dark'); //whether dark mode enable or not
 
  const showAlert = (message,type) => {
         setAlert({
          msg: message,
          type:type
         })  
         setTimeout (()=> {
             setAlert(null)   
            },3000) ;         
    }
 
    const [alert, setAlert] = useState(null);  //object
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey'; 
      showAlert("Dark mode has been enabled","SUccess");
      document.title = 'TextUtils - Dark Mode';

      //we can change title

      // setInterval(() => {
      //   document.title = 'Hii Bro is Secure web browser ';
      // },2000);
      
      // setInterval(() => {
      //   document.title = 'Install Hii Bro ';
      // },1500);
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","SUccess");
      document.title = 'TextUtils - Light Mode';
    }
  }
  // try {
  //   // Your code here
  // } catch (error) {
  //   console.error("Caught an error:", error);
  // }
  

  return (
    <>
       <Router>

      <Navbar title ="Hii Bro" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className='container my-3'>
      <TextForm heading="Enter the text to analyze below" mode={mode}/>
      <Switch>
      
       
        <Route  path="/about">
           <About mode={mode}/>
      </Route>
        <Route exact path="/">
      <TextForm showAlert={showAlert} heading="Enter the text to analyze "  mode={mode} /> 
          </Route>
  
      </Switch> 

      </div>
      
      //  </Router>
    </>
  );
}



 
export default App;

