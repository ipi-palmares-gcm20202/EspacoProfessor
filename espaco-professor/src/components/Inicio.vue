<template>
  <div>
    <menu-superior />
    <div class="content">
      <div class="new-blog-content">
        <h5>Materiais pedagógicos gratuitos</h5>
        <p>
          Veja propostas de materiais para as modalidades: Ensino Fundamental I
          e II, Ensino Médio e EJA.
        </p>

        <div class="row">
          <div class="filtros-card">
            <div class="row">
              <div class="input-field col s5">
                <input
                  v-model="filtroMaterial"
                  placeholder="Pesquisar por material..."
                  id="material"
                  type="text"
                  class="validate"
                />
                <label for="material">Material</label>
              </div>

              <div class="input-field col s5">
                <input
                  v-model="filtroDisciplina"
                  placeholder="Pesquisar por disciplina..."
                  id="disciplina"
                  type="text"
                  class="validate"
                />
                <label for="disciplina">Disciplina</label>
              </div>

              <div class="input-field col s2">
                <a
                  v-on:click="buscar"
                  class="waves-effect waves-light btn blue botao-filtrar"
                  ><i class="material-icons left">search</i>Buscar</a
                >
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div
            v-for="post in listaFiltrados"
            v-bind:key="post"
            class="col s12 m4"
          >
            <div class="card blue-grey darken-1">
              <div class="card-content white-text">
                <span class="card-title">{{ post.material }}</span>
                <p>Disciplina: {{ post.disciplina }}</p>
                <p>Modalidade: {{ post.modalidadeEnsino }}</p>
                <p>Ano: {{ post.serieAno }}</p>
                <p>Professor-autor(a): {{ post.autor }}</p>
                <br />
                <p>Sobre este material:</p>
                <p>{{ post.descricao }}</p>
              </div>
              <div class="card-action">
                <a href="#">Abrir material</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-img">
        <br><br>
        <h3>Materiais e disciplinas</h3>
        <div class="img-materiais">
        <img src="../assets/img-material-portugues.png" alt="" />

        <img src="../assets/img-material-geografia.png" alt="" />

        <img src="../assets/img-material-historia.png" alt="" />

        <div class="img-materiais2">
          <img src="../assets/img-material-ingles.png" alt="" />

          <img src="../assets/img-material-matematica.png" alt="" />
        </div>
      </div>
      </div>

      
    </div>
  </div>
</template>

<script>
import MenuSuperior from "./MenuSuperior.vue";

export default {
  components: { MenuSuperior },
  name: "inicio",

  data() {
    return {
      filtroMaterial: "",
      filtroDisciplina: "",
      lista: [
        {
          material: "Plano de aula",
          disciplina: "História",
          modalidadeEnsino: "Ensino Fundamental II",
          serieAno: "7º",
          autor: "João Gomes",
          descricao:
            "Contrary to popular belief, Lorem Ipsum is not simply random text.",
        },
        {
          material: "Exercício",
          disciplina: "Geografia",
          modalidadeEnsino: "Ensino Fundamental I",
          serieAno: "4º",
          autor: "Bruna Silva",
          descricao:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
        },
        {
          material: "Dinâmica",
          disciplina: "Português",
          modalidadeEnsino: "Ensino Médio",
          serieAno: "3º",
          autor: "Maria Dias",
          descricao:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
        },
        {
          material: "Prova",
          disciplina: "Biologia",
          modalidadeEnsino: "Ensino Médio",
          serieAno: "1º",
          autor: "Márcio Souza",
          descricao:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
        },
        {
          material: "Plano de aula",
          disciplina: "Física",
          modalidadeEnsino: "EJA",
          serieAno: "2º",
          autor: "Márcio Souza",
          descricao:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
        },
        {
          material: "Exercício",
          disciplina: "Química",
          modalidadeEnsino: "Ensino Fundamental II",
          serieAno: "9º",
          autor: "Carla Silva",
          descricao:
            "Contrary to popular belief, Lorem Ipsum is not simply random text.",
        },
        {
          material: "Dinâmica",
          disciplina: "Artes",
          modalidadeEnsino: "Ensino Fundamental I",
          serieAno: "4º",
          autor: "Priscila Souza",
          descricao:
            "Contrary to popular belief, Lorem Ipsum is not simply random text.",
        },
        {
          material: "Prova",
          disciplina: "Física",
          modalidadeEnsino: "EJA",
          serieAno: "1º",
          autor: "João Gomes",
          descricao:
            "Contrary to popular belief, Lorem Ipsum is not simply random text.",
        },
        {
          material: "Prova",
          disciplina: "História",
          modalidadeEnsino: "Ensino Fundamental II",
          serieAno: "7º",
          autor: "João Gomes",
          descricao:
            "Contrary to popular belief, Lorem Ipsum is not simply random text.",
        },
        {
          material: "Plano de aula",
          disciplina: "Inglês",
          modalidadeEnsino: "Ensino Médio",
          serieAno: "2º",
          autor: "Paulo Silva",
          descricao:
            "Contrary to popular belief, Lorem Ipsum is not simply random text.",
        },
        {
          material: "Exercício",
          disciplina: "Artes",
          modalidadeEnsino: "Ensino Fundamental II",
          serieAno: "8º",
          autor: "Carla Silva",
          descricao:
            "Contrary to popular belief, Lorem Ipsum is not simply random text.",
        },
      ],
      listaFiltrados: [],
    };
  },

  methods: {
    buscar() {
      if (this.filtroMaterial == "" && this.filtroDisciplina == "") {
        alert("O campo de pesquisa está vazio!");
      } else {
        this.listaFiltrados = this.lista.filter((post) =>
          post.material
            .toLowerCase()
            .includes(this.filtroMaterial.toLowerCase())
        );

        this.listaFiltrados = this.listaFiltrados.filter((post) =>
          post.disciplina
            .toLowerCase()
            .includes(this.filtroDisciplina.toLowerCase())
        );
      }
    },
  },
};
</script>

<style scoped>

.new-blog-content{
  background-color: white;
}

.container-img{
  background-color: #e0c6e3;
  margin-left: 0vw;
  width: 100%;
}

.container-img h3{
  text-align: center;
}

.img-materiais{
  padding-top: 3vw;
  margin-top: 3vw;
  margin-left: 30vw;
}

.img-materiais2{
  margin-top: 2vw;
  margin-left: 7vw;
}

.img-materiais img{
  margin-left: 2vw;
}

.page-content {
  margin-left: 7vw;
}

.new-blog-content {
  width: 60%;
  margin-left: 20%;
  padding: 10px;
  margin-top: 45px;
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
}

.card .card-content {
  height: 35vh;
}
</style>