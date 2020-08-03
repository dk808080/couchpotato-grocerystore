import React from "react";
import Container from "react-bootstrap/Container";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";

function Savers() {
  return (
    <Container id="save">
      <h1 className="savers_h1">Top Savers Today!</h1>
      <CardDeck>
        <Card className="save_card">
          <Card.Img
            variant="top"
            src="http://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/4ec5c320-719c-4c16-bbb4-5dc4be672239/08b8adf2-158a-4b7e-8298-51efd08bff2a/2007017_tea-coffee_360.jpg"
          />
        </Card>
        <Card className="save_card">
          <Card.Img
            variant="top"
            src="http://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/4ec5c320-719c-4c16-bbb4-5dc4be672239/08b8adf2-158a-4b7e-8298-51efd08bff2a/2007074_frozen-snacks_360_3rd.jpg"
          />
        </Card>
        <Card className="save_card">
          <Card.Img
            variant="top"
            src="http://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/4ec5c320-719c-4c16-bbb4-5dc4be672239/00b2477f-2ab5-4223-a956-46677f6cbf35/2007059_detergent-powder_360.jpg"
          />
        </Card>
        <Card className="save_card">
          <Card.Img
            variant="top"
            src="http://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/4ec5c320-719c-4c16-bbb4-5dc4be672239/00b2477f-2ab5-4223-a956-46677f6cbf35/2007061_home-cleaners_360.jpg"
          />
        </Card>
      </CardDeck>
    </Container>
  );
}

export default Savers;
