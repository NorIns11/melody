<template>     	
	<footer class="player">
    <router-link to="@/pages/playing">
        <div class="cover">
          <img src="@/img/cover.jpg" alt="">
        </div>
    </router-link>
    <router-link to="@/pages/playing">
        <div class="baseMsg">
          <div class="song"><nobr>{{ this.$route.params.title }}</nobr></div>
          <div class="singer"><nobr>{{this.$route.params.author}}</nobr></div>
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
</template>

<script>
export default{
  name:'player',
  data:function () {
    return{
      bannerType: 1,
      street: '',
      title: '病变',
      author: '鞠文娴'
    };
  },
  methods:{
    _songPlay(songid,title,author){
      this.$router.push({
        name:'Playing',params:{
          songid:songid,
          title:title,
          author:author
        }
      })
    }
  },
  created(){}  
}
</script>

<style scoped>
@import "../../font/iconfont.css";
player{
  width: 100%;
  height: 130px;
}
</style>