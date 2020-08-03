import React from "react";
import "../../css/dashboard-css/addresses.css";
import Addresscontext from "./Addresses/Addresscontext";
import Addresses from "./Addresses/Addresses";
function Manageaddresses() {
  return (
    <div className="sec-manageaddresses">
      <h1>Manage Addresses</h1>
      <Addresscontext>
        <Addresses />
      </Addresscontext>
    </div>
  );
}

export default Manageaddresses;
