// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//import About from './components/About';


function App() {                                //Function based component is used widely than class based component
  const [mode, setMode] = useState('light');                    //State variable which shows whether the dark mode is on or not
  const [alert, setAlert] = useState(null);

  const showAlert =(message,type) =>{
    setAlert({
      msg:message,
      type:type
    }
    )

    setTimeout(() => {
      showAlert(null);
    }, 3000);

  }
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="grey";
      showAlert("Dark mode has been enabled","success");
      document.title="TextUtils-Dark Mode";
    
      // For setting any text in title for interval

    // setInterval(() => {
    //   document.title="TextUtils is amazing";
    // }, 2000);
    // setInterval(() => {
    //   document.title="Install TextUtils Now";
    // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      showAlert("Light mode has been enabled","success");
      document.title="TextUtils-Light Mode";

    }
  }
  return (                        // Returns only one element
    // <>
    // <h1>This is the site</h1>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"                         //The code under div here is JSX which is an html code hiding with JS
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React with Ankit
    //     </a>
    //   </header>
    // </div>
    // </>
    
    

    // <div className="blank">Lovely</div>

    // <>
    // <nav>
    //   <li>Home</li>
    //   <li>About</li>
    //   <li>Contact</li>

    //   <h1>Hello {name}</h1>

    //   <div className="container">
    //     <p>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel atque rerum doloremque nostrum laudantium. Quidem voluptas eius repudiandae atque error aliquam, ex aliquid eaque numquam obcaecati rem blanditiis optio tenetur cumque, dignissimos ut ab.
    //     </p>
    //   </div>

    // </nav>
    // </>

     // My First Project 
     <>
     <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className='container my-3'>

        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
             <TextForm showAlert={showAlert} heading="Enter the text to be analyse below" mode={mode}/>
          </Route>
        </Switch>
        </div>
      </Router>  
        
     </> 

  );
}

export default App;
