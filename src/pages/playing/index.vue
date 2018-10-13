<template>
	<div class="container-play">
		<header class="all-header">
	  	<router-link class="back" to="/">
			<i class="iconfont icon-back"></i>
    	</router-link>
        <div class="baseMsg1">
          <div class="song"><nobr>{{this.$route.params.title}}</nobr></div>
          <div class="singer"><nobr>{{this.$route.params.author}}</nobr></div>
        </div>
      <div class="collet">
        <i class="iconfont icon-collect"></i>
      </div>		
		</header>
    <div class="blank-7"></div>
    <!-- 歌词内容 -->
    <audio id="audio_player" src=""  loop="loop" autoplay="autoplay"></audio>
    <div class="content-playing">
      {{lrc}}
    </div>
    <!-- 底部播放栏 -->
    <div class="blank-6"></div>
    <div class="footer1">
      <i class="iconfont icon-listLoop" ></i>
      <div class="middle">            
        <i class="iconfont icon-pre"></i>       
        <i @click="changePlaying()" :class="playing ? 'iconfont icon-stop' : 'iconfont icon-play'"></i>        
        <i class="iconfont icon-next"></i>
      </div> 
      <i class="iconfont icon-list"></i>            
    </div>
	</div>
</template>

<script type="text/javascript">
import { getLrc } from '@/api/rank'

export default {
  name: 'play',
  data: function () {
    return {
      street: '',
      isOn: false,
      songnameMsg: '病变',
      singerMsg: '鞠文娴',
      isCollected: false,
      lrc: '暂无歌词',
      songid: this.$route.params.songid,
      playing: false
    }
  },
  methods: {
    _getLrc (songid) {
      getLrc(songid).then((res) => {
        if (res.code === 1) {
          this.lrc = res.data.a[0].lyric
          // lrc1= res.data.a[0].lyric;
          // this.lrc = this.lrc1.replace(new RegExp("\u0020","gm"),"<br/>");
        }
      })
    }
    /* palyControl () {
      var lrc = new Lyrics(LRC_text)
      document.getElementById('audio_player').addEventListener('timeupdate', function () {
      // 所有歌词取消高亮
      var lyric_selected = lyrics_container.querySelectorAll('[selected]');
      for (var i = 0; i < lyric_selected.length; i++) {
        lyric_selected[i].removeAttribute('selected');
      }
      // 获取要高亮的歌词
      var lyric_selected = lrc.select(this.currentTime);
      // 高亮歌词（如果有）
      if (lyric_selected != undefined && lyric_selected >= 0) {
        lyric_selected.setAttribute('selected', 'selected');
        }
      });
    } */
  },
  created () {
    this._getLrc(this.$route.params.songid)
  }
}
</script>

<style type="text/css">
@import "../../../font/iconfont.css";
</style>
