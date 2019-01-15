<template >
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
export default class App extends Vue {}
</script>

<style lang="stylus">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: txtcolor;
  margin-top: 60px;
}
</style>
