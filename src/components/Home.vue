<template>
  <div>
    <h1>Users List</h1>
    <div v-if="users.length">
      <Table :users="users" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import Table from "./Table.vue";
import Spinner from "./Spinner.vue";

export default {
  name: "Home",

  components: { Table, Spinner },

  data() {
    return {
      users: [],
    };
  },

  mounted() {
    const load = async () => {
      try {
        await new Promise((resolve) => {
          setTimeout(resolve, 1000);
        });
        fetch("https://jsonplaceholder.typicode.com/users")
          .then((res) => res.json())
          .then((data) => (this.users = data))
          .catch((err) => console.log(err));
      } catch (error) {
        console.error(error);
      }
    };
    load();
  },
};
</script>

<style>
</style>