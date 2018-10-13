<template>
	<div class="container-popular">
    <div class="blank"></div>
    <div class="background">
      <img src="http://p6jceeddp.bkt.clouddn.com/star1.png" alt="">
    </div>
    <!-- 歌词内容 -->
    <!-- <audio id="audio_player" src=""  loop="loop" autoplay="autoplay"></audio> -->
    <div class="content-playing">
      <div class="topmsg">
        <div class="column">
          <div class="title">
            <div class="name">{{titleNow}}</div>
            <div class="author">{{authorNow}}</div>
          </div>
          <div class="collet" @click="isCollet = !isCollet">
            <i class="iconfont icon-collected" v-if="isCollet">&#xe60c;</i>
            <i class="iconfont icon-collect" v-else>&#xe628;</i>
          </div>
        </div>
      </div>
      <audio :name="title" :author="author" :src="playingUrl" controls="true" id="myAudio"/>
      <div class="lyric" @click="isShowLrc=!isShowLrc" v-if="isShowLrc">
        <p v-for="(lrc,l) in lrc" :key="l">{{lrc}}</p>
      </div>
      <!-- <div class="lyrics" ref="lyrics">
        <p v-for="(item,index) in currentLyrics" :class="{'pink': showPink(item,index)}">{{item.text}}</p>
      </div> -->
      <div class="disc" @click="isShowLrc=!isShowLrc" v-else>
        <img class="song-img" :src="pic" alt="">
      </div>
    </div>
    <!-- 底部播放栏 -->
    <div class="blank-6"></div>
    <div class="footer">
      <div class="time">
        <div class="n-time">{{nowTime}}</div>
        <!-- 缺少进度条 -->
        <div class="t-time">{{totalTime}}</div>
      </div>
      <div class="footer1">
        <i class="iconfont icon-listLoop" >&#xe609;</i>
        <div class="middle">
          <i class="iconfont icon-pre">&#xe610;</i>
          <div class="play" @click="play()">
            <i class="iconfont icon-play" v-if="isPlay">&#xe634;</i>
            <i class="iconfont icon-stop" v-else>&#xe640;</i>
          </div>
          <i class="iconfont icon-next">&#xe624;</i>
        </div> 
        <i class="iconfont icon-list">&#xe663;</i>
      </div>           
    </div>
	</div>
</template>

<script type="text/javascript">
import { getLrc } from '@/api/all'
import foot from '@/components/footer'

