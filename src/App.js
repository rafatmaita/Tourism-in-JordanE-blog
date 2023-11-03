


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Header from './components/Header';
import Home from './components/Home';
import Blogs from './components/Blogs';
import BlogDetails from './components/BlogDetails';
import Login from './components/Login';
import Registration from './components/Registration';
import Footer from './components/Footer'; 

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<BlogDetails blogs={Blogs}/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
       
       
        <Footer/>
      </div>
    </Router>
  );
}

export default App;


