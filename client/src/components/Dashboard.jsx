import React from "react";
import Sidemenu from "./Dashboard-components/Sidemenu";
import Personalinformation from "./Dashboard-components/Personalinformation";

function Dashboard() {
  return (
    <div
      style={{ backgroundImage: 'url("https://i5.peapod.com/c/H9/H952X.jpg")' }}
    >
      <Sidemenu />
      <Personalinformation />
    </div>
  );
}

export default Dashboard;
