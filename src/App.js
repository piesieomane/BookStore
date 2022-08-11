import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';

import Categories from './components/Categories';
import BooksHolder from './components/BooksHolder';

const App = () => (
  <div>
    <Nav />
    <Routes>
      <Route path="/" element={<BooksHolder />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </div>
);

export default App;
