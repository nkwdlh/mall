<template>
  <p @click="getData">my</p>
</template>

<script>
import request from '../network/request'

export default {
  name: "My",
  methods: {
    getData() {

      request({
        url: 'get1'
      }).then(resp => {
        console.log(resp)
      })

    }
  }
}
</script>

<style scoped>

</style>
