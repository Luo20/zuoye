<template>
  <div>
    <router-view></router-view>
    <!-- 底部 -->
    <van-tabbar :route="true" v-model="active">
      <van-tabbar-item 
        v-for="(t,index) in tabbarsItems" 
        :url="t.url"
        :key="index" 
        :icon="t.icon" 
        v-text="t.title"></van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
       active: 0,
       tabbarsItems: [{
         title: "首页",
         url: "#/tabbar/home",
         icon: "home-o"
       },{
         title: "发现",
         url: "#/tabbar/search",
         icon: "search"
       },{
         title: "订单",
         url: "#/tabbar/order",
         icon: "description"
       },{
         title: "我的",
         url: "#/tabbar/mine",
         icon: "contact"
       }]
    };
  }
};
</script>



