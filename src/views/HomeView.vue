<template>
  <PaginaInicio />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import PaginaInicio from '../components/PaginaInicio.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    PaginaInicio,
  },
});
</script>
