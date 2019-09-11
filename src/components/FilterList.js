import React from "react";
import Filter from "./Filter";

function FilterList() {
  return (
    <section className="filterlist">
      <i class="fas fa-filter"></i>
      <Filter />
      <Filter />
      <Filter />
      <Filter />
    </section>
  );
}

export default FilterList;
