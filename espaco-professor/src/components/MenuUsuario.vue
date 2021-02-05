<template>
  <div>
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
          <li>
            <a href="#" v-on:click="TelaInicioUsuario"
              ><i class="fa fa-user"></i> Jefferson Henrique</a
            >
          </li>
          <li>
            <a href="#" v-on:click="AdicionarMaterial"
              ><i class="fa fa-plus-circle"></i> Adicionar Material</a
            >
          </li>
          <li><a href="#" v-on:click="Sair"> Sair</a></li>
          <li>
            <a href="#"><i class="fa fa-search"></i></a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "menu-usuario",

  methods: {
    AdicionarMaterial() {
      this.$router.push({ name: "Adicionar" });
    },
    TelaLogin() {
      this.$router.push({ name: "Login" });
    },
    Sair() {
      this.$router.push({ name: "Inicio" });
    },
    TelaInicioUsuario() {
      this.$router.push({ name: "InicioUsuario" });
    },
  },
};
</script>

<style scoped>
.bar-nav {
  background-color: #e6e6fa;
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
