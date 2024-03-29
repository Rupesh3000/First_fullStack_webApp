var express = require("express");
var router = express.Router();
const userModel = require("./users");
const orderModel = require("./order");
const productModel = require("./product");
const passport = require("passport");
const localStrategy = require("passport-local");
const getProductData = require("../productData");

passport.use(new localStrategy(userModel.authenticate()));

/* GET home page. */

router.get("/", function (req, res) {
  res.render("index", { isAuthenticated: req.isAuthenticated() });
});

router.get("/loginPage", function (req, res) {
  res.render("loginPage", { error: req.flash("error") });
});

router.get("/profile", isLoggedIn, async function (req, res) {
  const user = await userModel.findOne({
    username: req.session.passport.user,
  });
  res.render("profile", { user });
});

router.post("/register", function (req, res) {
  let userdata = new userModel({
    username: req.body.username,
    email: req.body.email,
  });

  userModel
    .register(userdata, req.body.password)
    .then(function (registereduser) {
      passport.authenticate("local")(req, res, function () {
        res.redirect("/");
      });
    });
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/loginPage",
    failureFlash: true,
  }),
  function (req, res) {}
);

router.get("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/loginPage");
}

router.get(
  "/buyingPage/:productId",
  isLoggedIn,
  async function (req, res, next) {
    const user = req.user;
    let productData = getProductData(req.params.productId);
    const productId = new productModel({
      image: productData.image,
      name: productData.name,
      price: productData.price,
      description: productData.description,
      user: user._id,
    });

    try {
      await productId.save();
    } catch (error) {
      console.error("Error saving product:", error);
      return next(error);
    }

    res.render("buyingPage", {
      title: productData.name,
      ...productData,
    });
  }
);

router.get("/thankyou", function (req, res) {
  res.send("order is done");
});
router.post("/submit-order", async (req, res) => {
  const user = req.user;

  const {
    email,
    firstname,
    lastname,
    address,
    companyname,
    country,
    state,
    city,
    pincode,
    phone,
    size,
    quantity,
  } = req.body;

  const newOrder = new orderModel({
    email,
    firstname,
    lastname,
    address,
    companyname,
    country,
    state,
    city,
    pincode,
    phone,
    size,
    quantity,
    user: user._id,
  });
  newOrder
    .save()
    .then(async (savedOrder) => {
      await userModel.findByIdAndUpdate(user._id, {
        $push: {
          orders: savedOrder._id,
        },
      });

      res.redirect("/thankyou");
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error saving order to database");
    });
});

module.exports = router;
