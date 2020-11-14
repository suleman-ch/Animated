import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './App.css';
import './Card.css';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import { Redirect, Route, Switch } from 'react-router-dom';
import Text from './components/Text';
import LottieReact from './components/LottieReact';
import Spring from './components/Srpring';
import Framer from './components/Framer';


function App() {
  return (
   <>
   <Navbar/>
   <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/text" component={Text}/>
      <Route exact path="/lottie" component={LottieReact}/>
      <Route exact path="/spring" component={Spring}/>
      <Route exact path="/framer" component={Framer}/>
      <Redirect to="/"/>  
   </Switch>
   </>
  );
}

export default App;
