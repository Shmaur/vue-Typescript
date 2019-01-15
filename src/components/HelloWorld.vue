<template lang="pug">
  div(class=["hello"])
    h1 {{ msg }}
    h3 vue + axios + pug + stylus + typeScript
</template>

<script lang="ts">
import { Vue, Component, Emit } from "vue-property-decorator";
@Component
export default class HelloWorld extends Vue {
  msg: String = "Welcome to Your Vue.js App"
  @Emit()
  getinfo(){
    console.log(this)
    
  }
  created () {
    this.getinfo()
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
