<template>
  <div>
    <b-dropdown-item v-b-modal.modal-menu-user-create>Cadastro</b-dropdown-item>

    <b-modal
      id="modal-menu-user-create"
      ref="modal"
      title="Cadastro de Usuario"
      @show="resetModal"
      @hidden="resetModal"
      @ok="create"
      scrollable
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="Name"
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
          label="Email"
          label-for="email-input"
          invalid-feedback="Name is required"
          :state="nameState"
        >
          <b-form-input
            id="email-input"
            v-model="email"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label="Senha"
          label-for="senha-input"
          invalid-feedback="Name is required"
          :state="nameState"
        >
          <b-form-input
            id="senha-input"
            v-model="senha"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label="Cargo"
          label-for="posicao-input"
          invalid-feedback="Name is required"
          :state="nameState"
        >
          <b-form-input
            id="posicao-input"
            v-model="posicao"
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
          <b-form-input
            id="status-input"
            v-model="email"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label="endereco"
          label-for="endereco-input"
          invalid-feedback="Name is required"
          :state="nameState"
        >
          <b-form-input
            id="endereco-input"
            v-model="email"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label="Imagem Url"
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
      email: "",
      senha: "",
      posicao: "",
      status: "",
      endereco: "",
      imgUrl: "",
      nameState: null,
      submittedNames: [],
      titleMensagem: "Cadastro de Usuário.",
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
        (this.email = ""),
        (this.senha = ""),
        (this.posicao = ""),
        (this.status = ""),
        (this.endereco = ""),
        (this.imgUrl = ""),
        (this.nameState = null);
    },
    handleSubmit() {
      if (!this.checkFormValidity()) {
        return;
      }
      this.submittedNames.push(this.name);
      this.$nextTick(() => {
        this.$bvModal.hide("modal-menu-user-create");
      });
    },
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