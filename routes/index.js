var express = require('express');
var router = express.Router();
const userModel = require("./users");

/* GET home page. */
router.get("/", function (req ,res) {
    // res.render("index");
    res.send("chal raha hai");
})

// router.get("/login", function (req ,res) {
//     res.render("login");
// })

// router.get("/buyingPage", function (req ,res) {
//     res.render("buyingPage");
// })

// router.get("/profile", function (req ,res) {
//     res.render("profile");
// })

router.get("/create" , async function (req, res) {
    const createdUser = await userModel.create({
        username:"tony",
        age:22
    });

    res.send(createdUser);

});

module.exports = router;
