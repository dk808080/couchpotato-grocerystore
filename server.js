const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const app = express();

app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/couchpotatoDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.set("useCreateIndex", true);

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  mobileno: String,
});

const reviewsSchema = {
  username: String,
  title: String,
  content: String,
};

const cartSchema = {
  image: String,
  productName: String,
  quantity: String,
  price: String,
  details: String,
};

const addressSchema = {
  name: String,
  phonenumber: Number,
  address: String,
  city: String,
  zip: Number,
};

const cardSchema = {
  name: String,
  cardnumber: String,
  valid: String,
  cardname: String,
};

const User = new mongoose.model("User", userSchema);

const Cartitem = mongoose.model("Cartitem", cartSchema);

const Review = mongoose.model("Review", reviewsSchema);

const Address = mongoose.model("Address", addressSchema);

const Card = mongoose.model("Card", cardSchema);

app.get("/", (req, res) => {
  res.send("this is home of server");
});

app.get("/bodyoverviews", (req, res) => {
  Review.find({}, function (err, reviews) {
    res.send(reviews);
  });
});

app.get("/bodyaddresses", (req, res) => {
  Address.find({}, function (err, addresses) {
    res.send(addresses);
  });
});

app.get("/bodycards", (req, res) => {
  Card.find({}, function (err, cards) {
    res.send(cards);
  });
});

app.post("/addreview", (req, res) => {
  const review = new Review({
    username: req.body.username,
    title: req.body.title,
    content: req.body.content,
  });
  review.save(function (err) {
    if (!err) {
      res.send("your review is added successfully");
    }
  });
});

app.post("/saveaddress", (req, res) => {
  const address = new Address({
    name: req.body.name,
    phonenumber: Number(req.body.phonenumber),
    address: req.body.address,
    city: Number(req.body.city),
    zip: req.body.zip,
  });
  address.save(function (err) {
    if (!err) {
      res.send("your address is saved successfully");
    }
  });
});

app.post("/savecard", (req, res) => {
  const card = new Card({
    name: req.body.name,
    cardnumber: req.body.cardnumber,
    valid: req.body.valid,
    cardname: req.body.cardname,
  });
  card.save(function (err) {
    if (!err) {
      res.send("your card is saved successfully");
    }
  });
});

app.post("/deleteaddress", (req, res) => {
  const id = req.body.id;
  Address.deleteOne({ _id: id }, function (err) {
    if (err) {
      console.log(err);
    } else {
      res.send(
        "this address is deleted successfully from your saved addresses"
      );
    }
  });
});

app.post("/deletecard", (req, res) => {
  const id = req.body.id;
  Card.deleteOne({ _id: id }, function (err) {
    if (err) {
      console.log(err);
    } else {
      res.send("this card is deleted successfully from your saved cards");
    }
  });
});

app.post("/signupuser", (req, res) => {
  bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: hash,
      mobileno: "",
    });
    newUser.save((err) => {
      if (err) {
        console.log(err);
      } else {
        res.send("you have created your couch potato account successfully");
      }
    });
  });
});

app.post("/validateuser", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  User.findOne({ email: email }, (err, foundUser) => {
    if (err) {
      console.log(err);
    } else {
      bcrypt.compare(password, foundUser.password, function (err, result) {
        if (result === true) {
          res.send("logged in successfully");
        }
      });
    }
  });
});

app.get("/logout", (req, res) => {
  res.send("do you really want to logout from couch-potato");
});

app.post("/addtocart", (req, res) => {
  const product = new Cartitem({
    image: req.body.image,
    productName: req.body.productName,
    quantity: req.body.quantity,
    price: req.body.price,
    details: req.body.details,
  });
  product.save(function (err) {
    if (!err) {
      res.send("your item is added successfully in the cart");
    }
  });
});

app.get("/bodycart", (req, res) => {
  Cartitem.find({}, function (err, items) {
    res.send(items);
  });
});

app.post("/deleteitemfromcart", (req, res) => {
  const id = req.body.id;
  Cartitem.deleteOne({ _id: id }, function (err) {
    if (err) {
      console.log(err);
    } else {
      res.send("this item is deleted successfully from your cart");
    }
  });
});

app.listen(5000, () => {
  console.log("server started on port 5000");
});
