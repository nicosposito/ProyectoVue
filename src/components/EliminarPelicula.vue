<template>
  <v-app>
    <div>
      <h1 text-align: center>Eliminar Pelicula</h1>
      <v-table
        fixed-header
        style="width: 800px; border: 1px solid black"
        class="center">
        <thead>
          <tr>
            <th class="text-left">Poster</th>
            <th class="text-left">Nombre</th>
            <th class="text-left">Genero</th>
            <th class="text-left">Acción</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="pelicula in listap" :key="pelicula.nombre">
            <td> <v-img :src="pelicula.imgSrc"></v-img> </td>
            <td>{{ pelicula.nombre }}</td>
            <td>{{ pelicula.genero }}</td>
            <td>
              <v-btn
                flat
                color="error"
                @click="this.eventBus.emit('eliminarPelicula', pelicula.nombre)"
                >Eliminar</v-btn
              >
            </td>
          </tr>
        </tbody>
      </v-table>
    </div>
  </v-app>
</template>

<script>
export default {
  props: ["listap"],
};
</script>

<style>

.center {
  margin-left: auto;
  margin-right: auto;
}

h1 {
  text-align: center;
  padding: 30px;
}
</style> 