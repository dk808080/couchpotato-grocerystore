import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import "../../css/dashboard-css/personalinfo.css";
import axios from "axios";

function Personalinformation() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [mobileno, setmobileno] = useState("");
  function savechanges(event) {
    event.preventDefault();
    const user = {
      emailid: localStorage.getItem("emailid"),
      name: name,
      email: email,
      mobileno: mobileno,
    };
    if (
      window.confirm("Do you really want to save these changes in your profile")
    ) {
      axios
        .post("/api/savechangesinpinfo", user)
        .then((res) => {
          alert(res.data);
          window.location.reload(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  useEffect(() => {
    axios
      .get("/api/bodypinfo")
      .then((res) => {
        res.data.map((me) => {
          if (me._id == localStorage.getItem("emailid")) {
            setname(me.name);
            setemail(me.email);
            setmobileno(me.mobileno);
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="allpinfo">
      <form>
        <label className="personalinfo-label">Your name</label>
        <input
          type="text"
          placeholder="Enter name"
          className="personalinfo-input"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
        />

        <label className="personalinfo-label">Your email address</label>
        <input
          type="email"
          placeholder="Enter email"
          className="personalinfo-input"
          value={email}
          onChange={(e) => {
            setemail(e.target.value);
          }}
          readOnly
        />

        <label className="personalinfo-label">Your mobile number </label>
        <input
          type="text"
          placeholder="Enter mobile number"
          className="personalinfo-input"
          value={mobileno}
          onChange={(e) => {
            setmobileno(e.target.value);
          }}
        />
        <br />

        <Button
          variant="dark"
          type="submit"
          className="personalinfo-Button"
          onClick={savechanges}
        >
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
