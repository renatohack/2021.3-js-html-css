<template>
  <div class="create justify-center rounded-lg">
    <h1 class="flex justify-center">Criação de conta</h1>
    <input
      type="text"
      placeholder="Name"
      class="mb-4 w-auto p-4 shadow-2xl rounded-lg"
      v-model="nome"
    />
    <br />
    <input
      type="text"
      placeholder="Email"
      class="mb-4 w-auto p-4 shadow-2xl rounded-lg"
      v-model="email"
    />
    <br />
    <input
      type="password"
      placeholder="Senha"
      class="mb-4 w-auto p-4 shadow-2xl rounded-lg"
      v-model="senha"
    />
    <br />
    <input
      type="text"
      placeholder="Cargo"
      class="mb-4 w-auto p-4 shadow-2xl rounded-lg"
      v-model="posicao"
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
      placeholder="Endereço"
      class="mb-4 w-auto p-4 shadow-2xl rounded-lg"
      v-model="endereco"
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
      flex justify-center
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
      email: "",
      senha: "",
      posicao: "",
      status: "",
      endereco: "",
      imgUrl: "",
      items: [],
    };
  },
  methods: {
    create() {
      fetch("http://localhost:3030/user", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: this.nome,
          email: this.email,
          senha: this.senha,
          posicao: this.posicao,
          status: this.status,
          endereco: this.endereco,
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