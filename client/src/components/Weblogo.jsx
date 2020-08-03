import React from "react";

function Weblogo() {
  return (
    <div style={{ textAlign: "center" }}>
      <img
        className="logo-img"
        src={process.env.PUBLIC_URL + "images/logo.jfif"}
        alt="website logo"
      />
    </div>
  );
}

export default Weblogo;
