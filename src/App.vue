<template>
  <div id="app">
    <Header v-if="$router.path !== '/'"/>
    {{$router.path}}
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue';
import Header from '@/components/header/Header.vue';
export default {
  components: { Header },
};
</script>


<style lang="scss">
@import 'assets/styles/main.scss';
</style>
