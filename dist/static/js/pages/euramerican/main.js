global.webpackJsonp([13],{

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(84);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    navigationBarTitleText: '欧美榜'
  }
});

/***/ }),

/***/ 138:
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



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'euramerican',
  data: function data() {
    return {
      bannerType: 1,
      street: '',
      songnameMsg: '病变', // 数组中获取
      singerMsg: '鞠文娴', // 数组中获取
      songlist: []
    };
  },
  methods: {
    _getEuramerican: function _getEuramerican() {
      var _this = this;

      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_rank__["e" /* getEuramerican */])().then(function (res) {
        if (res.code === 1) {
          _this.songlist = res.data.a;
        }
      });
    },
    _songPlay: function _songPlay(songid, title, author) {
      this.$router.push({
        name: 'Playing',
        params: {
          songid: songid,
          title: title,
          author: author
        }
      });
    }
  },
  created: function created() {
    this._getEuramerican();
  }
});

/***/ }),

/***/ 204:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container-collected"
  }, [_c('header', {
    staticClass: "all-header"
  }, [_c('router-link', {
    staticClass: "back",
    attrs: {
      "to": "/ranking",
      "mpcomid": '0'
    }
  }, [_c('i', {
    staticClass: "iconfont icon-back"
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "text-title"
  }, [_vm._v("欧美榜")]), _vm._v(" "), _c('div', {
    staticClass: "blank-right"
  }, [_vm._v(" ")])], 1), _vm._v(" "), _c('div', {
    staticClass: "blank-6"
  }), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "all-list"
  }, _vm._l((_vm.songlist), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "all-1"
    }, [_c('div', {
      staticClass: "numbers"
    }, [_vm._v("\n              " + _vm._s(index + 1) + "\n            ")]), _vm._v(" "), _c('div', {
      staticClass: "all-12",
      attrs: {
        "eventid": '0-' + index
      },
      on: {
        "click": function($event) {
          _vm._songPlay(item.songid, item.title, item.author)
        }
      }
    }, [_c('div', {
      staticClass: "text-12"
    }, [_c('nobr', {
      attrs: {
        "mpcomid": '1-' + index
      }
    }, [_vm._v(_vm._s(item.title))])], 1), _vm._v(" "), _c('div', {
      staticClass: "text-10"
    }, [_c('nobr', {
      attrs: {
        "mpcomid": '2-' + index
      }
    }, [_vm._v(_vm._s(item.author))])], 1)])])
  })), _vm._v(" "), _c('div', {
    staticClass: "blank"
  }), _vm._v(" "), _c('footer', {
    staticClass: "footer2"
  }, [_c('router-link', {
    attrs: {
      "to": "/playing",
      "mpcomid": '3'
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
      "mpcomid": '4'
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
     require("vue-hot-reload-api").rerender("data-v-b0d8f1c4", esExports)
  }
}

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_b0d8f1c4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(228);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(204)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-b0d8f1c4"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_b0d8f1c4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\euramerican\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b0d8f1c4", Component.options)
  } else {
    hotAPI.reload("data-v-b0d8f1c4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ })

},[119]);
//# sourceMappingURL=main.js.map