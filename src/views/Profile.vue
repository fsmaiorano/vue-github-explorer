<template>
  <section class="profile">
    <div class="container">
      <div class="container__left">
        <img v-if="user" :src="user.avatar_url" alt>
        <div class="profile-details">
          <p>{{user.name}}</p>
          <p>{{user.bio}}</p>
          <a :href="user.html_url" target="_blank">
            <img src="@/assets/icons/mark-github.png" alt>
          </a>
        </div>
      </div>
      <div class="container__right">
        <!-- <Header/> -->
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
      flex-direction: column;
      align-items: flex-end;

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
      .profile-details {
        width: 250px;

        > p {
          width: 100%;
          margin-top: 1rem;
          margin-right: 16rem;

          font-size: 1.3rem;
        }

        > a {
          > img {
            margin-top: 10px;
            width: 42px;
            height: 42px;
            cursor: pointer;
            background-color: #26262b;

            transition: 0.4s linear;

            &:hover {
              border-radius: 25px;
            }
          }
        }
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


