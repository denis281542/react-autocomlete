import React from 'react';
import './App.css';
import { Address } from './features/address/Address';
import { InputsAutomplete } from './features/autocomplete/InputsAutomplete';

function App() {
  return (
    <div>
       <InputsAutomplete />
       <Address />
    </div>
  );
}

export default App;
