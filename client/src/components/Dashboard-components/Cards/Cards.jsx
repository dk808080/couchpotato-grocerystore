import React, { useEffect, useState, useContext } from "react";
import "../../../css/dashboard-css/cards.css";
import axios from "axios";
import Emptycards from "./Emptycards";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Cardprovider } from "./Cardcontext";
import Addcards from "./Addcards";
function Cards() {
  const [cards, setcards] = useState([]);
  const obj = useContext(Cardprovider);
  useEffect(() => {
    axios
      .get("/api/bodycards")
      .then((res) => {
        const mycards = [];
        res.data.map((card) => {
          if (card.emailid == localStorage.getItem("emailid")) {
            mycards.push(card);
          }
        });

        setcards(mycards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function addonemore() {
    obj.addonemore();
  }
  const cardslist = cards.map((card) => {
    return (
      <div style={{ marginTop: "1rem" }}>
        <Card>
          <Card.Header as="h5">
            {card.cardname}
            <Button
              className="deletebutton"
              variant="outline-danger"
              onClick={(event) => {
                event.preventDefault();
                const cardtobedeleted = {
                  id: card._id,
                };
                if (window.confirm("Do you really want to delete this card?")) {
                  obj.deletecard(cardtobedeleted);
                }
              }}
            >
              DELETE
            </Button>
          </Card.Header>
          <Card.Body className="row">
            <Card.Title
              className="col-md-12"
              style={{
                paddingBottom: "1rem",
              }}
            >
              Name : {card.name}
            </Card.Title>

            <Card.Text
              className="col-md-6"
              style={{
                fontSize: "large",
                paddingBottom: "1rem",
              }}
            >
              Card number : {card.cardnumber}
            </Card.Text>
            <Card.Text
              className="col-md-6"
              style={{
                fontSize: "large",
                paddingBottom: "1rem",
              }}
            >
              Valid thru : {card.valid}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  });
  return (
    <div>
      {(() => {
        if (cards.length === 0) {
          return <Emptycards />;
        } else {
          return (
            <div>
              <div>
                {(() => {
                  if (obj.isaddonemore === true) {
                    return <Addcards />;
                  } else {
                    return (
                      <button
                        className="btn btn-outline-dark"
                        onClick={addonemore}
                      >
                        ADD NEW CARD
                      </button>
                    );
                  }
                })()}
              </div>
              {cardslist}
            </div>
          );
        }
      })()}
    </div>
  );
}

export default Cards;
