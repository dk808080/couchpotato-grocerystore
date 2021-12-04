import React from "react";
import {Container} from "react-bootstrap";
import {Card} from "react-bootstrap";

function Bank_offers() {
  return (
    <Container id="bank">
      <h1 className="savers_h1">Bank Offers</h1>
      <div style={{display:"flex"}}>
        <Card className="save_card">
          <Card.Img
            variant="top"
            src="https://offers.freecharge.in/ICICIBank50/images/ICICIBank50.png"
          />
        </Card>
        <Card className="save_card">
          <Card.Img
            variant="top"
            src="https://new-img.patrika.com/upload/2020/09/30/photo_2020-09-30_16-46-31_6431060_835x547-m.jpg"
          />
        </Card>
        <Card className="save_card">
          <Card.Img
            variant="top"
            src="https://www.cardexpert.in/wp-content/uploads/2020/10/icici-bank-festive-offers-diwali-2020-1024x449.jpg"
          />
        </Card>
        <Card className="save_card">
          <Card.Img
            variant="top"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonPay/Diwali17/GW/Friday1/ART_wave1_divali_750x300_2.jpg"
          />
        </Card>
      </div>
    </Container>
  );
}

export default Bank_offers;
