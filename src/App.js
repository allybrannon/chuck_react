import React from "react";
import Quote from "./components/quote";
import Category from "./components/category";
import Refresh from "./components/refresh";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Chuck Quotes!</h1>
      <Quote />

      <Category />

      <Refresh />
    </div>
  );
}
