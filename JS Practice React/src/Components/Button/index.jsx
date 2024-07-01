import React from 'react'
import './index.css';
import { Link } from 'react-router-dom';

export default function index() {
  return (
    <div id='Button'>
      <Link to="/" className="home-button-link">Home</Link>
    </div>
  )
}
