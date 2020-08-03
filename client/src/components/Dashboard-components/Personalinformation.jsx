import React from "react";
import Button from "react-bootstrap/Button";

import "../../css/dashboard-css/personalinfo.css";
function Personalinformation() {
  return (
    <div className="allpinfo">
      <form>
        <label className="personalinfo-label">Your name</label>
        <input
          type="text"
          placeholder="Enter name"
          className="personalinfo-input"
        />

        <div>
          <label className="personalinfo-label">Your gender</label>
          <input
            type="radio"
            value="Male"
            name="gender"
            style={{ width: "1rem", height: "1rem" }}
            className="personalinfo-input"
          />{" "}
          Male
          <input
            type="radio"
            value="Female"
            name="gender"
            style={{ width: "1rem", height: "1rem", marginLeft: "1rem" }}
            className="personalinfo-input"
          />{" "}
          Female
          <input
            type="radio"
            value="Others"
            name="gender"
            style={{ width: "1rem", height: "1rem", marginLeft: "1rem" }}
            className="personalinfo-input"
          />{" "}
          Others
        </div>

        <label className="personalinfo-label">Your email address</label>
        <input
          type="email"
          placeholder="Enter email"
          className="personalinfo-input"
        />

        <label className="personalinfo-label">Your mobile number </label>
        <input
          type="text"
          placeholder="Enter mobile number"
          className="personalinfo-input"
        />
        <br />
        <Button variant="dark" type="button" className="personalinfo-Button">
          Edit information
        </Button>
        <Button variant="dark" type="submit" className="personalinfo-Button">
          Save changes
        </Button>
        <div>
          <a href="/deactivateaccount">
            <Button
              variant="danger"
              type="button"
              className="personalinfo-Button"
            >
              Deactivate account
            </Button>
          </a>
        </div>
      </form>
    </div>
  );
}
export default Personalinformation;
