import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";

function Confirmmobileno() {
  const [mobileno, setmobileno] = useState("");
  const history = useHistory();

  useEffect(() => {
    axios
      .get("/api/bodypinfo")
      .then((res) => {
        res.data.map((me) => {
          if (me._id == localStorage.getItem("emailid")) {
            setmobileno(me.mobileno);
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#ffe3b3",
        border: "1px solid darkslategrey",
        margin: "0rem 3rem",
        textAlign: "center",
        padding: "1rem 0",
      }}
    >
      <h4 style={{ marginTop: "1rem", fontFamily: "cursive" }}>
        2) Confirm your mobile number
      </h4>
      <div
        style={{
          padding: "1.5rem",
          backgroundColor: "#fffff4",
          margin: "1rem 4rem",
        }}
      >
        <label
          style={{
            marginRight: "1rem",
            fontSize: "1.3rem",
            fontFamily: "cursive",
          }}
        >
          {" "}
          Your mobile number :{" "}
        </label>
        <input
          type="text"
          placeholder="no mobile number is saved yet!!"
          style={{ width: "15rem" }}
          value={mobileno}
          readOnly
        />
        <div style={{ marginTop: "1.5rem" }}>
          <p>
            If you want to save or change your mobile number then{" "}
            <a
              href="/dashboard"
              style={{
                fontSize: "large",
                textDecoration: "underline",
                color: "#028174",
              }}
            >
              Click here!
            </a>
          </p>
        </div>
        <Button
          href="#"
          style={{
            marginLeft: "2rem",
            fontSize: "15px",
            backgroundColor: "darkslategrey",
          }}
          onClick={(event) => {
            event.preventDefault();
            if (
              window.confirm(
                "If you have confirmed your phone number then press OK"
              )
            ) {
              history.push("/choosepaymentmethod");
            }
          }}
        >
          Go to step 3
        </Button>
      </div>
    </div>
  );
}
export default Confirmmobileno;
