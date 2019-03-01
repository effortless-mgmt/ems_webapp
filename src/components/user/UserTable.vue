<template>
  <div>
    <div class="userTableFrame">
      <b-table
        show-empty
        stacked="md"
        :items="users"
        :current-page="currentPage"
        :fields="fields"
        :per-page="perPage"
        @row-clicked="goToUser"
        striped
        caption-top
      >
        <template slot="table-caption">
          <b-row>
            <b-col>All substitutes</b-col>
            <b-col offset-md="7" md="1">
              <small>Displaying</small>
            </b-col>
            <b-col md="1">
              <b-input
                v-model.number="perPage"
                type="number"
                style="max-width: 80px; max-height: 30px; text-align: center"
              ></b-input>
            </b-col>
            <b-col>
              <small>per page</small>
            </b-col>
          </b-row>
        </template>
      </b-table>
    </div>
    <b-pagination
      :total-rows="users.length"
      :per-page="perPage"
      v-model="currentPage"
      class="justify-content-center"
    />
    <small class="row justify-content-center">{{intervalDisplayed}}</small>
    <div class="row justify-content-center"></div>
    <!-- <table class="table table-hover">
      <thead class="thead-dark">
        <tr>
          <th scope="col" style="width: 5%">#</th>
          <th scope="col" style="width: 20%">Name</th>
          <th scope="col" style="width: 20%">Phone</th>
          <th scope="col" style="width: 20%">Email</th>
          <th scope="col" style="width: 20%">Zip</th>
        </tr>
      </thead>
      <tbody>
        <UserTableRow v-for="(item, index) in users" :key="item.id" :user="item" :index="index"></UserTableRow>
      </tbody>
    </table>-->
  </div>
</template>

<script>
import UserTableRow from "../user/UserTableRow";
export default {
  data() {
    return {
      currentPage: 1,
      perPage: 10,
      fields: [
        { key: "firstName", label: "Name" },
        { key: "phone", label: "Phone" },
        { key: "email", label: "Email" },
        { key: "address.zipCode", label: "Zip Code" }
      ]
    };
  },
  props: {
    users: {
      type: [Array, Object]
    }
  },
  computed: {
    intervalDisplayed() {
      var page = this.currentPage;
      var amount = this.perPage;
      var items = this.users;
      var lower = (page - 1) * amount + 1;
      var upper = page * amount;

      return (
        (upper > items.length
          ? lower + "-" + items.length
          : lower + "-" + upper) +
        " of " +
        items.length
      );
    }
  },
  methods: {
    goToUser(record, index) {
      console.log(record);
      this.$router.push({
        name: "user",
        params: { userName: record.userName }
      });
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
.userTableFrame {
  min-height: 600px;
}
</style>
