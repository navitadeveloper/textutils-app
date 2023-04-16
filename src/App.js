import { useState } from 'react';
import './App.css';
import Abouttext from './components/Abouttext';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import { Routes ,Route } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode]=useState('light');
  const toggleMode = ()=>{
if(mode === 'light')
{
  setMode('dark');
  document.body.style.backgroundColor='grey';
}
else{
  setMode('light');
  document.body.style.backgroundColor='white';
}
  }
  return (
<>
<Router>

<Navbar title="Textutilsnav" aboutText="about us" mode={mode} toggleMode={toggleMode}/>
{/* <Navbar/> */}

<div className="container">
        <Switch>
          <Route exact path="/about">
            <Abouttext/>
          </Route>
          <Route exact path="/">
          <TextForm heading="Enter Your Text" mode={mode}/>
          </Route>
          
        </Switch>
  
</div>
</Router>

</>
    );
}

export default App;
