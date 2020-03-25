import React from "react";
import Quote from "./components/quote";
import Category from "./components/category";
import Refresh from "./components/refresh";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1 className="chuck">Chuck Quotes!</h1>
      <h2 className="quote">
        <Quote />
      </h2>
    </div>
  );
}

export default App;
