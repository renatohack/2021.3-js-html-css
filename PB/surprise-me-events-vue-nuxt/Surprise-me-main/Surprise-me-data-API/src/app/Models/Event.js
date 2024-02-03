const mongoose = require("mongoose");

const Event = mongoose.Schema(
  {
    nome: { type: String },
    descricao: { type: String },
    criador: { type: String },
    endereco: { type: String },
    status: { type: String },
    preco: { type: String },
    imgUrl: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("event", Event);
