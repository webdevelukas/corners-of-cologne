import React from "react";
import Kiosk from "./Kiosk";
import { kiosks } from "../api/kiosks";

function KiosksList() {
  return (
    <section className="kioskslist">
      {kiosks.map(kiosk => {
        return <Kiosk key={kiosk.title} kiosk={kiosk} />;
      })}
    </section>
  );
}

export default KiosksList;
