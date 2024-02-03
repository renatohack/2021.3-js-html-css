<template>
  <div class="create justify-center rounded-lg">
    <h1 class="flex justify-center">Criação de evento</h1>
    <input
      type="text"
      placeholder="Nome"
      class="mb-4 w-auto p-4 shadow-2xl rounded-lg"
      v-model="nome"
    />
    <br />
    <input
      type="text"
      placeholder="Descrição"
      class="mb-4 w-auto p-4 shadow-2xl rounded-lg"
      v-model="descricao"
    />
    <br />
    <input
      type="text"
      placeholder="Criador do evento"
      class="mb-4 w-auto p-4 shadow-2xl rounded-lg"
      v-model="criador"
    />
    <br />
    <input
      type="text"
      placeholder="Endereço do evento"
      class="mb-4 w-auto p-4 shadow-2xl rounded-lg"
      v-model="endereco"
    />
    <br />
    <input
      type="text"
      placeholder="Status"
      class="mb-4 w-auto p-4 shadow-2xl rounded-lg"
      v-model="status"
    />
    <br />
    <input
      type="text"
      placeholder="Preço (R$)"
      class="mb-4 w-auto p-4 shadow-2xl rounded-lg"
      v-model="preco"
    />
    <br />
    <input
      type="text"
      placeholder="Url da Imagem"
      class="mb-4 w-auto p-4 shadow-2xl rounded-lg"
      v-model="imgUrl"
    />
    <br />
    <button
      @click="create"
      class="
        flex
        justify-center
        shadow-2xl
        bg-gray-200
        hover:bg-gray-400
        px-16
        py-2
        rounded
        font-semibold
        text-black
        mb-28
      "
    >
      Criar Conta
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      nome: "",
      descricao: "",
      criador: "",
      endereco: "",
      status: "",
      preco: "",
      imgUrl: "",
      items: [],
    };
  },
  methods: {
    create() {
      fetch("http://localhost:3030/events", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: this.nome,
          descricao: this.descricao,
          criador: this.criador,
          endereco: this.endereco,
          status: this.status,
          preco: this.preco,
          imgUrl: this.imgUrl,
        }),
      })
        .then((res) => res.json())
        .then((data) => (this.items = data))
        .then(() => {
          alert(this.items.message);
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
};
</script>
<style scoped>
.create {
  margin-top: 40px;
}
span {
  display: block;
  margin-top: 20px;
  font-size: 11px;
}
</style>