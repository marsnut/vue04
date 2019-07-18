<template>
  <div id="app">
    <router-view></router-view>
    <vx-footer></vx-footer>
  </div>
</template>

<script>
import vxFooter from '@/components/vx-footer.vue'

export default {
  name: 'app',
  components: {
      vxFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
