<template>
  <div class="container-collected">
    <!-- 头部 -->
    <header class="all-header">
      <router-link class="back" to="/ranking">
		    <i class="iconfont icon-back"></i>
      </router-link>
      <div class="text-title">流行榜</div>
      <div class="blank-right">&nbsp;</div> 
    </header>
    <div class="blank-6"></div>
    <!-- 封面 -->
    <div class="covers">
      <img src="http://p3gbjsikb.bkt.clouddn.com/cover/collected.jpg" alt="">
    </div>
    <!-- 歌曲 -->
    <div class="all-list">
        <div class="all-1" v-for="(item,index) in songlist" :key="index">
            <div class="numbers">
              {{ index +1 }}
            </div>
            <div class="all-12" @click="_songPlay(item.songid,item.title,item.author)">
                <div class="text-12"><nobr>{{ item.title }}</nobr></div>
                <div class="text-10"><nobr>{{ item.author }}</nobr></div>              
            </div>
        </div>
    </div>
    <!-- 这里是footer -->        
    <div class="blank-6"></div>      	
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
          <i class="iconfont icon-pre"></i>
          <i class="iconfont icon-stop"></i>
          <i class="iconfont icon-next"></i>
        </div>
      </footer> 
    <!-- <footer></footer> -->
    </div>
</template>

<script>
import { getPopular } from '@/api/rank'
/* import Footer from '@/api/rank' */

export default{
  name: 'popular',
  data: function () {
    return {
      bannerType: 1,
      street: '',
      songnameMsg: '病变', // 数组中获取
      singerMsg: '鞠文娴', // 数组中获取
      songlist: []
    }
  },
  methods: {
    _getRecommand () {
      getPopular().then((res) => {
        if (res.code === 1) {
          this.songlist = res.data.a
        }
      })
    },
    _songPlay (songid, title, author) {
      this.$router.push({
        name: 'Playing',
        params: {
          songid: songid,
          title: title,
          author: author
        }
      })
      // this.$router.push({
      //   name:'Footer',params:{
      //     songid:songid,
      //     title:title,
      //     author:author
      //   }
      // })
    }
  },
  created () {
    /* this._getPopular() */
  }
}
</script>

<style scoped>
@import "../../../font/iconfont.css";
</style>