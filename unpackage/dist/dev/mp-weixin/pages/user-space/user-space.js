(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/user-space/user-space"],{

/***/ 133:
/*!**************************************************************************************!*\
  !*** E:/项目/HBuilderProjects/社区交友/main.js?{"page":"pages%2Fuser-space%2Fuser-space"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _userSpace = _interopRequireDefault(__webpack_require__(/*! ./pages/user-space/user-space.vue */ 134));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_userSpace.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 134:
/*!*******************************************************************!*\
  !*** E:/项目/HBuilderProjects/社区交友/pages/user-space/user-space.vue ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_space_vue_vue_type_template_id_51a54c5c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-space.vue?vue&type=template&id=51a54c5c& */ 135);
/* harmony import */ var _user_space_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-space.vue?vue&type=script&lang=js& */ 137);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _user_space_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _user_space_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 14);

var renderjs




/* normalize component */

var component = Object(_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _user_space_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _user_space_vue_vue_type_template_id_51a54c5c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _user_space_vue_vue_type_template_id_51a54c5c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _user_space_vue_vue_type_template_id_51a54c5c___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

/* hot reload */
if (false) { var api; }
component.options.__file = "E:/项目/HBuilderProjects/社区交友/pages/user-space/user-space.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 135:
/*!**************************************************************************************************!*\
  !*** E:/项目/HBuilderProjects/社区交友/pages/user-space/user-space.vue?vue&type=template&id=51a54c5c& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_space_vue_vue_type_template_id_51a54c5c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./user-space.vue?vue&type=template&id=51a54c5c& */ 136);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_space_vue_vue_type_template_id_51a54c5c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_space_vue_vue_type_template_id_51a54c5c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_space_vue_vue_type_template_id_51a54c5c___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_space_vue_vue_type_template_id_51a54c5c___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 136:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/项目/HBuilderProjects/社区交友/pages/user-space/user-space.vue?vue&type=template&id=51a54c5c& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var l0 = _vm.__map(_vm.counts, function(item, index) {
    var f0 = _vm._f("formatNum")(item.num)

    return {
      $orig: _vm.__get_orig(item),
      f0: f0
    }
  })

  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        l0: l0
      }
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 137:
/*!********************************************************************************************!*\
  !*** E:/项目/HBuilderProjects/社区交友/pages/user-space/user-space.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_space_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./user-space.vue?vue&type=script&lang=js& */ 138);
/* harmony import */ var _D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_space_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_space_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_space_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_space_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_space_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 138:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/项目/HBuilderProjects/社区交友/pages/user-space/user-space.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;
























































































