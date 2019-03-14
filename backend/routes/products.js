let router = require('express').Router()
let Product = require('../models/Product')

// const router      = require('express').Router()
// const User        = require('../models/User')
// const passport    = require('passport')
const uploadCloud = require('../helpers/cloudinary')

router.post('/gallery', uploadCloud.single('picture'), async (req, res, next) => {
  try {
    console.log(req.body)
    let product = await Product.create({...req.body, pictureGallery: req.file.url})
    console.log('success', product)
    // product = Product.findByIdAndUpdate(product._id, {$push: {pictureGallery: req.file.url}}, {new: true})
    res.status(201).json(product)
  } catch (e) {
    console.log('failed', e)
    res.json(e)
  }
})

router.get('/gallery', async (req, res, next) => {
  try {
    let products = await Product.find()
    res.status(200).json(products)
  }
  catch (e) {
    next(e)
  }
})

router.get('/detail/:id',(req, res, next) => {
  console.log(req.params)
  let id = req.params.id
  Product.findById(id)
    .then(prod => {
      res.status(200).json(prod)
    })
    .catch(e => console.log(e))
})

module.exports = router