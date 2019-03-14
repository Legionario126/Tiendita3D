let mongoose = require('mongoose')
let Schema = mongoose.Schema

let productSchema = new Schema({
  price: String,
  name: {
    type: String
  },
  pictureGallery: [
    {
      type: String
    }
  ],
  pic3D: String,
  des: String,
}, { timestamps: true, versionKey: false })

module.exports = mongoose.model('Product', productSchema)