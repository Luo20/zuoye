<template>
  <div>
    <div class="box">
      <van-icon name="location-o" />
      <span>天河慧通产业广场B区</span>
    </div>
    <!-- 搜索框 -->
    <van-search placeholder="搜索饿了么商家、商品名称" v-model="value" background="#00aaff" />
    <!-- 宫格 -->
    <van-grid>
      <van-grid-item
        v-for="(k,index) in kingkongListComputed"
        :key="index"
        :icon="k.icon"
        :text="k.name"
      />
    </van-grid>
    <!-- 立即抢购 -->
    <div>
      <!---->
      <!---->
      <div class="index-1ECZ3_0">
        <section id="activity-lego" class="index-1y1Q5_0">
          <div class="index-3xB2N_0">
            <div class="index-Q3GS5_0 index-1xT5J_0">
              <h3 scan-data="{item.title}" class="index-1qvN6_0">品质套餐</h3>
              <div class="index-2W67h_0">搭配齐全吃得好</div>
              <div class="index-1DFa7_0">
                <!---->
                立即抢购 &gt;
              </div>
              <img
                src="https://fuss10.elemecdn.com/e/ee/df43e7e53f6e1346c3fda0609f1d3png.png?imageMogr/format/webp/thumbnail/!282x188r/gravity/Center/crop/282x188/"
              />
            </div>
            <!---->
          </div>
        </section>
        <!---->
        <!---->
        <!---->
      </div>
      <div class="backtop BackTop-wrapper_3XDbcaq" style="display: none;">
        <img
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTM4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOCAxMSkiIGZpbGw9IiM5OTkiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHJlY3QgeD0iMi4yMzkiIHdpZHRoPSI5OC41MjIiIGhlaWdodD0iOC45MTciIHJ4PSI0LjQ1OCIvPjxyZWN0IHRyYW5zZm9ybT0icm90YXRlKDkwIDUxLjUgNjIuNDE3KSIgeD0iNi43MTciIHk9IjU3Ljk1OCIgd2lkdGg9Ijg5LjU2NSIgaGVpZ2h0PSI4LjkxNyIgcng9IjQuNDU4Ii8+PHJlY3QgdHJhbnNmb3JtPSJzY2FsZSgtMSAxKSByb3RhdGUoNDUgMCAtMjUuNzU3KSIgeD0iLTYuNjcxIiB5PSI0MC4xNzEiIHdpZHRoPSI3MS42NTIiIGhlaWdodD0iOC45MTciIHJ4PSI0LjQ1OCIvPjxyZWN0IHRyYW5zZm9ybT0icm90YXRlKDQ1IDczLjkzOCA0NC42MykiIHg9IjM4LjExMiIgeT0iNDAuMTcxIiB3aWR0aD0iNzEuNjUyIiBoZWlnaHQ9IjguOTE3IiByeD0iNC40NTgiLz48L2c+PC9zdmc+"
          class="BackTop-icon_2Js4K94"
        />
      </div>
      <!---->
    </div>
    <!-- 分割线 -->
    <van-divider>附近商家</van-divider>
    <!-- 下拉菜单 -->
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="menu|handleMenu" />
      <van-dropdown-item v-model="value1" :options="menu|handleMenu" />
    </van-dropdown-menu>
    <!-- 底部 -->
    <footer class="index-wrapper_1Rsz2pX">
      <div class="index-footer_Gtduid_">
        <a href="https://h5.ele.me" ubt-click="105138" class="index-footerTab_bl0lbJN">
          <svg class="index-footerTabIcon_1EbB8wS">
            <use xlink:href="#h5-component-index" />
          </svg>
          <span class="index-footerTabText_1It8yh0 index-footerTabTextActive_3gjOLc6">首页</span>
        </a>
        <a href="https://h5.ele.me/discover/" ubt-click="105144" class="index-footerTab_bl0lbJN">
          <svg class="index-footerTabIcon_1EbB8wS">
            <use xlink:href="#h5-component-discoverRegular" />
          </svg>
          <span class="index-footerTabText_1It8yh0">发现</span>
        </a>
        <a href="https://h5.ele.me/order/" ubt-click="105143" class="index-footerTab_bl0lbJN">
          <svg class="index-footerTabIcon_1EbB8wS">
            <use xlink:href="#h5-component-orderRegular" />
          </svg>
          <span class="index-footerTabText_1It8yh0">订单</span>
        </a>
        <a href="https://h5.ele.me/profile/" ubt-click="105141" class="index-footerTab_bl0lbJN">
          <svg class="index-footerTabIcon_1EbB8wS">
            <use xlink:href="#h5-component-profileRegular" />
          </svg>
          <span class="index-footerTabText_1It8yh0">我的</span>
        </a>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
      kingkongList: [],
      value1: 0,
      menu: []
    };
  },
  computed: {
    kingkongListComputed() {
      return this.kingkongList.slice(0, 8);
    }
  },
  async created() {
    //获取宫格数据
    let kingkongList = await this.$axios(
      "https://www.easy-mock.com/mock/5d4015c04d43913fb8a20f87/list/kingkong"
    );
    this.kingkongList = kingkongList.data.data.kingkongList;
    //获取下拉菜单的数据
    let menu = await this.$axios(
      "https://www.easy-mock.com/mock/5d4015c04d43913fb8a20f87/list/filterconditions"
    );
    this.menu = menu.data.data.sortVOList;
  },
  //过滤器
  filters: {
    handleMenu(menu) {
      let newMenu = [];
      menu.forEach((element, index) => {
        //往对象里面新增一个text属性值
        element.text = element.name;
        element.value = index;
        //构造一个新的数组
        newMenu.push(element);
      });
      return newMenu;
    }
  }
};
</script>
<style>
.box {
  height: 40px;
  background: #0094ff;
  color: #fff;
  line-height: 40px;
  padding-left: 20px;
}
.search {
  font-size: 12px;
  text-align: center;
}
.index-1ECZ3_0 {
  margin-bottom: 0.213333rem;
  margin-bottom: 2.133333vw;
  font-size: 0;
  padding: 0 0.266667rem;
  padding: 0 2.666667vw;
}
.index-1y1Q5_0 {
  background: #fff;
}
.index-3xB2N_0 {
  margin-bottom: 0.08rem;
  margin-bottom: 0.8vw;
  display: flex;
}
.index-3xB2N_0 .index-1xT5J_0 {
  height: 2.933333rem;
  height: 29.333333vw;
}
.index-3xB2N_0 .index-Q3GS5_0 {
  height: 3.733333rem;
  height: 37.333333vw;
  padding: 0.32rem 0 0 0.4rem;
  padding: 3.2vw 0 0 4vw;
  z-index: 0;
}
.index-3xB2N_0 .index-Q3GS5_0 .index-1qvN6_0 {
  font-size: 0.453333rem;
  font-weight: 700;
  margin-bottom: 0.133333rem;
  margin-bottom: 1.333333vw;
  color: #333;
}
.index-3xB2N_0 .index-Q3GS5_0 .index-2W67h_0 {
  font-size: 0.346667rem;
  color: #777;
  margin-bottom: 0.24rem;
  margin-bottom: 2.4vw;
}
.index-3xB2N_0 .index-Q3GS5_0 .index-1DFa7_0 {
  font-size: 0.32rem;
  color: #af8260;
  font-weight: 700;
}
.index-3xB2N_0 .index-1xT5J_0 img {
  top: 0.24rem;
  top: 85.4vw;
  right: 0.373333rem;
  right: 3.733333vw;
  width: 3.76rem;
  width: 37.6vw;
  height: 2.506667rem;
  height: 25.066667vw;
  position: absolute;
}
img {
  max-width: 100%;
}
.index-wrapper_1Rsz2pX {
    height: 1.6rem;
    height: 16vw
}

.index-footer_Gtduid_ {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    display: -webkit-flex;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-justify-content: space-between;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding-top: .12rem;
    padding-top: 1.2vw;
    background-color: #fff;
    min-height: 1.333333rem;
    min-height: 13.333333vw;
    -webkit-box-shadow: 0 -.026667rem .053333rem rgba(0,0,0,.1);
    box-shadow: 0 -.026667rem .053333rem rgba(0,0,0,.1);
    -webkit-box-shadow: 0 -.266667vw .533333vw rgba(0,0,0,.1);
    box-shadow: 0 -.266667vw .533333vw rgba(0,0,0,.1);
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom)
}

.index-footerTab_bl0lbJN {
    display: block;
    -webkit-flex: 1;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    text-align: center
}

.index-footerTabIcon_1EbB8wS {
    width: .533333rem;
    width: 5.333333vw;
    height: .533333rem;
    height: 5.333333vw
}

.index-footerTabText_1It8yh0 {
    display: block;
    color: #8e8e93;
    font-size: .266667rem
}

.index-footerTabTextActive_3gjOLc6 {
    color: #0089dc
}

</style>


