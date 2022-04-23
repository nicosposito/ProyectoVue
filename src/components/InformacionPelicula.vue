<template>
  <h1>Información de pelicula</h1>
  <v-container>
    <div>
      <h1 id="tituloPeli">{{ pelicula.nombre }}</h1>
    </div>
    <v-row>
      <v-col md="3">
        <div class="d-flex flex-no-wrap">
          <v-avatar class="ma-3" size="400" rounded="0">
            <v-img :src="pelicula.imgSrc"></v-img>
          </v-avatar>
        </div>
      </v-col>
      <v-col md="6">
        <div class="d-flex flex-column">
          <h3>Sinopsis:</h3>
          <label id="sinopsis">{{ pelicula.sinopsis }}</label
          ><br />
          <h3>Otros datos:</h3>
          <label><b>Director:</b> {{ pelicula.director }}.</label><br />
          <label><b>Genero:</b> {{ pelicula.genero }}.</label><br />
          <label><b>Duración:</b> {{ pelicula.duracion }} minutos.</label>
          <br />
        </div>
      </v-col>
    </v-row>
    <div id="btn_inicio">
    <v-btn color="error" to="/" >Volver al inicio</v-btn>
    </div>
  </v-container>
</template>
    
<script>
export default {
  props: ["listap", "nombrePeli"], //Importante

  data() {
    return {
      pelicula: this.listap.find((peli) => peli.nombre == this.nombrePeli),
    };
  },

  created(){
    if (this.pelicula==null){
      var nombrep=localStorage.getItem("nombrePeli");
      this.pelicula=this.listap.find((peli) => peli.nombre == nombrep)
    }
  }
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

#tituloPeli {
  text-align: center;
  padding: 0px;
}

.v-card {
  border: 1px solid black;
}

#sinopsis {
  display: inline-block;
  text-align: left;
}

.v-container {
  border: 1px solid black;
  padding: 30px;
}

h3 {
  text-align: center;
  padding: 20px;
}

#btn_inicio{
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>