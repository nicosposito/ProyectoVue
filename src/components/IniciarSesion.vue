<template>
    <v-main class="grey lighten-3">
      <v-form>
        <v-card>
          <v-card-text>
            <v-text-field label="Usuario" v-model="usuario" />
            <v-text-field label="Contraseña" type="password" v-model="clave" />
            <p v-if="error" class="error">
              Has introducido mal el usuario o la contraseña.
            </p>
          </v-card-text>
         
            <v-btn v-on:click="puedeLogear" color="success"> Iniciar Sesion </v-btn>
          
        </v-card>
      </v-form>
    </v-main>
</template>

<script>
export default {
  name: "iniciar-sesion",
  data: function () {
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
    puedeLogear: function () {
      let user = this.listaUsuarios.find((o) => o.usuario == this.usuario); //Busco usuario en arreglo
      if (user != null) {
        if (user.contrasena == this.clave) {
          localStorage.setItem("usuario", this.usuario);
          localStorage.setItem("esAdm", user.esAdm);
          this.eventBus.emit('recargar',true); //Para poder recargar el componente y cargue la nueva informacion de inicio de sesion.
          this.$router.push("/"); //Lo envio a la ruta "/" la cual es home
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

<style>
</style>

