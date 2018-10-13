global.webpackJsonp([7],{

/***/ 120:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container-rank"
  }, [_c('div', {
    staticClass: "covers"
  }, [_c('img', {
    attrs: {
      "src": _vm.songlist[0].picBig,
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "all-list"
  }, _vm._l((_vm.songlist), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "all-1"
    }, [_c('div', {
      staticClass: "numbers"
    }, [_vm._v("\n        " + _vm._s(index + 1) + "\n      ")]), _vm._v(" "), _c('div', {
      staticClass: "all-12",
      attrs: {
        "eventid": '0-' + index
      },
      on: {
        "click": function($event) {
          _vm._songPlay(item.songId)
        }
      }
    }, [_c('div', {
      staticClass: "text-15"
    }, [_c('nobr', {
      attrs: {
        "mpcomid": '0-' + index
      }
    }, [_vm._v(_vm._s(item.title))])], 1), _vm._v(" "), _c('div', {
      staticClass: "text-13"
    }, [_c('nobr', {
      attrs: {
        "mpcomid": '1-' + index
      }
    }, [_vm._v(_vm._s(item.author))])], 1)])])
  })), _vm._v(" "), _c('div', {
    staticClass: "blank"
  }), _vm._v(" "), _c('foot', {
    attrs: {
      "isPlay": _vm.isPlay,
      "titleNow": _vm.titleNow,
      "authorNow": _vm.authorNow,
      "pic": _vm.pic,
      "songidNow": _vm.songidNow,
      "mpcomid": '2'
    }
  })], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-01e553c6", esExports)
  }
}

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_01e553c6_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(136);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(120)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-01e553c6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_01e553c6_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\new\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-01e553c6", Component.options)
  } else {
    hotAPI.reload("data-v-01e553c6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(51);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    navigationBarTitleText: '新歌榜'
  }
});

/***/ }),

/***/ 80:
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




/* harmony default export */ __webpack_exports__["a"] = ({
  name: "popular",
  data: function data() {
    return {
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
  components: {
    foot: __WEBPACK_IMPORTED_MODULE_1__components_footer__["a" /* default */]
  },
  methods: {
    _getRank: function _getRank(type, num) {
      var _this = this;

      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_all__["c" /* getRank */])(type, num).then(function (res) {
        if (res.code === 1) {
          _this.songlist = res.data;
        }
      });
    },
    getPlaying: function getPlaying(songid) {
      var _this2 = this;

      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_all__["b" /* playMusic */])(songid).then(function (res) {
        if (res.code === 1) {
          _this2.playingUrl = res.data.data.fileLink;
          _this2.titleNow = res.data.data.title;
          _this2.authorNow = res.data.data.author;
          _this2.pic = res.data.data.picBig;
        }
      });
    },
    _songPlay: function _songPlay(songid) {
      var _this3 = this;

      this.isPlay = true;
      this.GLOBAL.isPlay = true;
      this.songidNow = songid;
      this.getPlaying(songid);
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
  // },
  onShow: function onShow() {
    this.isPlay = this.GLOBAL.isPlay;
    this.songidNow = this.GLOBAL.songidNow;
    this.titleNow = this.GLOBAL.titleNow;
    this.authorNow = this.GLOBAL.authorNow;
    this.pic = this.GLOBAL.pic;
  },
  onLoad: function onLoad(options) {
    this.isPlay = this.GLOBAL.isPlay;
    this.songidNow = options.songid;
    this.titleNow = options.title;
    this.authorNow = options.author;
    this.pic = options.pic;
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
  created: function created() {
    this._getRank(1, 20);
  }
});

/***/ })

},[64]);
//# sourceMappingURL=main.js.map