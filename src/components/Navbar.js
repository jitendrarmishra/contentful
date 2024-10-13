import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router

const Navbar = () => {
  return (
    <nav style={styles.nav}>
    <h1 style={styles.brand}>My Blog</h1>
      <ul style={styles.list}>
        <li style={styles.item}><Link to="/">Home</Link></li>
        <li style={styles.item}><Link to="/about">About</Link></li>
        <li style={styles.item}><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff',
  },
  list: {
    listStyle: 'none',
    display: 'flex',
    margin: 0,
    padding: 0,
  },
  item: {
    margin: '0 15px',
  },
};

export default Navbar;