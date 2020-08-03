import React from "react";
import Container from "react-bootstrap/Container";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";

function Category() {
  return (
    <Container id="category">
      <h1 className="savers_h1">Shop By Category</h1>
      <CardDeck>
        <Card className="save_card">
          <Card.Img
            variant="top"
            src="https://www.naturesbasket.co.in/Images/static/exotic.jpg"
          />
          <Card.Body>
            <Card.Title>Fruits &amp; vegetables</Card.Title>
          </Card.Body>
        </Card>
        <Card className="save_card">
          <Card.Img
            variant="top"
            src="https://www.naturesbasket.co.in/Images/static/Fresh-Artisinal- Breads.jpg"
          />
          <Card.Body>
            <Card.Title>Flour &amp; Breads</Card.Title>
          </Card.Body>
        </Card>
        <Card className="save_card">
          <Card.Img
            variant="top"
            src="https://www.naturesbasket.co.in/Images/static/Daily-Essentials.jpg"
          />
          <Card.Body>
            <Card.Title>Daily Essentials</Card.Title>
          </Card.Body>
        </Card>
        <Card className="save_card">
          <Card.Img
            variant="top"
            src="https://www.naturesbasket.co.in/Images/static/Indiangrocery.jpg"
          />
          <Card.Body>
            <Card.Title>Indian Grocery</Card.Title>
          </Card.Body>
        </Card>
        <Card className="save_card">
          <Card.Img
            variant="top"
            src="https://www.naturesbasket.co.in/Images/static/hearthealthy.jpg"
          />
          <Card.Body>
            <Card.Title>Healthy Food</Card.Title>
          </Card.Body>
        </Card>
      </CardDeck>
    </Container>
  );
}

export default Category;
