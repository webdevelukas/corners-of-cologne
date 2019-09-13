import React from "react";
import Filter from "./Filter";
import { filters } from "../api/filters";

function FilterList() {
  return (
    <section className="filterlist">
      <i class="fas fa-filter"></i>
      {filters.map(filter => {
        return <Filter key={filter.name} filter={filter} />;
      })}
    </section>
  );
}

export default FilterList;
