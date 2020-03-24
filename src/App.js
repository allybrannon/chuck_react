import React from "react";
import Quote from "./components/quote";
import Category from "./components/category";
import Refresh from "./components/refresh";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Chuck Quotes!</h1>
      <Quote />
    </div>
  );
}

export default App;
