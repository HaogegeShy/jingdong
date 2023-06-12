<template>
  <div id="app">
    <Wrapper/>
    <Docker/>
  </div>
</template>
<script>
import Docker from './Docker.vue'
import Wrapper from './Wrapper.vue'
export default {
  name: 'Home',
  components: {
    Docker,
    Wrapper
  }
}
</script>
<style lang="scss">

</style>
