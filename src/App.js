import React, { Component } from 'react';
import Box from './Box';
import './App.css';

function App() {
  return (
    <div>
      <Box height={10} width={20} color="purple" />
      <Box height={20} width={10} color="green" />
    </div>
  );
}

export default App;
