import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, {useState} from 'react'
import Alerts from './components/Alerts';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";

function App() {

const [mode,setMode] = useState('light');
const [alert,setAlert] = useState(null);

// const showAlert = ( )

const toggleMode = () => {
  if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      setAlert("Dark mode has been enabled");
  }
  else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setAlert("Light mode has been enabled");
  }
};

  return (
  <>
    {/* <Router> */}
    <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode}/>
    <div>
      <Alerts alert={alert}/>
    </div>
    <div className='container my-3'>
    {/* <Switch> */}
          {/* <Route exact path="/about">
          <About />
          </Route> */}
          {/* <Route exact path="/"> */}
          <Textform heading="Enter Your Text to Analyze"/>
          {/* </Route> */}
    {/* </Switch> */}
    </div>
    {/* <div>
      <About/>
    </div> */}
    {/* </Router> */}
  </>
  );
}

export default App;
