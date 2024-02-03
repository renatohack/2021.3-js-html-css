<template>
  <div>
    <div class="input-group mb-3" style="max-width: 740px; margin: 1em auto">
        <input
          type="text"
          class="form-control"
          placeholder="Pesquisar Eventos"
          aria-label="Evento"
          aria-describedby="button-addon2"
          v-model="filtro"
        />
        <button class="btn btn-outline-secondary" type="button" id="button-addon2" v-on:click="filtrarLista">Filtrar</button>
    </div>
    <div v-for="item in items" :key="item.id" class="my-3">
      <b-card no-body class="overflow-hidden " style="max-width: 740px">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img
              v-bind:src="item.imgUrl"
              v-bind:alt="item.nome"
              class="rounded-0"
            ></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body v-bind:title="item.nome">
              <b-card-text>
                {{ item.descricao }}
              </b-card-text>
              <b-card-text>
                Preço: R${{ item.preco }} 
              </b-card-text>
              <b-card-text>
                {{ item.status }}
              </b-card-text>
              <b-card-text>
              Atualizado: {{ dataform(item.updatedAt) }}
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      itemsFiltered: [],
      itemsJson: [],
      filtro: "",
    };
  },
  created() {
    fetch("http://localhost:3030/events", { method: "GET" })
      .then((res) => res.json())
      .then((data) => (this.items = data))
      .then((data) => (this.itemsJson = data))
      .then(() => {})
      .catch((error) => {
        alert(error.message);
      });
  },
  methods: {
    dataform: function (data) {
      var dataAtual = new Date(data);
      var dia = dataAtual.getDate();
      var mes = dataAtual.getMonth() + 1;
      var ano = dataAtual.getFullYear();
      // var horas = dataAtual.getHours();
      // var minutos = dataAtual.getMinutes();
      return `${dia}/${mes}/${ano}`;
    },
    filtrarLista: function () {
      let filtro = this.filtro;
      if (filtro !== "") {
        this.itemsJson.forEach((it) => {
          if (it.nome.toUpperCase().toLowerCase().includes(filtro.toUpperCase().toLowerCase())) {
            this.itemsFiltered.push(it);
          }
        })
        this.items = this.itemsFiltered;
        this.itemsFiltered = []
      }
      else {
          this.items = this.itemsJson
        }
    },
  },
};
</script>

<style>
</style>
