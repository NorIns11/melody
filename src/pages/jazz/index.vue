
<template>
  <div class="container-rank">
    <!-- 封面 -->
    <div class="covers">
      <img :src="songlist[0].picBig" alt="">
    </div>
    <!-- 歌曲 -->
    <div class="all-list">
      <div class="all-1" v-for="(item,index) in songlist" :key="index">
        <div class="numbers">
          {{ index+1 }}
        </div>
        <div class="all-12" @click="_songPlay(item.songId)">
          <div class="text-15"><nobr>{{ item.title }}</nobr></div>
          <div class="text-13"><nobr>{{ item.author }}</nobr></div>
        </div>
      </div>
    </div>
    <div class="blank"></div>
    <foot :isPlay="isPlay" :titleNow="titleNow" :authorNow="authorNow" :pic="pic" :songidNow="songidNow"></foot>
    </div>
</template>

<script>
import { getRank, playMusic } from '@/api/all'
import foot from '@/components/footer'

export default{
  name:"popular" ,
  data:function () {
    return{
      bannerType: 1,
      street: "",
      songlist: [],
      isPlay: false,
      songidNow: '',
      titleNow: '',
      authorNow: '',
      pic: ''
    };
  },
  components :{
    foot
  },
  methods:{
    _getRank (type,num) {
      getRank(type,num).then((res) => {
        if (res.code === 1) {
          this.songlist= res.data
        }
      })
    },
    getPlaying (songid) {
      playMusic(songid).then(res => {
        if (res.code === 1) {
          this.playingUrl = res.data.data.fileLink
          this.titleNow = res.data.data.title
          this.authorNow = res.data.data.author
          this.pic = res.data.data.picBig
        }
      }) 
    },
    _songPlay(songid){
      this.isPlay = true
      this.GLOBAL.isPlay = true
      this.songidNow = songid
      this.getPlaying(songid)
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
  },
  created(){ 
    this._getRank(12,20)
  }  
}
</script>

<style scoped>
.container-rank{
  width: 100%;
  color: #fff;
  font-family:SimSun;
}
.covers{
  padding: 0;
  margin-bottom: -5px;
}
.covers img{
  width: 100%;
  height: 300px;
}
.all-1{
  display: -webkit-box;
  opacity:0.8;
  filter:alpha(opacity=80);
  background:rgb(43, 44, 46);
  /* background: rgb(134, 126, 126);
  opacity: 0.7; */
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