<template>
    <p><b>
      Tarefa: {{ tarefa.tarefa }} | Data: {{ tarefa.data }} | Prioridade:
      {{ tarefa.prioridade }}
    </b></p>
    <p>{{ tarefa.descricao }}</p>
  <hr>
</template>

<script>
export default {
  name: "Tarefa",
  data() {
    return {};
  },
  props: ["tarefa"],
};
</script>

<style>
</style>