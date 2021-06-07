<template>
  <div class="nav-header">
    <span class="left"></span>
    <span class="title">{{ title }}</span>
    <span class="right"></span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'no title',
    }
  }
}
</script>

<style scope>
.nav-header {
  position:fixed;
  top: 0;
  width: 100%;
  height: 30px;
  color: white;
  background-color:blue;
  padding-top:10px;
}
.nav-header > .left {
  text-align: left;
}
.nav-header > .title {
  text-align:center;
}
.nav-header > .right {
  text-align: right;
}
</style>
