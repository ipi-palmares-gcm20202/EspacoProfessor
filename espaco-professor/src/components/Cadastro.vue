<template>
  <div>
    <menu-superior />
    <div class="login-form card">
      <div class="row">
        <form class="col s12">
          <div class="img-container">
            <img
              class="img-cadastro"
              src="https://i.ibb.co/k9vVKjM/adicionar-usuario-no-linux.jpg"
              alt=""
            />
            <p class="blog-title">
              Crie sua conta informando os seus dados nos campos abaixo.
            </p>
          </div>
          <div class="row no-margin-bottom">
            <div class="input-field col s12">
              <input id="nome" type="text" class="validate" v-model="nome" />
              <label for="nome"><i class="fa fa-clipboard"></i> Nome</label>
            </div>
          </div>

          <div class="row no-margin-bottom">
            <div class="input-field col s12">
              <input id="email" type="email" class="validate" v-model="email" />
              <label for="email"><i class="fa fa-envelope"></i> E-mail</label>
            </div>
          </div>
          <div class="row no-margin-bottom">
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
            <div class="input-field col s12">
              <input
                id="confirmar-senha"
                type="password"
                class="validate"
                v-model="confirmacaoSenha"
              />
              <label for="confirmar-senha"
                ><i class="fa fa-key"></i> Confirmação de senha</label
              >
              <span v-if="senha != confirmacaoSenha" class="erro-senha"
                ><i class="fa fa-times"></i>As senhas informadas não são
                iguais!</span
              >
            </div>
          </div>
          <div class="row">
            <a
              v-on:click="cadastrar"
              class="waves-light btn btn-large blue darken-3 botao-cadastro"
              >CADASTRAR</a
            >
          </div>
          <div class="row">
            <a
              v-on:click="TelaLogin"
              class="waves-effect waves-light btn btn-large botao-cadastro botao-novo-usuario"
              >JÁ SOU CADASTRADO</a
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
  name: "Cadastro",

  data() {
    return {
      nome: "",
      email: "",
      senha: "",
      confirmacaoSenha: "",
    };
  },

  methods: {
    TelaLogin() {
      this.$router.push({ name: "Login" });
    },
    cadastrar: function () {
      if (
        this.nome == "" ||
        this.email == "" ||
        this.senha == "" ||
        this.confirmacaoSenha == "" ||
        this.senha != this.confirmacaoSenha
      ) {
        alert("Preencha todos os campos com dados válidos!");
      } else {
        ({
          nome: this.nome,
          email: this.email,
          senha: this.senha,
          confirmacaoSenha: this.confirmacaoSenha,
        });
        this.$router.push({ name: "Login" });
        alert("Dados cadastrados com sucesso!");
        this.nome = "";
        this.email = "";
        this.senha = "";
        this.confirmacaoSenha = "";
      }
    },
  },
};
</script>

<style scoped>
.login-form {
  border-radius: 50px 50px;
  width: 30vw;
  margin-left: 35vw;
  padding: 40px;
  background: rgba(0, 0, 0, 0.03);
  margin-top: 1%;
}

.img-cadastro {
  width: 12vw;
  margin-left: 22%;
  border-radius: 150px;
}

.botao-cadastro {
  width: 70%;
  border-radius: 150px;
  font-weight: bold;
  margin-left: 15%;
}

.blog-title {
  text-align: center;
  color: rgb(46, 41, 41);
  font-size: 16px;
  font-weight: bold;
  margin-top: 32px;
}

.no-margin-bottom,
.no-margin-bottom .input-field {
  margin-bottom: 0 !important;
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

.erro-senha {
  background: #e47f7f;
  border: 1px solid #c01515;
  font-weight: bold;
}
.erro-senha i {
  margin-right: 5px;
}
.row i {
  font-size: 20px;
}
</style>