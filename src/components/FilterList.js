import React from "react";
import Filter from "./Filter";
import { filters } from "../api/filters";

function FilterList({ onFilterChange }) {
  return (
    <section className="filterlist">
      <i class="fas fa-filter"></i>
      {filters.map(filter => {
        return (
          <Filter key={filter.name} filter={filter} onChange={onFilterChange} />
        );
      })}
    </section>
  );
}

export default FilterList;
