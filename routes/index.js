var express = require("express");
var router = express.Router();
const userModel = require("./users");
const orderModel = require("./order");
const passport = require("passport");
const localStrategy = require("passport-local");
const getProductData = require("../productData");

passport.use(new localStrategy(userModel.authenticate()));

/* GET home page. */

router.get("/", function (req, res) {
  res.render("index", { isAuthenticated: req.isAuthenticated() });
});

router.get("/buyingPage/:productId", function (req, res, next) {
  let productData = getProductData(req.params.productId);
  res.render("buyingPage", {
    title: productData.name,
    ...productData,
  });
});

router.get("/loginPage", function (req, res) {
  res.render("loginPage");
});

router.get("/profile", isLoggedIn, function (req, res) {
  res.render("profile");
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

router.get("/thankyou" , function(req , res) {
  res.send("order is done")
})
router.post('/submit-order', (req, res) => {
  const {emailorusername, firstname, lastname, address, companyname, country, state, city, pincode, phone } = req.body;

  const newOrder = new orderModel({ emailorusername, firstname, lastname, address, companyname, country, state, city, pincode, phone });
  newOrder.save()
    .then(savedOrder => {
      // console.log(savedOrder);
      res.redirect('/thankyou');
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Error saving order to database');
    });
 
});



module.exports = router;
