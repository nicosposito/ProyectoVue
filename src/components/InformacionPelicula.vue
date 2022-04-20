<template>
  <h1>Información de pelicula</h1>
  <v-container>
    <v-card-title class="justify-center">
      {{ pelicula.nombre }}
    </v-card-title>
    <v-row>
      <v-col md="3">
        <div class="d-flex flex-no-wrap">
          <v-avatar class="ma-3" size="400" rounded="0">
            <v-img :src="pelicula.imgSrc"></v-img>
          </v-avatar>
        </div>
      </v-col>
      <v-col md="4">
        <div class="d-flex flex-column">
          <h1>Sinopsis:</h1>
          <label id="sinopsis">{{ pelicula.sinopsis }}</label
          ><br />
          <h1>Otros datos:</h1>
          <label>Director: {{ pelicula.director }}.</label
          ><br />
          <label>Genero: {{ pelicula.genero }}.</label
          ><br />
          <label>Duración: {{ pelicula.duracion }} minutos.</label
          >
          <br />
        </div>
      </v-col>
    </v-row>
  </v-container>
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

#sinopsis{
  display: inline-block;
  text-align: left;
}

.v-container {
  border: 1px solid black;
  padding: 30px;
}
</style>