<template>
  <div id="app">
    <Rete/>
  </div>
</template>

<script>
import Rete from './components/Rete.vue'

export default {
  name: 'App',
  components: {
    Rete
  }
}
</script>

<style>
#app {
}
.node.selected {
    background: #D22B1E !important;
    border-color: #e783b0 !important;
}
.node {
    background: #0039A6 !important;
    border-color: #b3a4eb !important;
}
</style>
