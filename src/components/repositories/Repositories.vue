<template>
  <section class="repositories">
    <h1>Repositories</h1>
    <div v-if="repositories.length > 0">
      <RepositoriesList :data="repositories"/>
    </div>
    <div class="loading-container" v-if="repositories.length === 0">
      <img class="loading -medium" src="@/assets/loading.gif" alt="loading">
    </div>
  </section>
</template>


<script>
import Vue from 'vue';
import { api, config } from '@/services/api';
import RepositoriesList from '@/components/repositories/RepositoriesList.vue';
export default {
  name: 'Repositories',
  components: { RepositoriesList },
  data: function() {
    return {
      user: null,
      username: '',
      repositories: [],
      isLoading: true,
    };
  },
  created() {
    this.init();
    this.getRepositories();
  },
  methods: {
    init() {
      this.user = this.$store.getters.getUser;
      this.username = this.$store.getters.getUsername;
    },
    async getRepositories() {
      try {
        const response = await api.get(`${config.baseUrl}/users/${this.username}/repos`);

        if (response.status !== 200) {
          return Vue.toasted.error('Repositories not found');
        } else {
          this.repositories = response.data;
          localStorage.setItem('@GithubExplorer:repositories', JSON.stringify(this.repositories));
          this.$store.dispatch('setRepositories', this.repositories);
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
.repositories {
  display: flex;
  flex-direction: column;
}
</style>


// https://api.github.com/repos/fsmaiorano/30-seconds-of-css

