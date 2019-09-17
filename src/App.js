import React from "react";
import "./App.css";
import Header from "./components/Header";
import FilterList from "./components/FilterList";
import KiosksList from "./components/KiosksList";

function App() {
  const [filters, setFilters] = React.useState({});

  function handleFilterChange(name, value) {
    /* const newFilter = {
      name: name,
      value: value
    }; */
    // Create a copy of filters object
    const newFilters = { ...filters };
    newFilters[name] = value;
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
