<template>
  <div>
    <menu-usuario />
    <div class="content">
      <div class="new-blog-content">
        <h5>Materiais postados</h5>

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
                  class=" waves-light btn blue botao-filtrar"
                  ><i class="material-icons left">search</i>Buscar</a
                >
              </div>
            </div>
          </div>
        </div>

        <div v-if="listaFiltrados.length > 0" class="row">
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
                <a href="#">Editar</a>
                <a v-on:click="remover(post.id)" href="#">Remover</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import MenuUsuario from "./MenuUsuario.vue";


export default {
  components: { MenuUsuario, },
  name: "listar-materiais",

  data() {
    return {
      filtroMaterial: "",
      filtroDisciplina: "",
      lista: [
        {
          id: 1,
          material: "Plano de aula",
          disciplina: "História",
          modalidadeEnsino: "Ensino Fundamental II",
          serieAno: "7º",
          autor: "João Gomes",
          descricao:
            "Contrary to popular belief, Lorem Ipsum is not simply random text.",
        },
        {
          id: 2,
          material: "Exercício",
          disciplina: "Geografia",
          modalidadeEnsino: "Ensino Fundamental I",
          serieAno: "4º",
          autor: "Bruna Silva",
          descricao:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
        },
        {
          id: 3,
          material: "Dinâmica",
          disciplina: "Português",
          modalidadeEnsino: "Ensino Médio",
          serieAno: "3º",
          autor: "Maria Dias",
          descricao:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
        },
        {
          id: 4,
          material: "Prova",
          disciplina: "Biologia",
          modalidadeEnsino: "Ensino Médio",
          serieAno: "1º",
          autor: "Márcio Souza",
          descricao:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
        },
        {
          id: 5,
          material: "Plano de aula",
          disciplina: "Física",
          modalidadeEnsino: "EJA",
          serieAno: "2º",
          autor: "Márcio Souza",
          descricao:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
        },
        {
          id: 6,
          material: "Exercício",
          disciplina: "Química",
          modalidadeEnsino: "Ensino Fundamental II",
          serieAno: "9º",
          autor: "Carla Silva",
          descricao:
            "Contrary to popular belief, Lorem Ipsum is not simply random text.",
        },
        {
          id: 7,
          material: "Dinâmica",
          disciplina: "Artes",
          modalidadeEnsino: "Ensino Fundamental I",
          serieAno: "4º",
          autor: "Priscila Souza",
          descricao:
            "Contrary to popular belief, Lorem Ipsum is not simply random text.",
        },
        {
          id: 8,
          material: "Prova",
          disciplina: "Física",
          modalidadeEnsino: "EJA",
          serieAno: "1º",
          autor: "João Gomes",
          descricao:
            "Contrary to popular belief, Lorem Ipsum is not simply random text.",
        },
        {
          id: 9,
          material: "Prova",
          disciplina: "História",
          modalidadeEnsino: "Ensino Fundamental II",
          serieAno: "7º",
          autor: "João Gomes",
          descricao:
            "Contrary to popular belief, Lorem Ipsum is not simply random text.",
        },
        {
          id: 10,
          material: "Plano de aula",
          disciplina: "Inglês",
          modalidadeEnsino: "Ensino Médio",
          serieAno: "2º",
          autor: "Paulo Silva",
          descricao:
            "Contrary to popular belief, Lorem Ipsum is not simply random text.",
        },
        {
          id: 11,
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
      this.listaFiltrados = this.lista.filter((post) =>
        post.material.toLowerCase().includes(this.filtroMaterial.toLowerCase())
      );

      this.listaFiltrados = this.listaFiltrados.filter((post) =>
        post.disciplina
          .toLowerCase()
          .includes(this.filtroDisciplina.toLowerCase())
      );
    },
    remover(id) {
      this.lista = this.lista.filter((post) => post.id != id);
      this.buscar();
    },
  },
};
</script>

<style scoped>
.new-blog-content {
  background-color: white;
}

.container-img {
  background-color: #e0c6e3;
  margin-left: 0vw;
  width: 100%;
}

.container-img h3 {
  text-align: center;
}

.img-materiais {
  padding-top: 3vw;
  margin-top: 3vw;
  margin-left: 30vw;
}

.img-materiais2 {
  margin-top: 2vw;
  margin-left: 7vw;
}

.img-materiais img {
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