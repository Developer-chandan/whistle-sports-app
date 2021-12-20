import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Activites from './Components/Activites/Activites';
import AllActivites from './Components/AllActivites/AllActivites';
import AllServices from './Components/AllServices/AllServices';
import Banner from './Components/Banner/Banner';
import ContactForm from './Components/ContactForm/ContactForm';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Pages/Home';
import Notfound from './Components/Pages/Notfound';

 

const App = () => {
  return (
    <div className="App">
       

      <BrowserRouter>
        <Header></Header>
        <Routes>

          <Route exect path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/service" element={<AllServices/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<ContactForm/>}/>
          <Route path="*" element={<Notfound/>}/>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>


    </div>
  );
}

export default App;
