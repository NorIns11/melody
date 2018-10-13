global.webpackJsonp([11],{

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(86);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 140:
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



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'home',
  data: function data() {
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
      swiperSlides: [{
        date: '2017-11-04',
        sequence: 1,
        bannerType: 1,
        linkUrl: 'http://',
        keyId: 10,
        article: null,
        picture: 'http://p3gbjsikb.bkt.clouddn.com/img/bannersbanner1.jpg'
      }, {
        date: '2017-11-07',
        sequence: 2,
        bannerType: 1,
        linkUrl: 'http://',
        keyId: 15,
        article: null,
        picture: 'http://p3gbjsikb.bkt.clouddn.com/img/bannersbanner3.jpg'
      }, {
        date: '2017-11-08',
        sequence: 3,
        bannerType: 1,
        linkUrl: 'http://',
        keyId: 19,
        article: null,
        picture: 'http://p3gbjsikb.bkt.clouddn.com/img/bannersbanner2.jpg'
      }, {
        date: '2017-11-08',
        sequence: 4,
        bannerType: 1,
        linkUrl: 'http://',
        keyId: 25,
        article: null,
        picture: 'http://p3gbjsikb.bkt.clouddn.com/img/bannersbanner4.jpg'
      }],
      refreshLoading: false,
      bannerType: 1,
      street: '',
      isOn: false,
      songnameMsg: '病变', // 数组中获取
      singerMsg: '鞠文娴', // 数组中获取
      songlist: []
    };
  },
  methods: {
    _getHot: function _getHot() {
      var _this = this;

      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_rank__["b" /* getHot */])().then(function (res) {
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
    this._getHot();
  }
});

/***/ }),

/***/ 197:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_vm._m(0), _vm._v(" "), _c('scroller', {
    ref: "loadMore",
    staticClass: "institution-list",
    attrs: {
      "mpcomid": '12'
    }
  }, [_c('header', {
    staticClass: "header"
  }, [_c('div', {
    staticClass: "logo"
  }, [_c('i', {
    staticClass: "iconfont icon-logoRED"
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "strongs"
  }, [_c('strong', [_vm._v("MELODY")])], 1), _vm._v(" "), _c('div', {
    staticClass: "header-router"
  }, [_c('router-link', {
    attrs: {
      "to": "/login",
      "mpcomid": '0'
    }
  }, [_c('div', [_vm._v("登录")])])], 1)]), _vm._v(" "), _c('div', {
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
      "placeholder": "请输入歌手/歌曲名",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.message)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.message = $event.target.value
      }
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "search-btn"
  }, [_c('i', {
    staticClass: "iconfont icon-search"
  }), _vm._v("搜索")], 1)], 1), _vm._v(" "), _c('swiper', {
    ref: "swiper",
    attrs: {
      "options": _vm.swiperOption
    }
  }, [_vm._l((_vm.swiperSlides), function(slide, index) {
    return _c('swiper-slide', {
      key: index,
      attrs: {
        "mpcomid": '1-' + index
      }
    }, [_c('div', [_c('img', {
      staticClass: "lazy-img-fadein",
      attrs: {
        "v-lazy": slide.picture,
        "lazy-progressive": "true"
      }
    })])])
  }), _vm._v(" "), _c('div', {
    staticClass: "swiper-pagination",
    slot: "pagination"
  })], 2), _vm._v(" "), _c('div', {
    staticClass: "nav_1"
  }, [_c('ul', [_c('li', [_c('router-link', {
    staticClass: "nav_11",
    attrs: {
      "to": "/ranking",
      "mpcomid": '2'
    }
  }, [_c('i', {
    staticClass: "iconfont icon-ranking"
  }), _vm._v(" "), _c('div', [_vm._v("排行榜")])], 1)], 1), _vm._v(" "), _c('li', [_c('router-link', {
    staticClass: "nav_11",
    attrs: {
      "to": "/allList",
      "mpcomid": '3'
    }
  }, [_c('i', {
    staticClass: "iconfont icon-logo"
  }), _vm._v(" "), _c('div', [_vm._v("歌单")])], 1)], 1), _vm._v(" "), _c('li', [_c('router-link', {
    staticClass: "nav_11",
    attrs: {
      "to": "/allList",
      "mpcomid": '4'
    }
  }, [_c('i', {
    staticClass: "iconfont icon-collection"
  }), _vm._v(" "), _c('div', [_vm._v("我喜欢")])], 1)], 1), _vm._v(" "), _c('li', [_c('router-link', {
    staticClass: "nav_11",
    attrs: {
      "to": "/my",
      "mpcomid": '5'
    }
  }, [_c('i', {
    staticClass: "iconfont icon-my"
  }), _vm._v(" "), _c('div', [_vm._v("个人中心")])], 1)], 1)], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "recommend"
  }, [_c('div', {
    staticClass: "rec_block"
  }, [_c('div', {
    staticClass: "blank1"
  }), _vm._v(" "), _c('div', {
    staticClass: "rec_title"
  }, [_vm._v("推荐歌曲")]), _vm._v(" "), _c('div', {
    staticClass: "rec_more"
  }, [_c('router-link', {
    staticClass: "gray",
    attrs: {
      "to": "/allList",
      "mpcomid": '6'
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
    }, [_c('img', {
      attrs: {
        "v-lazy": item.pic,
        "alt": "",
        "eventid": '1-' + index
      },
      on: {
        "click": function($event) {
          _vm._songPlay(item.songid, item.title, item.author)
        }
      }
    }), _vm._v(" "), _c('p', {
      staticClass: "text_14"
    }, [_c('nobr', {
      attrs: {
        "mpcomid": '7-' + index
      }
    }, [_vm._v(_vm._s(item.title))])], 1)], 1)
  }))]), _vm._v(" "), _c('div', {
    staticClass: "blank-6"
  }), _vm._v(" "), _c('footer', {
    staticClass: "footer2"
  }, [_c('router-link', {
    attrs: {
      "to": "/playing",
      "mpcomid": '8'
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
      "mpcomid": '11'
    }
  }, [_c('div', {
    staticClass: "baseMsg"
  }, [_c('div', {
    staticClass: "song"
  }, [_c('nobr', {
    attrs: {
      "mpcomid": '9'
    }
  }, [_vm._v(_vm._s(_vm.songnameMsg))])], 1), _vm._v(" "), _c('div', {
    staticClass: "singer"
  }, [_c('nobr', {
    attrs: {
      "mpcomid": '10'
    }
  }, [_vm._v(_vm._s(_vm.singerMsg))])], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "btns"
  }, [_c('i', {
    staticClass: "iconfont icon-pre"
  }), _vm._v(" "), _c('i', {
    staticClass: "iconfont icon-stop"
  }), _vm._v(" "), _c('i', {
    staticClass: "iconfont icon-next"
  })], 1)], 1)], 1)])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "background"
  }, [_c('img', {
    attrs: {
      "src": "@/img/bg_4.png",
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
     require("vue-hot-reload-api").rerender("data-v-6c6204ce", esExports)
  }
}

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6c6204ce_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(221);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(197)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6c6204ce"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6c6204ce_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
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
    hotAPI.createRecord("data-v-6c6204ce", Component.options)
  } else {
    hotAPI.reload("data-v-6c6204ce", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ })

},[121]);
//# sourceMappingURL=main.js.map