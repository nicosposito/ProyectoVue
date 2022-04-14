<template>
    <v-toolbar v-if="!$route.meta.hideNavbar" app color="blue">
      <v-app-bar-nav-icon @click="mostrar = !mostrar"></v-app-bar-nav-icon>
      <v-toolbar-title class="flex text-center">Prueba</v-toolbar-title>
      <v-spacer></v-spacer>
      <div v-if="nombreUsuario == ''">
        <v-btn to="/iniciarSesion" class="success" > Ingresar</v-btn>
        <v-btn to="/" class="success"> Home</v-btn>
        <v-btn to="/about" class="success"> About</v-btn>
      </div>
      <span v-if="nombreUsuario != ''">{{ this.nombreUsuario }}</span>
      <v-btn
        v-if="nombreUsuario != ''"
        v-on:click="cerrarSesion"
      >
        Cerrar sesion
      </v-btn>
    </v-toolbar>

    <router-view />

    <v-navigation-drawer v-model="mostrar" temporary app>
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
        v-if="nombreUsuario != ''">{{this.nombreUsuario}}
      </v-list-item>
      <v-divider></v-divider>

        <v-list density="compact" nav v-if="nombreUsuario != ''">
          <v-list-item title="Agregar pelicula" value="AP" to="/agregarPelicula"></v-list-item>
          <v-list-item title= "Eliminar pelicula" value="EP"> </v-list-item>
        </v-list>

         <v-list density="compact" v-if="nombreUsuario == ''">
            <v-list-item title="Iniciar sesión" value="IS" to="/iniciarSesion"></v-list-item>
         </v-list>
      </v-navigation-drawer>

</template>
<script>
export default {
  name: "AppNav",
  data() {
    return {
      mostrar: true,
      nombreUsuario: "",
      esAdm: false,
    };
  },
  methods: {
    cerrarSesion: function () {
      localStorage.removeItem("usuario");
      this.nombreUsuario = "";
    },
  },
  mounted() {
    if (localStorage.getItem("usuario") != null) {
      this.nombreUsuario = localStorage.getItem("usuario");
      this.esAdm = localStorage.getItem("esAdm");
      console.log(this.esAdm);
    }
  },
};
</script>

<style scoped>
* {
  text-transform: none !important;
} /* Sacar mayusuculas */
</style>