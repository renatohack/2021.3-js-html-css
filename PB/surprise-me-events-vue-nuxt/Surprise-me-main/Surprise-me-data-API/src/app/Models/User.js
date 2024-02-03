const mongoose = require('mongoose');

const User = mongoose.Schema(
  {
    nome : { type: String, required: true },
    email : { type: String, required: true },
    senha : { type: String, required: true },
    posicao : { type: String},
    status : { type: String},
    endereco : { type: String},
    imgUrl:{ type: String}
  },
  { 
    timestamps: true,
  }
)

module.exports = mongoose.model('user', User)