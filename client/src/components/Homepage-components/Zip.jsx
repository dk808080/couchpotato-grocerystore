import React from "react";
import Container from "react-bootstrap/Container";

function Zip() {
  return (
    <div id="zip">
      <h1 className="zip_h1">Sounds Good? Start Shopping!</h1>
      <Container id="inner_zip">
        <input type="radio" name="type" value="home" />
        <label for="home" id="Home">
          Home
        </label>
        <input type="radio" id="Business" name="type" value="business" />
        <label for="business" id="Business">
          Business
        </label>
        <div className="buttonIN">
          <input
            className="zip_check"
            type="tel"
            placeholder="Enter Zip Code "
            pattern="[0-9]*"
            maxLength="6"
          />
          <button id="clear">Shop Now</button>
        </div>
      </Container>
    </div>
  );
}

export default Zip;
