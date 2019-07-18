<template>
  <div class="page">
    <router-view></router-view>
    <router-link v-for='{item,index} in navList' :to='item.path' :key='index' 
                 v-bind:class="{'active':activeRoute == item.path}">
        <div :class="'tab-'+index"></div>
        <p v-text='item.name' />
    </router-link>
  </div>
</template>

<script>
export default {
    data() {
      return {
          navList: [
            {
                path: '/home',
                name: '技术'
            },
            {
                path: '/english',
                name: '英语'
            },
            {
                path: '/socail',
                name: '社会'
            },
            {
                path: '/finance',
                name: '财经'
            },
            {
                path: '/my',
                name: '我的'
            }
          ]
      }
    },
    computed: {
        activeRoute() {
            return this.$route.path;
        }
    }
}
</script>

<style scope>

</style>

