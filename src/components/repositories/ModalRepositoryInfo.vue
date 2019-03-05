<template>
  <modal class="modal-repository-info" name="hello-world">
    <div class="title">{{repository.name}}</div>
    <div class="content">
      <div class="content__description">
        {{repository.description}}
        <a :href="repository.html_url" target="_blank">
          <img src="@/assets/icons/mark-github.png" alt>
        </a>
      </div>
    </div>
    <div class="divisor"></div>
    <div class="actions">
      <div class="actions__clone">
        <p>{{repository.git_url.length > 35 ? repository.git_url.slice(0,38)+ '...' : repository.git_url}}</p>
        <button class="btn -copy" v-clipboard="() => repository.git_url">copy url</button>
      </div>
    </div>
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
  color: #fff;
  background-color: #26262bf2;

  .v--modal-box {
    display: flex;
    flex-direction: column;

    position: relative;

    padding: 40px;
    background-color: #26262b;
    border: 1px solid #fff;
    box-shadow: 0 1px 18px rgba(255, 255, 255, 0.8);

    .title {
      text-align: center;
    }

    .content {
      flex: 1;

      &__description {
        display: flex;
        align-items: center;
        flex-direction: column;
        text-align: center;

        > a {
          > img {
            position: relative;
            cursor: pointer;
            margin: 10px;
          }
        }
      }
    }

    .divisor {
      width: 100%;
      border-bottom: 1px solid #fff;

      &:before {
        border-bottom: 1px solid #ffffffe8;
      }
      &:after {
        border-bottom: 1px solid #ffffffe8;
      }
    }

    .actions {
      &__clone {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: baseline;
        margin: 0 50px 0 50px;
      }
    }
  }
}
</style>

