import React from "react";
import CategoriesBadges from "./CategoriesBadges";
import styled from "styled-components";

const KioskArticle = styled.article`
  background: #ff0;
  height: auto;
  min-height: 100px;
  margin-bottom: 5px;
  padding: 10px;
  min-width: 300px;
  flex-basis: 100%;
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-column-gap: 10px;

  @media screen and (min-width: 600px) {
    height: auto;
    margin: 10px 10px;
    grid-template-rows: 250px auto;
    grid-template-columns: 1fr;
    grid-row-gap: 10px;
    flex-grow: 1;
    flex-basis: 40%;
  }

  @media screen and (min-width: 1000px) {
    flex-basis: 30%;
  }
`;

const KioskImg = styled.img`
  object-fit: cover;
  object-position: center center;
  width: 100%;
  height: 100%;
`;

const KioskTitle = styled.h3`
  margin: 0 0 0.4em;
`;

const KioskDescription = styled.p`
  margin: 0;
  font-size: 0.8em;
`;

const KioskAttributes = styled.div`
  display: flex;
  font-size: 0.8em;
  justify-content: space-between;
  margin-top: 1em;
`;

function Kiosk({ kiosk }) {
  return (
    <KioskArticle>
      <KioskImg src={kiosk.imgSrc} alt="kiosk from outside" />
      <div>
        <KioskTitle>{kiosk.title}</KioskTitle>
        <KioskDescription>{kiosk.description}</KioskDescription>

        <KioskAttributes>
          <p>
            <i class="fas fa-star"></i> {kiosk.rating}
          </p>
          <p>
            <i class="fas fa-beer"></i> {kiosk.price} €
          </p>
          <p>
            <i class="fas fa-walking"></i> {kiosk.distance} min.
          </p>
        </KioskAttributes>
        {kiosk.categories.map(category => {
          return <CategoriesBadges key={category} category={category} />;
        })}
      </div>
    </KioskArticle>
  );
}

export default Kiosk;
