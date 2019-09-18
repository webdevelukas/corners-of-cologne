import React from "react";
import Filter from "./Filter";
import { filters } from "../api/filters";

function FilterList({ onFilterChange, selectedFilters }) {
  return (
    <section className="filterlist">
      <i class="fas fa-filter"></i>
      {filters.map(filter => {
        return (
          <Filter
            key={filter.name}
            filter={filter}
            onChange={onFilterChange}
            selectedValue={selectedFilters[filter.name]}
          />
        );
      })}
    </section>
  );
}

export default FilterList;
