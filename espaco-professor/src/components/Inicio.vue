<template>
            <div class="page-content">

            <div class="content">
                
                <div class="new-blog-content card">
                    <h4> <i class="far fa-file-alt"></i> Postagens recentes</h4>
                
                    <div class="row">

                    <div class="filtros-card">
                        <div class="row">
                            <div class="input-field col s5">
                                <input v-model="filtroMaterial" placeholder="Pesquisar..." id="material" type="text" class="validate">
                                <label for="material">Material</label>
                            </div>

                            
                            <div class="input-field col s5">
                                <input v-model="filtroDisciplina" placeholder="Pesquisar por disciplina..." id="disciplina" type="text" class="validate">
                                <label for="disciplina">Disciplina</label>
                            </div>
                            
                            
                            <div class="input-field col s2">
                                <a v-on:click="buscar" class="waves-effect waves-light btn blue botao-filtrar"><i class="material-icons left">search</i>Buscar</a>
                            </div>
                        </div>
                    </div>
            
                </div>
                
                    
                    <div class="row">
                        
                        <div v-for="post in listaFiltrados" v-bind:key="post" class="col s12 m4">
                            <div  class="card blue-grey darken-1">
                              <div class="card-content white-text">
                                <span class="card-title">{{post.material}}</span>
                                <p>Disciplina: {{ post.disciplina }}</p>
                                <p>Modalidade: {{ post.modalidadeEnsino }}</p>
                                <p>Ano: {{ post.serieAno }}</p>
                                <p>Autor(a): {{ post.autor}}</p>
                                <br>
                                <p>Descrição: </p>
                                <p>{{post.descricao}}</p>
                                
                              
                              </div>
                              <div class="card-action">
                                <a href="#">Abrir material</a>
                              </div>
                              
                            </div>
                          </div>

                    </div>


                </div>
            </div>
        </div>
    

</template>

<script>
export default {
    name: 'inicio',

    data() {
        return {
            filtroMaterial: '',
            filtroDisciplina: '',
                lista : [
                    {id: 1, material: 'Plano de aula', disciplina: 'História', modalidadeEnsino: 'Ensno Fundamental II', serieAno: '7º', autor: 'João Gomes', descricao: 'Contrary to popular belief, Lorem Ipsum is not simply random text.'},
                    {id: 2, material: 'Exercício', disciplina: 'Geografia', modalidadeEnsino: 'Ensino Fundamental I', serieAno: '4º', autor: 'Bruna Silva', descricao: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.'},
                    {id: 3, material: 'Dinâmica', disciplina: 'Português', modalidadeEnsino: 'Ensino Médio', serieAno: '3º', autor: 'Maria Dias', descricao: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.'},
                    {id: 4, material: 'Provas', disciplina: 'Biologia', modalidadeEnsino: 'Ensino Médio', serieAno: '1º', autor: 'Márcio Souza', descricao: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.'},
                    {id: 5, material: 'Plano de aula', disciplina: 'Física', modalidadeEnsino: 'EJA', serieAno: '2º', autor: 'Márcio Souza', descricao: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.'}
                ],
                listaFiltrados: []
            }
    },
           
            methods: {
                buscar() {

                   this.listaFiltrados = this.lista.filter(post => post.material.toLowerCase().includes(this.filtroMaterial.toLowerCase()));
                    
                   this.listaFiltrados = this.listaFiltrados.filter(post => post.disciplina.toLowerCase().includes(this.filtroDisciplina.toLowerCase()));
                }
            
            }
    }


</script>

<style scoped>
    
        .page-content {
            margin-top: 7vw;
            margin-left: 11vw;
            display: flex;
        }

        .content {
            width: calc(100% - 200px);
        }

        .content h4 {
            color: black;
            font-weight: 100;
        }

        .new-blog-content {
            width: 60%;
            margin-left: 20%;
            padding: 10px;
            margin-top: 50px;
            padding-left: 40px;
        }

        .row {
            margin-bottom: 0 !important;
        }

        .buttons-div {
            float: right;
            margin-bottom: 20px !important;
        }


        .filtros-card {
            margin-top: 35px;
            padding: 10px;
            padding-bottom: 0;
        }

        .botao-filtrar {
            height: 45px;
            padding: 5px;
            padding-top: 5px;
            width: 100%;
        }

        .btn-criar-post{
            margin-top: 3vw;
        }

        .card .card-content {
            height: 50vh;
        }
</style>