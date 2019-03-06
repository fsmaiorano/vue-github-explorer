<template>
  <div class="repository" @click="showInfo(repository)">
    <p
      class="repository__name"
    >{{repository.name.length > 25 ? repository.name.slice(0,25)+'...' : repository.name}}</p>

    <p
      v-if="repository.description === null"
      class="repository__description"
    >This repository don't have a description...</p>
    <p
      v-else
      class="repository__description"
    >{{repository.description && repository.description.length > 100 ? repository.description.slice(0,85)+'...' : repository.description}}</p>

    <div class="repository__repository-details">
      <div class="detail-group">
        <img src="@/assets/icons/star.png" alt>
        <p>{{repository.stargazers_count}}</p>
      </div>
      <div class="detail-group">
        <img src="@/assets/icons/repo-forked.png" alt>
        <p>{{repository.forks_count}}</p>
      </div>
      <div class="detail-group">
        <img src="@/assets/icons/eye.png" alt>
        <p>{{repository.watchers_count}}</p>
      </div>
    </div>

    <div class="repository__details">
      <p>Created at: {{repository.created_at | formatDate}}</p>
      <p>Pushed at: {{repository.pushed_at | formatDate}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    repository: {
      type: Object,
      required: true,
      default: {},
    },
  },
  data: () => {
    return {};
  },
  methods: {
    showInfo(repository) {
      this.$emit('showInfo', repository);
    },
  },
};
</script>


<style lang="scss">
@import '@/assets/styles/abstracts/_variables.scss';
@import '@/assets/styles/abstracts/_mixins.scss';
.repository {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* border: 1.2px solid red; */
  cursor: pointer;
  width: 33rem;
  height: 160px;
  margin: 3px;
  padding: 15px;

  background-color: #ffffff0a;
  border-radius: 18px;

  transition: 0.4s ease;

  @include respond(tab-land) {
    width: 40rem;
  }

  &:hover {
    background-color: #ffffff1c;
    border-radius: 0px;
  }

  &__name {
    font-size: $default-font-size;
    text-align: center;
    color: #fff;
  }

  &__description {
    color: #fff;
    text-align: center;
    min-height: 66px;
    font-size: 1.42rem;
  }

  &__repository-details {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 140px;
    margin: 15px;

    > .detail-group {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 1.1rem;
    }
  }

  &__details {
    display: flex;
    align-items: flex-end;
    justify-content: space-evenly;
    width: 100%;
    font-size: 1rem;
    color: #fff;
    margin-top: 30px;

    @include respond(desktop) {
      font-size: 1rem;
    }

    @include respond(tab-land) {
      font-size: 1.6rem;
    }

    @include respond(tab-port) {
      font-size: 1.6rem;
    }
    @include respond(phone) {
      font-size: 1.6rem;
    }
  }
}
</style>
