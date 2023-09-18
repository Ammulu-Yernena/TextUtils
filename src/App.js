import React,{useState} from 'react';
import './App.css';
// import logo from './logo.svg';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
// import Exercise1 from './Components/Exercise1';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
 } from "react-router-dom";

function App(){
  // let name="Divya"; 

      // for navbar.js, textform.js the following code is useful

  const [mode, setmode] = useState('light');  // whether dark mode is enabled or not

  //  This code is for alert.js
  const [alert,setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(()=>{
      setAlert(null);
    },3000);
  }

  // for navbar.js, textform.js the following code is useful

  const toggleModeBlue=()=>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode is accessed","success");
      document.title = "TextUtils - Dark Mode";
      // setInterval(()=>{
      //   document.title = "TextUtils is Amazing Mode";
      // }, 2000);
      // setInterval(()=>{
      //   document.title = "Install TextUtils Now";
      // }, 1500);
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is accessed","success") ;
      document.title = "TextUtils - Light Mode";
    }
  }

  const toggleModeGreen = ()=>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = "green";
      showAlert("Green color is accessed","success")
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is accessed","success") 
    }
  }

  const toggleModePink = ()=>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = "pink";
      showAlert("Pink color is accessed","success")
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is accessed","success") 
    }
  }

  const toggleModeYellow = ()=>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = "yellow";
      showAlert("Yellow color is accessed","success")
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is accessed","success") 
    }
  }

//  The following code is for Exercise1.js
  // const [mode,setmode]= useState({backgroundColor:"white"});
  // const toggleMode=()=>{
  //   if(mode === {backgroundColor:'white'}){
  //     setmode({backgroundColor:'black'});
  //     document.body.style.color="white";
  //   }
  //   else{
  //     setmode({backgroundColor:'white'});
  //     document.body.style.color="black";
  //   }
  // }

  return( 
    <> 
      <Router>
      
      {/* THe next single line is for dark mode and light mode */}
      <Navbar title="TextUtils23" aboutText="About" mode={mode} toggleModeBlue={toggleModeBlue} toggleModeGreen={toggleModeGreen} toggleModePink={toggleModePink} toggleModeYellow={toggleModeYellow}/>  

      <Alert alert={alert}/>   
         
      {/* <Navbar title="TextUtils23" aboutText="Ammu22" /> */} 
      {/* <Navbar/>  */} 

      {/* <Navbar title="TextUtils23" /> */} 
      <div className = "container my-3" > 
      <Switch>
        {/* /users --> Component 1
        /users/home --> Component 2 */}
        <Route path="/about">
          <About mode = {mode}/>
          </Route>
        <Route exact path="/"> 
            <TextForm showAlert={showAlert} heading = "Try TextUtils - Word Counter, Character Counter, Remove extra spaces " own="Write anything" mode={mode}/>  
        </Route>
      </Switch>
        
      {/* <Exercise1 mode={mode} toggleMode={toggleMode}/>  */}  
     
    {/* <About/>   */}
    </div> 
    </Router>
     </> 
  ); 
} 

export default App; 