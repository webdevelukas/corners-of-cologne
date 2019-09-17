import React from "react";
import Kiosk from "./Kiosk";
import { kiosks } from "../api/kiosks";

function KiosksList({ selectedFilters, onFilterChange }) {
  const filteredKiosks = kiosks.filter(kiosk => {
    if (!selectedFilters) {
      return true;
    }

    // Filter distance
    if (selectedFilters.name === "distance") {
      switch (selectedFilters.value) {
        case "< 2 min":
          return kiosk.distance < 2;
        case "< 5 min":
          return kiosk.distance < 5;
        case "< 10 min":
          return kiosk.distance < 10;
        case "distance":
          return selectedFilters;
        default:
          break;
      }
    }

    // Filter rating
    if (selectedFilters.name === "rating") {
      return kiosk.rating >= selectedFilters.value.length;

      // Different

      // switch (selectedFilters.value) {
      //   case "*****":
      //     return kiosk.rating >= 5;
      //   case "****":
      //     return kiosk.rating >= 4;
      //   case "***":
      //     return kiosk.rating >= 3;
      //   case "**":
      //     return kiosk.rating >= 2;
      //   case "*":
      //     return kiosk.rating >= 0;
      //   case "rating":
      //     return selectedFilters;
      //   default:
      //     break;
      // }
    }

    // Filter category
    if (selectedFilters.name === "category") {
      return kiosk.categories.includes(selectedFilters.value);
    }

    // Filter price
    if (selectedFilters.name === "price") {
      switch (selectedFilters.value) {
        case "low":
          return kiosk.price <= 1.5;
        case "middle":
          return kiosk.price <= 2.2;
        case "high":
          return kiosk.price > 2.2;
        case "price":
          return selectedFilters;
        default:
          break;
      }
    }

    return selectedFilters;
  });
  return (
    <section className="kioskslist">
      {filteredKiosks.map(kiosk => {
        return (
          <Kiosk key={kiosk.title} kiosk={kiosk} onChange={onFilterChange} />
        );
      })}
    </section>
  );
}

export default KiosksList;
