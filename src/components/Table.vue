<template>
<div>
  <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Username</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Contact</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>
            <router-link :to="{ name: 'Albums', params: { id: user.id } }">
              {{ user.username }}
            </router-link>
          </td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.phone }}</td>
        </tr>
      </tbody>
    </table>
</div>
</template>

<script>
export default {
    props: ['users']
}
</script>

<style>

</style>