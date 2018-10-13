global.webpackJsonp([5],{

/***/ 134:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container-popular"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
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
          _vm._songPlay(item.songid)
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
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "covers"
  }, [_c('img', {
    attrs: {
      "src": "http://p3gbjsikb.bkt.clouddn.com/cover/collected.jpg",
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
     require("vue-hot-reload-api").rerender("data-v-b1a8a9d4", esExports)
  }
}

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_b1a8a9d4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(149);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(134)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-b1a8a9d4"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_b1a8a9d4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\popular\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b1a8a9d4", Component.options)
  } else {
    hotAPI.reload("data-v-b1a8a9d4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(56);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    navigationBarTitleText: '流行榜'
  }
});

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_rank__ = __webpack_require__(6);
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
    _getPopular: function _getPopular() {
      var _this = this;

      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_rank__["a" /* getPopular */])().then(function (res) {
        if (res.code === 1) {
          _this.songlist = res.data.a;
        }
      });
    },
    _songPlay: function _songPlay(songid) {
      this.songidNow = songid;
    }
  },
  onShow: function onShow() {
    this.isPlay = this.GLOBAL.isPlay;
  },
  onLoad: function onLoad(options) {
    this.isPlay = this.GLOBAL.isPlay;
    this.songidNow = options.songid;
    this.titleNow = options.title;
    this.authorNow = options.author;
    this.pic = options.pic;
  },
  created: function created() {
    this._getPopular();
  }
});

/***/ })

},[69]);
//# sourceMappingURL=main.js.map