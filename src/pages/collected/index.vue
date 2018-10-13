<template>
  <div class="container-collected">
    <!-- 头部 -->
    <header class="all-header">
      <router-link class="back" to="/">
				<i class="iconfont icon-back"></i>
    	</router-link>
      <div class="text-title">收藏</div>
      <div class="blank-right">&nbsp;</div> 
    </header>
    <div class="blank-6"></div>
    <!-- 封面 -->
    <div class="covers">
      <img src="http://p3gbjsikb.bkt.clouddn.com/cover/collect1.jpg" alt="">
    </div>
    <!-- 歌曲    -->
    <div class="all-list">
        <div class="all-1">
            <div class="all-11">
                <img src="@/img/cover.jpg" alt="">
            </div>
            <div class="all-12">
                <div class="text-12"><nobr>{{rankingSong[0]}}</nobr></div>
                <div class="text-10"><nobr>{{rankingSong[1]}}</nobr></div>              
            </div>
        </div> 
        <div class="all-1">
            <div class="all-11">
                <img src="@/img/cover.jpg" alt="">
            </div>
            <div class="all-12">
                <div class="text-12"><nobr>{{rankingSong[0]}}</nobr></div>
                <div class="text-10"><nobr>{{rankingSong[1]}}</nobr></div>             
            </div>
        </div>
        <div class="all-1">
            <div class="all-11">
                <img src="@/img/cover.jpg" alt="">
            </div>
            <div class="all-12">
                <div class="text-12"><nobr>{{rankingSong[0]}}</nobr></div>
                <div class="text-10"><nobr>{{rankingSong[1]}}</nobr></div>             
            </div>
        </div>
        <div class="all-1">
            <div class="all-11">
                <img src="@/img/cover.jpg" alt="">
            </div>
            <div class="all-12">
                <div class="text-12"><nobr>{{rankingSong[0]}}</nobr></div>
                <div class="text-10"><nobr>{{rankingSong[1]}}</nobr></div>             
            </div>
        </div>       
    </div>
    <!-- 这里是footer -->        
    <div class="blank"></div>      	
	<footer class="footer2">
        <router-link to="/playing">
          <div class="cover">
            <img src="@/img/cover.jpg" alt="">
          </div>
        </router-link>
        <router-link to="/playing">
          <div class="baseMsg">
            <div class="song">{{songnameMsg}}</div>
            <div class="singer">{{singerMsg}}</div>
          </div>
        </router-link>
        <div class="btns">
          <!-- <i class="iconfont icon-pre" @click="preChange"></i>
          <i class="iconfont icon-stop" @click="stateChange"></i>
          <i class="iconfont icon-next" @click="nextChange"></i> -->
          <i class="iconfont icon-pre"></i>
          <i class="iconfont icon-stop"></i>
          <i class="iconfont icon-next"></i>
        </div>
    </footer> 
    </div>
</template>

<script>
export default{
  name: 'collected',
  data: function () {
    return {
      bannerType: 1,
      street: '',
      songnameMsg: '病变', // 数组中获取
      singerMsg: '鞠文娴', // 数组中获取
      rankingSong: [
        '体面',
        '病变',
        '起风了'
      ]
    }
  }
}

</script>

<style scoped>
@import "../../../font/iconfont.css";
</style>