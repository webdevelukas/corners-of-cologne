import React from "react";
import Kiosk from "./Kiosk";
import { kiosks } from "../api/kiosks";
import styled from "styled-components";

const KiosksListSection = styled.section`
  background: #0dd;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  padding-top: 15px;
`;

function KiosksList({ selectedFilters }) {
  console.log(selectedFilters);
  const filteredKiosks = kiosks.filter(kiosk => {
    // Filter distance
    if (selectedFilters.distance) {
      switch (selectedFilters.distance) {
        case "< 2 min":
          if (kiosk.distance > 2) {
            return false;
          }
          break;
        case "< 5 min":
          if (kiosk.distance > 5) {
            return false;
          }
          break;
        case "< 10 min":
          if (kiosk.distance > 10) {
            return false;
          }
          break;
        default:
      }
    }

    // Filter rating
    if (selectedFilters.rating) {
      if (kiosk.rating <= selectedFilters.rating.length) {
        return false;
      }
    }

    // Filter category
    if (selectedFilters.category) {
      if (!kiosk.categories.includes(selectedFilters.category)) {
        return false;
      }
    }

    // Filter price
    if (selectedFilters.price) {
      switch (selectedFilters.price) {
        case "low":
          if (kiosk.price >= 1.5) {
            return false;
          }
          break;
        case "middle":
          if (kiosk.price >= 2.2) {
            return false;
          }
          break;
        case "high":
          if (kiosk.price <= 0) {
            return false;
          }
          break;
        default:
      }
    }

    return true;
  });

  return (
    <KiosksListSection className="kioskslist">
      {filteredKiosks.map(kiosk => {
        return <Kiosk key={kiosk.title} kiosk={kiosk} />;
      })}
    </KiosksListSection>
  );
}

export default KiosksList;
