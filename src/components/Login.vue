<template>
  <div>
    <form class="login" @submit.prevent="login">
      <h1>Sign In</h1>       
      <label for="email">Email</label>
      <input type="email" name="email" v-model="email" placeholder="Name" required />
      <label for="password">password</label>
      <input type="password" name="password" v-model="password" placeholder="Password" required />
      <hr />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    login() {
      let data = {
        email: this.email,
        password: this.password,
      }
      this.$store.dispatch('auth/Login', data)
      this.$router.push('/')
    },
  }
}
</script>

<style>
</style>
