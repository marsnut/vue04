<template>
  <div>
    <h4>Register</h4>
    <form @submit.prevent="Register">
      <label for="username">UserName</label>
      <input type="text" id="username" v-model="username" required autofocus />

      <label for="email">Email</label>
      <input type="email" id="email" v-model="email" required/>

      <label for="password">Password</label>
      <input type="password" id="password" v-model="password" required/>

      <label for="password_confirm">Password</label>
      <input type="password" id="password_confirm" v-model="password_confirm" required/>
      <br/>
      <button>Register</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      password_confirm: '',
    }
  },
  methods: {
    Register() {
      let data = {
        username: this.username,
        email: this.email,
        password: this.password,
      }
      this.$store.dispatch('register', data).
                  then(() => this.$route.push('/')).
                  catch((err) => console.log(err))
    },
  },
}
</script>
