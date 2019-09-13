import React from "react";

function CategoriesBadges(props) {
  return (
    <ul className="kiosk__categories">
      <li>{props.category}</li>
    </ul>
  );
}

export default CategoriesBadges;
