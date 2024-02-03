const Events = require("../Models/Event");

class EventsController {
  async list(req, res) {
    let eventsList = await Events.find();
    res.json(eventsList);
  }

  async create(req, res) {
    let userExist = await Events.findOne({ nome: req.body.nome });
    if (userExist) {
      return res.status(400).json({
        error: true,
        message: "Este evento já existe!",
      });
    }

    const { nome, descricao, criador, endereco, status, preco ,imgUrl} = req.body;
    const data = { nome, descricao, criador, endereco, status, preco ,imgUrl};
    console.log(data)
    await Events.create(data, (err) => {
      if (err)
        return res.status(400).json({
          error: true,
          message: "Erro ao tentar inserir um evento no MongoDB",
          description: err,
        });

      return res.status(200).json({
        error: false,
        message: "Evento Cadastrado com sucesso",
      });
    });
  }
}

module.exports = new EventsController();