var _time = _interopRequireDefault(__webpack_require__(/*! @/common/time.js */ 90));
var _vuex = __webpack_require__(/*! vuex */ 16);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter) {if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;}}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var emotionArray = ['保密', '未婚', '已婚'];var commonList = function commonList() {return Promise.all(/*! import() | components/common/common-list */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/common/common-list")]).then(__webpack_require__.bind(null, /*! @/components/common/common-list.vue */ 167));};var loadMore = function loadMore() {return __webpack_require__.e(/*! import() | components/common/loadmore */ "components/common/loadmore").then(__webpack_require__.bind(null, /*! @/components/common/loadmore.vue */ 174));};var uniPopup = function uniPopup() {return __webpack_require__.e(/*! import() | components/uni-ui/uni-popup/uni-popup */ "components/uni-ui/uni-popup/uni-popup").then(__webpack_require__.bind(null, /*! @/components/uni-ui/uni-popup/uni-popup.vue */ 196));};var _default = { components: { commonList: commonList, loadMore: loadMore, uniPopup: uniPopup }, data: function data() {return { user_id: 0, userinfo: { userpic: "/static/default.jpg", username: "", sex: 0, age: 20, isFollow: false, regtime: "", birthday: "", job: "", path: "", qg: "" }, counts: [{ name: "帖子", num: 0 }, { name: "关注", num: 0 }, { name: "粉丝", num: 0 }], tabIndex: 0, tabBars: [{ name: "主页" }, { name: "帖子", list: [], // 1.上拉加载更多  2.加载中... 3.没有更多了
        loadmore: "上拉加载更多", page: 1 }, { name: "动态", list: [], // 1.上拉加载更多  2.加载中... 3.没有更多了
        loadmore: "上拉加载更多", page: 1 }] };}, onNavigationBarButtonTap: function onNavigationBarButtonTap() {if (this.user_id == this.user.id) {return uni.navigateTo({ url: '../user-set/user-set' });}this.$refs.popup.open();}, computed: _objectSpread({}, (0, _vuex.mapState)({ user: function user(state) {return state.user;} }), { list: function list() {return this.tabBars[this.tabIndex].list;}, loadmore: function loadmore() {return this.tabBars[this.tabIndex].loadmore;} }), filters: { formatNum: function formatNum(value) {return value > 99 ? '99+' : value;} }, onLoad: function onLoad(e) {var _this = this;if (!e.user_id) {return uni.showToast({ title: '非法参数', icon: 'none' });}this.user_id = e.user_id; // 加载用户个人信息
    this.getUserInfo(); // 获取用户相关数据
    this.getCounts(); // 监听关注和顶踩操作
    uni.$on('updateFollowOrSupport', function (e) {switch (e.type) {case 'follow': // 关注
          _this.follow(e.data.user_id);
          break;
        case 'support': // 顶踩
          _this.doSupport(e.data);
          break;}

    });
    // 监听评论数变化
    uni.$on('updateCommentsCount', function (_ref) {var id = _ref.id,count = _ref.count;
      _this.tabBars.forEach(function (tab) {
        if (tab.list) {
          tab.list.forEach(function (item) {
            if (item.id === id) {
              item.comment_count = count;
            }
          });
        }
      });
    });
  },
  onUnload: function onUnload() {
    uni.$off('updateFollowOrSupport', function (e) {});
    uni.$off('updateCommentsCount', function (e) {});
  },
  methods: {
    // 获取用户相关数据
    getCounts: function getCounts() {var _this2 = this;
      this.$H.get('/user/getcounts/' + this.user_id).then(function (res) {
        _this2.counts[0].num = res.post_count;
        _this2.counts[1].num = res.withfollow_count;
        _this2.counts[2].num = res.withfen_count;
      });
    },
    // 获取用户个人信息
    getUserInfo: function getUserInfo() {var _this3 = this;
      this.$H.post('/getuserinfo', {
        user_id: this.user_id },
      {
        token: true,
        notoast: true }).
      then(function (res) {
        _this3.userinfo = {
          userpic: res.userpic,
          username: res.username,
          sex: res.userinfo.sex,
          age: res.userinfo.age,
          isFollow: res.fens.length > 0,
          isblack: res.blacklist.length > 0,
          regtime: _time.default.dateFormat(new Date(res.create_time * 1000), '{Y}-{MM}-{DD}'),
          birthday: _time.default.getHoroscope(res.userinfo.birthday),
          job: res.userinfo.job ? res.userinfo.job : '无',
          path: res.userinfo.path ? res.userinfo.path : '无',
          qg: emotionArray[res.userinfo.qg] };

        uni.setNavigationBarTitle({
          title: _this3.userinfo.username });

      });
    },
    changeTab: function changeTab(index) {
      this.tabIndex = index;
      this.getList();
    },
    // 关注
    follow: function follow(user_id) {
      // 找到当前作者的所有列表
      this.tabBars.forEach(function (tab) {
        if (tab.list) {
          tab.list.forEach(function (item) {
            if (item.user_id === user_id) {
              item.isFollow = true;
            }
          });
        }
      });
      uni.showToast({ title: '关注成功' });
    },
    // 顶踩操作
    doSupport: function doSupport(e) {
      // 拿到当前的选项卡对应的list
      this.tabBars[this.tabIndex].list.forEach(function (item) {
        if (item.id === e.id) {
          // 之前没有操作过
          if (item.support.type === '') {
            item.support[e.type + '_count']++;
          } else if (item.support.type === 'support' && e.type === 'unsupport') {
            // 顶 - 1
            item.support.support_count--;
            // 踩 + 1
            item.support.unsupport_count++;
          } else if (item.support.type === 'unsupport' && e.type === 'support') {// 之前踩了
            // 顶 + 1
            item.support.support_count++;
            // 踩 - 1
            item.support.unsupport_count--;
          }
          item.support.type = e.type;
        }
      });
      var msg = e.type === 'support' ? '顶' : '踩';
      uni.showToast({ title: msg + '成功' });
    },
    // 获取文章列表
    getList: function getList() {var _this4 = this;
      var index = this.tabIndex;
      if (index === 0) return;
      var page = this.tabBars[index].page;
      var isrefresh = page === 1;
      this.$H.get('/user/' + this.user_id + '/post/' + page).
      then(function (res) {
        var list = res.list.map(function (v) {
          return _this4.$U.formatCommonList(v);
        });
        _this4.tabBars[index].list = isrefresh ? _toConsumableArray(list) : [].concat(_toConsumableArray(_this4.tabBars[index].list), _toConsumableArray(list));
        _this4.tabBars[index].loadmore = list.length < 10 ? '没有更多了' : '上拉加载更多';
      }).catch(function (err) {
        if (!isrefresh) {
          _this4.tabBars[index].page--;
        }
      });
    },
    // 关注/取消关注
    doFollow: function doFollow() {var _this5 = this;
      this.checkAuth(function () {
        var url = _this5.userinfo.isFollow ? '/unfollow' : '/follow';
        var msg = _this5.userinfo.isFollow ? '取消关注' : '关注';
        _this5.$H.post(url, {
          follow_id: _this5.user_id },
        {
          token: true }).
        then(function (res) {
          _this5.userinfo.isFollow = !_this5.userinfo.isFollow;
          uni.showToast({
            title: msg + '成功',
            icon: 'none' });

          uni.$emit('updateIndex');
          _this5.getList();
        });
      });
    },
    // 进入编辑资料
    openUserInfo: function openUserInfo() {
      uni.navigateTo({
        url: '../user-userinfo/user-userinfo' });

    },
    // 加入/移出黑名单
    doBlack: function doBlack() {var _this6 = this;
      this.checkAuth(function () {
        var url = _this6.userinfo.isblack ? '/removeblack' : '/addblack';
        var msg = _this6.userinfo.isblack ? '移出黑名单' : '加入黑名单';
        uni.showModal({
          content: '是否要' + msg,
          success: function success(res) {
            if (res.confirm) {
              _this6.$H.post(url, {
                id: _this6.user_id },
              {
                token: true }).
              then(function (res) {
                _this6.userinfo.isblack = !_this6.userinfo.isblack;
                uni.showToast({
                  title: msg + '成功',
                  icon: 'none' });

              });
            }
          } });


      });
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ })

},[[133,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/user-space/user-space.js.map