<template>
  <div>
    <menu-superior />
    <div class="login-form card">
      <div v-if="exibirMensagemErro" class="alert alert-danger">
        <strong>Erro!</strong> E-mail e/ou senha inválido(s).
      </div>

      <div class="row">
        <form class="col s12">
          <div class="img-container">
            <img
              class="img-login"
              src="https://png.pngtree.com/png-vector/20190225/ourlarge/pngtree-vector-avatar-icon-png-image_702436.jpg"
              alt="Logo2"
            />
          </div>
          <div class="row no-margin-bottom">
            <div class="input-field col s12">
              <input id="email" type="email" class="validate" v-model="email" />
              <label for="email"><i class="fa fa-envelope"></i> E-mail</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input
                id="password"
                type="password"
                class="validate"
                v-model="senha"
              />
              <label for="password"><i class="fa fa-key"></i> Senha</label>
            </div>
          </div>
          <div class="row">
            <a
              v-on:click="login"
              class=" waves-light btn btn-large blue darken-3 botao-login"
              >ENTRAR</a
            >
          </div>
          <div class="row">
            <p class="esqueceu-a-senha">Esqueceu a senha?</p>
          </div>
          <div class="row">
            <a
              v-on:click="TelaCadastro"
              class="waves-effect waves-light btn btn-large botao-login botao-novo-usuario"
              >CADASTRE-SE AGORA</a
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import MenuSuperior from "./MenuSuperior.vue";

export default {
  components: { MenuSuperior },
  name: "Login",

  methods: {
    TelaCadastro() {
      this.$router.push({ name: "Cadastro" });
    },
    login() {
      if (this.email == "espaco-professor@gmail.com" && this.senha == "1922") {
        this.$router.push({ name: "InicioUsuario" });
      } else {
        (this.email == "" && this.senha == "") ||
          ((this.email == "") != this.senha) == "";
        alert("Preencha os campos para fazer login!");
      }
    },
  },
};
</script>

<style scoped>
.img-login {
  border-radius: 50%;
  width: 12vw;
}

.login-form {
  width: 30vw;
  margin-left: 35vw;
  text-align: center;
  padding: 40px;
  background: rgba(0, 0, 0, 0.03);
  border-radius: 50px;
  margin-top: 1%;
}
.blog-title {
  margin-left: 150vw;
}

.botao-login {
  width: 70%;
  border-radius: 150px;
  font-weight: bold;
}

.esqueceu-a-senha {
  color: #1565c0;
  cursor: pointer;
  margin-bottom: 0;
  text-align: center;
}

.no-margin-bottom,
.no-margin-bottom .input-field {
  margin-bottom: 0 !important;
}

.alert {
  position: relative;
  padding: 0.75rem 0.75rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  text-align: center;
  margin-top: 5px;
}

.alert-danger {
  color: #1d1c72;
  background-color: #a1bbe7;
  border-color: #6a89bf;
}

.botao-novo-usuario {
  background: white;
  color: #1565c0 !important;
  border: 1px solid #1565c0 !important;
  font-weight: bold;
}

.botao-novo-usuario:hover {
  background: #1565c0 !important;
  color: white !important;
}
.row i {
  font-size: 20px;
}
</style>