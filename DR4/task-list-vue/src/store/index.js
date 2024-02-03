import { createStore } from 'vuex'

export default createStore({
  state: {
    msg: '',
    tarefas: []
  },
  mutations: {
    setTarefas(state, tarefas) {
      state.tarefas = tarefas
    },
    setMensagem(state, mensagem) {
      state.msg = mensagem
    },
    addTarefa(state, tarefa) {
      state.tarefas.push(tarefa)
    }
  },
  actions: {
    fetchTarefas(context) {
      if (context.state.tarefas.length === 0) {
        // fetch('/data.json')
        fetch('http://localhost:3000/tarefas')
          .then(res => res.json())
          .then(json => { context.commit('setTarefas', json); console.log(json) })
          .catch(err => { context.commit('setMensagem', err); console.log(err) })
      }

    }
  },
  modules: {
  },
  getters: {
    filtrarTarefas: (state) => (filtro) => {
      if (filtro) {
        return state.tarefas.filter(tarefa => tarefa.tarefa.includes(filtro))
      }
      return state.tarefas
    }
  }
})
