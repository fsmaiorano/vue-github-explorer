<template>
  <div id="app">
    <Header v-if="$route.path !== '/'"/>
    {{$router.path}}
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue';
import Router, { Route } from 'vue-router';
import Header from '@/components/header/Header.vue';
export default {
  components: { Header },
  // watch: {
  //   $route(to, from) {
  //     debugger;
  //     // react to route changes...
  //   },
  // },
};
</script>


<style lang="scss">
@import 'assets/styles/main.scss';
</style>
