import React from "react";
import styled from "styled-components";

const FilterListSelect = styled.select`
  height: 30px;
  width: 100px;
  font-size: 0.8em;
  color: #555;
  margin-left: 1em;
  ${props =>
    (props.value && "border: dashed #f20530 1px; background: #f2053010") ||
    "border: dashed grey 1px;"};
`;

function Filter({ onChange, filter, selectedValue }) {
  return (
    <FilterListSelect
      onChange={event => {
        onChange(filter.name, event.target.value);
      }}
      value={selectedValue}
    >
      <option value="">{filter.name}</option>
      {filter.options.map(option => {
        return (
          <option key={option} value={option}>
            {option}
          </option>
        );
      })}
    </FilterListSelect>
  );
}

export default Filter;

/* 

That descripes how it works. props will get an object.

function add(props) {
  return props.a + props.b;
}

add({
  a: 1,
  b: 3
}) 
*/
