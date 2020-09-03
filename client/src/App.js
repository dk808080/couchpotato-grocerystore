import React from "react";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import Allnotifications from "./components/Dashboard-components/Allnotifications";
import Sidemenu from "./components/Dashboard-components/Sidemenu";
import Allproducts from "./components/Allproducts";
import Faq from "./components/Faq";
import Cart from "./components/Dashboard-components/Cart";
import Manageaddresses from "./components/Dashboard-components/Manageaddresses";
import Managecards from "./components/Dashboard-components/Managecards";
import Beverages from "./components/products-components/Beverages";
import Fruits from "./components/products-components/Fruits";
import Dairy from "./components/products-components/Dairy";
import Vegetables from "./components/products-components/Vegetables";
import Diwali from "./components/products-components/Diwali";
import Rakhi from "./components/products-components/Rakhi";
import Winter from "./components/products-components/Winter";
import Edibleoils from "./components/products-components/Edibleoils";
import Flours from "./components/products-components/Flours";
import Grains from "./components/products-components/Grains";
import Spices from "./components/products-components/Spices";
import Deactivateaccount from "./components/Deactivateaccount";
import Reviews from "./components/Dashboard-components/Reviews-components/Reviews";
import Addreview from "./components/Dashboard-components/Reviews-components/Addreview";
import Navreview from "./components/Dashboard-components/Reviews-components/Navreview";
import axios from "axios";
import Buynow from "./components/Dashboard-components/Buynow";
import Orderdetails from "./components/Dashboard-components/Orderdetails";
import Chooseadd from "./components/Dashboard-components/Chooseadd";
import Confirmmobileno from "./components/Dashboard-components/Confirmmobileno";
import Paymentmethod from "./components/Dashboard-components/Paymentmethod";
import Orders from "./components/Dashboard-components/Orders";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Route path="/" component={Homepage} exact />
        <Route path="/home" component={Homepage} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/signup" component={Signup} exact />
        <Route path="/dashboard" component={Dashboard} exact />

        <Route
          path="/cart"
          component={() => (
            <div
              style={{
                backgroundImage: 'url("https://i5.peapod.com/c/H9/H952X.jpg")',
              }}
            >
              <Sidemenu />
              <Cart />
            </div>
          )}
          exact
        />
        <Route
          path="/orders"
          component={() => (
            <div
              style={{
                backgroundImage: 'url("https://i5.peapod.com/c/H9/H952X.jpg")',
              }}
            >
              <Sidemenu />
              <Orders />
            </div>
          )}
          exact
        />
        <Route
          path="/notifications"
          component={() => (
            <div
              style={{
                backgroundImage: 'url("https://i5.peapod.com/c/H9/H952X.jpg")',
              }}
            >
              <Sidemenu />
              <Allnotifications />
            </div>
          )}
          exact
        />
        <Route
          path="/addresses"
          component={() => (
            <div
              style={{
                backgroundImage: 'url("https://i5.peapod.com/c/H9/H952X.jpg")',
              }}
            >
              <Sidemenu />
              <Manageaddresses />
            </div>
          )}
          exact
        />
        <Route
          path="/cards"
          component={() => (
            <div
              style={{
                backgroundImage: 'url("https://i5.peapod.com/c/H9/H952X.jpg")',
              }}
            >
              <Sidemenu />
              <Managecards />
            </div>
          )}
          exact
        />
        <Route
          path="/buynow"
          component={() => (
            <div>
              <Buynow />
              <Orderdetails />
            </div>
          )}
          exact
        />
        <Route
          path="/chooseaddress"
          component={() => (
            <div>
              <Buynow />
              <Chooseadd />
            </div>
          )}
          exact
        />
        <Route
          path="/confirmmobileno"
          component={() => (
            <div>
              <Buynow />
              <Confirmmobileno />
            </div>
          )}
          exact
        />
        <Route
          path="/choosepaymentmethod"
          component={() => (
            <div>
              <Buynow />
              <Paymentmethod />
            </div>
          )}
          exact
        />
        <Route path="/food-beverages" component={Beverages} exact />
        <Route path="/food-dairy" component={Dairy} exact />
        <Route path="/food-fruits" component={Fruits} exact />
        <Route path="/food-vegetables" component={Vegetables} exact />

        <Route path="/festival-diwali" component={Diwali} exact />
        <Route path="/festival-rakhi" component={Rakhi} exact />

        <Route path="/winter-winter" component={Winter} exact />

        <Route path="/grocery-edibleoils" component={Edibleoils} exact />
        <Route path="/grocery-flours" component={Flours} exact />
        <Route path="/grocery-grains" component={Grains} exact />
        <Route path="/grocery-spices" component={Spices} exact />

        <Route path="/allproducts" component={Allproducts} exact />
        <Route path="/helpnfaq" component={Faq} exact />

        <Route path="/deactivateaccount" component={Deactivateaccount} exact />

        <Route
          path="/reviews"
          component={() => (
            <div>
              <Navreview />
              <Reviews />
            </div>
          )}
          exact
        />
        <Route
          path="/addreview"
          component={() => (
            <div>
              <Navreview />
              <Addreview />
            </div>
          )}
          exact
        />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
