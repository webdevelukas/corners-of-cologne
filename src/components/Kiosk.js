import React from "react";
import CategoriesBadges from "./CategoriesBadges";

function Kiosk({ kiosk }) {
  return (
    <article className="kiosk">
      <img
        className="kiosk__image"
        src={kiosk.imgSrc}
        alt="kiosk from outside"
      />
      <div>
        <h3 className="kiosk__title">{kiosk.title}</h3>
        <p className="kiosk__description">{kiosk.description}</p>

        <div className="kiosk__attributes">
          <p>
            <i class="fas fa-star"></i> {kiosk.rating}
          </p>
          <p>
            <i class="fas fa-beer"></i> {kiosk.price} €
          </p>
          <p>
            <i class="fas fa-walking"></i> {kiosk.distance} min.
          </p>
        </div>
        {kiosk.categories.map(category => {
          return <CategoriesBadges key={category} category={category} />;
        })}
      </div>
    </article>
  );
}

export default Kiosk;
