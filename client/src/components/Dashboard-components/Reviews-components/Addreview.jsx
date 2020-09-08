import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Addreview() {
  const [username, setusername] = useState("");
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");
  const history = useHistory();

  function addit(event) {
    event.preventDefault();
    var review = {
      username: username,
      title: title,
      content: content,
    };

    axios
      .post("/api/addreview", review)
      .then((res) => {
        alert(res.data);
        history.push("/reviews");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div
      style={{
        margin: "auto 5rem",
        backgroundColor: "#fffff4",
        padding: "3rem",
      }}
    >
      <form>
        <div className="form-group">
          <label>Your Name</label>
          <input
            className="form-control"
            type="text"
            name="userName"
            value={username}
            onChange={(e) => {
              setusername(e.target.value);
            }}
          />
          <label>Title</label>
          <input
            className="form-control"
            type="text"
            name="reviewTitle"
            value={title}
            onChange={(e) => {
              settitle(e.target.value);
            }}
          />

          <label>Review about Couch-potato</label>
          <textarea
            className="form-control"
            name="reviewContent"
            cols="30"
            rows="5"
            value={content}
            onChange={(e) => {
              setcontent(e.target.value);
            }}
          ></textarea>
        </div>
        <button
          className="btn btn-dark"
          type="submit"
          style={{ width: "10rem" }}
          onClick={addit}
        >
          Add review
        </button>
      </form>
    </div>
  );
}
export default Addreview;
