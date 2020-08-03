import React from "react";
import "../../css/dashboard-css/cards.css";
import Cardcontext from "./Cards/Cardcontext";
import Cards from "./Cards/Cards";
function Managecards() {
  return (
    <div className="sec-managecards">
      <h1>Saved cards</h1>
      <Cardcontext>
        <Cards />
      </Cardcontext>
    </div>
  );
}

export default Managecards;
