<template>
  <v-app>
    <v-toolbar v-if="!$route.meta.hideNavbar" color="blue"> <!-- Importante -->
      <v-app-bar-nav-icon @click="mostrar = !mostrar"></v-app-bar-nav-icon> <!-- Importante -->
      <v-toolbar-title style="cursor: pointer" @click="$router.push('/')"
        >ProyectoVue</v-toolbar-title> <!-- Importante -->
      <v-spacer></v-spacer>
      <div v-if="nombreUsuario == ''">
        <v-btn to="/" class="success">Inicio</v-btn>
        <v-btn id="iniciarsesion" to="/iniciarSesion">Ingresar</v-btn>
      </div>
      <span v-if="nombreUsuario != ''"
        >Bienvenido, {{ this.nombreUsuario }}</span
      >
      <v-btn
        flat
        id="cerrarsesion"
        v-if="nombreUsuario != ''"
        v-on:click="cerrarSesion"
      >
        Cerrar sesion
      </v-btn>
    </v-toolbar>

    <router-view v-bind:listap="lista" />  <!-- Importante -->

    <v-navigation-drawer v-model="mostrar" temporary app>
      <v-list-item
        prepend-avatar="https://cdn-icons-png.flaticon.com/512/74/74472.png"
        v-if="nombreUsuario != ''"
        >{{ this.nombreUsuario }}
      </v-list-item>
      <v-divider></v-divider>

      <v-list density="compact" nav v-if="nombreUsuario != '' && esAdm=='true'">
        <v-list-item
          title="Agregar pelicula"
          to="/agregarPelicula"
        ></v-list-item>
        <v-list-item
          title="Eliminar pelicula"
          to="/eliminarPelicula"
        >
        </v-list-item>
      </v-list>

      <v-list density="compact" v-if="nombreUsuario == '' ">
        <v-list-item
          title="Iniciar sesión"
          to="/iniciarSesion"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>
<script>
export default {
  name: "AppNav",
  data() {
    return {
      mostrar: true,
      nombreUsuario: "",
      esAdm: "false",
    };
  },
  props: ["lista"], //Importante
  
  methods: {
    cerrarSesion: function () { //Importante
      localStorage.removeItem("usuario"); 
      localStorage.removeItem("esAdm");
      this.nombreUsuario = "";
      this.esAdm = "false";
      this.$router.push("/");
    },
  },
  mounted() { //Ciclo de vida
    if (localStorage.getItem("usuario") != null) {
      this.nombreUsuario = localStorage.getItem("usuario");
      this.esAdm = localStorage.getItem("esAdm");
    }
  },
};
</script>

<style scoped> /*Importante */
* {
  text-transform: none !important;
} /* Sacar mayusuculas */

#cerrarsesion {
  background: #b00020;
  color: white;
  margin-left: 10px;
}

#iniciarsesion {
  background: #4caf50;
  color: white;
}
</style>