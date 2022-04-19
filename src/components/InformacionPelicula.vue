<template>
  <h1>Información de pelicula</h1>
  <v-card class="mx-auto">
    <v-card-title class="justify-center">
      {{ pelicula.nombre }}
    </v-card-title>
    <v-row>
      <v-col md="6">
        <div class="d-flex flex-no-wrap">
          <v-avatar class="ma-3" size="500" rounded="0">
            <v-img :src="pelicula.imgSrc"></v-img>
          </v-avatar>
        </div>
      </v-col>
      <v-col md="6">
        <div class="d-flex flex-column">
          <h1>Sinopsis</h1>
          <label>{{ pelicula.sinopsis }}</label
          ><br />
          <h1>Otros datos</h1>
          <label>Director: {{ pelicula.director }}</label
          ><br />
          <label>Genero: {{ pelicula.genero }}</label
          ><br />
          <label>Duración: {{ pelicula.duracion }}</label
          ><br />
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: ["listap", "nombrePeli"],

  data() {
    return {
      pelicula: this.listap.find((peli) => peli.nombre == this.nombrePeli),
    };
  },
};
</script>

<style scoped>
.v-col {
  float: left;
  width: 50%;
}

h1 {
  text-align: center;
  padding: 30px;
}

.v-card {
  border: 1px solid black;
}
</style>