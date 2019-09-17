import React from "react";
import Kiosk from "./Kiosk";
import { kiosks } from "../api/kiosks";

function KiosksList({ selectedFilters, onFilterChange }) {
  console.log(selectedFilters);
  const filteredKiosks = kiosks.filter(kiosk => {
    return true;
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
