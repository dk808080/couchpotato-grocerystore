import React from "react";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
      <Routes>
        <Route path="/" element={
            <div>
              <Header />
              <Homepage/>
              <Footer/>
            </div>
          } exact />
        <Route path="/home" element={
            <div>
              <Header />
              <Homepage/>
              <Footer/>
            </div>
          } exact />
        <Route path="/login" element={
            <div>
              <Header />
              <Login/>
              <Footer/>
            </div>
         } exact />
        <Route path="/signup" element={
            <div>
              <Header />
              <Signup/>
              <Footer/>
            </div>
         } exact />
        <Route path="/dashboard" element={
            <div>
              <Header />
              <Dashboard/>
              <Footer/>
            </div>
         } exact />

        <Route
          path="/cart"
          element={
            <div
              style={{
                backgroundImage: 'url("https://i5.peapod.com/c/H9/H952X.jpg")',
              }}
            >
              <Header/>
              <Sidemenu />
              <Cart />
              <Footer/>
            </div>
         }
          exact
        />
        <Route
          path="/orders"
          element={
            <div
              style={{
                backgroundImage: 'url("https://i5.peapod.com/c/H9/H952X.jpg")',
              }}
            >
              <Header/>
              <Sidemenu />
              <Orders />
              <Footer/>
            </div>
         }
          exact
        />
        <Route
          path="/notifications"
          element={
            <div
              style={{
                backgroundImage: 'url("https://i5.peapod.com/c/H9/H952X.jpg")',
              }}
            >
              <Header/>
              <Sidemenu />
              <Allnotifications />
              <Footer/>
            </div>
         }
          exact
        />
        <Route
          path="/addresses"
          element={
            <div
              style={{
                backgroundImage: 'url("https://i5.peapod.com/c/H9/H952X.jpg")',
              }}
            >
              <Header/>
              <Sidemenu />
              <Manageaddresses />
              <Footer/>
            </div>
         }
          exact
        />
        <Route
          path="/cards"
          element={
            <div
              style={{
                backgroundImage: 'url("https://i5.peapod.com/c/H9/H952X.jpg")',
              }}
            >
              <Header/>
              <Sidemenu />
              <Managecards />
              <Footer/>
            </div>
         }
          exact
        />
        <Route
          path="/buynow"
          element={
            <div>
              <Header/>
              <Buynow />
              <Orderdetails />
              <Footer/>
            </div>
         }
          exact
        />
        <Route
          path="/chooseaddress"
          element={
            <div>
              <Header/>
              <Buynow />
              <Chooseadd />
              <Footer/>
            </div>
         }
          exact
        />
        <Route
          path="/confirmmobileno"
          element={
            <div>
              <Header/>
              <Buynow />
              <Confirmmobileno />
              <Footer/>
            </div>
         }
          exact
        />
        <Route
          path="/choosepaymentmethod"
          element={
            <div>
              <Header/>
              <Buynow />
              <Paymentmethod />
              <Footer/>
            </div>
         }
          exact
        />
        <Route path="/food-beverages" element={
            <div>
              <Header />
              <Beverages/>
              <Footer/>
            </div>
         } exact />
        <Route path="/food-dairy" element={
            <div>
              <Header />
              <Dairy/>
              <Footer/>
            </div>
         } exact />
        <Route path="/food-fruits" element={
            <div>
              <Header />
              <Fruits/>
              <Footer/>
            </div>
         } exact />
        <Route path="/food-vegetables" element={
            <div>
              <Header />
              <Vegetables/>
              <Footer/>
            </div>
         } exact />

        <Route path="/festival-diwali" element={
            <div>
              <Header />
              <Diwali/>
              <Footer/>
            </div>
         } exact />
        <Route path="/festival-rakhi" element={
            <div>
              <Header />
              <Rakhi/>
              <Footer/>
            </div>
         } exact />

        <Route path="/winter-winter" element={
            <div>
              <Header />
              <Winter/>
              <Footer/>
            </div>
         } exact />

        <Route path="/grocery-edibleoils" element={
            <div>
              <Header />
              <Edibleoils/>
              <Footer/>
            </div>
         } exact />
        <Route path="/grocery-flours" element={
            <div>
              <Header />
              <Flours/>
              <Footer/>
            </div>
         } exact />
        <Route path="/grocery-grains" element={
            <div>
              <Header />
              <Grains/>
              <Footer/>
            </div>
         } exact />
        <Route path="/grocery-spices" element={
            <div>
              <Header />
              <Spices/>
              <Footer/>
            </div>
         } exact />

        <Route path="/allproducts" element={
            <div>
              <Header />
              <Allproducts/>
              <Footer/>
            </div>
         } exact />
        <Route path="/helpnfaq" element={
            <div>
              <Header />
              <Faq/>
              <Footer/>
            </div>
         } exact />

        <Route path="/deactivateaccount"  element={
            <div>
              <Header />
              <Deactivateaccount/>
              <Footer/>
            </div>
         } exact />

        <Route
          path="/reviews"
          element={
            <div>
              <Header />
              <Navreview />
              <Reviews />
              <Footer/>
            </div>
         }
          exact
        />
        <Route
          path="/addreview"
          element={
            <div>
              <Header />
              <Navreview />
              <Addreview />
              <Footer />
            </div>
         }
          exact
        />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
