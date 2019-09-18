import React from "react";
import "./App.css";
import Title from "./components/Title";
import FilterList from "./components/FilterList";
import KiosksList from "./components/KiosksList";
import styled from "styled-components";

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 60px 1fr;
  background: #00f;
`;

const Main = styled.main`
  display: grid;
  grid-template-rows: 40px 1fr;
  background: #f00;
`;

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
    <AppContainer>
      <Title />
      <Main className="main">
        <FilterList
          selectedFilters={filters}
          onFilterChange={handleFilterChange}
        />
        <KiosksList
          selectedFilters={filters}
          onFilterChange={handleFilterChange}
        />
      </Main>
    </AppContainer>
  );
}

export default App;
