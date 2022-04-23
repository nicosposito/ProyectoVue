<template>
  <h1 text-align: center>Agregar pelicula</h1>
  <v-container>
    <v-form
      ref="form"
      @submit.prevent="addNuevaPelicula"
      lazy-validation
      class="px-3">
      <v-row>
        <v-col md="6">
          <v-text-field
            v-model="nombre"
            label="Nombre"
            required
            :rules="[(v) => !!v || 'El nombre de la pelicula es necesario']"
          ></v-text-field>

          <v-textarea
            v-model="sinopsis"
            label="Sinopsis"
            required
            :rules="[(v) => !!v || 'La sinopsis es necesaria']"
          ></v-textarea>

          <v-text-field
            v-model="director"
            label="Nombre del director"
            :rules="[(v) => !!v || 'El nombre del director es necesario']"
            required
          ></v-text-field>

          <v-select
            v-model="genero"
            :items="generos"
            :rules="[(v) => !!v || 'El genero es necesario']"
            label="Genero"
            required
          ></v-select>
        </v-col>

        <v-col md="6">
          <v-text-field
            v-model="duracion"
            suffix="minutos"
            label="Duración"
            type="number"
            :min="1"
            required
            :rules="[(v) => !!v || 'La duracion es necesaria']"
          ></v-text-field>

          <label id="estreno"> Fecha de estreno </label>
          <Datepicker
            v-model="fechaEstreno"
            :clearable="true"
            required
            placeholder="Fecha"
            :enableTimePicker="false"
          ></Datepicker>
          <label id="valid" v-if="this.error == 1">
            La fecha de estreno es requerida
          </label>
          <br />

          <v-file-input
            @change="preview"
            v-model="imagen"
            clearable
            label="Poster"
            required
            :rules="[
              (v) => !!v || 'El poster es requerido',
              (v) => (v && v.length > 0) || 'El poster es requerido',
            ]"
            @click:clear="limpiarURL()"
          >
          </v-file-input>
          <div id="imgPreview">
            <v-img :src="url"></v-img>
          </div>
        </v-col>
      </v-row>
      <div class="container">
        <v-btn flat color="success" @click="validarFecha()" type="submit"
          >Agregar</v-btn
        >
        <v-btn flat color="error" @click="cancelarBoton()">Cancelar</v-btn>
      </div>
    </v-form>
  </v-container>
</template>


<script>
import { ref } from "vue";
export default {
  inheritAttrs: false, //Importante
  setup() { //Importante
    const fecha = ref(new Date()); //Mencion
    const formato = (fecha) => {
      const day = fecha.getDate();
      const month = fecha.getMonth() + 1;
      const year = fecha.getFullYear();

      return `${day}/${month}/${year}`;
    };
    return {
      fecha,
      formato,
    };
  },
  data() {
    return {
      nombre: "",
      sinopsis: "",
      director: "",
      genero: "",
      duracion: "",
      imagen: [],
      fechaEstreno: ref(new Date()),
      error: 0,
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
        "Superheroe",
      ],
      url: "",
    };
  },
  methods: {
    addNuevaPelicula: function () {
      if (this.fechaEstreno != null) {
        const formatter = new Intl.DateTimeFormat("es", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        });
        var stringFecha = formatter.format(this.fechaEstreno);

        const newPelicula = {
          nombre: this.nombre,
          sinopsis: this.sinopsis,
          director: this.director,
          fechaEstreno: stringFecha,
          genero: this.genero,
          duracion: this.duracion,
          imgSrc: this.url,
        };
        this.error = 0;
        this.eventBus.emit("agregarPelicula", newPelicula); //Emitimos un evento
        this.ingresarBoton();
      }
    },
    preview(e) {
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
    },

    cancelarBoton() {
      this.$swal
        .fire({
          title: "Realmente quiere volver al inicio?",
          showCancelButton: true,
          confirmButtonText: "Si",
          cancelButtonText: "Cancelar",
          confirmButtonColor: "success",
        })
        .then((result) => {
          if (result.isConfirmed) {
            this.$router.push("/"); //Cambiamos de vista
          }
        });
    },
    ingresarBoton() {
      this.$swal
        .fire({
          position: "center",
          icon: "success",
          title: "Pelicula añadida correctamente",
          showConfirmButton: true,
          showDenyButton: true,
          confirmButtonText: `Añadir otra`,
          denyButtonText: "Volver al inicio",
        })
        .then((result) => {
          if (result.isConfirmed) {
            this.url = "";
            this.nombre = "";
          } else if (result.isDenied) {
            this.$router.push("/");
          }
        });
    },
    limpiarURL() {
      this.url = "";
    },
    validarFecha() {
      if (this.fechaEstreno == null) {
        this.error = 1;
      } else {
        this.error = 0;
      }
    },
  },
};
</script>

<style scoped>
/* Importante */
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

#valid {
  color: #b00020;
}
</style>

