<script>
export default {
  created () {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    console.log('app created and cache logs by setStorageSync')
  }
}
</script>

<style>
@font-face {
  font-family: 'iconfont';  /* project id 558427 */
  src: url('//at.alicdn.com/t/font_558427_ygu2dlglcx6crf6r.eot');
  src: url('//at.alicdn.com/t/font_558427_ygu2dlglcx6crf6r.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_558427_ygu2dlglcx6crf6r.woff') format('woff'),
  url('//at.alicdn.com/t/font_558427_ygu2dlglcx6crf6r.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_558427_ygu2dlglcx6crf6r.svg#iconfont') format('svg');
}

.iconfont {
  font-family:"iconfont" !important;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}

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
</style>
