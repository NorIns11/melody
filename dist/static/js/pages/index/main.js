global.webpackJsonp([9],{

/***/ 122:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "index-container"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "search"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.message),
      expression: "message"
    }],
    staticClass: "search-box",
    attrs: {
      "placeholder-style": "color:#696969; font-size:15px;",
      "placeholder": "请输入歌手/歌曲名",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.message)
    },
    on: {
      "click": function($event) {
        _vm.isSearch = !_vm.isSearch
      },
      "confirm": _vm.search,
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.message = $event.target.value
      }
    }
  }), _vm._v(" "), _c('i', {
    staticClass: "iconfont icon-search",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.search
    }
  }, [_vm._v("")])], 1), _vm._v(" "), _c('div', {
    staticClass: "banner-column"
  }, [_c('swiper', {
    attrs: {
      "autoplay": "true",
      "interval": "2000",
      "indicator-dots": "true",
      "circular": "true"
    }
  }, [_c('swiper-item', {
    attrs: {
      "mpcomid": '0'
    }
  }, [_c('img', {
    attrs: {
      "src": "http://p1.music.126.net/2d_gTxI1zsWa0wmNz3DSNw==/109951163213468979.jpg"
    }
  })]), _vm._v(" "), _c('swiper-item', {
    attrs: {
      "mpcomid": '1'
    }
  }, [_c('img', {
    attrs: {
      "src": "http://business.cdn.qianqian.com/qianqian/pic/bos_client_15223825820c615a00c1aa0f8dca798a58089b4df6.jpg"
    }
  })]), _vm._v(" "), _c('swiper-item', {
    attrs: {
      "mpcomid": '2'
    }
  }, [_c('img', {
    attrs: {
      "src": "http://p1.music.126.net/oH2YsSkCuKzd1tOkwU0QlQ==/109951163213906153.jpg"
    }
  })]), _vm._v(" "), _c('swiper-item', {
    attrs: {
      "mpcomid": '3'
    }
  }, [_c('img', {
    attrs: {
      "src": "http://business.cdn.qianqian.com/qianqian/pic/bos_client_1522233282d9f564ce6ecf73db72491080860f6d0e.jpg"
    }
  })])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "nav_1"
  }, [_c('navigator', {
    staticClass: "nav_11",
    attrs: {
      "url": '../ranking/main?title=' + _vm.titleNow + '&author=' + _vm.authorNow + '&songid=' + _vm.songidNow + '&pic=' + _vm.pic,
      "hover-class": "none"
    }
  }, [_c('i', {
    staticClass: "iconfont icon-ranking"
  }, [_vm._v("")]), _vm._v(" "), _c('div', [_vm._v("排行榜")])], 1), _vm._v(" "), _c('navigator', {
    staticClass: "nav_11",
    attrs: {
      "url": '../new/main?title=' + _vm.titleNow + '&author=' + _vm.authorNow + '&songid=' + _vm.songidNow + '&pic=' + _vm.pic,
      "hover-class": "none"
    }
  }, [_c('i', {
    staticClass: "iconfont icon-logo"
  }, [_vm._v("")]), _vm._v(" "), _c('div', [_vm._v("推荐歌单")])], 1), _vm._v(" "), _c('navigator', {
    staticClass: "nav_11",
    attrs: {
      "url": '../collected/main?title=' + _vm.titleNow + '&author=' + _vm.authorNow + '&songid=' + _vm.songidNow + '&pic=' + _vm.pic,
      "hover-class": "none"
    }
  }, [_c('i', {
    staticClass: "iconfont icon-collection"
  }, [_vm._v("")]), _vm._v(" "), _c('div', [_vm._v("收藏")])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "recommend"
  }, [_c('div', {
    staticClass: "rec_block"
  }, [_c('div', {
    staticClass: "blank1"
  }), _vm._v(" "), _c('div', {
    staticClass: "rec_title"
  }, [_vm._v("推荐歌曲")]), _vm._v(" "), _c('div', {
    staticClass: "rec_more"
  }, [_c('navigator', {
    attrs: {
      "url": "../hot/main",
      "hover-class": "none"
    }
  }, [_c('div', [_vm._v("更多")])])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "detail_2"
  }, _vm._l((_vm.songlist), function(item, index) {
    return _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (index < 3),
        expression: "index < 3"
      }],
      key: index,
      staticClass: "detail_21"
    }, [_c('div', [_c('img', {
      attrs: {
        "src": item.picBig,
        "alt": "",
        "eventid": '2-' + index
      },
      on: {
        "click": function($event) {
          _vm._songPlay(item)
        }
      }
    }), _vm._v(" "), _c('p', {
      staticClass: "text_14"
    }, [_c('nobr', {
      attrs: {
        "mpcomid": '4-' + index
      }
    }, [_vm._v(_vm._s(item.title))])], 1)], 1)])
  }))]), _vm._v(" "), _c('foot', {
    attrs: {
      "isPlay": _vm.isPlay,
      "titleNow": _vm.titleNow,
      "authorNow": _vm.authorNow,
      "pic": _vm.pic,
      "songidNow": _vm.songidNow,
      "mpcomid": '5'
    }
  })], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "background"
  }, [_c('img', {
    attrs: {
      "src": "http://p6jceeddp.bkt.clouddn.com/star1.png",
      "alt": ""
    }
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-207da362", esExports)
  }
}

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_207da362_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(138);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(122)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-207da362"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_207da362_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-207da362", Component.options)
  } else {
    hotAPI.reload("data-v-207da362", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(48);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    navigationBarTitleText: 'Melody'
  }
});

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_all__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_footer__ = __webpack_require__(4);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// import { getHot } from '@/api/rank'



