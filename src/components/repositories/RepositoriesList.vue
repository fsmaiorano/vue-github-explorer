<template>
  <div class="repositories-list">
    <div v-for="(repo, index) in repositories" :key="index">
      <RepositoryItem :repository="repo" @showInfo="showRepositoryInfo"/>
    </div>
    <ModalRepositoryInfo v-if="selectedRepository" :repository="selectedRepository"/>
  </div>
</template>

<script>
import RepositoryItem from '@/components/repositories/RepositoryItem.vue';
import ModalRepositoryInfo from '@/components/repositories/ModalRepositoryInfo.vue';
export default {
  props: {
    data: {
      type: Array,
      default: [],
      required: true,
    },
  },
  components: { ModalRepositoryInfo, RepositoryItem },
  data: function() {
    return {
      repositories: [],
      selectedRepository: null,
    };
  },
  created() {
    this.repositories = this.data;
  },
  methods: {
    showRepositoryInfo(repo) {
      this.selectedRepository = repo;
      this.$modal.show('hello-world', { repository: repo });
    },
  },
};
</script>

<style lang="scss">
.repositories-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>


