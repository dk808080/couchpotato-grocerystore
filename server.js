const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const fs = require("fs");
const path = require("path");
const saltRounds = 10;

const app = express();
app.use(express.json());
app.use(bodyParser.json());

mongoose.connect(
  "mongodb+srv://admin-dimpal:abhinav@dimpal@couchpotato0.wqtxd.mongodb.net/couchpotatoDB?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
/* appppppppppppppppiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii*/

const diwali = JSON.parse(fs.readFileSync("./data/festival/diwali-data.json"));
app.get("/api/festival/diwali", (req, res) => {
  res.status(200).json({
    status: "sucess",
    data: {
      diwali: diwali,
    },
  });
});
app.post("/api/festival/diwali", (req, res) => {
  console.log(req.body);
  res.send("Done!");
});

const rakhi = JSON.parse(fs.readFileSync("./data/festival/rakhi-data.json"));
app.get("/api/festival/rakhi", (req, res) => {
  res.status(200).json({
    status: "sucess",
    data: {
      rakhi: rakhi,
    },
  });
});

const beverages = JSON.parse(
  fs.readFileSync("./data/food/beverages-data.json")
);
app.get("/api/food/beverages", (req, res) => {
  res.status(200).json({
    status: "sucess",
    data: {
      beverages: beverages,
    },
  });
});

const dairy = JSON.parse(fs.readFileSync("./data/food/dairy-data.json"));
app.get("/api/food/dairy", (req, res) => {
  res.status(200).json({
    status: "sucess",
    data: {
      dairy,
    },
  });
});

const fruits = JSON.parse(fs.readFileSync("./data/food/fruits-data.json"));
app.get("/api/food/fruits", (req, res) => {
  res.status(200).json({
    status: "sucess",
    data: {
      fruits,
    },
  });
});

const vegetables = JSON.parse(
  fs.readFileSync("./data/food/vegetables-data.json")
);
app.get("/api/food/vegetables", (req, res) => {
  res.status(200).json({
    status: "sucess",
    data: {
      vegetables,
    },
  });
});

const oil = JSON.parse(fs.readFileSync("./data/grocery/edibleoils-data.json"));
app.get("/api/grocery/oil", (req, res) => {
  res.status(200).json({
    status: "sucess",
    data: {
      oil,
    },
  });
});

const flour = JSON.parse(fs.readFileSync("./data/grocery/flours-data.json"));
app.get("/api/grocery/flour", (req, res) => {
  res.status(200).json({
    status: "sucess",
    data: {
      flour,
    },
  });
});

const grains = JSON.parse(fs.readFileSync("./data/grocery/grains-data.json"));
app.get("/api/grocery/grains", (req, res) => {
  res.status(200).json({
    status: "sucess",
    data: {
      grains,
    },
  });
});

const spices = JSON.parse(fs.readFileSync("./data/grocery/spices-data.json"));
app.get("/api/grocery/spices", (req, res) => {
  res.status(200).json({
    status: "sucess",
    data: {
      spices,
    },
  });
});

const winter = JSON.parse(
  fs.readFileSync("./data/winter-special/winter-data.json")
);
app.get("/api/winter-special", (req, res) => {
  res.status(200).json({
    status: "sucess",
    data: {
      winterSpecial: winter,
    },
  });
});

const allProducts = JSON.parse(fs.readFileSync("./data/allproducts-data.json"));
app.get("/api/allProducts", (req, res) => {
  res.status(200).json({
    status: "sucess",
    data: {
      allProducts: allProducts,
    },
  });
});
/*eeeennnnnnnnnnnnndddddddddddddddd offffffffffffffffff apppiiiiiiiiiiiiiiiii*/
app.get("/", (req, res) => {
  res.send("this is home of server");
});
const userSchema = new mongoose.Schema({
  _id: String,
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
  emailid: String,
  image: String,
  productName: String,
  quantity: String,
  price: String,
  details: String,
};

const ordersSchema = {
  emailid: String,
  image: String,
  productName: String,
  quantity: String,
  price: String,
  details: String,
};
const addressSchema = {
  emailid: String,
  name: String,
  phonenumber: Number,
  address: String,
  city: String,
  zip: Number,
};

const cardSchema = {
  emailid: String,
  name: String,
  cardnumber: String,
  valid: String,
  cardname: String,
};

const User = new mongoose.model("User", userSchema);

const Cartitem = mongoose.model("Cartitem", cartSchema);

const Order = mongoose.model("Order", ordersSchema);

const Review = mongoose.model("Review", reviewsSchema);

const Address = mongoose.model("Address", addressSchema);

const Card = mongoose.model("Card", cardSchema);

app.get("/api/bodyoverviews", (req, res) => {
  Review.find({}, function (err, reviews) {
    res.send(reviews);
  });
});

app.get("/api/bodyaddresses", (req, res) => {
  Address.find({}, function (err, addresses) {
    res.send(addresses);
  });
});

app.get("/api/bodycards", (req, res) => {
  Card.find({}, function (err, cards) {
    res.send(cards);
  });
});

app.post("/api/addreview", (req, res) => {
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

app.post("/api/saveaddress", (req, res) => {
  const address = new Address({
    emailid: req.body.emailid,
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

app.post("/api/savecard", (req, res) => {
  const card = new Card({
    emailid: req.body.emailid,
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

app.post("/api/deleteaddress", (req, res) => {
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

app.post("/api/deletecard", (req, res) => {
  const id = req.body.id;
  Card.deleteOne({ _id: id }, function (err) {
    if (err) {
      console.log(err);
    } else {
      res.send("this card is deleted successfully from your saved cards");
    }
  });
});

app.post("/api/signupuser", (req, res) => {
  bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
    const newUser = new User({
      _id: req.body.email,
      name: req.body.name,
      email: req.body.email,
      password: hash,
      mobileno: req.body.mobileno,
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

app.post("/api/validateuser", (req, res) => {
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

app.get("/api/logout", (req, res) => {
  res.send("do you really want to logout from couch-potato");
});

app.post("/api/addtocart", (req, res) => {
  const product = new Cartitem({
    emailid: req.body.emailid,
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

app.get("/api/bodycart", (req, res) => {
  Cartitem.find({}, function (err, items) {
    res.send(items);
  });
});

app.get("/api/bodyorders", (req, res) => {
  Order.find({}, function (err, items) {
    res.send(items);
  });
});
app.post("/api/ordertheitems", (req, res) => {
  const emailid = req.body.items[0].emailid;
  Cartitem.deleteMany({ emailid: emailid }, function (err) {
    if (err) {
      console.log(err);
    }
  });
  Order.insertMany(req.body.items, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      res.send("order placed");
    }
  });
});

app.get("/api/bodypinfo", (req, res) => {
  User.find({}, function (err, users) {
    res.send(users);
  });
});
app.post("/api/deleteitemfromcart", (req, res) => {
  const id = req.body.id;
  Cartitem.deleteOne({ _id: id }, function (err) {
    if (err) {
      console.log(err);
    } else {
      res.send("this item is deleted successfully from your cart");
    }
  });
});

app.post("/api/savechangesinpinfo", (req, res) => {
  User.findOneAndUpdate(
    { _id: req.body.emailid },
    { name: req.body.name, mobileno: req.body.mobileno },
    function (err, results) {
      if (!err) {
        res.send("changes saved successfully");
      } else {
        console.log(err);
      }
    }
  );
});

app.post("/api/deleteacc", (req, res) => {
  Address.deleteMany({ emailid: req.body.emailid }, function (err) {
    if (err) {
      console.log(err);
    }
  });
  Cartitem.deleteMany({ emailid: req.body.emailid }, function (err) {
    if (err) {
      console.log(err);
    }
  });
  Card.deleteMany({ emailid: req.body.emailid }, function (err) {
    if (err) {
      console.log(err);
    }
  });
  User.deleteOne({ _id: req.body.emailid }, function (err) {
    if (err) {
      console.log(err);
    } else {
      res.send("your account has been deleted");
    }
  });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("server started on port 5000");
});
