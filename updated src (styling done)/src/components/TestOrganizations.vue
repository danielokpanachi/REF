<template>
  <div class = "container">

    <div class = "right-sidebar">
      <h3>Search for Organization</h3>
    <div class="sidebar-search">
          <input v-model="sidebarSearch" type="text" placeholder=" Search organisation" class="sidebar-search-input" />
          <button @click="searchOrganization" class="search-btn">Search</button>
          </div>
        </div>





  <div>
    <h2>Test Organizations - Recently added</h2>
    <table>
      <thead>
        <tr>
          <th>Name Of Organzation</th>
          <th>Reference Number</th>
          <th>Date</th>
          <th>Subject</th>
          <th>Recipient Title</th>
          <th>Recipient Name</th>
          <th>Sender Department</th>
          <th>view</th>


        </tr>
      </thead>
      <tbody>
        <tr v-for="org in store.testOrganizations" :key="org.name">
          <td>{{ org.name }}</td>
          <td>{{ org.referenceNumber }}</td>
          <td>{{ org.date }}</td>
          <td>{{ org.subject}}</td>
          <td>{{ org.recipientTitle}}</td>
          <td>{{ org.recipientName}}</td>
          <td>{{ org.senderDepartment}}</td>
          <td>
            <button @click="viewOrganization(org)">View</button>
          </td>
          
        </tr>
      </tbody>
    </table>

   




    <button @click="goBack">Back</button>
  </div>
  </div>
</template>


<script>
import { store } from '@/store';

export default {
  name: 'TestOrganizations',
  setup() {
    return { store };
  },

  
 /* methods: {
    goBack() {
      this.$router.push({ name: 'ReferenceGenerator' });
    },
    viewOrganization(org) {
       //Navigate to the ViewOrganization page with org.name as a route parameter
      this.$router.push({ name: 'ViewOrganization', params: { orgName: org.name } });
    },*/


  data() {
    return {
      testOrganizations: [
        { name: '', referenceNumber: '', date: '2025-02-23', Subject: '', recipientTitle: '', recipientName: '', senderDepartment: ''},
        { name: '', referenceNumber: '', date: '2025-02-22', Subject: '', recipientTitle: '', recipientName: '', senderDepartment: ''}
        // Add more organizations as needed
      ]
    };
  },
  methods: {
    goBack() {
      this.$router.push({ name: 'ReferenceGenerator' });
    },
    viewOrganization(org) {
      // Navigate to the ViewOrganization route with the orgName in the URL
      this.$router.push({ name: 'ViewOrganization', params: { orgName: org.name } });
    }
  }
};

</script>


<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 15px;
}
th, td {
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
}
tr:nth-child(even) {
    background-color: #f9f9f9;
}

th {
  background-color: #f4f4f4;
  color: rgb(0, 0, 0);
}
button {
  padding: 5px 10px;
  background: rgb(6,2, 253);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
    background-color: #0056b3; /* Darker blue for hover effect */
}

button:active {
    transform: scale(0.98); /* Subtle press effect */
}
.container {
background-image: url('@/assets/peaks-pic.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin: 50px;

}

.right-sidebar {
  flex: 1;
  padding: 15px;
  border-radius: 8px;
  max-height: 680vh;
  overflow-y: auto;
  max-width: 300px;
}
.sidebar-search {
  display: flex;
  align-items:center;
  gap: 10px;
  margin-bottom: 15px;
}
.sidebar-search-input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

</style>
