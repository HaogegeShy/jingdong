<template>
  <div class="docker">
    <div :class="{'dokcer__item':true, 'dokcer__item--active':index===0}"
    v-for="(item, index) in dockerList"
    :key="item.icon">
      <div class="iconfont" v-html="item.icon"></div>
      <div class="docker__item__title">{{ item.text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Docker',
  setup () {
    const dockerList = [
      { icon: '&#xe67d;', text: '首页' },
      { icon: '&#xe826;', text: '购物车' },
      { icon: '&#xe713;', text: '订单' },
      { icon: '&#xe78b;', text: '我的' }
    ]
    return { dockerList }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
.docker {
  display: flex;
  height: 0.47rem;
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  padding: 0 0.18rem;
  border: 0.01rem solid #f1f1f1;
  box-sizing: border-box;
  color: $content-fontcolor;
  .dokcer__item {
    flex: 1;
    text-align: center;
    .iconfont {
      font-size: 0.18rem;
      margin: 0.07rem 0 0.02rem 0;
    }
    .docker__item__title {
      font-size: 0.2rem;
      transform: scale(0.5, 0.5);
      transform-origin: center top;
    }
  }
  .dokcer__item--active {
    color: #1fa4fa;
  }
}
</style>
