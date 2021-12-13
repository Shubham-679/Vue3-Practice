<template>
  <div class="container col-4">
  <form @submit.prevent="handleSubmit">
    <div class="mb-3">
    <label for="fullname" class="form-label">Full Name</label>
    <input v-model="fullName" type="text" class="form-control" id="fullname">
  </div>
  <div class="mb-3">
    <label for="email" class="form-label">Email address</label>
    <input v-model="email" type="email" class="form-control" id="email">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="password" class="form-label">Password</label>
    <input v-model="password" type="password" class="form-control" id="password">
    <span v-if="passwordError" class="text-danger" role="alert">{{ passwordError }}</span>
  </div>
  <div class="mb-3">
    <label for="confirmPassword" class="form-label">Confirm Password</label>
    <input v-model="confirmPassword" type="password" class="form-control" id="confirmPassword">
    <span v-if="passwordError" class="text-danger" role="alert">{{ passwordError }}</span>
  </div>
  <div class="d-grid gap-2 col-6 mx-auto mt-4">
  <button type="submit" class="btn btn-primary">Submit</button>
</div>
</form>
  </div>
</template>

<script>
export default {

  data() {
    return {
      fullName: '',
      email: '',
      password: '',
      passwordError: null,
      confirmPassword: ''
    }
  },
  methods: {
    handleSubmit () {
      
      this.passwordError = this.password.length > 6 ? '' : 'Password must be 7 character long';
      this.passwordError = this.password === this.confirmPassword ? '' : 'Password must be same';
     
     if(!this.passwordError) {
        const data = {
          fullName : this.fullName,
          email : this.email,
          password: this.password,
          confirmPassword: this.confirmPassword
        }
        localStorage.setItem('user', JSON.stringify(data));
        this.$router.push('/login');
      }

    }
  },

}
</script>

<style>

</style>