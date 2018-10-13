global.webpackJsonp([6],{

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(92);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    navigationBarTitleText: '播放页面'
  }
});

/***/ }),

/***/ 146:
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



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'play',
  data: function data() {
    return {
      street: '',
      isOn: false,
      songnameMsg: '病变',
      singerMsg: '鞠文娴',
      isCollected: false,
      lrc: '暂无歌词',
      songid: this.$route.params.songid,
      playing: false
    };
  },
  methods: {
    _getLrc: function _getLrc(songid) {
      var _this = this;

      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_rank__["f" /* getLrc */])(songid).then(function (res) {
        if (res.code === 1) {
          _this.lrc = res.data.a[0].lyric;
          // lrc1= res.data.a[0].lyric;
          // this.lrc = this.lrc1.replace(new RegExp("\u0020","gm"),"<br/>");
        }
      });
    }
    /* palyControl () {
      var lrc = new Lyrics(LRC_text)
      document.getElementById('audio_player').addEventListener('timeupdate', function () {
      // 所有歌词取消高亮
      var lyric_selected = lyrics_container.querySelectorAll('[selected]');
      for (var i = 0; i < lyric_selected.length; i++) {
        lyric_selected[i].removeAttribute('selected');
      }
      // 获取要高亮的歌词
      var lyric_selected = lrc.select(this.currentTime);
      // 高亮歌词（如果有）
      if (lyric_selected != undefined && lyric_selected >= 0) {
        lyric_selected.setAttribute('selected', 'selected');
        }
      });
    } */

  },
  created: function created() {
    this._getLrc(this.$route.params.songid);
  }
});

/***/ }),

/***/ 194:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container-play"
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
    staticClass: "baseMsg1"
  }, [_c('div', {
    staticClass: "song"
  }, [_c('nobr', {
    attrs: {
      "mpcomid": '1'
    }
  }, [_vm._v(_vm._s(this.$route.params.title))])], 1), _vm._v(" "), _c('div', {
    staticClass: "singer"
  }, [_c('nobr', {
    attrs: {
      "mpcomid": '2'
    }
  }, [_vm._v(_vm._s(this.$route.params.author))])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "collet"
  }, [_c('i', {
    staticClass: "iconfont icon-collect"
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "blank-7"
  }), _vm._v(" "), _c('audio', {
    attrs: {
      "id": "audio_player",
      "src": "",
      "loop": "loop",
      "autoplay": "autoplay"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "content-playing"
  }, [_vm._v("\n      " + _vm._s(_vm.lrc) + "\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "blank-6"
  }), _vm._v(" "), _c('div', {
    staticClass: "footer1"
  }, [_c('i', {
    staticClass: "iconfont icon-listLoop"
  }), _vm._v(" "), _c('div', {
    staticClass: "middle"
  }, [_c('i', {
    staticClass: "iconfont icon-pre"
  }), _vm._v(" "), _c('i', {
    class: _vm.playing ? 'iconfont icon-stop' : 'iconfont icon-play',
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.changePlaying()
      }
    }
  }), _vm._v(" "), _c('i', {
    staticClass: "iconfont icon-next"
  })], 1), _vm._v(" "), _c('i', {
    staticClass: "iconfont icon-list"
  })], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-507fd4ea", esExports)
  }
}

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_507fd4ea_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(219);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(194)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_507fd4ea_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
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
    hotAPI.createRecord("data-v-507fd4ea", Component.options)
  } else {
    hotAPI.reload("data-v-507fd4ea", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ })

},[127]);
//# sourceMappingURL=main.js.map