<template>
  <div class="tar-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TarBar"
}
</script>

<style scoped>
.tar-bar {
  width: 100%;
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  box-shadow: 0 -2px 2px rgba(100, 100, 100, 0.1);
}
</style>
