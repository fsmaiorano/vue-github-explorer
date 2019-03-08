<template>
  <Slide class="profile-options">
    <div class="profile-options__routes">
      <ul>
        <li>
          <router-link tag="a" router-link-active to="repositories">Repositories</router-link>
        </li>
        <!-- <li>
          <router-link tag="a" router-link-active to="organizations">Organizations</router-link>
        </li>-->
        <li>
          <router-link tag="a" router-link-active to="stars">Stars</router-link>
        </li>
      </ul>
    </div>
    <div class="profile-options__actions">
      <a class="logout" href="#" @click="doLogout()">Exit</a>
    </div>
  </Slide>
</template>

<script>
import Vue from 'vue';
import vuex from 'vuex';
import { Slide } from 'vue-burger-menu';
export default {
  components: { Slide },
  methods: {
    doLogout() {
      localStorage.clear();
      this.$store.dispatch('setUser', null);
      this.$store.dispatch('setUsername', null);
      this.$store.dispatch('setRepositories', null);
      this.$store.dispatch('setStarredRepositories', null);
      this.$router.push('/');
    },
  },
};
</script>

<style lang="scss">
.profile-options {
  &__routes {
    ul {
      list-style-type: none;
      li {
        > a {
          color: #6a6a73;

          &:hover {
            color: #c9c9d0;
          }
        }
        .router-link-exact-active {
          color: #5669ad;
        }
      }
    }
  }

  &__actions {
    margin-right: 18rem;
    > .logout {
      color: #5669ad;
    }
  }
}

.bm-burger-button {
  cursor: pointer;
  height: 48px;
  left: 36px;
  position: absolute;
  top: 36px;
  width: 36px;

  background: url('../../assets/icons/menu.png') no-repeat;
  background-size: 40px 40px;
  background-position: center;
  background-color: #0000000d;

  &:hover {
    box-shadow: 0 1px 40px rgba(0, 0, 0, 0.8);
    background-color: #00000057;
  }
}

.bm-burger-bars {
  background-color: transparent !important;
}

.bm-cross-button {
  height: 24px;
  width: 24px;
}
.bm-menu {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  background-color: rgb(63, 63, 65);
  overflow-x: hidden;
  padding-top: 60px;
  transition: 0.5s;

  display: flex;
  flex-direction: column;

  box-shadow: 0 1px 18px rgba(0, 0, 0, 0.8);
}

.bm-overlay {
  background: black;
}
.bm-item-list {
  color: #b8b7ad;
  margin-left: 10%;
  font-size: 20px;
}
.bm-item-list > * {
  display: flex;
  text-decoration: none;
  padding: 0.7em;
}
.bm-item-list > * > span {
  margin-left: 10px;
  font-weight: 700;
  color: white;
}
</style>

