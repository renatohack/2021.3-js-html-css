<template>
  <div>
    <Menu />
    <div class="container-xl">
      <div class="row">
        <div class="col col-lg-10 d-flex justify-content-center">
          <EventsList />
        </div>
        <div class="col col-lg-2 border-left">
          <div v-for="item in items" :key="item.id" class="my-3">
            <b-card
              v-bind:title="item.nome"
              v-bind:img-src="item.imgUrl"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 30rem"
              class="mb-2"
            >
              <b-card-text>
                {{ item.descricao }}
              </b-card-text>
              

              <b-button href="#" variant="dark">ver</b-button>
            </b-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      itemsFiltered: [],
    };
  },
  created() {
    fetch("http://localhost:3030/events", { method: "GET" })
      .then((res) => res.json())
      .then((data) => (this.items = data))
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
    filtrarLista: function (filtro) {
      if (filtro !== "") {
        this.items.forEach((it) => {
          if (it.nome.includes(filtro)) {
            this.itemsFiltered.push(it);
          }
        });
      }
      else {
          this.itemsFiltered = []
        }
    },
  },
};
</script>
