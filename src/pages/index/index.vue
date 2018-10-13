<template>
  <div class="container">
    <div class="background">
      <img src="@/img/bg_4.png" alt="">
    </div>
    <!-- <scroller ref="loadMore" class="institution-list" :on-refresh="loadTop" :on-infinite="loadBottom"> -->
      <scroller ref="loadMore" class="institution-list">
      <header class="header">
        <div class="logo">
          <i class="iconfont icon-logoRED"></i>
        </div> 
        <div class="strongs">
          <strong>MELODY</strong>
        </div>           
        <div class="header-router">
          <router-link to="/login">
            <div>登录</div>
          </router-link>
        </div>
      </header>
      <!-- 搜索框 -->
      <div class="search">
        <input v-model="message" class="search-box" placeholder="请输入歌手/歌曲名" />
        <button class="search-btn"><i class="iconfont icon-search"></i>搜索</button>
      </div>
      <!-- 轮播图 -->
      <swiper :options="swiperOption" ref="swiper">
        <swiper-slide v-for="(slide, index) in swiperSlides " :key="index">
          <div>
            <img :v-lazy="slide.picture" class="lazy-img-fadein" lazy-progressive="true">
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>

      <!-- 导航栏 -->
      <div class="nav_1">
        <ul>
          <li>
            <router-link class="nav_11" to="/ranking">
              <i class="iconfont icon-ranking"></i>
              <div>排行榜</div>
            </router-link>
          </li>
          <li>
            <router-link class="nav_11" to="/allList">
              <i class="iconfont icon-logo"></i>
              <div>歌单</div>
            </router-link>
          </li>
          <li>
            <router-link class="nav_11" to="/allList">
              <i class="iconfont icon-collection"></i>
              <div>我喜欢</div>
            </router-link>
          </li>
          <li>
            <router-link class="nav_11" to="/my">
              <i class="iconfont icon-my"></i>
              <div>个人中心</div>
            </router-link>
          </li>
        </ul>
      </div> 

      <!-- 歌曲推荐   -->
      <div class="recommend">
        <div class="rec_block">
          <div class="blank1"></div>
          <div class="rec_title">推荐歌曲</div>           
          <div class="rec_more">
            <router-link class="gray" to="/allList">
              <div>更多</div>  
            </router-link>
          </div>          
        </div>
        <div class="detail_2">
          <div class="detail_21" v-for="(item,index) in songlist" :key="index" v-show="index < 3">
            <img :v-lazy="item.pic"  @click="_songPlay(item.songid,item.title,item.author)" alt=""/>
            <p class="text_14"><nobr>{{ item.title }}</nobr></p>
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
            <div class="song"><nobr>{{songnameMsg}}</nobr></div>
            <div class="singer"><nobr>{{singerMsg}}</nobr></div>
          </div>
        </router-link>
        <div class="btns">
          <i class="iconfont icon-pre"></i>
          <i class="iconfont icon-stop"></i>
          <i class="iconfont icon-next"></i>
        </div>
      </footer> 
    </scroller>
  </div>
</template>

<script>
import { getHot } from '@/api/rank'

export default {
  name: 'home',
  data: function () {
    return {
      message: '',
      songMsg: '',
      swiperOption: {
        autoplay: {
          delay: 3000
        },
        setWrapperSize: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        mousewheelControl: true,
        observeParents: true
      },
      swiperSlides: [
        {
          date: '2017-11-04',
          sequence: 1,
          bannerType: 1,
          linkUrl: 'http://',
          keyId: 10,
          article: null,
          picture:
            'http://p3gbjsikb.bkt.clouddn.com/img/bannersbanner1.jpg'
        },
        {
          date: '2017-11-07',
          sequence: 2,
          bannerType: 1,
          linkUrl: 'http://',
          keyId: 15,
          article: null,
          picture:
            'http://p3gbjsikb.bkt.clouddn.com/img/bannersbanner3.jpg'
        },
        {
          date: '2017-11-08',
          sequence: 3,
          bannerType: 1,
          linkUrl: 'http://',
          keyId: 19,
          article: null,
          picture:
            'http://p3gbjsikb.bkt.clouddn.com/img/bannersbanner2.jpg'
        },
        {
          date: '2017-11-08',
          sequence: 4,
          bannerType: 1,
          linkUrl: 'http://',
          keyId: 25,
          article: null,
          picture:
            'http://p3gbjsikb.bkt.clouddn.com/img/bannersbanner4.jpg'
        }
      ],
      refreshLoading: false,
      bannerType: 1,
      street: '',
      isOn: false,
      songnameMsg: '病变', // 数组中获取
      singerMsg: '鞠文娴', // 数组中获取
      songlist: []
    }
  },
  methods: {
    _getHot () {
      getHot().then((res) => {
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
    }
  },
  created () {
    this._getHot()
  }
}
</script>

<style scoped>
@import "../../../font/iconfont.css";
</style>