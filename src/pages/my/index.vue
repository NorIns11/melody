<template>
  <div class="container-ranking">
    <!-- 头部 -->
    <header class="all-header">
      <router-link class="back" to="/">
				<i class="iconfont icon-back"></i>
    	</router-link>
      <div class="text-title">个人中心</div>
      <div class="blank-right">&nbsp;</div> 
    </header>
    <div class="blank-7"></div>
    <div class="userinfo">
       用户名：{{usernameMsg}}
       <!-- <input type="text" name="username" id="username"><button>修改</button> -->
       <br>
       密码：{{passwordMsg}}
       <!-- <input type="text" name="passwordMsg" id="passwordMsg"><button>修改</button> -->
       <br><br>
       <div class="text-10" style="text-align:center;">您还未登录哦~</div>
    </div>
    <!-- 这里是footer -->        
    <!-- <div class="blank"></div> -->
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
          <i @click="changePlaying()" :class="playing ? 'iconfont icon-stop' : 'iconfont icon-play'"></i>
          <i class="iconfont icon-next"></i>
        </div>
    </footer> 
    </div>
</template> 

<script>
export default{ // 导出东西多的需要用大括号区分，否则不需要
  name: 'my',
  data: function () {
    return {
      bannerType: 1,
      street: '',
      songnameMsg: '病变', // 数组中获取
      singerMsg: '鞠文娴', // 数组中获取
      rankingSong: [
        '体面',
        '病变',
        '起风了'
      ],
      usernameMsg: '',
      passwordMsg: '',
      playing: true
    }
  },
  methods: {
    changePlaying () {
      this.playing = !this.playing
    }
  }
}
</script>

<style scoped>
@import "../../../font/iconfont.css";
</style>
