<template>
  <div class="wrapper">
    <StaticPart/>
    <Nearby/>
  </div>
</template>

<script>
import Nearby from './Nearby.vue'
import StaticPart from './StaticPart.vue'
export default {
  name: 'Wrapper',
  components: {
    Nearby,
    StaticPart
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
.wrapper{
  overflow-y: auto;
  position: absolute;
  right: 0;
  top: 0;
  left: 0;
  bottom: .5rem;
  padding: 0 .18rem .1rem .18rem;
  color: $content-fontcolor;
}
</style>
