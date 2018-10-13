global.webpackJsonp([3],{

/***/ 128:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container-popular"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "blank"
  }), _vm._v(" "), _c('foot', {
    attrs: {
      "isPlay": _vm.isPlay,
      "titleNow": _vm.titleNow,
      "authorNow": _vm.authorNow,
      "pic": _vm.pic,
      "songidNow": _vm.songidNow,
      "mpcomid": '0'
    }
  })], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "covers"
  }, [_c('img', {
    attrs: {
      "src": "http://p6jceeddp.bkt.clouddn.com/cover.jpg",
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
     require("vue-hot-reload-api").rerender("data-v-75492706", esExports)
  }
}

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_75492706_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(141);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(128)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-75492706"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_75492706_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\collected\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-75492706", Component.options)
  } else {
    hotAPI.reload("data-v-75492706", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getHot */
/* unused harmony export getBill */
/* unused harmony export getEuramerican */
/* unused harmony export getOnline */
/* unused harmony export getPopular */
/* unused harmony export getRecommand */
/* unused harmony export getLrc */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_fetch__ = __webpack_require__(25);
/*import fetch from '@/utils/fetch'

export function getHot () {
  return fetch({
    url: '/hot',
    method: 'get'
  })
}

export function getBill () {
  return fetch({
    url: '/bill',
    method: 'get'
  })
}

export function getEuramerican () {
  return fetch({
    url: '/euramerican',
    method: 'get'
  })
}

export function getOnline () {
  return fetch({
    url: '/online',
    method: 'get'
  })
}

export function getPopular () {
  return fetch({
    url: '/popular',
    method: 'get'
  })
}

export function getRecommand () {
  return fetch({
    url: '/recommand',
    method: 'get'
  })
}

export function getLrc (songid) {
  return fetch({
    url: '/lyric',
    method: 'get',
    params: {
      songid
    }
  })
}
*/



var BASE_API = 'http://59.110.216.168:8080/melody';

function getHot() {
  var url = BASE_API + '/hot';
  var method = 'GET';
  var params = {};
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_fetch__["a" /* default */])(url, method, params);
}

function getBill() {
  var url = BASE_API + '/bill';
  var method = 'GET';
  var params = {};
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_fetch__["a" /* default */])(url, method, params);
}

function getEuramerican() {
  var url = BASE_API + '/euramerican';
  var method = 'GET';
  var params = {};
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_fetch__["a" /* default */])(url, method, params);
}

function getOnline() {
  var url = BASE_API + '/online';
  var method = 'GET';
  var params = {};
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_fetch__["a" /* default */])(url, method, params);
}

function getPopular() {
  var url = BASE_API + '/popular';
  var method = 'GET';
  var params = {};
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_fetch__["a" /* default */])(url, method, params);
}

function getRecommand() {
  var url = BASE_API + '/recommand';
  var method = 'GET';
  var params = {};
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_fetch__["a" /* default */])(url, method, params);
}

function getLrc(songid) {
  var url = BASE_API + '/lyric';
  var method = 'GET';
  var params = {
    songid: songid
  };
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_fetch__["a" /* default */])(url, method, params);
}

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(45);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    navigationBarTitleText: '收藏'
  }
});

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_rank__ = __webpack_require__(56);
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




/* harmony default export */ __webpack_exports__["a"] = ({
  name: "collected",
  data: function data() {
    return {
      bannerType: 1,
      street: "",
      songidNow: '',
      titleNow: '',
      authorNow: '',
      pic: '',
      isPlay: false
    };
  },
  components: {
    foot: __WEBPACK_IMPORTED_MODULE_1__components_footer__["a" /* default */]
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
  }
});

/***/ })

},[58]);
//# sourceMappingURL=main.js.map