<template>
  <div class="container-popular">
    <!-- 封面 -->
    <div class="covers">
      <img src="http://p6jceeddp.bkt.clouddn.com/cover.jpg" alt="">
    </div>
    <!-- 歌曲    -->
    <!-- <div class="all-list">
      <div class="all-1">
          <div class="all-11">
              <img src="http://p6jceeddp.bkt.clouddn.com/cover.jpg" alt="">
          </div>
          <div class="all-12">
              <div class="text-15"><nobr>{{rankingSong[0]}}</nobr></div>
              <div class="text-13"><nobr>{{rankingSong[1]}}</nobr></div>              
          </div>
      </div>
      <div class="all-1">
          <div class="all-11">
              <img src="http://p6jceeddp.bkt.clouddn.com/cover.jpg" alt="">
          </div>
          <div class="all-12">
              <div class="text-15"><nobr>{{rankingSong[0]}}</nobr></div>
              <div class="text-13"><nobr>{{rankingSong[1]}}</nobr></div>             
          </div>
      </div>
      <div class="all-1">
          <div class="all-11">
              <img src="http://p6jceeddp.bkt.clouddn.com/cover.jpg" alt="">
          </div>
          <div class="all-12">
              <div class="text-15"><nobr>{{rankingSong[0]}}</nobr></div>
              <div class="text-13"><nobr>{{rankingSong[1]}}</nobr></div>             
          </div>
      </div>
      <div class="all-1">
          <div class="all-11">
              <img src="http://p6jceeddp.bkt.clouddn.com/cover.jpg" alt="">
          </div>
          <div class="all-12">
              <div class="text-15"><nobr>{{rankingSong[0]}}</nobr></div>
              <div class="text-13"><nobr>{{rankingSong[1]}}</nobr></div>             
          </div>
      </div>       
    </div> -->
    <div class="blank"></div>
    <foot :isPlay="isPlay" :titleNow="titleNow" :authorNow="authorNow" :pic="pic" :songidNow="songidNow"></foot>
  </div>
</template>

<script>
import { getPopular } from '@/api/rank'
import foot from '@/components/footer'

export default{
  name:"collected" ,
  data:function(){
    return{
      bannerType: 1,
      street: "",
      songidNow: '',
      titleNow: '',
      authorNow: '',
      pic: '',
      isPlay: false
    };
  },
  components :{
    foot
  },
  // onShow: function() {
  //   this.isPlay = this.GLOBAL.isPlay
  // },
  onShow: function() {
    this.isPlay = this.GLOBAL.isPlay
    this.songidNow = this.GLOBAL.songidNow
    this.titleNow = this.GLOBAL.titleNow
    this.authorNow = this.GLOBAL.authorNow
    this.pic = this.GLOBAL.pic
  },
  onLoad: function(options) {
    this.isPlay = this.GLOBAL.isPlay
    this.songidNow = options.songid
    this.titleNow =  options.title
    this.authorNow = options.author
    this.pic = options.pic
    // wx.onBackgroundAudioPlay(function() {
    //   that.isPlay = true
    //   that.GLOBAL.isPlay = true
    // })
    // wx.onBackgroundAudioPause(function() {
    //   that.isPlay = false
    //   that.GLOBAL.isPlay = false
    // })
    // wx.onBackgroundAudioStop(function() {
    //   that.isPlay = false
    //   that.GLOBAL.isPlay = false
    // })
  }
}

</script>

<style scoped>
.container-popular{
  width: 100%;
  color: #fff;
  font-family:SimSun;
  background:rgb(43, 44, 46);
  height: 550px;
}
.covers{
  padding: 0;
  margin-bottom: -5px;
}
.covers img{
  width: 100%;
  height: 300px;
}
.back{
  margin: 0 5px;
}
.titles{
  color: #FFF;
  font-size: 20px;
}
.blank-right{
  width: 80px;
}
.all-1{
  display: -webkit-box;
  opacity:0.8;
  filter:alpha(opacity=80);
  background:rgb(43, 44, 46);
  /* background: rgb(134, 126, 126);
  opacity: 0.7; */
}
.all-11{
  margin-left: 12px;
  width: 12%;
  padding: 6px 0;
}
.all-11 img{
  height: 40px;
  width: 100%;
}
.numbers{
  width: 40px;
  font-size: 18px;
  padding-top: 15px;
  text-align: center;
  color: rgb(170, 169, 169);
}
.all-12{
  padding: 6px 5px;
  width: 80%;
  border-bottom: 1px solid rgb(63, 62, 62);
}
.text-15{
  line-height: 23px;
  font-size: 15px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.text-13{
  font-size: 13px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.blank{
  height: 60px;
  background:rgb(43, 44, 46);
}
</style>