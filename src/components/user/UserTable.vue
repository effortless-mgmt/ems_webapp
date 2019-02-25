<template>
  <table class="table table-striped table-hover">
    <thead class="thead-dark">
      <tr>
        <th scope="col" style="width: 5%">#</th>
        <th scope="col" style="width: 20%">Name</th>
        <th scope="col" style="width: 20%">Phone</th>
        <th scope="col" style="width: 20%">Email</th>
        <th scope="col" style="width: 20%">Zip</th>
      </tr>
    </thead>
    <tbody v-if="!users">
      <UserTableRow v-for="(item, index) in tempsABC" :key="item.id" :user="item" :index="index"></UserTableRow>
    </tbody>
    <tbody v-else>
      <UserTableRow v-for="(item, index) in users" :key="item.id" :user="item" :index="index"></UserTableRow>
    </tbody>
  </table>
</template>

<script>
import UserTableRow from "../user/UserTableRow";
export default {
  props: {
    users: {
      type: [Array, Object]
    }
  },
  components: {
    UserTableRow
  }
};
</script>

<style>
.list-header {
  font-size: 1.1em;
  font-weight: 600;
}
</style>
