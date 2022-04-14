<template>
  <v-app>
      <app-nav :key="componentKey"></app-nav>
  </v-app>
</template>


<script>
import AppNav from "./components/AppNav.vue";

export default {
  created: function () {
    this.eventBus.on("recargar", (opc) => {
      this.forceRerender();
    });
  },
  data() {
    return {
      componentKey: 0,
    };
  },
  methods: {
    forceRerender() {
      this.componentKey += 1;
    },
  },
  components: {
    AppNav,
  },
};
</script>


<style lang="scss" scopped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
