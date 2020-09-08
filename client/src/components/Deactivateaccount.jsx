import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
function Deactivateaccount() {
  const history = useHistory();
  function dontdelete(event) {
    event.preventDefault();
    alert("we are happy to know that you want to be with us");
    history.push("/home");
  }
  function deleteacc(event) {
    event.preventDefault();
    const user = {
      emailid: localStorage.getItem("emailid"),
    };
    if (
      window.confirm(
        "please think once again!! if you really want to delete your account press ok"
      )
    ) {
      axios
        .post("/api/deleteacc", user)
        .then((res) => {
          alert(res.data);
          localStorage.removeItem("emailid");
          localStorage.removeItem("loggedin");
          history.push("/home");
          window.location.reload(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  return (
    <div
      style={{
        marginTop: "5rem",
        float: "none",
      }}
    >
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-9 col-md-11">
            <div class="card shadow">
              <div
                class="card-body"
                style={{
                  backgroundColor: "#fffff4",
                  padding: "3rem 5rem",
                }}
              >
                <h1 class="card-title">Delete Your Account</h1>
                <p>We're sorry to see you go.</p>

                <h4>Before you go, know this:</h4>
                <p class="card-text">
                  <ul>
                    <li>
                      If you want to change your account details, you can change
                      it on the account page.
                    </li>
                    <li>
                      When your account is deactivated, you will be logged out
                      of Couch Potato, and this account will no longer be
                      usable.
                    </li>
                    <li>
                      If you want to use Couch potato in future, you will have
                      to sign-up again. To change your email address, go to the
                      Settings page.
                    </li>
                    <li>
                      Account deletion is final. There will be no way to restore
                      your account.
                    </li>
                  </ul>
                  <button
                    type="button"
                    class="btn btn-light"
                    style={{
                      marginRight: "25px",
                    }}
                    onClick={dontdelete}
                  >
                    Never mind, keep my account
                  </button>
                  <button
                    type="button"
                    class="btn btn-danger"
                    style={{
                      width: "220px",
                      marginTop: "10px",
                    }}
                    onClick={deleteacc}
                  >
                    Delete my account
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Deactivateaccount;
