<template>
  <div>
    <h1>User Albums</h1>
    <div v-if="albums.length">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Album Titles</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="album in albums" :key="album.id">
            <td>{{ album.title }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>

import Spinner from "./Spinner.vue";

export default {

  components: { Spinner },
  
  props: ["id"],
  
  data() {
    return {
      albums: [],
    };
  },

  mounted() {
    fetch("https://jsonplaceholder.typicode.com/users/" + this.id + "/albums")
      .then((res) => res.json())
      .then((data) => (this.albums = data))
      .catch((err) => console.log(err));
  },
};
</script>

<style>
</style>