<template>
  <div class="view-container">
    <h2>View Organization: {{ organization.name }}</h2>
    <table v-if="organization && organization.references && organization.references.length">
      <thead>
        <tr>
          <th>Date</th>
          <th>Reference Number</th>
          <th>Subject</th>
          <th>Recipient Title</th>
          <th>Recipient Name</th>
          <th>Sender Department</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(ref, index) in organization.references" :key="index">
          <td>{{ ref.date }}</td>
          <td>{{ ref.referenceNumber }}</td>
          <td>{{ ref.subject }}</td>
          <td>{{ ref.recipientTitle }}</td>
          <td>{{ ref.recipientName }}</td>
          <td>{{ ref.senderDepartment }}</td>
        </tr>
      </tbody>
    </table>
    <p v-else>No reference entries found for this organization.</p>
    <button @click="goBack">Back</button>
  </div>
</template>

<script>
import { store } from '@/store';

export default {
  name: "ViewOrganization",
  computed: {
    // Get the organization name from the route params
    orgName() {
      return this.$route.params.orgName;
    },
    organization() {
      // Find the organization in the store by matching the name from the route params
      return store.testOrganizations.find(
        (org) => org.name.toLowerCase() === this.orgName.toLowerCase()
      );
    }
  },
  methods: {
    goBack() {
      this.$router.push({ name: 'TestOrganizations' });
    }
  }
};
</script>

<style scoped>
.view-container {
  padding: 20px;
  font-family: Arial, sans-serif;
  background-image: url('@/assets/Tree-pic.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin: 8px;
}

.button {
  padding: 10px 20px;
  background: blue;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}
th, td {
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
}
th {
  background-color: #ffffff;
}
</style>