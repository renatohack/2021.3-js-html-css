<template>
  <form @submit.prevent="gerarTarefa">
    <h1>Tarefas</h1>
    <p v-show='msg' style='font-size: 2em; color: red; text-align: center'>{{msg}}</p>
    <p>
      <label>Tarefa: </label>
      <input type="text" placeholder="Tarefa" v-model='tarefa' required/>
    </p>
    <br/>
    <p>
      <label>Data: </label>
      <input type="date" v-model='data' required/>
    </p>
    <br />
    <label for="tipo">Prioridade: </label>
    <select name="tipo" id="tipo" v-model="prioridade" required>
      <option value="Urgente">Urgente</option>
      <option value="Alta">Alta</option>
      <option value="Média">Média</option>
      <option value="Baixa">Baixa</option>
    </select>
    <br /><br />
    <p>
      <label>Descrição: </label>
      <br />
      <textarea placeholder="Descrição da tarefa" v-model="descricao" required></textarea>
    </p>
    <input type="submit" />
  </form>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import InputTexto from "@/components/InputText.vue";

export default {
  name: "Cadastro",
  data() {
    return {
      msg: '',
      tarefa: "",
      data: "",
      prioridade: "",
      descricao: "",
    };
  },
  components: {
    InputTexto,
  },
  computed: {
    ...mapGetters({tarefas: 'filtrarTarefas'})
  },
  methods: {
    ...mapMutations({ adicionarTarefa: "addTarefa" }),
    gerarTarefa() {

      if (this.$store.state.tarefas.some(el => el.tarefa === this.tarefa)){
        this.msg = 'Essa tarefa já existe na sua lista.'
      }
      else{ 
        let tarefa = {
        tarefa: this.tarefa,
        data: this.data,
        prioridade: this.prioridade,
        descricao: this.descricao,
      };
        this.adicionarTarefa(tarefa)
        this.msg = ''
        this.tarefa = ""
        this.data = ""
        this.prioridade = ""
        this.descricao = ""
      }
    },
  },
};
</script>

<style>
form {
  box-sizing: border-box;
  padding-left: 2em;
  text-align: left;
  margin: auto;
  max-width: 40%;
  border: 1px solid black;
  padding-bottom: 2em;
}

form h1 {
  text-align: center;
}
</style>