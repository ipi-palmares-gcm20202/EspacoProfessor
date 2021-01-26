<template>
    <div class="page-content">

            <div class="content">
                
                <div class="new-blog-content card">
                    <h4>Postagens recentes</h4>

                    <div class="row">

                    <div class="filtros-card">
                        <div class="row">
                            <div class="input-field col s5">
                                <input placeholder="Digite aqui..." id="conteudo" type="text" class="validate">
                                <label for="conteudo"></label>
                            </div>
                            
                            <div class="input-field col s2">
                                <a class="waves-effect waves-light btn blue botao-filtrar"><i class="material-icons left">search</i>Buscar</a>
                            </div>
                        </div>
                    </div>
                </div>

                    <div class="row">
                        <table class="striped">

                            <thead>
                                <tr>
                                    <th>Conteúdo</th>
                                    <th>Disciplina</th>
                                    <th>Modalidade de Ensino</th>
                                    <th>Série/Ano</th>
                                    <th>Autor</th>
                                </tr>
                            </thead>
                            
                            <tbody>
                                <tr v-for="post in lista" v-bind:key="post">
                                    <td>{{ post.conteudo }}</td>
                                    <td>{{ post.disciplina }}</td>
                                    <td>{{ post.modalidadeEnsino }}</td>
                                    <td>{{ post.serieAno }}</td>
                                    <td>{{ post.autor }}</td>
                                    <td> <a href="#"> Abrir postagem</a></td>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                    <div class="row btn-criar-post">
                        <a class="waves-effect waves-light btn-large">Criar postagem</a>
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
            
                lista : [
                    {conteudo: 'Plano de aula', disciplina: 'História', modalidadeEnsino: 'Ensno Fundamental II', serieAno: '7º', autor: 'João Gomes'},
                    {conteudo: 'Exercício', disciplina: 'Geografia', modalidadeEnsino: 'Ensino Fundamental I', serieAno: '4º', autor: 'Bruna Silva'},
                    {conteudo: 'Dinâmica', disciplina: 'Português', modalidadeEnsino: 'Ensino Médio', serieAno: '3º', autor: 'Maria Dias'},
                    {conteudo: 'Prova', disciplina: 'Biologia', modalidadeEnsino: 'Ensino Médio', serieAno: '1º', autor: 'Márcio Souza'},
                ]
        }
    }
}
</script>

<style scoped>
    
        .page-content {
            margin-top: 7vw;
            margin-left: 5vw;
            display: flex;
            width: 100vw;
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
            padding-top: 5px;
            width: 100%;
        }

        td, th{
            text-align: center;
        }

        .btn-criar-post{
            margin-top: 3vw;
        }
</style>