import React from 'react';
import './App.css';
import Onboarding from './Onboarding';
import Table from './Table';
//import Table from './Table';
//import ReactTable from "react-table";  
//import Table from './Table/index';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div class="container">
      <Onboarding/>
      </div>

      <div class="container2">
        <Table/>
      </div>
      </header>
    </div>
    
  );
}

export default App;
