global.webpackJsonp([5],{

/***/ 129:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container-popular"
  }, [_c('div', {
    staticClass: "blank"
  }), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "content-playing"
  }, [_c('div', {
    staticClass: "topmsg"
  }, [_c('div', {
    staticClass: "column"
  }, [_c('div', {
    staticClass: "title"
  }, [_c('div', {
    staticClass: "name"
  }, [_vm._v(_vm._s(_vm.titleNow))]), _vm._v(" "), _c('div', {
    staticClass: "author"
  }, [_vm._v(_vm._s(_vm.authorNow))])]), _vm._v(" "), _c('div', {
    staticClass: "collet",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.isCollet = !_vm.isCollet
      }
    }
  }, [(_vm.isCollet) ? _c('i', {
    staticClass: "iconfont icon-collected"
  }, [_vm._v("")]) : _c('i', {
    staticClass: "iconfont icon-collect"
  }, [_vm._v("")])], 1)])]), _vm._v(" "), _c('audio', {
    attrs: {
      "name": _vm.title,
      "author": _vm.author,
      "src": _vm.playingUrl,
      "controls": "true",
      "id": "myAudio"
    }
  }), _vm._v(" "), (_vm.isShowLrc) ? _c('div', {
    staticClass: "lyric",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": function($event) {
        _vm.isShowLrc = !_vm.isShowLrc
      }
    }
  }, _vm._l((_vm.lrc), function(lrc, l) {
    return _c('p', {
      key: l
    }, [_vm._v(_vm._s(lrc))])
  })) : _c('div', {
    staticClass: "disc",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.isShowLrc = !_vm.isShowLrc
      }
    }
  }, [_c('img', {
    staticClass: "song-img",
    attrs: {
      "src": _vm.pic,
      "alt": ""
    }
  })])], 1), _vm._v(" "), _c('div', {
    staticClass: "blank-6"
  }), _vm._v(" "), _c('div', {
    staticClass: "footer"
  }, [_c('div', {
    staticClass: "time"
  }, [_c('div', {
    staticClass: "n-time"
  }, [_vm._v(_vm._s(_vm.nowTime))]), _vm._v(" "), _c('div', {
    staticClass: "t-time"
  }, [_vm._v(_vm._s(_vm.totalTime))])]), _vm._v(" "), _c('div', {
    staticClass: "footer1"
  }, [_c('i', {
    staticClass: "iconfont icon-listLoop"
  }, [_vm._v("")]), _vm._v(" "), _c('div', {
    staticClass: "middle"
  }, [_c('i', {
    staticClass: "iconfont icon-pre"
  }, [_vm._v("")]), _vm._v(" "), _c('div', {
    staticClass: "play",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": function($event) {
        _vm.play()
      }
    }
  }, [(_vm.isPlay) ? _c('i', {
    staticClass: "iconfont icon-play"
  }, [_vm._v("")]) : _c('i', {
    staticClass: "iconfont icon-stop"
  }, [_vm._v("")])], 1), _vm._v(" "), _c('i', {
    staticClass: "iconfont icon-next"
  }, [_vm._v("")])], 1), _vm._v(" "), _c('i', {
    staticClass: "iconfont icon-list"
  }, [_vm._v("")])], 1)])])
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
     require("vue-hot-reload-api").rerender("data-v-78baa22b", esExports)
  }
}

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_78baa22b_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(142);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(129)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-78baa22b"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_78baa22b_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\playing\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-78baa22b", Component.options)
  } else {
    hotAPI.reload("data-v-78baa22b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(53);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    navigationBarTitleText: '播放'
  }
});

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_all__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_footer__ = __webpack_require__(4);

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




/* harmony default export */ __webpack_exports__["a"] = ({
  name: "play",
  data: function data() {
    return {
      isPlay: true,
      isCollet: false,
      isShowLrc: false,
      street: '',
      isOn: false,
      isCollected: false,
      currentLyrics: [{ time: 0, text: '此歌曲暂无歌词~' }],
      lrc: ['此歌曲暂无歌词'],
      songidNow: '',
      playing: false,
      playingUrl: '',
      url: '',
      titleNow: '',
      authorNow: '',
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
    };
  },
  components: {
    foot: __WEBPACK_IMPORTED_MODULE_2__components_footer__["a" /* default */]
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
    _getLrc: function _getLrc(songid) {
      var _this = this;

      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_all__["d" /* getLrc */])(songid).then(function (res) {
        if (res.code == 1) {
          var data = res.data;
          // data = data.replace(/ /,'\n')
          _this.lrc = data.split('\n');
          //this.lrc = this.lrc1.replace(new RegExp("\u0020","gm"),"<br/>");
        }
      });
    },
    play: function play() {
      if (this.isPlay) {
        wx.pauseBackgroundAudio();
        this.isPlay = false;
      } else {
        wx.playBackgroundAudio();
        this.isPlay = true;
      }
    }
  },
  // onShow: function() {
  //   this.isPlay = this.GLOBAL.isPlay
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
    this.isPlay = this.GLOBAL.isPlay;
    this.songidNow = options.songid;
    this.titleNow = options.title;
    this.authorNow = options.author;
    this.pic = options.pic;
    this._getLrc(this.songidNow);
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
    lyrics: function lyrics() {
      var lyrics = '';
      this.lyricArr = [];
      if (this.lyric) {
        var arr = this.lyric.split(' ');
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default()(arr), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;

            if (item) {
              var arr2 = item.split(']');
              // console.log(arr2[0])
              // console.log(arr2[0].substring(1,3)*60)
              // console.log(arr2[0].substring(4))
              this.lyricArr.push(arr2[0].substring(1, 3) * 60 + arr2[0].substring(4) * 1);
              // console.log(this.lyricArr)
              if (arr2) {
                lyrics += '<p class=\'lyrichook\' style=\'margin: 10px 0\'>' + arr2[1] + '</p>';
              }
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      } else {
        lyrics = '暂无歌词~';
      }
      return lyrics;
    },
    totalTime: function totalTime() {
      var m = void 0,
          s = void 0;
      m = Math.floor(this.size / 60);
      m = m.toString().length == 1 ? '0' + m : m;
      s = Math.floor(this.size - 60 * m);
      s = s.toString().length == 1 ? '0' + s : s;
      return m + ':' + s;
    },
    nowTime: function nowTime() {
      var m = void 0,
          s = void 0;
      m = Math.floor(this.now / 60);
      m = m.toString().length == 1 ? '0' + m : m;
      s = Math.floor(this.now - 60 * m);
      s = s.toString().length == 1 ? '0' + s : s;
      return m + ':' + s;
    }
  },
  watch: {
    size: function size() {
      this.$refs.lyric.style.transform = 'translateY(0px)';
    }
  }
});

/***/ })

},[66]);
//# sourceMappingURL=main.js.map