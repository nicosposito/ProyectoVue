<template>
  <v-form @submit.prevent="addNuevaPelicula" lazy-validation>
    <v-text-field
      v-model="nombre"
      label="Nombre de la pelicula"
      required
    ></v-text-field>

    <v-textarea v-model="sinopsis" label="Sinopsis" required></v-textarea>

    <v-text-field
      v-model="director"
      label="Nombre del director"
      required
    ></v-text-field>

    <!--- Genero -->
    <v-select
      v-model="genero"
      :items="generos"
      :rules="[(v) => !!v || 'El genero es necesario']"
      label="Genero"
      required
    ></v-select>

    <!---Duracion -->
    <v-text-field
      v-model="duracion"
      suffix="minutos"
      label="Duración"
      type="number"
      :min="1"
      required
    ></v-text-field>

    <Datepicker
      v-model="fechaEstreno"
      label="Fecha de estreno"
      :enableTimePicker="false"
      required
    ></Datepicker>

    <br/>
    <div class="d-flex justify-space-around">
      <v-btn  type="submit" absoluteclass="success">Agregar pelicula</v-btn>
      <v-btn>Cancelar</v-btn>
    </div>
  </v-form>
</template>


<script>
export default {
  data() {
    return {
      nombre: "",
      sinopsis: "",
      director: "",
      fechaEstreno: "",
      genero: "",
      duracion: "",
      generos: [
        "Acción",
        "Aventura",
        "Comedia",
        "Documental",
        "Drama",
        "Fantasía",
        "Musical",
        "Suspenso",
        "Terror",
      ],
    };
  },
  methods: {
    addNuevaPelicula: function () {
      const newPelicula ={
        nombre: this.nombre,
        sinopsis: this.sinopsis,
        director: this.director,
        fechaEstreno: this.fechaEstreno,
        genero:this.genero,
        duracion: this.duracion
      };
      this.eventBus.emit('agregarPelicula', newPelicula);
    },
  },
};
</script>

<style scoped>
</style>