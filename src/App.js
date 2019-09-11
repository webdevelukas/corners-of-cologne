import React from "react";
import "./App.css";
import Header from "./components/Header";
import FilterList from "./components/FilterList";
import KiosksList from "./components/KiosksList";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <FilterList />
        <KiosksList />
      </main>
    </div>
  );
}

export default App;
