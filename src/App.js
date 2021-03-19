import React from 'react';
import ExchangeApp from './comps/exchangeApp';
import Header from './comps/header';
import "./css/main.css";

function App(props) {
  return (
    <div className="App">
      <Header/>
      <ExchangeApp/>
    </div>
  );
}

export default App;
