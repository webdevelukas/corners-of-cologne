import React from "react";
import styled from "styled-components";
import Title from "../components/Title";
import FilterList from "../components/FilterList";
import KiosksList from "../components/KiosksList";

const Main = styled.main`
  display: grid;
  grid-template-rows: 40px 1fr;
`;

export default function Home({ history, location }) {
  const params = new URLSearchParams(location.search);

  const [filters, setFilters] = React.useState({
    category: params.get("category") || "",
    distance: params.get("distance") || "",
    price: params.get("price") || "",
    rating: params.get("rating") || ""
  });

  function handleFilterChange(name, value) {
    // Create a copy of filters object
    const newFilters = { ...filters };
    params.delete(name);
    if (value) {
      newFilters[name] = value;
      params.append(name, value);
    } else {
      delete newFilters[name];
    }
    setFilters(newFilters);
    history.push(`${location.pathname}?${params.toString()}`);
  }

  return (
    <>
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
    </>
  );
}
