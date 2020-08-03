import React from "react";
//import bootstrap from "../../node_module/bootstrap/dist/css/bootstrap.min.css";
import "../css/footer.css";

function Footer() {
  return (
    <div>
      <footer className="site-footer" fixed="bottom">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <h6>Get to know Us</h6>
              <ul className="footer-links">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Delivery Information</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#"> Testimonials</a>
                </li>
              </ul>
            </div>

            <div className="col-sm-4">
              <h6>Connect with Us</h6>
              <ul className="footer-links">
                <li>
                  <a className="facebook" href="#">
                    <i className="fab fa-facebook-square"></i> Facebook
                  </a>
                </li>
                <li>
                  <a className="twitter" href="#">
                    <i className="fab fa-twitter-square"></i> Twitter
                  </a>
                </li>
                <li>
                  <a className="instagram" href="#">
                    <i className="fab fa-instagram"></i> Instagram
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-sm-4">
              <h6>Quick Links</h6>
              <ul className="footer-links">
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Payments</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#"> Cancellation & Returns</a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">
                Copyright &copy; 2020 All Rights Reserved by
                <a href="#"> Couch Potato</a>.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
