import React from 'react';
import './App.css';
import { Address } from './components/Address';
import { InputsAutomplete } from './components/autocomplete/InputsAutomplete';

function App() {
  return (
    <div>
       <InputsAutomplete />
       <Address />
    </div>
  );
}

export default App;
