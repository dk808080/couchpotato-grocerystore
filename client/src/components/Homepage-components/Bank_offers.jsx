import React from "react";
import Container from "react-bootstrap/Container";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";

function Bank_offers() {
  return (
    <Container id="bank">
      <h1 className="savers_h1">Bank Offers</h1>
      <CardDeck>
        <Card className="save_card">
          <Card.Img
            variant="top"
            src="http://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/4ec5c320-719c-4c16-bbb4-5dc4be672239/113d146d-8bf2-47f0-ad76-b05492f99195/All_Mobikwik_DT_1_480x360_16thJuly.jpg"
          />
        </Card>
        <Card className="save_card">
          <Card.Img
            variant="top"
            src="http://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/4ec5c320-719c-4c16-bbb4-5dc4be672239/113d146d-8bf2-47f0-ad76-b05492f99195/All_Paytm_DT_2_480x360_16thJuly.jpg"
          />
        </Card>
        <Card className="save_card">
          <Card.Img
            variant="top"
            src="http://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/4ec5c320-719c-4c16-bbb4-5dc4be672239/113d146d-8bf2-47f0-ad76-b05492f99195/All_HSBC_DT_3_480x360_16thJuly.jpg"
          />
        </Card>
        <Card className="save_card">
          <Card.Img
            variant="top"
            src="http://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/4ec5c320-719c-4c16-bbb4-5dc4be672239/113d146d-8bf2-47f0-ad76-b05492f99195/T1_All_Induslnd_DT_4_480x360_16thJuly.jpg"
          />
        </Card>
      </CardDeck>
    </Container>
  );
}

export default Bank_offers;
