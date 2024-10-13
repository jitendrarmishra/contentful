import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
// import ContentList from './components/ContentList';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogList  from './components/BlogList';
import BlogDetail from './components/BlogDetails';
// import client from './contentfulClient';


const App = () => {
  return (
    <div className="container">
    <Router>
    <div>
    <Routes>
    <Route  path="/" element={<BlogList />} />
    <Route path="/blog/:id" element={<BlogDetail />} />
    </Routes>
  </div>
  </Router>
  </div>
  );
};

export default App;