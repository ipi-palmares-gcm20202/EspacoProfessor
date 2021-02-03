<template>
  <nav class="bar-nav">
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">
        <img
          class="img-logo"
          src="https://i.ibb.co/LQ5myXf/logo-espaco-professor.png"
          alt=""
        />
      </a>
      <a href="#" data-activates="menu-mobile" class="button-collapse">
        <i class="material-icons">menu</i>
      </a>
      <ul class="right hide-on-med-and-down">
        <li><a v-on:click="TelaInicio">Início</a></li>
        <li><a v-on:click="TelaLogin">Login</a></li>
        <li><a v-on:click="TelaCadastro">Cadastrar</a></li>
        <li><a href="#"></a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "menu-superior",
  methods: {
    TelaCadastro() {
      this.$router.push({ name: "Cadastro" });
    },
    TelaLogin() {
      this.$router.push({ name: "Login" });
    },
    TelaInicio() {
      this.$router.push({ name: "Inicio" });
    },
  },
};
</script>

<style scoped>
.bar-nav {
  background-color: #E6E6FA;
}

.img-logo {
  width: 150px;
  height: 150px;
  margin: -46px 0px 0px 20px;
}

.right {
  margin-right: 50px;
}

ul li a {
  color: black;
}
</style>
