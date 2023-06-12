<template>
  <div class="position">
    <span class="iconfont position__iconfont">&#xe619;</span>
    湖南大学天马学生公寓事务大楼
    <span class="iconfont position__bell">&#xe6a1;</span>
  </div>
  <div class="search">
    <span class="iconfont">&#xe67e;</span>
    <input class="search__input" type="text" name="" id="" placeholder="山姆会员商店优惠商品">
  </div>
  <div class="banner">
    <img class="banner__img" src="http://www.dell-lee.com/imgs/vue3/banner.jpg" alt=""/>
  </div>
  <div class="icons">
    <div class="icons__item" v-for="item in iconsList" :key="item.des">
      <img
        class="icons__item__img"
        :src="`http://www.dell-lee.com/imgs/vue3/${item.imgName}.png`"
      />
      <p class="icons__item__desc">{{ item.desc }}</p>
    </div>

  </div>
  <div class="gap"></div>
</template>

<script>
export default {
  name: 'Staticpart',
  setup () {
    const iconsList = [
      { imgName: '超市', desc: '超市便利' },
      { imgName: '菜市场', desc: '菜市场' },
      { imgName: '水果店', desc: '水果店' },
      { imgName: '鲜花', desc: '鲜花绿植' },
      { imgName: '医药健康', desc: '医药健康' },
      { imgName: '家居', desc: '家居时尚' },
      { imgName: '蛋糕', desc: '烘培蛋糕' },
      { imgName: '签到', desc: '签到' },
      { imgName: '大牌免运', desc: '大牌免运' },
      { imgName: '红包', desc: '红包套餐' }
    ]
    return { iconsList }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
  .position{
    @include ellipsis;
    position: relative;
    line-height: .22rem;
    padding: .16rem .28rem .16rem 0;
    font-size: .16rem;
    .position__iconfont{
      font-size: .2rem;
      position: relative;
      top: .01rem;
    }
    .position__bell{
      position: absolute;
      right: 0;
      top: .17rem;
      font-size: .28rem
    }
  }
  .search{
    margin-bottom: .12rem;
    height: .32rem;
    line-height: .32rem;
    background-color: #f5f5f5;
    color: #b7b7b7;
    border-radius: .16rem;
    .iconfont{
      display: inline-block;
      padding: 0 .08rem;
      font-size: .2rem;
    }
    .search__input{
      height: .28rem;
      width: 80%;
      position: relative;
      top: -.02rem;
      border:none;
      background-color: #f5f5f5;
    }
    .search__input:focus{
      outline:none;
    }
  }
  .banner{
    height: 0;
    overflow: hidden;
    padding-bottom: 25.4%;
    .banner__img{
      width: 100%;
    }
  }
  .icons{
    display: flex;
    flex-wrap: wrap;
    margin-top: .16rem;
    &__item{
      width:20%;
      &__img{
        width: .4rem;
        height: .4rem;
        margin: 0 auto;
        display: block;
      }
      &__desc{
        text-align: center;
      }
    }
  }
  .gap {
    margin: 0 -.18rem;
    height: .1rem;
    background: $content-bgColor;
  }
</style>
