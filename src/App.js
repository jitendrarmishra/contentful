import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
// import ContentList from './components/ContentList';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogList  from './components/BlogList';
import BlogDetail from './components/BlogDetails';
import client from './contentfulClient';

const blogPosts = [
  {
    id: 1,
    title: "Understanding React Hooks",
    excerpt: "An overview of React Hooks and how they simplify state management...",
    date: "October 1, 2023",
  },
  {
    id: 2,
    title: "Getting Started with Bootstrap",
    excerpt: "Bootstrap is a powerful CSS framework that helps in designing responsive web pages...",
    date: "September 15, 2023",
  },
  {
    id: 3,
    title: "JavaScript ES6 Features",
    excerpt: "A look into the new features introduced in ES6 that improve JavaScript programming...",
    date: "August 30, 2023",
  },
  // Add more blog posts as needed
];

// console.log(client)


const App = () => {
  return (
    <Router>
    <div>
    <Routes>
    <Route  path="/" element={<BlogList />} />
    <Route path="/blog/:id" element={<BlogDetail posts={blogPosts} />} />
    {/* <BlogList /> */}
    </Routes>
  </div>
  </Router>
  );
};

export default App;