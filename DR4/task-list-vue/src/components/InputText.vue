<template>
  <p>
    <label>{{ label }}</label>
    <input :type="tipo" :placeholder="dica" :name="nome" />
  </p>
  <br/>
</template>

<script>
export default {
  name: "InputTexto",
  data() {
    return {};
  },
  props: {
    label: String,
    tipo: String,
    dica: String,
    nome: String,
  },
};
</script>

<style>
</style>