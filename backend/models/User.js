let passportLocalMongoose = require('passport-local-mongoose')

let userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ["ADMIN", "GUEST"],
    default: "GUEST"
  },
  profilePic: {
    type: String,
    default: "https://static.thenounproject.com/png/17241-200.png"
  },
  products:[{
    type: Schema.Types.ObjectId,
    ref: 'Product'
  }]
}, { timestamps: true, versionKey: false  })

userSchema.plugin(passportLocalMongoose, { usernameField: "email" })

module.exports = mongoose.model('User', userSchema)