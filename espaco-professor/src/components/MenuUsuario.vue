<template>
    <nav class="bar-nav">
        <div class="nav-wrapper">
            <a href="#" class="brand-logo">
                <img class="img-logo" src="https://i.ibb.co/LQ5myXf/logo-espaco-professor.png" alt="">
            </a>
            <a href="#" data-activates="menu-mobile" class="button-collapse">
                <i class="material-icons">menu</i>
            </a>
            <ul class="right hide-on-med-and-down">
              
            <li><a href="#"><i class="fa fa-user"></i> Jefferson Henrique</a></li>
            <li><a href="#">Sair</a></li>
            <li><a href="#"><i class="fa fa-search"></i></a></li>
            
          </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'menu-usuario',
    methods: {
    TelaCadastro(){
      this.$router.push({ name: 'Cadastro'})
    },
    TelaLogin(){
      this.$router.push({ name: 'Login'})
    }

    }
}
</script>

<style scoped>
 .bar-nav{
            background-color: white;
        }

        .img-logo{
            width: 150px;
            height: 150px;
            margin: -46px 0px 0px 20px;
        }

        .right {
            margin-right: 50px;
        }

        ul li a{
            color: black;
        }
     
</style>
