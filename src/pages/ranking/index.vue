<template>
  <div class="container-ranking">
    <!-- 头部 -->
    <header class="all-header">
      <router-link class="back" to="/">
				<i class="iconfont icon-back"></i>
    	</router-link>
      <div class="text-title">排行榜</div>
      <div class="blank-right">&nbsp;</div> 
    </header>
    <div class="blank-7"></div>
<!-- <div class="my-rank" ref="rankRef"> -->
    <!-- 排行榜数据 -->
    <!-- <scroll class="toplist" ref="scrollRef" :data="toplist"> -->
      <!-- <ul>
        <li class="item" v-for="item in toplist" @click="selectItem(item)"> -->
          <!-- 左图 -->
          <!-- <div class="icon">
            <img width="100" height="100" v-lazy="item.picUrl" @load="loadImg">
          </div> -->
    
          <!-- 右歌 -->
          <!-- <ul class="songlist">
            <h3 class="title">{{ item.topTitle }}</h3>
            <li class="song" v-for="(song, index) in item.songList">
              <span>{{ index + 1 }}</span>
              <span>{{ song.songname }}</span>
              <span class="singername"> - {{ song.singername }}</span>
            </li>
          </ul>
        </li>
      </ul> -->
    <!-- </scroll> -->
    <!-- <router-view></router-view> -->
  <!-- </div> -->    
    <div class="ranking-list">      
      <!-- 流行榜 -->
      <router-link class="back" to="/popular">
        <div class="ranking-1">
          <div class="ranking-11">
            <img src="http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_4_300_212984792.jpg" alt="">
          </div>
          <div class="ranking-r">
            <div class="ranking-12" v-for="(item1,index1) in songlist1" :key="index1" v-show="index1 < 3">
              <div class="text-12"><nobr>{{ index1 +1 }}.{{ item1.title }}&nbsp;-&nbsp;{{ item1.author }}</nobr></div>          
            </div>
          </div>
        </div>
      </router-link>  
      <!-- 热歌榜 -->
      <router-link class="back" to="/hot">
        <div class="ranking-1">
          <div class="ranking-11">
            <img src="http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_26_300_212606735.jpg" alt="">
          </div>
          <div class="ranking-r">
            <div class="ranking-12" v-for="(item2,index2) in songlist2" :key="index2" v-show="index2 < 3">
              <div class="text-12"><nobr>{{ index2 +1 }}.{{ item2.title }}&nbsp;-&nbsp;{{ item2.author }}</nobr></div>          
            </div>
          </div>
        </div>
      </router-link>
        <!-- 新歌榜 -->
        <router-link class="back" to="/new">
        <div class="ranking-1">
          <div class="ranking-11">
              <img src="http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_27_300_212984792.jpg" alt="">
          </div>
          <div class="ranking-r">
            <div class="ranking-12" v-for="(item3,index3) in songlist3" :key="index3" v-show="index3 < 3">
              <div class="text-12"><nobr>{{ index3 +1 }}.{{ item3.title }}&nbsp;-&nbsp;{{ item3.author }}</nobr></div>          
            </div>
          </div>
        </div>
      </router-link>
      <!-- 网络歌曲榜 -->
      <router-link class="back" to="/online">
        <div class="ranking-1">
          <div class="ranking-11">
            <img src="http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_28_300_212437019.jpg" alt="">
          </div>
          <div class="ranking-r">
            <div class="ranking-12" v-for="(item4,index4) in songlist4" :key="index4" v-show="index4 < 3">
              <div class="text-12"><nobr>{{ index4 +1 }}.{{ item4.title }}&nbsp;-&nbsp;{{ item4.author }}</nobr></div>          
            </div>
          </div>
        </div>
      </router-link>
      <!-- 欧美歌曲榜 -->
      <router-link class="back" to="/euramerican">
        <div class="ranking-1">
          <div class="ranking-11">
            <img src="http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_3_300_212913234.jpg" alt="">
          </div>
          <div class="ranking-r">
            <div class="ranking-12" v-for="(item5,index5) in songlist5" :key="index5" v-show="index5 < 3">
              <div class="text-12"><nobr>{{ index5 +1 }}.{{ item5.title }}&nbsp;-&nbsp;{{ item5.author }}</nobr></div>        
            </div>
          </div>
        </div>
      </router-link>
    </div>
    <!-- 这里是footer -->        
  <!-- <div class="blank-5"></div> -->
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
import { getPopular, getHot, getBill, getOnline, getEuramerican } from '@/api/rank'

export default{
  name: 'ranking',
  data: function () {
    return {
      bannerType: 1,
      street: '',
      songnameMsg: '病变', // 数组中获取
      singerMsg: '鞠文娴', // 数组中获取
      songlist1: [],
      songlist2: [],
      songlist3: [],
      songlist4: [],
      songlist5: []
    }
  },
  methods: {
    _getPopular () {
      getPopular().then((res) => {
        if (res.code === 1) {
          this.songlist1 = res.data.a
        }
      })
    },
    _getHot () {
      getHot().then((res) => {
        if (res.code === 1) {
          this.songlist2 = res.data.a
        }
      })
    },
    _getBill () {
      getBill().then((res) => {
        if (res.code === 1) {
          this.songlist3 = res.data.a
        }
      })
    },
    _getOnline () {
      getOnline().then((res) => {
        if (res.code === 1) {
          this.songlist4 = res.data.a
        }
      })
    },
    _getEuramerican () {
      getEuramerican().then((res) => {
        if (res.code === 1) {
          this.songlist5 = res.data.a
        }
      })
    }
    // changePlaying(){
    //   this.playing = !this.playing
    // }
  },
  created () {
    this._getPopular()
    this._getHot()
    this._getBill()
    this._getOnline()
    this._getEuramerican()
  }
}
</script>

<style scoped>
@import "../../../font/iconfont.css";
</style>