/* harmony default export */ __webpack_exports__["a"] = ({
  name: "home",
  data: function data() {
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
  components: {
    foot: __WEBPACK_IMPORTED_MODULE_1__components_footer__["a" /* default */]
  },
  onShareAppMessage: function onShareAppMessage(res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target);
    }
    return {
      title: '自定义转发标题',
      path: '/page/user?id=123',
      success: function success(res) {
        console.log("转发成功");
      },
      fail: function fail(res) {
        console.log("转发失败");
      }
    };
  },
  methods: {
    search: function search() {
      // let searchMsg = encodeURI(encodeURI(this.message))
      wx.navigateTo({
        url: '../searchResult/main?message=' + this.message
      });
      // searchByKey(searchMsg).then((res) => {
      //   console.log(res)
      // })
    },
    _getRecommend: function _getRecommend() {
      var _this = this;

      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_all__["e" /* getRecommend */])().then(function (res) {
        if (res.code === 1) {
          _this.songlist = res.data;
        }
      });
    },
    getPlaying: function getPlaying() {
      var _this2 = this;

      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_all__["b" /* playMusic */])(this.songidNow).then(function (res) {
        if (res.code === 1) {
          _this2.playingUrl = res.data.data.fileLink;
          _this2.titleNow = res.data.data.title;
          _this2.authorNow = res.data.data.author;
          _this2.pic = res.data.data.picBig;
        }
      });
    },
    _songPlay: function _songPlay(item) {
      var _this3 = this;

      this.isPlay = true;
      this.GLOBAL.isPlay = true;
      this.songidNow = item.songId;
      this.getPlaying();
      setTimeout(function () {
        wx.playBackgroundAudio({
          dataUrl: _this3.playingUrl,
          title: _this3.titleNow,
          coverImgUrl: _this3.pic
        });
      }, 300);
      setTimeout(function () {
        _this3.GLOBAL.songidNow = _this3.songidNow;
        _this3.GLOBAL.titleNow = _this3.titleNow;
        _this3.GLOBAL.authorNow = _this3.authorNow;
        _this3.GLOBAL.pic = _this3.pic;
      }, 350);
    }
  },
  // onShow: function() {
  //   this.isPlay = this.GLOBAL.isPlay
  //   let titleStorage = wx.getStorageSync('titleNow')
  //   console.log (titleStorage)
  // },
  onShow: function onShow() {
    this.isPlay = this.GLOBAL.isPlay;
    this.songidNow = this.GLOBAL.songidNow;
    this.titleNow = this.GLOBAL.titleNow;
    this.authorNow = this.GLOBAL.authorNow;
    this.pic = this.GLOBAL.pic;
  },
  onLoad: function onLoad(options) {
    /**
     * 监听音乐播放
     */
    // this.isPlay = this.GLOBAL.isPlay
    var that = this;
    wx.onBackgroundAudioPlay(function () {
      that.isPlay = true;
      that.GLOBAL.isPlay = true;
    });
    wx.onBackgroundAudioPause(function () {
      that.isPlay = false;
      that.GLOBAL.isPlay = false;
    });
    wx.onBackgroundAudioStop(function () {
      that.isPlay = false;
      that.GLOBAL.isPlay = false;
    });
  },
  created: function created() {
    this._getRecommend();
  }
});

/***/ })

},[61]);
//# sourceMappingURL=main.js.map