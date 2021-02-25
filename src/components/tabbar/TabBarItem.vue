<template>
  <div class="tar-bar-item" @click="itemClick">
    <div v-if="isActive">
      <slot name="icon-act"></slot>
    </div>
    <div v-else>
      <slot name="icon"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TarBarItem",
  data() {
    return {}
  },
  computed: {
    isActive: {
      get() {
        return this.$route.path.indexOf(this.path) !== -1
      },
      set() {
        this.isActive = !this.isActive
      }

    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  methods: {
    itemClick() {
      this.isActive.set
      this.$router.replace(this.path)
      this.$store.commit('looked',true)

    }
  }
}
</script>

<style scoped>
.tar-bar-item {
  flex: 1;
  height: 49px;
  text-align: center;
  padding: 2px 0;
}

.tar-bar-item img {

}

</style>
