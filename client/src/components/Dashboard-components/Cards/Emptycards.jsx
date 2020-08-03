import React, { useContext } from "react";
import "../../../css/dashboard-css/cards.css";
import { Cardprovider } from "./Cardcontext";
import Addcards from "./Addcards";
function Emptycards() {
  const obj = useContext(Cardprovider);
  function addfirstcard(event) {
    event.preventDefault();
    obj.addfirstcard();
  }
  return (
    <div>
      {!obj.isadd ? (
        <div className="sec-cards">
          <h3>No Cards found in your account!!</h3>
          <h5> Add a card now!!</h5>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQVc1IxLLxrcqlmievIJFIEv4zHesmBOR3OWA&usqp=CAU"
            alt="empty cards photo"
          />
          <br />
          <button className="btn btn-outline-dark" onClick={addfirstcard}>
            ADD CARD
          </button>
        </div>
      ) : (
        <Addcards />
      )}
    </div>
  );
}

export default Emptycards;
