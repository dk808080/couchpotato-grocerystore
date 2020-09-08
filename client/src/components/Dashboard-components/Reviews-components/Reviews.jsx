import React, { useEffect, useState } from "react";
import axios from "axios";

function Reviews() {
  const [items, setitems] = useState([]);

  useEffect(() => {
    axios
      .get("/api/bodyoverviews")
      .then((res) => {
        setitems(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const itemslist = items.map((item) => {
    return (
      <div className="card" style={{ marginBottom: "1rem" }}>
        <div className="card-body">
          <h5 className="card-title">{item.username}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{item.title}</h6>
          <p className="card-text">{item.content}</p>
        </div>
      </div>
    );
  });
  return (
    <div>
      <div
        style={{
          margin: "auto 4rem",
          backgroundColor: "#fffff4",
          padding: "3rem",
        }}
      >
        {itemslist}
      </div>
    </div>
  );
}

export default Reviews;
