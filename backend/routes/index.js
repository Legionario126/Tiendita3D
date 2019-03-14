const express = require("express");
const router = express.Router();
const User = require("../models/User");
const passport = require("passport");
const uploadCloud = require("../helpers/cloudinary");
const path = require("path")

let Product = require("../models/Product");

//middlewares
function isAuth(req, res, next) {
  console.log(req.isAuthenticated());
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(401).json({ message: "no estas logeado" });
  }
}

router.get("/logout", isAuth, (req, res) => {
  req.logout();

  req.session.destroy(err => {
    if (!err) {
      res
        .status(200)
        .clearCookie("connect.sid", { path: "/" })
        .json({ message: "Logout exitoso" });
    }
  });
});

//signup
router.post("/signup", (req, res, next) => {
  User.register(req.body, req.body.password)
    .then(user => {
      res.status(201).json(user);
    })
    .catch(e => next(e));
});
//login
router.post("/login", passport.authenticate("local"), (req, res, next) => {
  res.status(200).json(req.user);
});
//private
router.get("/private", isAuth, (req, res, next) => {
  res.status(200).json({
    message: "Login exitoso",
    name: req.user.username,
    photo: req.user.profilePic
  });
});

router.post(
  "/imageProfile",
  isAuth,
  uploadCloud.single("picture"),
  (req, res, next) => {
    User.findByIdAndUpdate(req.user._id, { profilePic: req.file.url })
      .then(user => {
        res
          .status(200)
          .json({
            message: "Foto de perfil actualizada",
            profilePic: req.file.url
          });
      })
      .catch(e => console.log(e));
  }
);

/* GET home page */
router.get("/*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "public", "index.html"))
});

// POST product
// router.post("/gallery", isAuth, (req, res, next) => {
//   Product.create(req.body)
//     .then(product => {
//       console.log(product);
//       User.findByIdAndUpdate(req.user._id, { $push: { products: product._id } })
//         .then(user => res.status(201).json({ product, user }))
//         .catch(err => res.json(err));
//     })
//     .catch(e => console.log(e));
// });

// GET products
// router.get("/gallery", async (req, res, next) => {
//   try {
//     let products = await Product.find();
//     res.status(200).json(products);
//   } catch (e) {
//     next(e);
//   }
// });

module.exports = router;
