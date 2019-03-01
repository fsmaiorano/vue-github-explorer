<template>
  <section class="auth">
    <form class="container" @submit="checkForm" @keypress.13="checkForm">
      <h1>Github Explorer</h1>
      <div class="container__input">
        <p>Github Username</p>
        <input class="input" type="text" autofocus autocomplete="new-username" v-model="username">
      </div>
      <button class="btn -main" type="submit" :disabled="isLoading">Search</button>
    </form>
  </section>
</template>

<script>
import Vue from 'vue';
import { api, config } from '@/services/api';
export default {
  name: 'Home',
  components: {},
  data: function() {
    return {
      errors: [],
      username: '',
      isLoading: false,
    };
  },
  methods: {
    checkForm(e) {
      e.preventDefault();
      this.errors = [];
      if (this.username) {
        return this.getUser();
      }

      if (!this.username) {
        this.errors.push('Inform a github profile');
      }
      return this.errors.map((error) => {
        Vue.toasted.error(error);
      });
    },
    async getUser() {
      try {
        this.isLoading = true;
        const response = await api.get(`${config.baseUrl}/users/${this.username}`);
        if (response.status !== 200) {
          this.isLoading = false;
          return Vue.toasted.error('Username not found');
        } else {
          localStorage.setItem('@GithubExplorer:user', JSON.stringify(response.data));
          localStorage.setItem('@GithubExplorer:username', this.username);
          this.$store.dispatch('setUsername', this.username);
          this.$store.dispatch('setUser', response.data);
          this.$router.push('/profile');
          this.isLoading = false;
        }
      } catch (err) {
        this.isLoading = false;
        if (err.status === 404) {
          return Vue.toasted.error('Username not found');
        }
        return Vue.toasted.error(err.message);
      }
    },
  },
};
</script>



<style lang="scss">
@import '../assets/styles/abstracts/_variables.scss';
.auth {
  display: flex;
  justify-content: center;
  align-items: center;
  color: $color-gray-dark;
  background-color: $default-background-color;
  width: 100%;
  height: 100vh;
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: $color-gray-dark;
    width: 60rem;
    min-height: 250px;
    height: 400px;
    background-color: #fff;
    border-radius: 5px;
    &__input {
      width: 70%;
      margin-top: 12px;
      p {
        margin-left: 0;
      }
    }
  }
}
</style>