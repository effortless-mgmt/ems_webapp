<template>
  <b-container>
    <h3>Companies</h3>
    <b-card v-for="(item) in companies" :key="item.id" class="companyCard">
      <h6 slot="header" @click="goToCompany(item)">
        <strong>{{item.name}}</strong>
      </h6>Departments:
      <b-list-group v-for="(department) in getDepartmentsByCompanyId(item.id)" :key="department.id">
        <b-list-group-item @click="goToDepartment(department)">{{department.name}}</b-list-group-item>
      </b-list-group>
    </b-card>
  </b-container>
</template>

<script>
export default {
  computed: {
    companies() {
      return this.$store.state.companies.companies;
    }
  },
  methods: {
    goToCompany(company) {
      this.$router.push({ name: "company", params: { id: company.id } });
    },
    goToDepartment(department) {
      this.$router.push({
        name: "department",
        params: { companyId: department.company.id, id: department.id }
      });
    },
    getDepartmentsByCompanyId(id) {
      return this.$store.getters["departments/getByCompanyId"](id);
    }
  },
  mounted() {
    this.$store.dispatch("companies/refresh");
    this.$store.dispatch("departments/refresh");
  }
};
</script>

<style>
.companyCard {
  margin: 20px auto;
}
</style>
