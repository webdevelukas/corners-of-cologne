import React from "react";
import CategoriesBadges from "./CategoriesBadges";

function Kiosk(props) {
  return (
    <article className="kiosk">
      <img
        className="kiosk__image"
        src={props.kiosk.imgSrc}
        alt="kiosk from outside"
      />
      <div>
        <h3 className="kiosk__title">{props.kiosk.title}</h3>
        <p className="kiosk__description">{props.kiosk.description}</p>

        <div className="kiosk__attributes">
          <p>
            <i class="fas fa-star"></i> {props.kiosk.rating}
          </p>
          <p>
            <i class="fas fa-beer"></i> {props.kiosk.price} €
          </p>
          <p>
            <i class="fas fa-walking"></i> {props.kiosk.distance} min.
          </p>
        </div>
        {props.kiosk.categories.map(category => {
          return <CategoriesBadges key={category} category={category} />;
        })}
      </div>
    </article>
  );
}

export default Kiosk;
