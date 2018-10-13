global.webpackJsonp([10],{

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(87);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    navigationBarTitleText: '登录'
  }
});

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'login',
  data: function data() {
    return {
      bannerType: 1,
      street: ''
    };
  },
  created: function created() {}
});
/*
  $(function (){
    $('#login-btn').on('click', function (){
      var username = $('#name').val();
      var password = $('#password').val();

      AjaxIO.post("/login", {loginId: username, password: password},
                         function (result) {
                        if (result.data.token) {
                            localStorage.setItem("token",result.data.token);
                            location.href = "../index/index.vue";
                        }
            });

        });

    });
*/

/***/ }),

/***/ 200:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container-login"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "back-x"
  }, [_c('router-link', {
    staticClass: "back2",
    attrs: {
      "to": "/",
      "mpcomid": '0'
    }
  }, [_c('i', {
    staticClass: "iconfont icon-back2"
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "list-block"
  }, [_c('ul', [_c('p', {
    staticClass: "title"
  }, [_vm._v("登 录")]), _c('br'), _vm._v(" "), _c('li', [_c('div', {
    staticClass: "item-input"
  }, [_c('input', {
    attrs: {
      "type": "text",
      "id": "nickname",
      "placeholder": "用户名"
    }
  })])]), _vm._v(" "), _c('li', [_c('div', {
    staticClass: "item-input"
  }, [_c('input', {
    attrs: {
      "type": "password",
      "id": "password",
      "placeholder": "密码"
    }
  })])])], 1)], 1), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/",
      "mpcomid": '1'
    }
  }, [_c('button', {
    staticClass: "btn-big"
  }, [_vm._v("登 录")])], 1), _vm._v(" "), _c('div', {
    staticClass: "small"
  }, [_c('router-link', {
    staticClass: "gray",
    attrs: {
      "to": "/register",
      "mpcomid": '2'
    }
  }, [_vm._v("\n\t\t\t\t没有账号？立即注册\n    \t")])], 1)], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "bg-pic"
  }, [_c('img', {
    attrs: {
      "src": "http://p3gbjsikb.bkt.clouddn.com/img/bg/bg-2.jpg",
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
     require("vue-hot-reload-api").rerender("data-v-7532baa5", esExports)
  }
}

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7532baa5_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(224);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(200)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7532baa5"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7532baa5_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\login\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7532baa5", Component.options)
  } else {
    hotAPI.reload("data-v-7532baa5", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ })

},[122]);
//# sourceMappingURL=main.js.map