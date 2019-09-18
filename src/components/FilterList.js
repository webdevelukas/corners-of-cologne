import React from "react";
import Filter from "./Filter";
import { filters } from "../api/filters";
import styled from "styled-components";

const FilterListSection = styled.section`
  background: #eee;
  display: inline-flex;
  align-items: center;
  overflow-x: auto;
  padding: 0 10px;
  color: #555;

  @media screen and (min-width: 600px) {
    justify-content: center;
  }
`;

function FilterList({ onFilterChange, selectedFilters }) {
  return (
    <FilterListSection>
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
    </FilterListSection>
  );
}

export default FilterList;
