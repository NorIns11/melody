<template>
  <div class="index-container">
    <div class="background">
      <img src="http://p6jceeddp.bkt.clouddn.com/star1.png" alt="">
    </div>
    <!-- 搜索框 -->
    <div class="search">
      <input v-model="message" class="search-box" @click="isSearch = !isSearch"   placeholder-style="color:#696969; font-size:15px;" placeholder="请输入歌手/歌曲名" 
        @confirm="search()"/>
      <i class="iconfont icon-search" @click="search()">&#xe64b;</i>
    </div>
    <!-- <div class="search-content" v-if="isSearch">
      <div class="searched">
        <div class="searched-box"></div>
        <i class="iconfont icon-search">&#xe633;</i>
      </div>    
    </div> -->
    <!-- 轮播图 -->
    <div class="banner-column">
      <swiper autoplay="true" interval="2000" indicator-dots="true" circular="true">
        <swiper-item><img src="http://p1.music.126.net/2d_gTxI1zsWa0wmNz3DSNw==/109951163213468979.jpg"/></swiper-item>
        <swiper-item><img src="http://business.cdn.qianqian.com/qianqian/pic/bos_client_15223825820c615a00c1aa0f8dca798a58089b4df6.jpg"/></swiper-item>
        <swiper-item><img src="http://p1.music.126.net/oH2YsSkCuKzd1tOkwU0QlQ==/109951163213906153.jpg"/></swiper-item>
        <swiper-item><img src="http://business.cdn.qianqian.com/qianqian/pic/bos_client_1522233282d9f564ce6ecf73db72491080860f6d0e.jpg"/></swiper-item>     
      </swiper>
    </div>
    <!-- 导航栏 -->
    <div class="nav_1">        
      <navigator class="nav_11" :url="'../ranking/main?title='+titleNow+'&author='+authorNow+'&songid='+songidNow+'&pic='+pic" hover-class="none">
        <i class="iconfont icon-ranking">&#xe61c;</i>
        <div>排行榜</div>
      </navigator>  
      <navigator class="nav_11" :url="'../new/main?title='+titleNow+'&author='+authorNow+'&songid='+songidNow+'&pic='+pic" hover-class="none">
        <i class="iconfont icon-logo">&#xe727;</i>
        <div>推荐歌单</div>
      </navigator>         
      <navigator class="nav_11" :url="'../collected/main?title='+titleNow+'&author='+authorNow+'&songid='+songidNow+'&pic='+pic" hover-class="none">
        <i class="iconfont icon-collection">&#xe616;</i>
        <div>收藏</div>
      </navigator>
    </div> 
    <!-- 歌曲推荐   -->
    <div class="recommend">
      <div class="rec_block">
        <div class="blank1"></div>
        <div class="rec_title">推荐歌曲</div>           
        <div class="rec_more">
          <navigator url="../hot/main" hover-class="none">
            <div>更多</div>  
          </navigator>
        </div>          
      </div>
      <div class="detail_2">
        <div class="detail_21" v-for="(item,index) in songlist" :key="index" v-show="index < 3">
          <div>          
            <!-- <img :src="item.pic" @click="_songPlay(item.songid)" alt=""/> -->
            <img :src="item.picBig" @click="_songPlay(item)" alt=""/>
            <p class="text_14"><nobr>{{ item.title }}</nobr></p>         
          </div>
        </div>
      </div>      
    </div>
    <!-- <foot :songidNow="songidNow"></foot> -->
    <foot :isPlay="isPlay" :titleNow="titleNow" :authorNow="authorNow" :pic="pic" :songidNow="songidNow"></foot>
  </div>
</template>

<script>
// import { getHot } from '@/api/rank'
import { getRecommend, searchByKey, playMusic } from '@/api/all'
import foot from '@/components/footer'

