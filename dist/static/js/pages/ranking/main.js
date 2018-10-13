global.webpackJsonp([4],{

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(94);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    navigationBarTitleText: '排行榜'
  }
});

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_rank__ = __webpack_require__(8);
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
  name: 'ranking',
  data: function data() {
    return {
      bannerType: 1,
      street: '',
      songnameMsg: '病变', // 数组中获取
      singerMsg: '鞠文娴', // 数组中获取
      songlist1: [],
      songlist2: [],
      songlist3: [],
      songlist4: [],
      songlist5: []
    };
  },
  methods: {
    _getPopular: function _getPopular() {
      var _this = this;

      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_rank__["a" /* getPopular */])().then(function (res) {
        if (res.code === 1) {
          _this.songlist1 = res.data.a;
        }
      });
    },
    _getHot: function _getHot() {
      var _this2 = this;

      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_rank__["b" /* getHot */])().then(function (res) {
        if (res.code === 1) {
          _this2.songlist2 = res.data.a;
        }
      });
    },
    _getBill: function _getBill() {
      var _this3 = this;

      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_rank__["c" /* getBill */])().then(function (res) {
        if (res.code === 1) {
          _this3.songlist3 = res.data.a;
        }
      });
    },
    _getOnline: function _getOnline() {
      var _this4 = this;

      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_rank__["d" /* getOnline */])().then(function (res) {
        if (res.code === 1) {
          _this4.songlist4 = res.data.a;
        }
      });
    },
    _getEuramerican: function _getEuramerican() {
      var _this5 = this;

      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_rank__["e" /* getEuramerican */])().then(function (res) {
        if (res.code === 1) {
          _this5.songlist5 = res.data.a;
        }
      });
    }
    // changePlaying(){
    //   this.playing = !this.playing
    // }

  },
  created: function created() {
    this._getPopular();
    this._getHot();
    this._getBill();
    this._getOnline();
    this._getEuramerican();
  }
});

/***/ }),

