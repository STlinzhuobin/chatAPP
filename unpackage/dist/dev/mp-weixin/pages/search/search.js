(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/search/search"],{

/***/ 44:
/*!******************************************************************************!*\
  !*** E:/项目/HBuilderProjects/社区交友/main.js?{"page":"pages%2Fsearch%2Fsearch"} ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _search = _interopRequireDefault(__webpack_require__(/*! ./pages/search/search.vue */ 45));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_search.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 45:
/*!***********************************************************!*\
  !*** E:/项目/HBuilderProjects/社区交友/pages/search/search.vue ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search_vue_vue_type_template_id_df6de348___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.vue?vue&type=template&id=df6de348& */ 46);
/* harmony import */ var _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.vue?vue&type=script&lang=js& */ 48);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 14);

var renderjs




/* normalize component */

var component = Object(_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _search_vue_vue_type_template_id_df6de348___WEBPACK_IMPORTED_MODULE_0__["render"],
  _search_vue_vue_type_template_id_df6de348___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _search_vue_vue_type_template_id_df6de348___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

/* hot reload */
if (false) { var api; }
component.options.__file = "E:/项目/HBuilderProjects/社区交友/pages/search/search.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 46:
/*!******************************************************************************************!*\
  !*** E:/项目/HBuilderProjects/社区交友/pages/search/search.vue?vue&type=template&id=df6de348& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_template_id_df6de348___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./search.vue?vue&type=template&id=df6de348& */ 47);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_template_id_df6de348___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_template_id_df6de348___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_template_id_df6de348___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_template_id_df6de348___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 47:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/项目/HBuilderProjects/社区交友/pages/search/search.vue?vue&type=template&id=df6de348& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 48:
/*!************************************************************************************!*\
  !*** E:/项目/HBuilderProjects/社区交友/pages/search/search.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./search.vue?vue&type=script&lang=js& */ 49);
