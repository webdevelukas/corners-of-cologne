import React from "react";

function Filter({ onChange, filter }) {
  return (
    <select
      className="filterlist__filter"
      onChange={event => {
        onChange(filter.name, event.target.value);
      }}
    >
      <option value="">{filter.name}</option>
      {filter.options.map(option => {
        return (
          <option key={option} value={option}>
            {option}
          </option>
        );
      })}
    </select>
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
