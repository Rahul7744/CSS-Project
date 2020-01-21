import React from "react";
import Form from "./components/Form";
import Table from  "./components/Table"

import {Route, BrowserRouter} from "react-router-dom"



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route exact path="/"  component={Form} />
      <Route path="/table" component={Table} />
      
      </BrowserRouter>

   
    </div>
  );
}

export default App;
