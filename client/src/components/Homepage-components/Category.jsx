import React from "react";
import {Container} from "react-bootstrap";
import {Card} from "react-bootstrap";

function Category() {
  return (
    <Container id="category">
      <h1 className="savers_h1">Shop By Category</h1>
      <div style={{display:"flex"}}>
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
      </div>
    </Container>
  );
}

export default Category;
