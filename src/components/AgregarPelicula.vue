<template>
  <h1 text-align: center>Agregar pelicula</h1>
  <v-container>
    <v-form @submit.prevent="addNuevaPelicula" lazy-validation class="px-3">
      <v-row>
        <v-col md="6">
          <v-text-field v-model="nombre" label="Nombre" required></v-text-field>

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
        </v-col>

        <v-col md="6">
          <!---Duracion -->
          <v-text-field
            v-model="duracion"
            suffix="minutos"
            label="Duración"
            type="number"
            :min="1"
            required
          ></v-text-field>

          <label id="estreno"> Fecha de estreno </label>
          <Datepicker
            v-model="fechaEstreno"
            label="Fecha de estreno"
            :enableTimePicker="false"
            required
          ></Datepicker>
          <br />
          <v-file-input
            @change="preview"
            v-model="imagen"
            label="Poster" >
          </v-file-input>
          <div id="imgPreview">
          <v-img :src="url"></v-img>
          </div>
        </v-col>
      </v-row>
      <div class="container">
        <v-btn flat color="success" type="submit">Agregar</v-btn>
        <v-btn flat color="error">Cancelar</v-btn>
      </div>
    </v-form>
  </v-container>
  <br />
  <br />
  <br />
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
      imagen: [],
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
      url: "",
    };
  },
  methods: {
    addNuevaPelicula: function () {
      const newPelicula = {
        nombre: this.nombre,
        sinopsis: this.sinopsis,
        director: this.director,
        fechaEstreno: this.fechaEstreno,
        genero: this.genero,
        duracion: this.duracion,
      };
      this.eventBus.emit("agregarPelicula", newPelicula);
    },
    preview(e) {
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
      console.log(this.url);
    },
  },
};
</script>

<style scoped>
.v-col {
  float: left;
  width: 50%;
}

.v-btn {
  margin: 0;
  display: inline-block;
  margin-right: 100px;
  margin-left: 100px;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.v-container {
  border: 1px solid black;
  padding: 30px;
}

h1 {
  text-align: center;
  padding: 30px;
}

.center {
  margin-left: auto;
  margin-right: auto;
}

#estreno {
  color: gray;
}

#imgPreview {
  height: 300px;
  width: 150px;
  margin-left: auto;
  margin-right: auto;

}
</style>