/***/ 201:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container-ranking"
  }, [_c('header', {
    staticClass: "all-header"
  }, [_c('router-link', {
    staticClass: "back",
    attrs: {
      "to": "/",
      "mpcomid": '0'
    }
  }, [_c('i', {
    staticClass: "iconfont icon-back"
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "text-title"
  }, [_vm._v("排行榜")]), _vm._v(" "), _c('div', {
    staticClass: "blank-right"
  }, [_vm._v(" ")])], 1), _vm._v(" "), _c('div', {
    staticClass: "blank-7"
  }), _vm._v(" "), _c('div', {
    staticClass: "ranking-list"
  }, [_c('router-link', {
    staticClass: "back",
    attrs: {
      "to": "/popular",
      "mpcomid": '2'
    }
  }, [_c('div', {
    staticClass: "ranking-1"
  }, [_c('div', {
    staticClass: "ranking-11"
  }, [_c('img', {
    attrs: {
      "src": "http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_4_300_212984792.jpg",
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "ranking-r"
  }, _vm._l((_vm.songlist1), function(item1, index1) {
    return _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (index1 < 3),
        expression: "index1 < 3"
      }],
      key: index1,
      staticClass: "ranking-12"
    }, [_c('div', {
      staticClass: "text-12"
    }, [_c('nobr', {
      attrs: {
        "mpcomid": '1-' + index1
      }
    }, [_vm._v(_vm._s(index1 + 1) + "." + _vm._s(item1.title) + " - " + _vm._s(item1.author))])], 1)])
  }))])]), _vm._v(" "), _c('router-link', {
    staticClass: "back",
    attrs: {
      "to": "/hot",
      "mpcomid": '4'
    }
  }, [_c('div', {
    staticClass: "ranking-1"
  }, [_c('div', {
    staticClass: "ranking-11"
  }, [_c('img', {
    attrs: {
      "src": "http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_26_300_212606735.jpg",
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "ranking-r"
  }, _vm._l((_vm.songlist2), function(item2, index2) {
    return _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (index2 < 3),
        expression: "index2 < 3"
      }],
      key: index2,
      staticClass: "ranking-12"
    }, [_c('div', {
      staticClass: "text-12"
    }, [_c('nobr', {
      attrs: {
        "mpcomid": '3-' + index2
      }
    }, [_vm._v(_vm._s(index2 + 1) + "." + _vm._s(item2.title) + " - " + _vm._s(item2.author))])], 1)])
  }))])]), _vm._v(" "), _c('router-link', {
    staticClass: "back",
    attrs: {
      "to": "/new",
      "mpcomid": '6'
    }
  }, [_c('div', {
    staticClass: "ranking-1"
  }, [_c('div', {
    staticClass: "ranking-11"
  }, [_c('img', {
    attrs: {
      "src": "http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_27_300_212984792.jpg",
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "ranking-r"
  }, _vm._l((_vm.songlist3), function(item3, index3) {
    return _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (index3 < 3),
        expression: "index3 < 3"
      }],
      key: index3,
      staticClass: "ranking-12"
    }, [_c('div', {
      staticClass: "text-12"
    }, [_c('nobr', {
      attrs: {
        "mpcomid": '5-' + index3
      }
    }, [_vm._v(_vm._s(index3 + 1) + "." + _vm._s(item3.title) + " - " + _vm._s(item3.author))])], 1)])
  }))])]), _vm._v(" "), _c('router-link', {
    staticClass: "back",
    attrs: {
      "to": "/online",
      "mpcomid": '8'
    }
  }, [_c('div', {
    staticClass: "ranking-1"
  }, [_c('div', {
    staticClass: "ranking-11"
  }, [_c('img', {
    attrs: {
      "src": "http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_28_300_212437019.jpg",
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "ranking-r"
  }, _vm._l((_vm.songlist4), function(item4, index4) {
    return _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (index4 < 3),
        expression: "index4 < 3"
      }],
      key: index4,
      staticClass: "ranking-12"
    }, [_c('div', {
      staticClass: "text-12"
    }, [_c('nobr', {
      attrs: {
        "mpcomid": '7-' + index4
      }
    }, [_vm._v(_vm._s(index4 + 1) + "." + _vm._s(item4.title) + " - " + _vm._s(item4.author))])], 1)])
  }))])]), _vm._v(" "), _c('router-link', {
    staticClass: "back",
    attrs: {
      "to": "/euramerican",
      "mpcomid": '10'
    }
  }, [_c('div', {
    staticClass: "ranking-1"
  }, [_c('div', {
    staticClass: "ranking-11"
  }, [_c('img', {
    attrs: {
      "src": "http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_3_300_212913234.jpg",
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "ranking-r"
  }, _vm._l((_vm.songlist5), function(item5, index5) {
    return _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (index5 < 3),
        expression: "index5 < 3"
      }],
      key: index5,
      staticClass: "ranking-12"
    }, [_c('div', {
      staticClass: "text-12"
    }, [_c('nobr', {
      attrs: {
        "mpcomid": '9-' + index5
      }
    }, [_vm._v(_vm._s(index5 + 1) + "." + _vm._s(item5.title) + " - " + _vm._s(item5.author))])], 1)])
  }))])])], 1), _vm._v(" "), _c('footer', {
    staticClass: "footer2"
  }, [_c('router-link', {
    attrs: {
      "to": "/playing",
      "mpcomid": '11'
    }
  }, [_c('div', {
    staticClass: "cover"
  }, [_c('img', {
    attrs: {
      "src": "@/img/cover.jpg",
      "alt": ""
    }
  })])]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/playing",
      "mpcomid": '12'
    }
  }, [_c('div', {
    staticClass: "baseMsg"
  }, [_c('div', {
    staticClass: "song"
  }, [_vm._v(_vm._s(_vm.songnameMsg))]), _vm._v(" "), _c('div', {
    staticClass: "singer"
  }, [_vm._v(_vm._s(_vm.singerMsg))])])]), _vm._v(" "), _c('div', {
    staticClass: "btns"
  }, [_c('i', {
    staticClass: "iconfont icon-pre"
  }), _vm._v(" "), _c('i', {
    staticClass: "iconfont icon-stop"
  }), _vm._v(" "), _c('i', {
    staticClass: "iconfont icon-next"
  })], 1)], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-769266f2", esExports)
  }
}

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_769266f2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(225);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(201)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-769266f2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_769266f2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
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
    hotAPI.createRecord("data-v-769266f2", Component.options)
  } else {
    hotAPI.reload("data-v-769266f2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ })

},[129]);
//# sourceMappingURL=main.js.map