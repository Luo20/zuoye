(function(t){function e(e){for(var a,o,c=e[0],u=e[1],l=e[2],d=0,p=[];d<c.length;d++)o=c[d],i[o]&&p.push(i[o][0]),i[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);s&&s(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,c=1;c<n.length;c++){var u=n[c];0!==i[u]&&(a=!1)}a&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},i={app:0},r=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var s=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"36df":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],o={name:"app",components:{}},c=o,u=n("2877"),l=Object(u["a"])(c,i,r,!1,null,null,null),s=l.exports,d=n("bc3a"),p=n.n(d),f=n("8c4f"),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("router-view"),n("van-tabbar",{attrs:{route:!0},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},t._l(t.tabbarsItems,function(e,a){return n("van-tabbar-item",{key:a,attrs:{url:e.url,icon:e.icon},domProps:{textContent:t._s(e.title)}})}),1)],1)},m=[],b={data:function(){return{active:0,tabbarsItems:[{title:"首页",url:"#/tabbar/home",icon:"home-o"},{title:"发现",url:"#/tabbar/search",icon:"search"},{title:"订单",url:"#/tabbar/order",icon:"description"},{title:"我的",url:"#/tabbar/mine",icon:"contact"}]}}},h=b,g=Object(u["a"])(h,v,m,!1,null,null,null),I=g.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("详情页")])},_=[],y={},k=Object(u["a"])(y,x,_,!1,null,null,null),j=k.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"box"},[n("van-icon",{attrs:{name:"location-o"}}),n("span",[t._v("天河慧通产业广场B区")])],1),n("van-search",{attrs:{placeholder:"搜索饿了么商家、商品名称",background:"#00aaff"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),n("van-grid",t._l(t.kingkongListComputed,function(t,e){return n("van-grid-item",{key:e,attrs:{to:"/detail/"+e+"/luo",icon:t.icon,text:t.name}})}),1),t._m(0),n("van-divider",[t._v("附近商家")]),n("van-dropdown-menu",[n("van-dropdown-item",{attrs:{options:t._f("handleMenu")(t.menu)},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}}),n("van-dropdown-item",{attrs:{options:t._f("handleMenu")(t.menu)},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}})],1)],1)},C=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"index-1ECZ3_0"},[n("section",{staticClass:"index-1y1Q5_0",attrs:{id:"activity-lego"}},[n("div",{staticClass:"index-3xB2N_0"},[n("div",{staticClass:"index-Q3GS5_0 index-1xT5J_0"},[n("h3",{staticClass:"index-1qvN6_0",attrs:{"scan-data":"{item.title}"}},[t._v("品质套餐")]),n("div",{staticClass:"index-2W67h_0"},[t._v("搭配齐全吃得好")]),n("div",{staticClass:"index-1DFa7_0"},[t._v("\n              立即抢购 >\n            ")]),n("img",{attrs:{src:"https://fuss10.elemecdn.com/e/ee/df43e7e53f6e1346c3fda0609f1d3png.png?imageMogr/format/webp/thumbnail/!282x188r/gravity/Center/crop/282x188/"}})])])])]),n("div",{staticClass:"backtop BackTop-wrapper_3XDbcaq",staticStyle:{display:"none"}},[n("img",{staticClass:"BackTop-icon_2Js4K94",attrs:{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTM4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOCAxMSkiIGZpbGw9IiM5OTkiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHJlY3QgeD0iMi4yMzkiIHdpZHRoPSI5OC41MjIiIGhlaWdodD0iOC45MTciIHJ4PSI0LjQ1OCIvPjxyZWN0IHRyYW5zZm9ybT0icm90YXRlKDkwIDUxLjUgNjIuNDE3KSIgeD0iNi43MTciIHk9IjU3Ljk1OCIgd2lkdGg9Ijg5LjU2NSIgaGVpZ2h0PSI4LjkxNyIgcng9IjQuNDU4Ii8+PHJlY3QgdHJhbnNmb3JtPSJzY2FsZSgtMSAxKSByb3RhdGUoNDUgMCAtMjUuNzU3KSIgeD0iLTYuNjcxIiB5PSI0MC4xNzEiIHdpZHRoPSI3MS42NTIiIGhlaWdodD0iOC45MTciIHJ4PSI0LjQ1OCIvPjxyZWN0IHRyYW5zZm9ybT0icm90YXRlKDQ1IDczLjkzOCA0NC42MykiIHg9IjM4LjExMiIgeT0iNDAuMTcxIiB3aWR0aD0iNzEuNjUyIiBoZWlnaHQ9IjguOTE3IiByeD0iNC40NTgiLz48L2c+PC9zdmc+"}})])])}],M=(n("7f7f"),n("ac6a"),n("96cf"),n("3b8d")),O={data:function(){return{value:"",kingkongList:[],value1:0,menu:[]}},computed:{kingkongListComputed:function(){return this.kingkongList.slice(0,8)}},created:function(){var t=Object(M["a"])(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$axios("https://www.easy-mock.com/mock/5d4015c04d43913fb8a20f87/list/kingkong");case 2:return e=t.sent,this.kingkongList=e.data.data.kingkongList,t.next=6,this.$axios("https://www.easy-mock.com/mock/5d4015c04d43913fb8a20f87/list/filterconditions");case 6:n=t.sent,this.menu=n.data.data.sortVOList;case 8:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),filters:{handleMenu:function(t){var e=[];return t.forEach(function(t,n){t.text=t.name,t.value=n,e.push(t)}),e}}},N=O,S=(n("9259"),Object(u["a"])(N,w,C,!1,null,null,null)),Z=S.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("发现")])},P=[],T={},D=Object(u["a"])(T,L,P,!1,null,null,null),H=D.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("订单页")])},z=[],$={},B=Object(u["a"])($,E,z,!1,null,null,null),G=B.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("我的信息")])},R=[],W={},Q=Object(u["a"])(W,J,R,!1,null,null,null),U=Q.exports,Y=(n("537a"),n("ac28")),A=(n("a52c"),n("2ed4")),K=(n("09d3"),n("2d6d")),F=(n("61ae"),n("d314")),X=(n("2b28"),n("9ed2")),V=(n("3df5"),n("2830")),q=(n("0ec5"),n("21ab")),tt=(n("5852"),n("d961")),et=(n("c3a6"),n("ad06")),nt=function(){a["a"].use(et["a"]),a["a"].use(tt["a"]),a["a"].use(V["a"]).use(q["a"]),a["a"].use(X["a"]),a["a"].use(K["a"]).use(F["a"]),a["a"].use(Y["a"]).use(A["a"])};a["a"].use(f["a"]);var at=[{path:"/tabbar",component:I,children:[{path:"home",component:Z},{path:"search",component:H},{path:"order",component:G},{path:"mine",component:U}]},{path:"/detail/:id/:name",component:j}],it=new f["a"]({routes:at});a["a"].prototype.$axios=p.a,a["a"].prototype.$author=function(){return"luo"},nt(),a["a"].config.productionTip=!1,new a["a"]({router:it,render:function(t){return t(s)}}).$mount("#app")},9259:function(t,e,n){"use strict";var a=n("36df"),i=n.n(a);i.a}});
//# sourceMappingURL=app.5813df03.js.map