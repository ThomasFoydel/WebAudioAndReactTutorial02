import React, { useState } from 'react';
import Osc1 from './components/Osc1';
import Filter from './components/Filter';

import './App.scss';

function App() {
  return (
    <div className='App'>
      <h1 className='center'>sliders</h1>

      <Osc1 />
      <Filter />
    </div>
  );
}

export default App;
