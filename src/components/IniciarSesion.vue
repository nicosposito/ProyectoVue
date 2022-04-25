<template>
    <span class="bg"></span>
    <v-card id="card">
      <v-card-title class= "container">Inicio de sesión</v-card-title>
      <v-form @submit.prevent="puedeLogear"> <!-- Evento -->
        <v-card-text class="text-center">
          <v-text-field label="Usuario" v-model="usuario" /> <!-- Importante -->
          <v-text-field label="Contraseña" type="password" v-model="clave" />
          <p v-if="error" class="container">
            Has introducido mal el usuario o la contraseña.
          </p>
        </v-card-text>
        <div class="container">
          <v-btn type="submit" color="success">Iniciar Sesion</v-btn>
          <v-btn @click="this.$router.push('/')" color="error">Volver al inicio</v-btn> <!-- Evento -->
        </div>
      </v-form>
    </v-card>
</template>

<script>
export default {
  name: "IniciarSesion",
  inheritAttrs: false,
  data () {
    return {
      usuario: "",
      clave: "",
      error: false,
      listaUsuarios: [
        {
          usuario: "Nico",
          contrasena: "123",
          esAdm: true,
        },
        {
          usuario: "Pepe",
          contrasena: "123",
          esAdm: false,
        },
      ],
    };
  },
  methods: {
    puedeLogear() {
      let user = this.listaUsuarios.find((o) => o.usuario == this.usuario); //Busco usuario en arreglo
      if (user != null) {
        if (user.contrasena == this.clave) {
          localStorage.setItem("usuario", this.usuario); //Importante
          localStorage.setItem("esAdm", user.esAdm);
          this.eventBus.emit("recargar", true); //Para poder recargar el componente y cargue la nueva informacion de inicio de sesion.
          this.$router.push("/"); //Lo envio a la ruta "/" la cual es el inicio
        } else {
          this.error = true;
        }
      } else {
        this.error = true;
      }
    },
  },
};
</script>

<style scoped>
.v-btn {
  margin: 0;
  display: inline-block;
  margin-right: 100px;
  margin-left: 100px;
  margin-bottom: 20px;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.v-card {
  border: 1px solid black;
   position: absolute; 
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
}

.bg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: url(../assets/cineLogin.jpg)
    no-repeat center center;
  background-size: cover;
  background-color: black;
  transform: scale(1.1);
}


</style>

