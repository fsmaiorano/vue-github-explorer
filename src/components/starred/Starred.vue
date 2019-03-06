<template>
  <section class="starred-repositories">
    <h1>Starred Repositories</h1>
    <div v-if="repositories.length > 0">
      <StarredsRepositoriesList :data="repositories"/>
    </div>
    <div class="loading-container" v-if="repositories.length === 0">
      <img class="loading -medium" src="@/assets/loading.gif" alt="loading">
    </div>
  </section>
</template>

<script>
import { api, config } from '@/services/api';
export default {
  data: () => {
    return {
      username: '',
      repositories: [],
    };
  },
  created() {
    this.init();
    this.getStarredRepositories();
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

<style lang="scss">
.starreds-repositories {
}
</style>


