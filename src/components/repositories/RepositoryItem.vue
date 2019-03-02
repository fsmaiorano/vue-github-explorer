<template>
  <div class="repository" @click="showInfo(repository)">
    <p class="repository__name">{{repository.name}}</p>
    <p
      class="repository__description"
    >{{repository.description && repository.description.length > 150 ? repository.description.slice(0,145)+'...' : repository.description}}</p>

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
  font-size: 1.8rem;

  /* border: 1.2px solid red; */
  cursor: pointer;
  width: 400px;
  height: 140px;
  margin: 3px;
  padding: 15px;

  background-color: #ffffff0a;
  border-radius: 18px;

  transition: 0.4s ease;

  @include respond(tab-land) {
    width: 300px;
    height: 150px;
  }

  &:hover {
    background-color: #9e9e9e87;
    border-radius: 0px;
  }

  &__name {
    font-size: $default-font-size;
    text-align: center;
    color: #fff;

    @include respond(desktop) {
      font-size: $default-font-size;
    }

    @include respond(tab-land) {
      font-size: 1.8rem;
    }

    @include respond(tab-port) {
      font-size: 1.8rem;
    }
    @include respond(phone) {
      font-size: 1.8rem;
    }
  }

  &__description {
    font-size: 1.1rem;
    text-align: center;
    color: #fff;

    @include respond(tab-land) {
      font-size: 1.6rem; // 1rem = 12px, 12/16 = 75%
    }

    @include respond(tab-port) {
      font-size: 1.6rem; // 1rem = 12px, 12/16 = 75%
    }
    @include respond(phone) {
      font-size: 1.6rem; // 1rem = 12px, 12/16 = 75%
    }
  }

  &__details {
    display: flex;
    align-items: flex-end;
    justify-content: space-evenly;
    margin-top: 2rem;
    width: 100%;
    height: 100%;
    font-size: 1rem;
    color: #fff;

    @include respond(tab-land) {
      font-size: 1.6rem; // 1rem = 12px, 12/16 = 75%
    }

    @include respond(tab-port) {
      font-size: 1.6rem; // 1rem = 12px, 12/16 = 75%
    }
    @include respond(phone) {
      font-size: 1.6rem; // 1rem = 12px, 12/16 = 75%
    }
  }
}
</style>
