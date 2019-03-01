<template>
  <section class="profile">
    <div class="container">
      <div class="container__left">
        <img :src="this.user.avatar_url" alt>
      </div>
      <div class="container__right">
        <Header/>
        <router-view></router-view>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from 'vue';
import Header from '@/components/header/Header.vue';
export default {
  name: 'Profile',
  data: function() {
    return {
      user: null,
    };
  },
  created() {
    this.user = this.$store.getters.getUser;
    if (!this.user) {
      let storedUser = localStorage.getItem('@GithubExplorer:user');
      if (!storedUser) {
        return this.$router.push('/home');
      }

      this.user = JSON.parse(storedUser);
    }
  },
};
</script>




<style lang="scss">
.profile {
  width: 100%;
  height: 100%;

  .container {
    display: flex;
    flex-wrap: wrap;

    &__left {
      width: 40rem;
      min-width: 30rem;
      /* border: 1px solid red; */

      display: flex;
      justify-content: flex-end;

      > img {
        width: 20rem;
        height: 20rem;

        margin-top: 1rem;
        margin-right: 1rem;

        border-radius: 20px;

        box-shadow: 0 1px 18px rgba(0, 0, 0, 0.8);

        background: url('../../src/assets/loading.gif') no-repeat;
        background-size: 40px 40px;
        background-position: center;
      }
    }

    &__right {
      flex: 1;
      min-width: 60rem;
      /* border: 1px solid green; */
    }
  }
}
</style>


