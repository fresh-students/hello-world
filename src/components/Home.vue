<template>
    <div id="home">
        <!-- 轮播图 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>
        <!-- 九宫格到六宫格 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/newslist">
		            <img src="../assets/menu1.png">
		            <div class="mui-media-body">新闻资讯</div>
          </router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/picshare">
		            <img src="../assets/menu2.png">
		            <div class="mui-media-body">图片分享</div>
          </router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/buypro">
		            <img src="../assets/menu3.png">
		            <div class="mui-media-body">商品购买</div>
          </router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/discus">
		            <img src="../assets/menu4.png">
		            <div class="mui-media-body">留言反馈</div>
          </router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/mv">
		            <img src="../assets/menu5.png">
		            <div class="mui-media-body">视频专区</div>
          </router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/contactus">
		            <img src="../assets/menu6.png">
		            <div class="mui-media-body">联系我们</div>
          </router-link></li>
		</ul> 
    </div>
</template>
<script>
export default {
  data() {
    return {
      lists: []
    };
  },
  created(){
    
  },
  methods: {}
};
</script>
<style scoped>
#home .mint-swipe {
  height: 200px;
}
.mint-swipe-item {
  background-color: red;
}
.mui-grid-view.mui-grid-9{
    background-color: #ffffff;
    border:none;
}
.mui-table-view img{
   width:60px;
   height:60px
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border: 0
}
.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
    font-size: 13px
}
</style>