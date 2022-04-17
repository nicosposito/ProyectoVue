<template>
  <v-app>
    <div style="width: 70%"
    class="center">
      <h1 text-align: center>Películas disponibles</h1>
      <input type="text" v-model="query" @input="this.eventBus.emit('buscarPelicula', query)" placeholder="Búsqueda por título">
      <v-table
        fixed-header
        style="border: 1px solid black">
        <thead>
          <tr>
            <th class="text-left">Nombre</th>
            <th class="text-left">Genero</th>
            <th class="text-left">Director</th>
            <th class="text-left">Estreno</th>
            <th class="text-left">Duración</th>
          </tr>

        </thead>
        <tbody>
          <tr v-for="pelicula in listap" :key="pelicula.nombre">
            <td>{{ pelicula.nombre }}</td>
            <td>{{ pelicula.genero }}</td>
            <td>{{ pelicula.director }}</td>
            <td>{{ pelicula.fechaEstreno }}</td>
            <td>{{ pelicula.duracion }}</td>
          </tr>
        </tbody>
      </v-table>
    </div>
  </v-app>
</template>
<script>

export default {
  name: 'PaginaInicio',
  props: ["listap"],
  data(){
        return{
            query: ''
        }
    }
};
</script>
<style scoped>
  input{
    width:100%;
    border: solid 1px silver;
    text-align: right;
    margin-bottom: 5px;
    padding: 3px 10px;
  }
  .center {
    margin-left: auto;
    margin-right: auto;
  }

  h1 {
    text-align: center;
    padding: 30px;
  }
</style>
