<template>
  <section class="starred-repositories">
    <h1>Starred Repositories</h1>
    <div v-if="repositories">
      <RepositoriesList :data="repositories"/>
    </div>
    <div v-else class="loading-container">
      <img class="loading -medium" src="@/assets/loading.gif" alt="loading">
    </div>
    <div v-if="repositories.length === 0">
      <p>This user don't have any repositories</p>
    </div>
  </section>
</template>

<script>
import Vue from 'vue';
import { api, config } from '@/services/api';
import RepositoriesList from '@/components/repositories/RepositoriesList.vue';
export default {
  name: 'Starred',
  components: { RepositoriesList },
  data: () => {
    return {
      username: '',
      repositories: null,
    };
  },
  created() {
    this.init();
    let storedStarredRepositories = this.$store.getters.getStarredRepositories;
    if (!storedStarredRepositories) {
      this.getStarredRepositories();
    } else {
      this.repositories = storedStarredRepositories;
    }
  },
  methods: {
    init() {
      this.username = this.$store.getters.getUsername;
    },
    async getStarredRepositories() {
      try {
        const response = await api.get(`${config.baseUrl}/users/${this.username}/starred`);

        if (response.status !== 200) {
          return Vue.toasted.error('Repositories not found');
        } else {
          this.repositories = response.data;
          localStorage.setItem('@GithubExplorer:starred', JSON.stringify(this.repositories));
          this.$store.dispatch('setStarredRepositories', this.repositories);
        }
      } catch (err) {
        if (err.status === 404) {
          return Vue.toasted.error('Repositories not found');
        }
        return Vue.toasted.error(err.message);
      }
    },
  },
};
</script>
