<template>
  <div>
    <b-dropdown-item v-b-modal.modal-menu-event-create>Novo evento</b-dropdown-item>

    <b-modal
      id="modal-menu-event-create"
      ref="modal"
      title="Cadastro de Evento"
      @show="resetModal"
      @hidden="resetModal"
      @ok="create"
      scrollable
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="Nome"
          label-for="nome-input"
          invalid-feedback="Name is required"
          :state="nameState"
        >
          <b-form-input
            id="nome-input"
            v-model="nome"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label="Descrição"
          label-for="descricao-input"
          invalid-feedback="Name is required"
          :state="nameState"
        >
          <b-form-input
            id="descricao-input"
            v-model="descricao"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label="Criador"
          label-for="criador-input"
          invalid-feedback="Name is required"
          :state="nameState"
        >
          <b-form-input
            id="criador-input"
            v-model="criador"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label="Endereço"
          label-for="endereco-input"
          invalid-feedback="Name is required"
          :state="nameState"
        >
          <b-form-input
            id="endereco-input"
            v-model="endereco"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label="Status"
          label-for="status-input"
          invalid-feedback="Name is required"
          :state="nameState"
        >
          <!-- <b-form-input
            id="status-input"
            v-model="status"
            :state="nameState"
            required
          ></b-form-input> -->
          <select class="form-select" aria-label="Default select example" v-model="status" :state="nameState" required>
            <option selected>Público</option>
            <option value="Privado">Privado</option>
          </select>
        </b-form-group>
        <b-form-group
          label="Preço (R$)"
          label-for="preco-input"
          invalid-feedback="Name is required"
          :state="nameState"
        >
          <b-form-input
            id="preco-input"
            v-model="preco"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label="Imagem (url)"
          label-for="imgUrl-input"
          invalid-feedback="Name is required"
          :state="nameState"
        >
          <b-form-input
            id="imgUrl-input"
            v-model="imgUrl"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
      </form>
      <template #modal-footer="{ ok, cancel }">
        <b-button size="sm" variant="danger" @click="cancel()">
          Cancel
        </b-button>
        <b-button size="sm" variant="dark" @click="ok()"> Cadastrar </b-button>
      </template>
    </b-modal>
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
      nameState: null,
      submittedNames: [],
      titleMensagem: "Cadastro de Evento.",
    };
  },
  methods: {
    mensagem(title, mensage, type) {
      this.toastCount++;
      this.$bvToast.toast(`${mensage}`, {
        title: `${title}`,
        autoHideDelay: 8000,
        appendToast: false,
        variant: type, //success,warning,danger
      });
    },
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.nameState = valid;
      return valid;
    },
    resetModal() {
      (this.nome = ""),
        (this.descricao = ""),
        (this.criador = ""),
        (this.endereco = ""),
        (this.status = ""),
        (this.preco = ""),
        (this.imgUrl = "");
    },
    handleSubmit() {
      if (!this.checkFormValidity()) {
        return;
      }
      this.submittedNames.push(this.name);
      this.$nextTick(() => {
        this.$bvModal.hide("modal-menu-event-create");
      });
    },
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
          if (!this.items.error) {
            this.mensagem(this.titleMensagem, this.items.message, "success");
          } else {
            this.mensagem(this.titleMensagem, this.items.message, "danger");
          }
        })
        .catch((error) => {
          this.mensagem(this.titleMensagem, error.message, "danger");
        });
    },
  },
};
</script>