<template>
  <div>
    <div v-bind:key="pelicula.nombre" v-for="pelicula in $parent.peliculas">
      <div class="todo-actions"> XD {{pelicula.nombre}}
        <button @click="$emit('delete-todo', pelicula.nombre)">Eliminar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["peliculaslist"],
};
</script>

<style></style> 