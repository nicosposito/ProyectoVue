<template>
  <app-nav :key="componentKey" v-bind:lista="peliculas"></app-nav>
    <eliminar-pelicula v-if="false" v-bind:listap="peliculas" />
</template>


<script>
import AppNav from "./components/AppNav.vue";
import EliminarPelicula from "./components/EliminarPelicula.vue";

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
    this.eventBus.on("pedirInfo", (opc) => {
      this.darInfo();
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
        {
          nombre: "Peli2",
          sinopsis: "asd",
          director: "asd",
          fechaEstreno: "14-04-2022",
          genero: "asd",
          duracion: "145",
        },
      ],
      copiaPeliculas: [],
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
      this.peliculas = this.peliculas.filter(
        (pelicula) => pelicula.nombre != nombre
      );
      this.copiaPeliculas = [...this.peliculas];
    },
    darInfo() {
      localStorage.setItem("listaPeliculas", this.peliculas);
    },
  },
  components: {
    AppNav,
    EliminarPelicula,
  },
};
</script>


<style >
</style>
