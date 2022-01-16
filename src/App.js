import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import Home from './Home';
import { Routes,Route } from 'react-router-dom';
import About  from './About';
import Contact from './Contact';
import Service from './Service';
import Error from './Error';
import Navbar from './Navbar';
import Footer from './Footer';

const App = () => {
  return (
    <>
     <Navbar/>
      <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/About'element={<About/>}/>
      <Route path='/Contact'element={<Contact/>}/>
      <Route path='/Service'element={<Service/>}/>
      <Route path='/*'element={<Error/>}/>
      
      </Routes>
     <Footer/>
    </>

  )
};

export default App;
