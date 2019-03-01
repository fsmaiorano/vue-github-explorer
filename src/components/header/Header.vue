<template>
  <nav class="profile-options">
    <div class="profile-options__routes">
      <router-link tag="a" router-link-active to="repositories">Repositories</router-link>&nbsp;|
      <router-link tag="a" router-link-active to="organizations">Organizations</router-link>&nbsp;|
      <router-link tag="a" router-link-active to="stars">Stars</router-link>&nbsp;
    </div>
    <div class="profile-options__actions">
      <a class="logout" href="#" @click="doLogout()">Changer User</a>
    </div>
  </nav>
</template>

<script>
import Vue from 'vue';
import vuex from 'vuex';
export default class Header extends Vue {
  doLogout() {
    localStorage.clear();
    this.$store.dispatch('setUser', null);
    this.$store.dispatch('setUsername', null);
    this.$store.dispatch('setRepositories', null);
    this.$router.push('/');
  }
}
</script>


<style lang="scss" scoped>
.profile-options {
  display: flex;
  flex-direction: row;

  font-size: 1.1rem;

  &__routes {
    flex: 1;
    > a {
      color: red;

      &:hover {
        color: blue;
      }
    }
    .router-link-exact-active {
      color: #42b983;
    }
  }

  &__actions {
    margin-right: 18rem;
    > .logout {
      color: blue;
    }
  }
}
</style>

