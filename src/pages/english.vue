<template>
  <div>
    <vx-header title="english"></vx-header>
    <div>Vuex Test</div>
    <div>{{ changedNum }}</div>
    <el-button @click="add">+</el-button>
    <el-button @click="mul">-</el-button>
  </div>
</template>

<script>
import vxHeader from '@/components/vx-header.vue'
import {mapGetters} from 'vuex'

export default {
  beforeRouteEnter(to, from, next) {
    console.log('from path is: ' + from.path);
    console.log('to title is: ' + to.meta.title);
    next();
  },
  actived() {
  },
  methods: {
    add() {
        this.$store.dispatch('config/getNewNum',  1);
    },
    mul() {
        this.$store.dispatch('config/getNewNum',  -1);
    },
    show() {
    }
  },
  computed: {
    ...mapGetters('config', {
      changedNum: 'getChangedNum',
    })
  },
  components: {
    vxHeader
  }
}
</script>
