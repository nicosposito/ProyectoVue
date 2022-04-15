<template>

    <app-nav :key="componentKey"></app-nav>
  
</template>


<script>
import AppNav from "./components/AppNav.vue";

export default {
  created: function () {
    this.eventBus.on("recargar", (opc) => {
      this.forceRerender();
    });
    this.eventBus.on("agregarPelicula", (pelicula) => {
      this.agregarPelicula(pelicula);
    });
    this.eventBus.on("eliminarPelicula", (nombre) => {
      this.eliminarPelicula(nombre);
      });
  },
  
  data() {
    return {
      componentKey: 0,
      peliculas: [
        {
          nombre: "Peli1",
          sinopsis: "asd",
          director: "asd",
          fechaEstreno: "14-04-2022",
          genero: "asd",
          duracion: "145",
        },
      ],
      copiaPeliculas:[]
    };
  },
  methods: {
    forceRerender() {
      this.componentKey += 1;
    },
    agregarPelicula(pelicula) {
     this.peliculas.push(pelicula);
     this.copiaPeliculas = [...this.peliculas];
    },

    eliminarPelicula(nombre) {
      this.peliculas = this.peliculas.filter(pelicula => pelicula.nombre != nombre);
      this.copiaPeliculas = [...this.peliculas];
    }

  },
  components: {
    AppNav,
  },
};
</script>


<style lang="scss" scopped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
