<template>
<div class="container col-3 mt-5">
  <form @submit.prevent="handleSubmit">
  <div class="mb-3">
    <label for="email" class="form-label">Email address</label>
    <input v-model="email" type="email" class="form-control" id="email" required>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="password" class="form-label">Password</label>
    <input v-model="password" type="password" class="form-control" id="password">
  </div>
  <div class="d-grid gap-2 col-6 mx-auto mt-4">
  <button type="submit" class="btn btn-primary">Login</button>
</div>
</form>
<div v-if="message">
  <div v-if="user.email === email && user.password === password" class="mt-5">
  <div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Well done!</h4>
  <p>{{ message }}</p>
</div>
</div>
<div v-else class="mt-5">
  <div class="alert alert-danger" role="alert">
  <h4 class="alert-heading">Incorrect!</h4>
  <p>{{ message }}</p>
</div>
</div>
</div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      user: {},
      email: '',
      password: '',
      message: null
    }
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem('user'));
  },
  methods: {
    handleSubmit () {
      if(this.user.email === this.email && this.user.password === this.password) {
        this.message = 'User found and logged in successfully';
      } else {
        this.message = 'User not found email or password are incorrect';
      }
    }
  },
}
</script>

<style>

</style>