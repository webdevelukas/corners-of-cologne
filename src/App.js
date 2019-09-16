import React from "react";
import "./App.css";
import Header from "./components/Header";
import FilterList from "./components/FilterList";
import KiosksList from "./components/KiosksList";

function App() {
  function handleFilterChange(name, value) {
    console.log(`${name}: ${value}`);
  }
  return (
    <div className="App">
      <Header />
      <main className="main">
        <FilterList onFilterChange={handleFilterChange} />
        <KiosksList />
      </main>
    </div>
  );
}

export default App;
