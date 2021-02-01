<template>
      <div class="new-blog-content card">
        <h4> <i class="fa fa-plus-circle" aria-hidden="true"></i> Cadastrar Exemplo</h4>
             <div class="row">
                <form class="col s12">
                  <div class="row">
                    <div class="input-field col s12">
                      <input id="title" type="text" class="validate" v-model="titulo">
                      <label for="title">Título</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="input-field col s12">
                      <input id="autor" type="text" class="validate" v-model="autor">
                      <label for="autor">Tipo</label>
                    </div>
                  </div>
                   <div class="row">
                    <div class="input-field col s12">
                        <textarea id="description" class="materialize-textarea" v-model="descricao"></textarea>
                        <label for="description">Descrição</label>
                    </div>
                  </div>
                  <div class="row">
                    <form class="col s12">
                      <div class="row">
                        <div class="input-field col s12">
                          <textarea id="textarea1" class="materialize-textarea"></textarea>
                          <label for="textarea1">Conteudo</label>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div id="div-botoes">
                       <a v-on:click="cadastrarBlog" class="waves-effect waves-light btn blue darken-3 botao-cadastrar"><i class="material-icons right">check</i>CADASTRAR</a>
                      <a class="waves-effect waves-light btn red botao-cancelar"><i class="material-icons right">close</i>CANCELAR</a>
                  </div>
               </form>
               </div>
         </div>

</template>

<script>
export default {
    
 
}
</script>

<style scoped>
    #app{
        font-family: 'Noto Sans KR', sans-serif;
      }

    .tabs.tabs-transparent .tab a, .tabs.tabs-transparent .tab.disabled a, .tabs.tabs-transparent .tab.disabled a:hover {
        color: #375aca;
    }
    #div-botoes{
          margin-inline-start: 32vw;

    }
   

        .new-blog-content {
        width: 60%;
        margin-left: 20%;
        padding: 10px;
        margin-top: 10px;
        padding-left: 40px;
        background: #e0e0e0;
      }
      .new-blog-content h4 {
        color: #1565c0;
        font-weight: 100;
       text-align: c
      }
      .botao-search{
        border-radius: 150px;
        margin-left: 40%;
        
        
      }
      .botao-add{
        border-radius: 150px;
        margin-top: 5px;
        
      }
      .edit-remove-column i{
            cursor: pointer;
            font-size: 18px;
        }

        .edit-remove-column .fa-trash{ 
            color: #b71c1c;
           margin-left: 15%;
        }

        .edit-remove-column .fa-edit{ 
            color: #01579b;
            margin-left: 15%;

        }
        .search-card {
            margin-top: 30px;
            padding: 10px;
            padding-bottom: 0;
        }

    
      .botao-cancelar, .botao-cadastrar{
        border-radius: 150px ;
        
      }

</style>