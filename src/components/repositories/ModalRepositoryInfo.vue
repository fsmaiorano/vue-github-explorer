<template>
  <modal class="modal-repository-info" name="hello-world">
    <div class="title">{{repository.name}}</div>
    <div class="content"></div>
    <div class="actions"></div>
  </modal>
</template>

<script>
export default {
  props: {
    repository: {
      type: Object,
      default: null,
      required: true,
    },
  },
  created() {
    let x = this.repository;
  },
};
</script>

<style lang="scss">
.modal-repository-info {
  color: black;
  .title {
    text-align: center;
  }

  .content {
  }

  .actions {
  }
}
</style>

