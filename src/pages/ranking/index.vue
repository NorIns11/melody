<template>
  <div class="container-ranking">
    <div class="background">
      <img src="http://p6jceeddp.bkt.clouddn.com/star1.png" alt="">
    </div>
    <div class="ranking-list">
      <!-- 热歌榜 -->
      <navigator :url="'../hot/main?title='+titleNow+'&author='+authorNow+'&songid='+songidNow+'&pic='+pic" hover-class="none">
        <div class="ranking">
          <div class="ranking-img">
            <img :src="songlist2[0].picBig" alt="">
          </div>
          <div class="ranking-r">
            <div class="ranking-12" v-for="(item2,index2) in songlist2" :key="index2">
              <div class="text-12"><nobr>{{ index2 +1 }}.{{ item2.title }}&nbsp;-&nbsp;{{ item2.author }}</nobr></div>          
            </div>
          </div>
        </div>
      </navigator>
        <!-- 新歌榜 -->
      <navigator :url="'../new/main?title='+titleNow+'&author='+authorNow+'&songid='+songidNow+'&pic='+pic" hover-class="none">
        <div class="ranking">
          <div class="ranking-img">
              <img :src="songlist3[0].picBig" alt="">
          </div>
          <div class="ranking-r">
            <div class="ranking-12" v-for="(item3,index3) in songlist3" :key="index3">
              <div class="text-12"><nobr>{{ index3 +1 }}.{{ item3.title }}&nbsp;-&nbsp;{{ item3.author }}</nobr></div>          
            </div>
          </div>
        </div>
      </navigator>
      <!-- 网络歌曲榜 -->
      <navigator :url="'../online/main?title='+titleNow+'&author='+authorNow+'&songid='+songidNow+'&pic='+pic" hover-class="none">
        <div class="ranking">
          <div class="ranking-img">
            <img :src="songlist4[0].picBig" alt="">
          </div>
          <div class="ranking-r">
            <div class="ranking-12" v-for="(item4,index4) in songlist4" :key="index4">
              <div class="text-12"><nobr>{{ index4 +1 }}.{{ item4.title }}&nbsp;-&nbsp;{{ item4.author }}</nobr></div>          
            </div>
          </div>
        </div>
      </navigator>
      <!-- 欧美歌曲榜 -->
      <navigator :url="'../euramerican/main?title='+titleNow+'&author='+authorNow+'&songid='+songidNow+'&pic='+pic" hover-class="none">
        <div class="ranking">
          <div class="ranking-img">
            <img :src="songlist5[0].picBig" alt="">
          </div>
          <div class="ranking-r">
            <div class="ranking-12" v-for="(item5,index5) in songlist5" :key="index5">
              <div class="text-12"><nobr>{{ index5 +1 }}.{{ item5.title }}&nbsp;-&nbsp;{{ item5.author }}</nobr></div>        
            </div>
          </div>
        </div>
      </navigator>
      <!-- 爵士榜 -->
      <navigator :url="'../jazz/main?title='+titleNow+'&author='+authorNow+'&songid='+songidNow+'&pic='+pic" hover-class="none">
        <div class="ranking">
          <div class="ranking-img">
            <img :src="songlist1[0].picBig" alt="">
          </div>
          <div class="ranking-r">
            <div class="ranking-12" v-for="(item1,index1) in songlist1" :key="index1">
              <div class="text-12"><nobr>{{ index1 +1 }}.{{ item1.title }}&nbsp;-&nbsp;{{ item1.author }}</nobr></div>          
            </div>
          </div>
        </div>
      </navigator>  
    </div>
    <!-- 这里是footer -->        
    <foot :isPlay="isPlay" :titleNow="titleNow" :authorNow="authorNow" :pic="pic" :songidNow="songidNow"></foot>
    </div>
</template> 

<script>
import { getRank } from '@/api/all'
import foot from '@/components/footer'

export default{
  name:"ranking" ,
  data:function () {
    return{
      bannerType: 1,
      street: "",
      songnameMsg: '病变', //数组中获取
      singerMsg: '鞠文娴', //数组中获取
      songlist1: [],
      songlist2: [],
      songlist3: [],
      songlist4: [],
      songlist5: [],
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
    _getJazz () {
      getRank(12,3).then((res) => {
        if (res.code === 1) {
          this.songlist1= res.data
        }
      })
    },
    _getHot () {
      getRank(2,3).then((res) => {
        if (res.code === 1) {
          this.songlist2 = res.data
        }
      })
    },
    _getBill () {
      getRank(1,3).then((res) => {
        if (res.code === 1) {
          this.songlist3 = res.data
        }
      })
    },
    _getOnline () {
      getRank(25,3).then((res) => {
        if (res.code === 1) {
          this.songlist4 = res.data
        }
      })
    },
    _getEuramerican () {
      getRank(21,3).then((res) => {
        if (res.code === 1) {
          this.songlist5 = res.data
        }
      })
    }
    // changePlaying(){
    //   this.playing = !this.playing
    // }
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
    this._getJazz();
    this._getHot();
    this._getBill();
    this._getOnline();
    this._getEuramerican();
  }  
}
</script>

<style scoped>
.container-ranking{
  width: 100%;
  color: #fff;
  font-family:SimSun;
}
.covers img{
  width: 100%;
  height: 300px;
}
.background{
  position: absolute;
  top: 0;
  z-index: -100;
  width: 100%;
}
.background img{
  width: 100%;
  height: 570px;
}
.ranking-list{
  width: 100%;
  height: auto;
}
.ranking{
  display: flex;
  justify-content: space-between;
  width: 84%;
  margin: 32rpx 8%;
  background: rgb(73, 71, 71);
  opacity: 0.7;
}
.ranking-img{
  height: 90px;
  width: 90px;  
}
.ranking-img img{
  height: 90px;
  width: 90px;
}
.ranking-r{
  width: 68%;
}
.text-12{
  font-size: 16px;
  line-height: 30px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>
