<template>
  <div>
    <b-dropdown-item v-b-modal.modal-menu-user-login>Login</b-dropdown-item>

    <b-modal
      id="modal-menu-user-login"
      ref="modal"
      title="Logar"
      @show="resetModal"
      @hidden="resetModal"
      @ok="login"
      scrollable
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
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
      </form>
      <template #modal-footer="{ ok, cancel }">
        <b-button size="sm" variant="danger" @click="cancel()">
          Cancel
        </b-button>
        <b-button size="sm" variant="dark" @click="ok()"> Login </b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      senha: "",
      nameState: null,
      submittedNames: [],
      titleMensagem: "Login de Usuário.",
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
        (this.email = ""),
        (this.senha = ""),
        (this.nameState = null);
    },
    handleSubmit() {
      if (!this.checkFormValidity()) {
        return;
      }
      this.submittedNames.push(this.name);
      this.$nextTick(() => {
        this.$bvModal.hide("modal-menu-user-login");
      });
    },
    login() {
      fetch("http://localhost:3030/user", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: this.email,
          senha: this.senha,
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