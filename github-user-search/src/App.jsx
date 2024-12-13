import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchInput from "./components/SearchInput"

function App() {
  return (
    <div className="App">
      <header>
        <h1>GitHub User Search</h1>
      </header>
      <main>
        <p>Search for GitHub profiles here!</p>
      </main>
    </div>
  );
}

export default App;