export default {
  name: "home",
  data: function() {
    return {
      isSearch: false,
      message: '',
      songMsg: '',
      refreshLoading: false,
      bannerType: 1,
      street: '',
      isOn: false, 
      songlist: [],
      songidNow: '',
      titleNow: '欢迎使用Melody',
      authorNow: 'Melody',
      pic: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2102151284,608992992&fm=11&gp=0.jpg',
      url: '',
      isPlay: false
    };
  },
  components :{
    foot
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '自定义转发标题',
      path: '/page/user?id=123',
      success: function(res) {
        console.log("转发成功")
      },
      fail: function(res) {
        console.log("转发失败")
      }
    }
  },
  methods:{
    search () {
      // let searchMsg = encodeURI(encodeURI(this.message))
      wx.navigateTo ({
        url: '../searchResult/main?message='+this.message
      })
      // searchByKey(searchMsg).then((res) => {
      //   console.log(res)
      // })
    },
    _getRecommend() {
      getRecommend().then((res) => {
        if (res.code === 1) {
          this.songlist = res.data
        }
      })
    },
    getPlaying () {
      playMusic(this.songidNow).then(res => {
        if (res.code === 1) {
          this.playingUrl = res.data.data.fileLink
          this.titleNow = res.data.data.title
          this.authorNow = res.data.data.author
          this.pic = res.data.data.picBig
        }
      }) 
    },
    _songPlay(item){
      this.isPlay = true
      this.GLOBAL.isPlay = true
      this.songidNow = item.songId
      this.getPlaying()
      setTimeout(() => {
        wx.playBackgroundAudio({
          dataUrl: this.playingUrl,
          title: this.titleNow,
          coverImgUrl: this.pic
        })
      }, 300)
      setTimeout(() => {
        this.GLOBAL.songidNow = this.songidNow
        this.GLOBAL.titleNow = this.titleNow
        this.GLOBAL.authorNow = this.authorNow
        this.GLOBAL.pic = this.pic
      }, 350)
    }
  },
  // onShow: function() {
  //   this.isPlay = this.GLOBAL.isPlay
  //   let titleStorage = wx.getStorageSync('titleNow')
  //   console.log (titleStorage)
  // },
  onShow: function() {
    this.isPlay = this.GLOBAL.isPlay
    this.songidNow = this.GLOBAL.songidNow
    this.titleNow = this.GLOBAL.titleNow
    this.authorNow = this.GLOBAL.authorNow
    this.pic = this.GLOBAL.pic
  },
  onLoad:function(options){
    /**
     * 监听音乐播放
     */
    // this.isPlay = this.GLOBAL.isPlay
    var that = this
    wx.onBackgroundAudioPlay(function() {
      that.isPlay = true
      that.GLOBAL.isPlay = true
    })
    wx.onBackgroundAudioPause(function() {
      that.isPlay = false
      that.GLOBAL.isPlay = false
    })
    wx.onBackgroundAudioStop(function() {
      that.isPlay = false
      that.GLOBAL.isPlay = false
    })
  },
  created() {
    this._getRecommend()
  }
};
</script>

<style scoped>
.background{
  position: absolute;
  top: 0;
  z-index: -100;
  width: 100%;
}
.background img {
  width: 750rpx;
  height: 1200rpx;
  /* opacity: 0.75; */
}
.index-container {
  height: totallyPercent;
  font-family:SimSun;
  font-size: 17px;
  color: #FFF;
}
.search-content{
  position: absolute;
  top: 0;
  z-index: 200;
  height: totallyPercent;
  font-family:SimSun;
  font-size: 17px;
  opacity: 0.75;
  background: #fff;
}
.searched{
  display: flex;
  justify-content: space-between;
}
.searched-box{
  width: 80%;
  color: #fff;
  opacity:0.65;
  filter:alpha(opacity=65);
  background-color: rgb(129, 122, 122);
  border-radius: 15px;
  box-shadow:0 1px 2px rgba(0,0,0,.4);
}
.iconfont{
  font-size: 40px;
}
swiper{
  height: 330rpx;
}
.banner-column{
  /* position: absolute;
  top: 0; */
  z-index: -40;
  width: 100%;
  height: 330rpx;
}
.banner-column img{
  width: 100%;
  height: 165px;
}
/*==============================
搜索框区域样式
===============================*/
.search{
  display: flex;
  justify-content: space-between;
  margin: 20rpx 5%;
  /* margin: 20rpx 8% 350rpx 8%;
  opacity:0.65;
  filter:alpha(opacity=65);
  background-color: rgb(129, 122, 122);
  border-radius: 15px;
  box-shadow:0 1px 2px rgba(0,0,0,.4); */
}
.search-box{
  padding: 3px 20px 3px 2px;
  width: 300px;
  border: none;
  color: #fff;
}
.icon-search{
  margin-top: 4px;
  font-size: 22px;
  color: #fff;
}
.nav_1 {
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav_11{
  margin: 10px 33px;
  text-align: center;
}
.icon-ranking,
.icon-collection,
.icon-logo{
  font-size: 35px;
  margin-bottom: 10px;
  color: #fff;
}
.rec_block{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px;
  opacity:0.5;
  filter:alpha(opacity=50);
  background:rgb(43, 44, 46);
}
.blank1{
  border-radius: 1px;
  width: 5px;
  height: 30px;
  background: #fff;
}
.rec_title{
  width: 80%;
}
.rec_more{
  margin-right: 10px;
}
.text_14{
  text-align: center;
  font-size: 14px;
  margin-top: 10px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: #fff;
}
.detail_2{
  /* margin-bottom: 10px; */
  padding: 10px 5px 0 5px;
  display: flex;
  justify-content: center;
}

.detail_21{
  padding: 0 4px;
  width: 33.33%;
}

.detail_21 img{
  width: 100%;
  height: 110px;
  border-radius: 2px;
}
</style>
