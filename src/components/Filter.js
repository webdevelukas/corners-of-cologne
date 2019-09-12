import React from "react";

function Filter(props) {
  const filterOptions = props.filter.options;
  return (
    <select className="filterlist__filter">
      <option>{props.filter.name}</option>
      {filterOptions.map(option => {
        return <option value={option}>{option}</option>;
      })}
    </select>
  );
}

export default Filter;
