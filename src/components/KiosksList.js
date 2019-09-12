import React from "react";
import Kiosk from "./Kiosk";
import { kiosks } from "../api/kiosks";

function KiosksList() {
  return (
    <section className="kioskslist">
      {kiosks.map(kiosk => {
        return <Kiosk kiosk={kiosk} />;
      })}
    </section>
  );
}

export default KiosksList;
