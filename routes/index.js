var express = require('express');
var router = express.Router();
const userModel = require("./users");
const passport = require("passport");
const localStrategy = require("passport-local");

passport.use(new localStrategy(userModel.authenticate()));

/* GET home page. */
router.get("/", function (req ,res) {
    res.render("index");
    
})

router.get("/loginPage", function (req ,res) {
    res.render("loginPage");
})


router.get("/profile", isLoggedIn, function (req ,res){
    res.render("profile")
});

router.get("/buyingPage", isLoggedIn,function (req ,res) {
    res.render("buyingPage");
})


router.post("/register", function(req , res) {
    let  userdata = new userModel({
        username:req.body.username,
        email:req.body.email,
        
    });

    userModel.register(userdata, req.body.password)
    .then(function (registereduser){
        passport.authenticate("local")(req,res, function() {
            res.redirect("/");
        })
    })
});

router.post("/login", passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/loginPage"
}),  function(req,res){});


router.get("/logout", function(req, res , next){
    req.logout(function(err) {
        if (err) {return next(err);}
        res.redirect("/");
    });
});

function isLoggedIn(req,res,next) {
    if(req.isAuthenticated()) {
        return next();
    }
    res.redirect("/loginPage");
}



module.exports = router;
