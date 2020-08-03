import React from "react";

import Navigation from "./Homepage-components/Navigation";
import CarouselImg from "./Homepage-components/CarouselImg";
import Savers from "./Homepage-components/Savers";
import Bank_offers from "./Homepage-components/Bank_offers";
import Category from "./Homepage-components/Category";
import Zip from "./Homepage-components/Zip";
import Connect from "./Homepage-components/Connect";
import "../css/homepage.css";

function Homepage() {
  return (
    <div style={{ marginTop: "5rem" }} className="homepage-body">
      <Navigation />
      <CarouselImg />
      <Savers />
      <Bank_offers />
      <Category />
      <Zip />
      <Connect />
    </div>
  );
}

export default Homepage;
