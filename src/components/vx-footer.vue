<template>
  <div class="nav-footer">
    <router-link v-for='(item,index) in navList' :to='item.path' :key='index' 
                 v-bind:class="{'active':activeRoute == item.path}"
                 v-text='item.name'>
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
                path: '/mine',
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
.nav-footer {
  position:fixed;
  left:0;
  height: 50px;
  bottom:0;
  width: 100%;
  display:flex;
}

.nav-footer > a {
  padding-top: 15px;
  display: inline;
  width: 20%;
  color: white;
  background-color: blue;
}
.nav-footer > a:hover {
  background-color: red;
}

</style>

