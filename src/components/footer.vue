<template>     	
	<div class="foot">
    <navigator :url="'../playing/main?title='+titleNow+'&author='+authorNow+'&songid='+songidNow+'&pic='+pic">
      <div class="cover">
        <img :src="pic" alt="">
      </div>
    </navigator>
    <navigator :url="'../playing/main?title='+titleNow+'&author='+authorNow+'&songid='+songidNow+'&pic='+pic">
      <div class="baseMsg">
        <div class="song"><nobr>{{titleNow}}</nobr></div>
        <div class="singer"><nobr>{{authorNow}}</nobr></div>
      </div>
    </navigator>
    <div class="btns">
      <i class="iconfont icon-pre">&#xe610;</i>
      <div class="play" @click="play()">
        <i class="iconfont icon-play" v-if="isPlay">&#xe634;</i>
        <i class="iconfont icon-stop" v-else>&#xe640;</i>
      </div>
      <i class="iconfont icon-next">&#xe624;</i>
    </div>
  </div> 
</template>

<script>
export default{
  name:'foot',
  // onReady: function (e) {
  //   // 使用 wx.createAudioContext 获取 audio 上下文 context
  //   this.audioCtx = wx.createAudioContext('myAudio')
  // },
  data () {
    return{
      isPlay: false,
      bannerType: 1,
      street: '',
      url: '',
      pic: '',
      titleNow: '欢迎使用Melody',
      authorNow: 'Melody',
      songidNow: '',
      playingUrl: ''
    };
  },
  methods: {
    play () {
      if(this.isPlay){
        wx.pauseBackgroundAudio()
        this.isPlay = false
      } else {
        wx.playBackgroundAudio()
        this.isPlay = true
      }
    },
    checkPlay(){
      if(this.isPlay){
        this.audioCtx.play()
      } else {
        this.audioCtx.pause()
      }    
    }
  },
  /*created () {
    this.checkPlay()
  },*/
  // updated () {
  //   this.url ="http://tingapi.ting.baidu.com/v1/restserver/ting?format=json&calback=&from=webapp_music&method=baidu.ting.song.play&songid=" + this.songidNow
  //   let that = this
  //   wx.request ({
  //     url:that.url,
  //     success: function (res) {
  //       that.titleNow = res.data.songinfo.title
  //       that.authorNow = res.data.songinfo.author
  //       that.pic = res.data.songinfo.pic_small
  //       that.playingUrl = res.data.bitrate.file_link
  //     }
  //   }),
  //   setTimeout(() => {
  //     this.audioCtx = wx.createAudioContext('myAudio')
  //   },500)
  // },
  props: ['titleNow','authorNow','isPlay','pic','songidNow']
}
</script>

<style>
audio{
  visibility: hidden;
  width: 0;
  height: 0;
}
.iconfont{
  font-size: 28px;
  margin: 0 8px;
  color: #fff;
}
.icon-play,
.icon-stop{
  font-size: 40px;
}
.foot{
  position: fixed;
  z-index: 5;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 8px;
  background-color: #0e1313;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
}

.cover{
  height: 44px;
  border-radius: 4px;
}
.cover img{
  height: 44px;
  width: 44px;
}
.baseMsg{
  width: 150px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.song{
  font-size: 16px;
  line-height: 25px;
  text-overflow: ellipsis;
  overflow: hidden;
}
.singer{
  color: rgb(116, 112, 112);
  font-size: 13px;
  line-height: 18px;
  text-overflow: ellipsis;
  overflow: hidden;
}
.btns{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>