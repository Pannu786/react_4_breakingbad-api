import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/ui/Header';

const App = () => {
  const [items, setItems] = useState([])

  return (
    <div className='container'>
      <Header />
    </div>
  );
};

export default App;
