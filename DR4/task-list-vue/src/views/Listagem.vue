<template>
<input v-model="filtro" placeholder="Filtrar por nome da tarefa"/>
  <Tarefa  v-for="tarefa in tarefas(filtro)" :tarefa='tarefa' :key="tarefa.tarefa"/>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import Tarefa from "@/components/Tarefa.vue";

export default {
  name: "Lista",
  data() {
    return {
        filtro: ''
    };
  },
  computed: {
      ...mapGetters({tarefas: 'filtrarTarefas'})
  },
  components: {
    Tarefa,
  },
  methods: {
    ...mapActions(['fetchTarefas'])
  },
  components: {
    Tarefa,
  },
  created() {
      this.fetchTarefas()
  }
};
</script>

<style>
</style>