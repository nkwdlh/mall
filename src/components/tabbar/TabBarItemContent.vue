<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home">
        <img src="~assets/imgs/home.svg" alt="" slot="icon">
        <img src="~assets/imgs/home-act.svg" alt="" slot="icon-act">
        <div slot="text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/kind">
        <img src="~assets/imgs/kind.svg" alt="" slot="icon">
        <img src="~assets/imgs/kind-act.svg" alt="" slot="icon-act">
        <div slot="text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/find">
        <img src="~assets/imgs/find.svg" alt="" slot="icon">
        <img src="~assets/imgs/find-act.svg" alt="" slot="icon-act">
        <div slot="text">发现</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img src="~assets/imgs/cart.svg" alt="" slot="icon">
        <img src="~assets/imgs/cart-act.svg" alt="" slot="icon-act">
        <div slot="text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/my">
        <img src="~assets/imgs/my.svg" alt="" slot="icon">
        <img src="~assets/imgs/my-act.svg" alt="" slot="icon-act">
        <div slot="text">我的</div>
      </tab-bar-item>
    </tab-bar>
    <router-view/>
  </div>
</template>

<script>
import TabBar from "@/components/tabbar/TabBar";
import TabBarItem from "@/components/tabbar/TabBarItem";

export default {
  name: "TabBarItemContent",
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>
