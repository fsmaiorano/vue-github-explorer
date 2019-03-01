<template>
  <div class="repositories-list">
    <div v-for="(repo, index) in repositories" :key="index">
      <div class="repository">
        <p class="repository__name">{{repo.name}}</p>
        <p
          class="repository__description"
        >{{repo.description && repo.description.length > 150 ? repo.description.slice(0,145)+'...' : repo.description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: [],
      required: true,
    },
  },
  data: function() {
    return {
      repositories: [],
    };
  },
  created() {
    this.repositories = this.data;
  },
};
</script>

<style lang="scss">
@import '@/assets/styles/abstracts/_variables.scss';
@import '@/assets/styles/abstracts/_mixins.scss';

.repositories-list {
  display: flex;
  flex-wrap: wrap;

  .repository {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;

    /* border: 1.2px solid red; */
    cursor: pointer;
    width: 400px;
    height: 120px;
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
  }
}
</style>


