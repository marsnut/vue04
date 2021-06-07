<template>
  <div>
    <vx-header title="mine"></vx-header>
    <h1>mine test for me</h1>

    <router-link to='/secure'>secure</router-link>

    <div v-if="isLogined">
      <p v-text='getusername'></p>
      <p v-text='authStatus'></p>
      <p v-text='token'></p>

      <el-button type="info" @click="getinfo">getinfo</el-button>
      <el-button type="info" @click="logout">logout</el-button>
    </div>
    <div v-else>
      <router-link to='/login'>login</router-link>
    </div>
  </div>
</template>

<script>
import vxHeader from '@/components/vx-header.vue'
import {mapState, mapGetters} from 'vuex'

import {getinfo} from '@/api/index'

export default {
  methods: {
    getinfo() {
      let token = this.$store.dispatch('auth/gettoken')
      getinfo(token)
    },
    logout() {
      this.$store.dispatch('auth/Logout')
      this.$router.push('/login')
    },
    //...mapActions('config',[ //config是指modules文件夹下的config.js
    //    'invokePushItems'  //config.js文件中的actions里的方法，在上面的@click中执行并传入实参
    //]),
  },
  computed: {
    ...mapState({  //用mapState来获取config.js里面的state的属性值
      token: state=>state.auth.token
    }),
    ...mapGetters('auth', {
      getusername: 'getusername',
      Getinfo: 'Getinfo',
      isLogined: 'isLogined',
      authStatus: 'authStatus',
    }),
  },
  components: {
    vxHeader
  }
}
</script>
