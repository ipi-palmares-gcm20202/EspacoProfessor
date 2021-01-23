<template>
    <div id="app">
      <div class="login-form card">
        
        <div class="img-container">
            <img src="src/assets/Logo2.png" alt="Logo2"> 
        </div>

   
        <div v-if="exibirMensagemErro" class="alert alert-danger">
            <strong>Erro!</strong> E-mail e/ou senha inválido(s).
        </div>
        
           
        <div class="row">
            <form class="col s12">
              <div class="row no-margin-bottom">
                <div class="input-field col s12">
                  <input id="email" type="email" class="validate" v-model="email">
                  <label for="email"><i class="fa fa-envelope"></i> E-mail</label>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <input id="password" type="password" class="validate" v-model="senha" >
                  <label for="password"><i class="fa fa-key"></i> Senha</label>
                </div>
              </div>
              <div class="row">
                <a v-on:click="login" class="waves-effect waves-light btn btn-large blue darken-3 botao-login">ENTRAR</a>
              </div>
              <div class="row">
                  <p class="esqueceu-a-senha">Esqueceu a senha?</p>
              </div>
              <div class="row">
                  <a class="waves-effect waves-light btn btn-large botao-login botao-novo-usuario">CADASTRE-SE AGORA</a>
              </div>
            </form>
          </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
      #app{
        background: #e3f2fd;
        
      }

      .login-form {
        width: 30vw;
        margin-left: 35vw;
        text-align: center;
        padding: 40px;
        background: rgba(0,0,0,0.03);
      }

      .img-container {
        width: 150px;
        height: 150px;
        background: white;
        border-radius: 150px 150px;
        margin-left: 90px;
      }

      .img-container img {
        width: 150px;
      }
      .blog-title {
        margin-left: 150px;

      }

      .botao-login {
          width: 70%;
          border-radius: 150px ;
          font-weight: bold;
      }
      
      .esqueceu-a-senha {
        color: #1565c0;
        cursor: pointer;
        margin-bottom: 0;
      }

      .no-margin-bottom, .no-margin-bottom .input-field {
          margin-bottom: 0!important;
      }

      .alert {
        position: relative;
        padding: .75rem .75rem;
        border: 1px solid transparent;
        border-radius: .25rem;
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
        color: white!important;
      }
      .row i{
        font-size: 20px;
      }  
</style>