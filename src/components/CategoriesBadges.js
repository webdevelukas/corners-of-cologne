import React from "react";
import styled from "styled-components";

const KioskCategories = styled.ul`
  list-style: none;
  display: inline-block;
  padding: 0;
  margin: 0;

  > li {
    background: #f20530;
    padding: 0.8em;
    color: white;
    border-radius: 0.2em;
    font-size: 0.8em;
    margin-right: 1em;
  }
`;

function CategoriesBadges({ category }) {
  return (
    <KioskCategories>
      <li>{category}</li>
    </KioskCategories>
  );
}

export default CategoriesBadges;
