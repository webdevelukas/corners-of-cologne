import React from "react";
import "./App.css";
import Header from "./components/Header";
import FilterList from "./components/FilterList";
import KiosksList from "./components/KiosksList";

function App() {
  const [filters, setFilters] = React.useState({});

  function handleFilterChange(name, value) {
    // Create a copy of filters object
    const newFilters = { ...filters };
    if (value) {
      newFilters[name] = value;
    } else {
      delete newFilters[name];
    }
    setFilters(newFilters);
  }

  return (
    <div className="App">
      <Header />
      <main className="main">
        <FilterList onFilterChange={handleFilterChange} />
        <KiosksList
          selectedFilters={filters}
          onFilterChange={handleFilterChange}
        />
      </main>
    </div>
  );
}

export default App;
