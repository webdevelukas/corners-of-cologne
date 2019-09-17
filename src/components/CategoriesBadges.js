import React from "react";

function CategoriesBadges({ category }) {
  return (
    <ul className="kiosk__categories">
      <li>{category}</li>
    </ul>
  );
}

export default CategoriesBadges;
