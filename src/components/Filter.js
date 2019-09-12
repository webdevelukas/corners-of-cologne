import React from "react";

function Filter(props) {
  const filterOptions = props.filter.options;
  return (
    <select className="filterlist__filter">
      <option>{props.filter.name}</option>
      {filterOptions.map(option => {
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
