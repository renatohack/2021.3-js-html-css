<template>
<div class="container">
  <div class="row">
    <div v-for="item in items" :key="item.id" >
      <b-card
        no-body
        style="max-width: 35rem; width: 240px"
        v-bind:img-src="item.imgUrl"
        img-alt="Image"
        img-top
      >
        <b-card-body>
          <b-card-title>{{ item.nome }}</b-card-title>
          <b-card-sub-title class="mb-1">{{ item.posicao }}</b-card-sub-title>
        </b-card-body>
        <b-list-group flush>
          <b-list-group-item>Email:{{ item.email }}</b-list-group-item>
          <b-list-group-item
            >Atualizado: {{ dataform(item.updatedAt) }}</b-list-group-item
          >
        </b-list-group>
      </b-card>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
    };
  },
  created() {
    fetch("http://localhost:3030/user", { method: "GET" })
      .then((res) => res.json())
      .then((data) => (this.items = data))
      .catch((error) => {
        makeToast(error.message);
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
    srcImage: function (image) {
      return image.toString();
    },
    makeToast: function (title,mensage) {
      this.$bvToast.toast(mensage, {
        title: title,
        autoHideDelay: 5000,
        appendToast: false,
        variant:'danger',
      });
    },
  },
};
</script>

