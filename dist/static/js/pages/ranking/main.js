global.webpackJsonp([4],{

/***/ 131:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container-ranking"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "ranking-list"
  }, [_c('navigator', {
    attrs: {
      "url": '../hot/main?title=' + _vm.titleNow + '&author=' + _vm.authorNow + '&songid=' + _vm.songidNow + '&pic=' + _vm.pic,
      "hover-class": "none"
    }
  }, [_c('div', {
    staticClass: "ranking"
  }, [_c('div', {
    staticClass: "ranking-img"
  }, [_c('img', {
    attrs: {
      "src": _vm.songlist2[0].picBig,
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "ranking-r"
  }, _vm._l((_vm.songlist2), function(item2, index2) {
    return _c('div', {
      key: index2,
      staticClass: "ranking-12"
    }, [_c('div', {
      staticClass: "text-12"
    }, [_c('nobr', {
      attrs: {
        "mpcomid": '0-' + index2
      }
    }, [_vm._v(_vm._s(index2 + 1) + "." + _vm._s(item2.title) + " - " + _vm._s(item2.author))])], 1)])
  }))])]), _vm._v(" "), _c('navigator', {
    attrs: {
      "url": '../new/main?title=' + _vm.titleNow + '&author=' + _vm.authorNow + '&songid=' + _vm.songidNow + '&pic=' + _vm.pic,
      "hover-class": "none"
    }
  }, [_c('div', {
    staticClass: "ranking"
  }, [_c('div', {
    staticClass: "ranking-img"
  }, [_c('img', {
    attrs: {
      "src": _vm.songlist3[0].picBig,
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "ranking-r"
  }, _vm._l((_vm.songlist3), function(item3, index3) {
    return _c('div', {
      key: index3,
      staticClass: "ranking-12"
    }, [_c('div', {
      staticClass: "text-12"
    }, [_c('nobr', {
      attrs: {
        "mpcomid": '1-' + index3
      }
    }, [_vm._v(_vm._s(index3 + 1) + "." + _vm._s(item3.title) + " - " + _vm._s(item3.author))])], 1)])
  }))])]), _vm._v(" "), _c('navigator', {
    attrs: {
      "url": '../online/main?title=' + _vm.titleNow + '&author=' + _vm.authorNow + '&songid=' + _vm.songidNow + '&pic=' + _vm.pic,
      "hover-class": "none"
    }
  }, [_c('div', {
    staticClass: "ranking"
  }, [_c('div', {
    staticClass: "ranking-img"
  }, [_c('img', {
    attrs: {
      "src": _vm.songlist4[0].picBig,
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "ranking-r"
  }, _vm._l((_vm.songlist4), function(item4, index4) {
    return _c('div', {
      key: index4,
      staticClass: "ranking-12"
    }, [_c('div', {
      staticClass: "text-12"
    }, [_c('nobr', {
      attrs: {
        "mpcomid": '2-' + index4
      }
    }, [_vm._v(_vm._s(index4 + 1) + "." + _vm._s(item4.title) + " - " + _vm._s(item4.author))])], 1)])
  }))])]), _vm._v(" "), _c('navigator', {
    attrs: {
      "url": '../euramerican/main?title=' + _vm.titleNow + '&author=' + _vm.authorNow + '&songid=' + _vm.songidNow + '&pic=' + _vm.pic,
      "hover-class": "none"
    }
  }, [_c('div', {
    staticClass: "ranking"
  }, [_c('div', {
    staticClass: "ranking-img"
  }, [_c('img', {
    attrs: {
      "src": _vm.songlist5[0].picBig,
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "ranking-r"
  }, _vm._l((_vm.songlist5), function(item5, index5) {
    return _c('div', {
      key: index5,
      staticClass: "ranking-12"
    }, [_c('div', {
      staticClass: "text-12"
    }, [_c('nobr', {
      attrs: {
        "mpcomid": '3-' + index5
      }
    }, [_vm._v(_vm._s(index5 + 1) + "." + _vm._s(item5.title) + " - " + _vm._s(item5.author))])], 1)])
  }))])]), _vm._v(" "), _c('navigator', {
    attrs: {
      "url": '../jazz/main?title=' + _vm.titleNow + '&author=' + _vm.authorNow + '&songid=' + _vm.songidNow + '&pic=' + _vm.pic,
      "hover-class": "none"
    }
  }, [_c('div', {
    staticClass: "ranking"
  }, [_c('div', {
    staticClass: "ranking-img"
  }, [_c('img', {
    attrs: {
      "src": _vm.songlist1[0].picBig,
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "ranking-r"
  }, _vm._l((_vm.songlist1), function(item1, index1) {
    return _c('div', {
      key: index1,
      staticClass: "ranking-12"
    }, [_c('div', {
      staticClass: "text-12"
    }, [_c('nobr', {
      attrs: {
        "mpcomid": '4-' + index1
      }
    }, [_vm._v(_vm._s(index1 + 1) + "." + _vm._s(item1.title) + " - " + _vm._s(item1.author))])], 1)])
  }))])])], 1), _vm._v(" "), _c('foot', {
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
     require("vue-hot-reload-api").rerender("data-v-c265979a", esExports)
  }
}

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_c265979a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(144);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(131)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-c265979a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_c265979a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\ranking\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c265979a", Component.options)
  } else {
    hotAPI.reload("data-v-c265979a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(54);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    navigationBarTitleText: '排行榜'
  }
});

/***/ }),

/***/ 83:
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
  name: "ranking",
  data: function data() {
    return {
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
  components: {
    foot: __WEBPACK_IMPORTED_MODULE_1__components_footer__["a" /* default */]
  },
  methods: {
    _getJazz: function _getJazz() {
      var _this = this;

      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_all__["c" /* getRank */])(12, 3).then(function (res) {
        if (res.code === 1) {
          _this.songlist1 = res.data;
        }
      });
    },
    _getHot: function _getHot() {
      var _this2 = this;

      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_all__["c" /* getRank */])(2, 3).then(function (res) {
        if (res.code === 1) {
          _this2.songlist2 = res.data;
        }
      });
    },
    _getBill: function _getBill() {
      var _this3 = this;

      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_all__["c" /* getRank */])(1, 3).then(function (res) {
        if (res.code === 1) {
          _this3.songlist3 = res.data;
        }
      });
    },
    _getOnline: function _getOnline() {
      var _this4 = this;

      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_all__["c" /* getRank */])(25, 3).then(function (res) {
        if (res.code === 1) {
          _this4.songlist4 = res.data;
        }
      });
    },
    _getEuramerican: function _getEuramerican() {
      var _this5 = this;

      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_all__["c" /* getRank */])(21, 3).then(function (res) {
        if (res.code === 1) {
          _this5.songlist5 = res.data;
        }
      });
    }
    // changePlaying(){
    //   this.playing = !this.playing
    // }

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
    this._getJazz();
    this._getHot();
    this._getBill();
    this._getOnline();
    this._getEuramerican();
  }
});

/***/ })

},[67]);
//# sourceMappingURL=main.js.map