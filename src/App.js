import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
// import ContentList from './components/ContentList';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogList  from './components/BlogList';
import BlogDetail from './components/BlogDetails';
import Navbar from './components/Navbar'; // Adjust the path as necessary
import Contact from './components/Contact.js';
import Aboutus from './components/Aboutus.js';


const App = () => {
  return (
    <div className="container">
        
    <Router>
    <div>
    <Navbar />
    <Routes>
    <Route  path="/" element={<BlogList />} />
    <Route path="/blog/:id" element={<BlogDetail />} />
    <Route path="/about" element={<Aboutus/>} />
    <Route path="/contact" element={<Contact/>} />
    </Routes>
  </div>
  </Router>
  </div>
  );
};

export default App;