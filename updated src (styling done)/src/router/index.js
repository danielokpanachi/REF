import { createRouter, createWebHistory } from 'vue-router';
import ReferenceGenerator from '@/components/ReferenceGenerator.vue';
import TestOrganizations from '@/components/TestOrganizations.vue';
import ViewOrganization from '@/components/ViewOrganization.vue';


const routes = [
  {
    path: '/',
    name: 'ReferenceGenerator',
    component: ReferenceGenerator
  },

  {
    path: '/view/:orgName',
    name: 'ViewOrganization',
    component: ViewOrganization,
    props: true
  },

  {
    path: '/test-organizations',
    name: 'TestOrganizations',
    component: TestOrganizations
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
