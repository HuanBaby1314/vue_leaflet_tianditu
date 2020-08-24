<template>
  <div id="app">
    <tianMap/>
    <!-- <iframe src="test_map.html" frameborder="0"></iframe> -->
  </div>
</template>

<script>
import tianMap from './components/tianMap.vue'

export default {
  name: 'App',
  components: {
    tianMap
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  width: 100vw;
  height: 100vh;
}
</style>
