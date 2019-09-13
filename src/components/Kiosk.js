import React from "react";

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
      </div>
    </article>
  );
}

export default Kiosk;