/* harmony import */ var _D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 49:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/项目/HBuilderProjects/社区交友/pages/search/search.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter) {if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;}}var commonList = function commonList() {return Promise.all(/*! import() | components/common/common-list */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/common/common-list")]).then(__webpack_require__.bind(null, /*! @/components/common/common-list.vue */ 167));};var topicList = function topicList() {return __webpack_require__.e(/*! import() | components/news/topic-list */ "components/news/topic-list").then(__webpack_require__.bind(null, /*! @/components/news/topic-list.vue */ 215));};var userList = function userList() {return __webpack_require__.e(/*! import() | components/user-list/user-list */ "components/user-list/user-list").then(__webpack_require__.bind(null, /*! @/components/user-list/user-list.vue */ 220));};var loadMore = function loadMore() {return __webpack_require__.e(/*! import() | components/common/loadmore */ "components/common/loadmore").then(__webpack_require__.bind(null, /*! @/components/common/loadmore.vue */ 174));};var _default =






































{
  components: {
    commonList: commonList,
    topicList: topicList,
    userList: userList,
    loadMore: loadMore },

  data: function data() {
    return {
      searchText: '',
      list: [],
      // 搜索结果
      searchList: [],
      // 当前搜索类型
      type: 'post',
      loadmore: '上拉加载更多',
      page: 1 };

  },
  // 监听导航输入
  onNavigationBarSearchInputChanged: function onNavigationBarSearchInputChanged(e) {
    this.searchText = e.text;
  },
  // 监听点击导航搜索按钮
  onNavigationBarButtonTap: function onNavigationBarButtonTap(e) {
    if (e.index === 0) {
      this.searchEvent();
    }
  },
  onLoad: function onLoad(e) {var _this = this;
    if (e.type) {
      this.type = e.type;
    }
    var pageTitle = '帖子';
    switch (this.type) {
      case 'post':
        pageTitle = '帖子';
        // 监听关注和顶踩操作
        uni.$on('updateFollowOrSupport', function (e) {
          switch (e.type) {
            case 'follow': // 关注
              _this.follow(e.data.user_id);
              break;
            default:
              break;}

        });
        break;
      case 'topic':
        pageTitle = '话题';
        break;
      case 'user':
        pageTitle = '用户';
        break;}

    // 修改搜索占位








    // 取出搜索历史
    var list = uni.getStorageSync('historySeachText');
    if (list) {
      this.list = JSON.parse(list);
    }
  },
  onUnload: function onUnload() {
    if (this.type === 'post') {
      uni.$off('updateFollowOrSupport', function (e) {});
    }
  },
  // 监听下拉刷新
  onPullDownRefresh: function onPullDownRefresh() {
    if (this.searchText === '') {
      return uni.stopPullDownRefresh();
    }
    this.getData(true, function () {
      // 关闭下拉刷新状态
      uni.stopPullDownRefresh();
    });
  },
  // 监听上拉加载
  onReachBottom: function onReachBottom() {
    if (this.loadmore !== '上拉加载更多') {
      return;
    }
    this.loadmore = '加载中...';
    this.getData(false);
  },
  methods: {
    // 关注
    follow: function follow(user_id) {
      // 找到当前作者的所有列表
      this.searchList.forEach(function (item) {
        if (item.user_id === user_id) {
          item.isFollow = true;
        }
      });
      uni.showToast({ title: '关注成功' });
    },
    // 顶踩操作
    doSupport: function doSupport(e) {
      // 拿到当前的选项卡对应的list
      this.searchList.forEach(function (item) {
        if (item.id === e.id) {
          // 之前没有操作过
          if (item.support.type === '') {
            item.support[e.type + '_count']++;
          } else if (item.support.type === 'support' && e.type === 'unsupport') {
            // 顶 - 1
            item.support.support_count--;
            // 踩 + 1
            item.support.unsupport_count++;
          } else if (item.support.type === 'unsupport' && e.type === 'support') {
            // 之前踩了
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
    // 点击搜索历史
    clickSearchHistory: function clickSearchHistory(text) {
      this.searchText = text;
      this.searchEvent();
    },
    // 搜索事件
    searchEvent: function searchEvent() {var _this2 = this;
      // 收起键盘
      uni.hideKeyboard();
      // 加入搜索历史
      var index = this.list.findIndex(function (v) {return v === _this2.searchText;});
      if (index !== -1) {
        this.$U.__toFirst(this.list, index);
      } else {
        this.list.unshift(this.searchText);
      }
      uni.setStorageSync('historySeachText', JSON.stringify(this.list));
      // 请求搜索
      this.getData();
    },
    // 获取数据
    getData: function getData() {var _this3 = this;var isrefresh = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      // 显示loading状态
      uni.showLoading({
        title: '加载中...',
        mask: false });

      // 请求搜索
      this.page = isrefresh ? 1 : this.page + 1;
      this.$H.
      post('/search/' + this.type, {
        keyword: this.searchText,
        page: this.page }).

      then(function (res) {
        // 整理格式
        var list = [];
        switch (_this3.type) {
          case 'post':
            list = res.list.map(function (v) {
              return _this3.$U.formatCommonList(v);
            });
            break;
          case 'topic':
            list = res.list.map(function (v) {
              return {
                id: v.id,
                cover: v.titlepic,
                title: v.title,
                desc: v.desc,
                today_count: v.todaypost_count,
                news_count: v.post_count };

            });
            break;
          case 'user':
            list = res.list.map(function (v) {
              return {
                id: v.id,
                avatar: v.userpic,
                username: v.username,
                sex: v.userinfo.sex, //0:未知；1：女性；2：男性
                age: v.userinfo.age,
                isFollow: false };

            });
            break;}

        // 渲染页面
        _this3.searchList = isrefresh ? _toConsumableArray(list) : [].concat(_toConsumableArray(_this3.searchList), _toConsumableArray(list));
        // 加载情况
        _this3.loadmore = list.length < 10 ? '没有更多了' : '上拉加载更多';
        //隐藏loading
        uni.hideLoading();
        if (typeof callback === 'function') {
          callback();
        }
      }).
      catch(function (err) {
        _this3.page--;
        //隐藏loading
        uni.hideLoading();
        if (typeof callback === 'function') {
          callback();
        }
      });
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ })

},[[44,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/search/search.js.map