export default {
  name: "play",
  data: function() {
    return {
      isPlay: true,
      isCollet: false,
      isShowLrc: false,
      street: '',
      isOn: false,
      isCollected: false,
      currentLyrics: [{time: 0, text: '此歌曲暂无歌词~'}],
      lrc:[
        '此歌曲暂无歌词'
      ],
      songidNow: '',
      playing: false,
      playingUrl: '',
      url: '',
      titleNow: '',
      authorNow: '' ,
      pic: '',   
      now: '',
      lyricArr: [],
      pDom: [],
      deg: '',
      translateX: '',
      foot: false,
      songState: {
        progress: 0,
        currentPosition: '00:00',
        duration: '00:00',
        datalist: []
      }
    }
  },
  components :{
    foot
  },
  methods: {
    // _getLrc(songid){
    //   getLrc(songid).then((res) => {
    //     if (res.code == 1) {
    //       this.lrc= res.data;
    //       //this.lrc = this.lrc1.replace(new RegExp("\u0020","gm"),"<br/>");
    //     }
    //   })
    // },
    _getLrc(songid){
      getLrc(songid).then((res) => {
        if (res.code == 1) {
          let data = res.data;
          // data = data.replace(/ /,'\n')
          this.lrc = data.split('\n')
          //this.lrc = this.lrc1.replace(new RegExp("\u0020","gm"),"<br/>");
        }
      })
    },
    play () {
      if(this.isPlay){
        wx.pauseBackgroundAudio()
        this.isPlay = false
      } else {
        wx.playBackgroundAudio()
        this.isPlay = true
      }
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
    /**
     * 监听音乐播放
     */
    //  var that = this
    // wx.onBackgroundAudioPlay(function() {
    //   that.isPlay = true
    // })
    // wx.onBackgroundAudioPause(function() {
    //   that.isPlay = false
    // })
    // wx.onBackgroundAudioStop(function() {
    //   that.isPlay = false
    // })
    // let url="http://tingapi.ting.baidu.com/v1/restserver/ting?format=json&calback=&from=webapp_music&method=baidu.ting.song.play&songid=" + this.songidNow
    // this.url = url
    this.isPlay = this.GLOBAL.isPlay
    this.songidNow = options.songid
    this.titleNow = options.title
    this.authorNow = options.author
    this.pic = options.pic
    this._getLrc(this.songidNow)  
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
  computed: {
    lyrics() {
      let lyrics = ''
      this.lyricArr = []
      if (this.lyric) {
          let arr = this.lyric.split(' ')
          for (let item of arr) {
              if (item) {
                  let arr2 = item.split(']')
                  // console.log(arr2[0])
                  // console.log(arr2[0].substring(1,3)*60)
                  // console.log(arr2[0].substring(4))
                  this.lyricArr.push(arr2[0].substring(1,3)*60+arr2[0].substring(4)*1)
                  // console.log(this.lyricArr)
                  if (arr2) {
                      lyrics += `<p class='lyrichook' style='margin: 10px 0'>${arr2[1]}</p>`
                  }
              }
          }
      } else {
          lyrics = '暂无歌词~'
      }
      return lyrics
    },
    totalTime() {
        let m, s
        m = Math.floor(this.size / 60)
        m = m.toString().length == 1 ? ('0' + m) : m
        s = Math.floor(this.size - 60 * m)
        s = s.toString().length == 1 ? ('0' + s) : s
        return m + ':' + s
    },
    nowTime() {
        let m, s
        m = Math.floor(this.now / 60)
        m = m.toString().length == 1 ? ('0' + m) : m
        s = Math.floor(this.now - 60 * m)
        s = s.toString().length == 1 ? ('0' + s) : s
        return m + ':' + s
    },
  },
  watch: {
    size() {
      this.$refs.lyric.style.transform = 'translateY(0px)'
    }
  }
};
</script>

<style scoped>
.container-popular{
  width: 100%;
  color: #fff;
  font-family:SimSun;
}
.blank{
  height: 20px;
}
.background{
  position: fixed;
  top: 0;
  z-index: -100;
  width: 100%;
}
.background img {
  width: 750rpx;
  height: 1195rpx;
  /* opacity: 0.75; */
}
.iconfont {
  font-size: 30px;
  color: #fff;
  /* padding: 10px 5px; */
}
.icon-play,
.icon-stop{
  font-size: 40px;
  text-align: center;
  margin: 5px;
}
.topmsg{
  position: fixed;
  z-index: 100;
  /* background:rgb(20, 25, 25); */
  background: linear-gradient(to bottom, rgb(20,25,25) 0%,rgb(26, 27, 36) 100%);
  top: 0;
  width: 100%;
  /* border-bottom: 1px solid rgb(54, 49, 49); */
  opacity: 1;
}
.column{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
}
.title{
  padding-left: 13px;
  width: 80%;
}
.name{
  font-size: 18px;
  line-height: 25px;
}
.author{
  font-size: 15px;
  color: rgb(182, 175, 175);
}
.icon-collected{
  color: rgb(255, 75, 4);
}
.content-playing{
  margin-top: -21px;
  /* height: 1195rpx; */
}
.lyric{
  padding: 0 10px 110px 10px;
  text-align: center;
  color: #fff;
  background:rgb(43, 44, 46);
  opacity: 0.4;
}
/* .lyric {
  width: px2rem(700px);
  height: px2rem(750px);
  margin: px2rem(40px) auto;
  color: rgba(255, 255, 255, .8);
  font-size: px2rem(30px);
  overflow: auto;
}
.roll-lyric {
  transition: transform .5s;
  transform: translateY(200px);
} */
.disc {
  position: relative;
  margin-top: 10%;
  margin-left: 10%;
  width: 300px;
  height: 300px;
  border-radius: 300px;
  transform: rotate(45deg);
  background-image: radial-gradient(5em 30em ellipse, #fff, #000);
  border: 2px solid #131313;
  box-shadow: 0 0 0 10px #343935;
  opacity: 0.7;
}
.song-img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: center center;
  transform: translate(-50%, -50%) rotate(10deg);
  width: 200px;
  height: 200px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border: 2px solid #000;
  border-radius: 200px;
  animation: animations1 10s linear infinite forwards;
}
.footer{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px;
  background:rgb(43, 44, 46);
  /* background: #0e1313;
  box-shadow: 10px 4px 10px black; */
  color: #FFF;
}
.time{
  display: flex;
  justify-content: space-between;
  align-items: center;  
}
.footer1{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.middle{
  display: flex;
  justify-content: center;
  align-items: center;
  /* display: -webkit-box; */
  width: 40%;
  padding: 0 15%;
}
</style>
