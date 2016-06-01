/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	angular.module('cms.starwipe.templates', []);
	
	var context = __webpack_require__(1);
	context.keys().map(context);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./app": 2,
		"./app.js": 2,
		"./cms-config": 3,
		"./cms-config.js": 3,
		"./components/create-content/create-content.html": 4,
		"./components/edit-metadata/edit-metadata": 5,
		"./components/edit-metadata/edit-metadata.html": 6,
		"./components/edit-metadata/edit-metadata.js": 5,
		"./components/edit-pages/content/content.html": 7,
		"./components/edit-pages/edit-pages": 8,
		"./components/edit-pages/edit-pages.js": 8,
		"./components/edit-pages/list/list.html": 9,
		"./components/edit-pages/list/post-image-group": 10,
		"./components/edit-pages/list/post-image-group.html": 11,
		"./components/edit-pages/list/post-image-group.js": 10,
		"./components/edit-pages/list/post-image-groups": 12,
		"./components/edit-pages/list/post-image-groups.html": 13,
		"./components/edit-pages/list/post-image-groups.js": 12,
		"./components/edit-pages/quiz/quiz.html": 14,
		"./components/edit-pages/slideshow/slideshow.html": 15,
		"./components/edit-pages/video/video.html": 16,
		"./components/nav/nav": 17,
		"./components/nav/nav.html": 18,
		"./components/nav/nav.js": 17,
		"./components/toolbar/toolbar": 19,
		"./components/toolbar/toolbar.html": 20,
		"./components/toolbar/toolbar.js": 19,
		"./shared/images/favicon.ico": 21,
		"./shared/images/loading.gif": 22,
		"./shared/images/quiz-cosmode.png": 23,
		"./shared/images/quiz-one-question.png": 24,
		"./shared/images/quiz-open-ended.png": 25,
		"./shared/images/quiz-scored-test.png": 26,
		"./shared/images/starwipe-logo.png": 27,
		"./shared/resources/starwipe-inline-config": 28,
		"./shared/resources/starwipe-inline-config.json": 28,
		"./shared/scripts/setup": 29,
		"./shared/scripts/setup.js": 29,
		"./shared/styles/cms.scss": 30
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 1;


/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	angular.module('cms.starwipe', [
	  'bulbsCmsApp',
	  'cms.starwipe.config',
	  'cms.starwipe.edit',
	  'cms.starwipe.templates',
	  'cms.starwipe.nav',
	  'toolbar'
	])
	  .config(
	    ['StatusFilterOptionsProvider', 'moment',
	    function (StatusFilterOptionsProvider, moment) {
	      StatusFilterOptionsProvider.setStatuses([{
	        label: 'Draft',
	        key: 'status',
	        value: 'Draft'
	      }, {
	        label: 'Edit',
	        key: 'status',
	        value: 'Waiting for Editor'
	      }, {
	        label: 'Published',
	        key: 'before',
	        value: function () {
	          return moment().format('YYYY-MM-DDTHH:mmZ');
	        }
	      }, {
	        label: 'Scheduled',
	        key: 'after',
	        value: function () {
	          return moment().format('YYYY-MM-DDTHH:mmZ');
	        }
	      }, {
	        label: 'All',
	        key: null,
	        value: null
	      }]);
	    }]);


/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	angular.module('cms.config.base', [
	  'bulbs.slideshow',
	  'bulbs.quiz',
	  'cms.config',
	  'cms.editPages.postImageGroup',
	  'cms.firebase.config',
	  'cms.tunic.config',
	  'cmsComponents.auth.config',
	  'sendToEditor.config'
	])
	  .config([
	    '$httpProvider', 'FirebaseConfigProvider', 'TokenAuthConfigProvider', 'TunicConfigProvider',
	    'TokenAuthServiceProvider', 'CmsConfigProvider', 'SendToEditorConfigProvider',
	    function ($httpProvider, FirebaseConfigProvider, TokenAuthConfigProvider, TunicConfigProvider,
	        TokenAuthServiceProvider, CmsConfigProvider, SendToEditorConfigProvider) {
	
	      var templateRoot = 'components/edit-pages/';
	      var logoUrl = '/static/starwipe-logo.png';
	
	      FirebaseConfigProvider
	          .setDbUrl('luminous-fire-8340.firebaseio.com')
	          .setSiteRoot('sites/starwipe-cms-testing');
	
	      CmsConfigProvider
	        .setLogoUrl(logoUrl)
	        .setToolbarMappings({
	          toolbar: 'components/toolbar/toolbar.html',
	          nav: 'components/nav/nav.html'
	        })
	        .setCreateContentTemplateUrl('components/create-content/create-content.html')
	        .addEditPageMapping(
	          templateRoot + 'content/content.html', [
	            'content_content',
	            'articles_article'
	          ]
	        )
	        .addEditPageMapping(
	          templateRoot + 'list/list.html', [
	            'lists_list'
	          ]
	        )
	        .addEditPageMapping(
	          templateRoot + 'video/video.html', [
	            'videos_video'
	          ]
	        )
	        .addEditPageMapping(
	          templateRoot + 'quiz/quiz.html', [
	            'quizzes_quiz'
	          ]
	        )
	        .addEditPageMapping(
	          templateRoot + 'slideshow/slideshow.html', [
	            'django_slideshow_slideshow'
	          ]
	        )
	        .setApiPath('/api/')
	        .setInlineObjectsUrl('/static/starwipe-inline-config.json');
	
	      TokenAuthConfigProvider
	        .setLogoUrl(logoUrl)
	        .setApiEndpointAuth('/api/token/auth')
	        .setApiEndpointRefresh('/api/token/refresh')
	        .setApiEndpointVerify('/api/token/verify')
	        .setApiEndpointCurrentUser('/api/me');
	
	      SendToEditorConfigProvider.addArticleStatus('Needs Copy Edit');
	      SendToEditorConfigProvider.addArticleStatus('Needs Final Edit');
	
	      TunicConfigProvider.setApiPath('/api/v1/');
	    }
	  ])
	  .run([
	    'TokenAuthService',
	    function (TokenAuthService) {
	      // call this immediately on load
	      TokenAuthService.tokenVerify();
	    }
	  ]);
	
	angular.module('bulbsCmsApp.settings')
	  .constant('AUTO_ADD_AUTHOR', true)
	  .constant('CMS_NAMESPACE', 'StarWipe CMS')
	  .constant('CONTENT_PARTIALS_URL', '/content_type_views/')
	  .constant('COMPONENTS_URL', '/components/')
	  .constant('DIRECTIVE_PARTIALS_URL', '/views/')
	  .constant('PARTIALS_URL', '/views/')
	  .constant('LOADING_IMG_SRC', '/static/loading.gif')
	  .constant('MEDIA_ITEM_PARTIALS_URL', '/cms/api/partials/media_items/')
	  .constant('SHARED_URL', '/shared/')
	  .constant('STATIC_URL', '/static/')
	  .constant('TAR_OPTIONS', {endpoint: '/ads/targeting'})
	  .constant('TIMEZONE_NAME', 'America/Chicago')
	  .constant('ZERO_CLIPBOARD_SWF', '/static/ZeroClipboard.swf');
	
	angular.module('VideohubClient.settings')
	  .constant('VIDEOHUB_DEFAULT_CHANNEL', 'StarWipe');


/***/ },
/* 4 */
/***/ function(module, exports) {

	var path = '/components/create-content/create-content.html';
	var html = "<div class=\"btn-group\">\n  <a\n      href=\"#\"\n      data-target=\"#create\"\n      role=\"button\"\n      class=\"btn btn-primary\"\n      data-toggle=\"modal\"\n      target=\"_self\">\n    <i class=\"fa-plus-circle fa\"></i>\n    <span>Create content</span>\n  </a>\n</div>\n\n<div\n    id=\"create\"\n    class=\"modal fade\"\n    tabindex=\"-1\"\n    role=\"dialog\"\n    aria-labelledby=\"create-new\"\n    aria-hidden=\"true\"\n    data-backdrop=\"false\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button\n            type=\"button\"\n            class=\"close\"\n            data-dismiss=\"modal\"\n            aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\">Create Content</h4>\n      </div>\n      <div class=\"modal-body\">\n        <div\n            class=\"form-group container-fluid\"\n            ng-show=\"panel == 1\"\n            id=\"createcontent-01\">\n          <div\n              id=\"choose-articletype\"\n              class=\"row \">\n            <section\n                id=\"choose-contenttype\"\n                class=\"primary col-xs-4\"\n                data-toggle=\"buttons\">\n              <h5>1. Choose a type:</h5>\n              <ul class=\"nav nav-pills nav-stacked\">\n                <li>\n                  <a\n                      class=\"create-content\"\n                      data-toggle=\"pill\"\n                      data-content_type=\"articles_article\"\n                      href=\"#create-article\"\n                      value=\"Article\"\n                      target=\"_self\">\n                    Article\n                  </a>\n                </li>\n                <li>\n                  <a\n                      class=\"create-content\"\n                      data-toggle=\"pill\"\n                      data-content_type=\"videos_video\"\n                      href=\"#create-video\"\n                      value=\"Video\"\n                      target=\"_self\">\n                    Video\n                  </a>\n                </li>\n                <li>\n                  <a\n                      class=\"create-content\"\n                      data-toggle=\"pill\"\n                      data-content_type=\"lists_list\"\n                      href=\"#create-list\"\n                      value=\"List\"\n                      target=\"_self\">\n                    List\n                  </a>\n                </li>\n                <li>\n                  <a\n                      class=\"create-content\"\n                      data-toggle=\"pill\"\n                      data-content_type=\"quizzes_quiz\"\n                      href=\"#create-quiz\"\n                      value=\"Quiz\"\n                      target=\"_self\">\n                    Quiz\n                  </a>\n                </li>\n                <li>\n                  <a\n                    class=\"create-content\"\n                    data-toggle=\"pill\"\n                    data-content_type=\"django_slideshow_slideshow\"\n                    href=\"#create-slideshow\"\n                    value=\"Slideshow\"\n                    target=\"_self\">\n                    Slideshow\n                  </a>\n                </li>\n              </ul>\n            </section>\n            <div class=\"tab-content col-xs-8\">\n              <section\n                  id=\"create-article\"\n                  class=\"tab-pane fade panel panel-default\">\n                <div class=\"panel-heading\">\n                  <h6 class=\"panel-title\">Article</h6>\n                </div>\n                <div class=\"panel-body\">\n                  <figure class=\"thumbnail\">\n                    <img\n                        src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATIAAADzCAMAAAAy22pSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACFQTFRFQEBAgICAz8/P39/fn5+f7+/vcHBwv7+/f39/AAAA////jWzwgQAABHNJREFUeNrs3et6oyAQgGEUUyj3f8Hbbp94SMCZkagkfvOz5dC+3RWcjOgSYQwHAWSQQQYZZARkkDVFFr7L8b/dtxwxP86iexTmMkXlD7YYBzLIIIMMMsgggwwyyCCDrER2C+X4/X4f5PD5cRbdvTCXKSp/sMU43JaTyYAMMsgIyI7Pyu67U/tWjgMZZJBBBhlkkEEGGWSQQXYS2e3IdKi2+2IcbsvJZEBGQAZZE2QhvnOE/X+L8EQW3RuLuTj+Ft1OMU4xI4tv/H9l/OFjt9cU3YeRdR1kkEEGGWSQQQYZZJBBBhlkkEEGGWSQQQYZZJBBBhlkkEEGGWSQQQYZZJBBBhlkkEEGGWSQQQYZZJBBBhlkkEEGGWSQQQYZZJBBBhlkkEEGGWSQQQYZZJBBBhlkkEEGGWSQQQYZZJApyDgk1Up27FG8H0F2REAGGWSQQQYZZJBBBtkeZNm3lrkU728NK71kbGwyfylZuH8PMsggg+xYMp9LQgz3DEdIQyFPMWSSIPfBBlZMVkzIIDuYrHeF6FP2y4oOl9zK/kZI+Vfwyh0ggwwyrmWsmJBBVke220fzB4QbyaRX1t9S/t31t3kTJVmIb0zWBXHF1C+cQUv2IQEZZJA1GEde/gnzJoOADLIGyWJ5lemm9eSnubAkdaVFK6RObJNrnJuiebJoIYtlsii2yTXOTQEZZJBBViAbXDGGKdv7lZJbj6GUGu6nKYZy+vi5cW4KNhnsy84Mr6tf8SlfsRKzhStXymQUq6QeExpP/SDbhcwLWZOU+ik7IjXO9colYion9eeSRWHZT9OkQWyc62XcSWgmjZC9gKyRrSxkkEF2Fpn0VHaaNoNe/wh3KpZAq8YRJg22T5ic/Ccq1MBf9kM5yCCDrInbcvkJktW787j+dEnu4upzvauv+oYBS+OcmjFb2WTkcqdyVlbeWxgGLI3jIIPsRLK+vhR77HcRslBf8C/VTEG2nSyXwHsu1vr511qdWTQMWBqnb4LsQ+LIaxnB55iQNUg2bKgZMBQGpPSlHOKxhmEwXXVu2oLi+TLXK9YVW1ZWrjqRE63btx3RtLapV8z5BM50WwEZZJBBtjvZkZd/gn0ZZJBBdkmyaK7AeFgEldlH/RKsKZiHDDLIIIPspfmyWXpLmwKTn9UxJuA0D/+wyagPL9SAjI+VZFrOHzkJ1yFTn5Mh5DwiZJBB9p5kceNWQE4xVmYol88ct3uPCRlkkEH2OrKN55eJFVRBvGEy1hWsFhhU1icsz09oiexqmwzIINv/ttzwdMlfPz4uecGKWX0ogbpQ2HAAgnReQWubDHthua6X4aHhBnKwn0/WPyR2B93u5qnfhcgK52SIv9Qe52RABlk9WfWhBOqHUf3Gd9iH1q5lxFU/lIMMsv3Denj9vUO/gSysXXe9/giCYmPTcTXRduxN2JzJKLxptXaTsZpWVdecmw5FMmduIYMMsobJjrz8fwhZIylGv/a3e8wsFhubjkQNtqNVPfsytrKQQUZABhlkkF0v/gkwALTMq2BDAp2OAAAAAElFTkSuQmCC\"\n                        alt=\"Short feature preview\" />\n                  </figure>\n                  <div class=\"row\">\n                    <h5 class=\"text-muted col-xs-12\">Use this type for the following:</h5>\n                    <ul class=\"list-unstyled small\">\n                      <li class=\"col-xs-6\">\n                          <a\n                              href=\"#\"\n                              class=\"create-content go-next\"\n                              data-content_type=\"articles_article\"\n                              data-init='{\"feature_type\": \"Eye On Style\"}'\n                              target=\"_self\">\n                            Eye On Style\n                          </a>\n                      </li>\n                      <li class=\"col-xs-6\">\n                          <a\n                              href=\"#\"\n                              class=\"create-content go-next\"\n                              data-content_type=\"articles_article\"\n                              data-init='{\"feature_type\": \"Coupling\"}'\n                              target=\"_self\">\n                            Coupling\n                          </a>\n                      </li>\n                      <li class=\"col-xs-6\">\n                          <a\n                              href=\"#\"\n                              class=\"create-content go-next\"\n                              data-content_type=\"articles_article\"\n                              data-init='{\"feature_type\": \"This Week\\u0027s Cover!\"}'\n                              target=\"_self\">\n                            This Week's Cover!\n                          </a>\n                      </li>\n                      <li class=\"col-xs-6\">\n                          <a\n                              href=\"#\"\n                              class=\"create-content go-next\"\n                              data-content_type=\"articles_article\"\n                              data-init='{\"feature_type\": \"It All Adds Up!\"}'\n                              target=\"_self\">\n                            It All Adds Up!\n                          </a>\n                      </li>\n                      <li class=\"col-xs-6\">\n                          <a\n                              href=\"#\"\n                              class=\"create-content go-next\"\n                              data-content_type=\"articles_article\"\n                              data-init='{\"feature_type\": \"Is It True?\"}'\n                              target=\"_self\">\n                            Is It True?\n                          </a>\n                      </li>\n                      <li class=\"col-xs-6\">\n                          <a\n                              href=\"#\"\n                              class=\"create-content go-next\"\n                              data-content_type=\"articles_article\"\n                              data-init='{\"feature_type\": \"Kind Items\"}'\n                              target=\"_self\">\n                            Kind Items\n                          </a>\n                      </li>\n                      <li class=\"col-xs-6\">\n                          <a\n                              href=\"#\"\n                              class=\"create-content go-next\"\n                              data-content_type=\"articles_article\"\n                              data-init='{\"feature_type\": \"Celebrity Realty\"}'\n                              target=\"_self\">\n                            Celebrity Realty\n                          </a>\n                      </li>\n                      <li class=\"col-xs-6\">\n                          <a\n                              href=\"#\"\n                              class=\"create-content go-next\"\n                              data-content_type=\"articles_article\"\n                              data-init='{\"feature_type\": \"Celebrity News For ...\"}'\n                              target=\"_self\">\n                            Celebrity News For ...\n                          </a>\n                      </li>\n                      <li class=\"col-xs-6\">\n                          <a\n                              href=\"#\"\n                              class=\"create-content go-next\"\n                              data-content_type=\"articles_article\"\n                              data-init='{\"feature_type\": \"Tips For Talking To ...\"}'\n                              target=\"_self\">\n                            Tips For Talking To ...\n                          </a>\n                      </li>\n                      <li class=\"col-xs-6\">\n                          <a\n                              href=\"#\"\n                              class=\"create-content go-next\"\n                              data-content_type=\"articles_article\"\n                              data-init='{\"feature_type\": \"It\\u0027s In The Bag\"}'\n                              target=\"_self\">\n                            It's In The Bag\n                          </a>\n                      </li>\n                      <li class=\"col-xs-6\">\n                          <a\n                              href=\"#\"\n                              class=\"create-content go-next\"\n                              data-content_type=\"articles_article\"\n                              data-init='{\"feature_type\": \"They\\u0027ve Got The Look!\"}'\n                              target=\"_self\">\n                            They've Got The Look!\n                          </a>\n                      </li>\n                      <li class=\"col-xs-6\">\n                          <a\n                              href=\"#\"\n                              class=\"create-content go-next\"\n                              data-content_type=\"articles_article\"\n                              data-init='{\"feature_type\": \"Stars, They\\u0027re Just Like\"}'\n                              target=\"_self\">\n                            Stars, They're Just Like\n                          </a>\n                      </li>\n                      <li class=\"col-xs-6\">\n                          <a\n                              href=\"#\"\n                              class=\"create-content go-next\"\n                              data-content_type=\"articles_article\"\n                              data-init='{\"feature_type\": \"Most Shocking Out Of Context\"}'\n                              target=\"_self\">\n                            Most Shocking Out Of Context\n                          </a>\n                      </li>\n                      <li class=\"col-xs-6\">\n                          <a\n                              href=\"#\"\n                              class=\"create-content go-next\"\n                              data-content_type=\"articles_article\"\n                              data-init='{\"feature_type\": \"Reader Contest\"}'\n                              target=\"_self\">\n                            Reader Contest\n                          </a>\n                      </li>\n                      <li class=\"col-xs-6\">\n                          <a\n                              href=\"#\"\n                              class=\"create-content go-next\"\n                              data-content_type=\"articles_article\"\n                              data-init='{\"feature_type\": \"Antimatter\"}'\n                              target=\"_self\">\n                            Antimatter\n                          </a>\n                      </li>\n                </div>\n              </section>\n              <section\n                  id=\"create-video\"\n                  class=\"tab-pane fade panel panel-default\">\n                <div class=\"panel-heading\">\n                  <h6 class=\"panel-title\">Video</h6>\n                </div>\n                <div class=\"panel-body\">\n                  <p>Bet you can't guess what kind of content this is!</p>\n                </div>\n              </section>\n              <section\n                  id=\"create-list\"\n                  class=\"tab-pane fade panel panel-default\">\n                <div class=\"panel-heading\">\n                  <h6 class=\"panel-title\">List</h6>\n                </div>\n                <div class=\"panel-body\">\n                  <p>A list of images and content.</p>\n                </div>\n                <div class=\"row\">\n                  <h5 class=\"text-muted col-xs-12\">Use this type for the following:</h5>\n                  <ul class=\"list-unstyled small\">\n                    <li class=\"col-xs-6\">\n                        <a\n                            href=\"#\"\n                            class=\"create-content go-next\"\n                            data-content_type=\"lists_list\"\n                            data-init='{\"feature_type\": \"Seeing Stars\"}'\n                            target=\"_self\">\n                          Seeing Stars\n                        </a>\n                    </li>\n                    <li class=\"col-xs-6\">\n                        <a\n                            href=\"#\"\n                            class=\"create-content go-next\"\n                            data-content_type=\"lists_list\"\n                            data-init='{\"feature_type\": \"StarWipe Weekly Awards\"}'\n                            target=\"_self\">\n                          StarWipe Weekly Awards\n                        </a>\n                    </li>\n                    <li class=\"col-xs-6\">\n                        <a\n                            href=\"#\"\n                            class=\"create-content go-next\"\n                            data-content_type=\"lists_list\"\n                            data-init='{\"feature_type\": \"Eat Like The Stars\"}'\n                            target=\"_self\">\n                          Eat Like The Stars\n                        </a>\n                    </li>\n                    <li class=\"col-xs-6\">\n                        <a\n                            href=\"#\"\n                            class=\"create-content go-next\"\n                            data-content_type=\"lists_list\"\n                            data-init='{\"feature_type\": \"So Hot Right Now\"}'\n                            target=\"_self\">\n                          So Hot Right Now\n                        </a>\n                    </li>\n                    <li class=\"col-xs-6\">\n                        <a\n                            href=\"#\"\n                            class=\"create-content go-next\"\n                            data-content_type=\"lists_list\"\n                            data-init='{\"feature_type\": \"Facts You Didn\\u0027t Need To Know\"}'\n                            target=\"_self\">\n                          Facts You Didn’t Need To Know\n                        </a>\n                    </li>\n                    <li class=\"col-xs-6\">\n                        <a\n                            href=\"#\"\n                            class=\"create-content go-next\"\n                            data-content_type=\"lists_list\"\n                            data-init='{\"feature_type\": \"Facts You Can\\u0027t Prove Aren\\u0027t True\"}'\n                            target=\"_self\">\n                          Facts You Can't Prove Aren't True\n                        </a>\n                    </li>\n              </section>\n              <section\n                  id=\"create-quiz\"\n                  class=\"tab-pane fade panel panel-default\">\n                <div class=\"panel-heading\">\n                  <h6 class=\"panel-title\">Quiz</h6>\n                </div>\n                <div class=\"panel-body\">\n                      <p>Choose a quiz style:</p>\n                      <ul class=\"list-unstyled row\">\n                        <li class=\"col col-xs-6\">\n                          <a href=\"#\" class=\"create-content go-next\" data-content_type=\"quizzes_quiz\" data-init='{\"quiz_style\": \"tally\", \"feature_type\": \"Quiz\", \"result_button_text\": \"\"}'>\n                            <span>One Question</span>\n                            <img style=\"max-width: 100%;\" src=\"/static/quiz-one-question.png\" alt=\"One Question\">\n                          </a>\n                        </li>\n                        <li class=\"col col-xs-6\">\n                          <a href=\"#\" class=\"create-content go-next\" data-content_type=\"quizzes_quiz\" data-init='{\"quiz_style\": \"test\", \"feature_type\": \"Quiz\", \"result_button_text\": \"\"}'>\n                            <span>Scored Test</span>\n                            <img style=\"max-width: 100%;\" src=\"/static/quiz-scored-test.png\" alt=\"Scored Test\">\n                          </a>\n                        </li>\n                      </ul>\n                      <ul class=\"list-unstyled row\">\n                        <li class=\"col col-xs-6\">\n                          <a href=\"#\" class=\"create-content go-next\" data-content_type=\"quizzes_quiz\" data-init='{\"quiz_style\": \"multiple\", \"feature_type\": \"Quiz\", \"result_button_text\": \"\"}'>\n                            <span>Open Ended</span>\n                            <img style=\"max-width: 100%;\" src=\"/static/quiz-open-ended.png\" alt=\"Open Ended\">\n                          </a>\n                        </li>\n                        <li class=\"col col-xs-6\">\n                          <a href=\"#\" class=\"create-content go-next\" data-content_type=\"quizzes_quiz\" data-init='{\"quiz_style\": \"cosmo\", \"feature_type\": \"Quiz\", \"result_button_text\": \"\"}'>\n                            <span>COSMOde</span>\n                            <img style=\"max-width: 100%;\" src=\"/static/quiz-cosmode.png\" alt=\"COSMOde\">\n                          </a>\n                        </li>\n                      </ul>\n                    </div>\n              </section>\n              <section id=\"create-slideshow\" class=\"tab-pane in active panel panel-default\">\n                <div class=\"panel-heading\"><h6 class=\"panel-title\">Slideshow</h6></div>\n                <div class=\"panel-body\">\n                  <div class=\"row\">\n                    <h5 class=\"text-muted col-xs-12\">Use this type for the following:</h5>\n                    <ul class=\"list-unstyled small\">\n                      <liclass=\"col-xs-6\">\n                        <a\n                          href=\"#\"\n                          class=\"create-content go-next\"\n                          data-content_type=\"django_slideshow_slideshow\"\n                          data-init='{\"feature_type\": \"Slideshow\"}'>\n                          Slideshow\n                        </a>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </section>\n            </div>\n          </div>\n        </div>\n        <section\n            class=\"form-group enter-title edit-page\"\n            ng-show=\"panel == 2\"\n            id=\"createcontent-02\">\n          <h5>2. Enter a headline\n            <small>(You'll be able to change this later.)</small>\n          </h5>\n          <onion-editor\n              id=\"content-title\"\n              class=\"article-header heading title new-title\"\n              role=\"singleline\"\n              ng-model=\"newTitle\"></onion-editor>\n          <p class=\"text-muted small\">\n            <em>Adding placeholder title text helps you find this content while it's still in a draft state.</em>\n          </p>\n        </section>\n      </div>\n      <div class=\"modal-footer\">\n        <button\n            class=\"btn btn-default pull-left\"\n            ng-show=\"panel == 2\"\n            ng-click=\"panel = 1;\"\n            aria-hidden=\"true\">\n          Back\n        </button>\n        <button\n            class=\"btn btn-default\"\n            data-dismiss=\"modal\"\n            aria-hidden=\"true\">\n          Cancel\n        </button>\n        <button\n            class=\"btn btn-primary next-pane\"\n            aria-hidden=\"true\"\n            ng-show=\"panel == 1\"\n            ng-click=\"panel = 2;\">\n          <span>Next</span>\n          <span class=\"fa fa-angle-double-right\"></span>\n        </button>\n        <button\n            type=\"button\"\n            class=\"btn btn-success go\"\n            ng-show=\"panel == 2\"\n            ng-class=\"{ disabled: !newTitle || newTitle.length === 0 }\"\n            ng-click=\"newArticle();\">\n          Create article\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<style>\n  #content-title .editorPlaceholder,\n  #content-title .editor {\n    padding: 10px 23px 10px 23px !important;\n  }\n\n</style>\n\n<script type=\"text/javascript\">\n  function showEnterTitle() {\n    $(\"#create .choose-content-type\").fadeOut(200, function() {\n      $(\"#create .enter-title\").fadeIn(200, function() {\n        $(\"#create .enter-title input.new-title\").focus();\n      });\n    });\n  }\n\n  function showChooseContentType() {\n    $(\"#create .enter-title\").fadeOut(200, function() {\n      $(\"#create .choose-content-type\").fadeIn(200);\n    });\n  }\n\n  $('#create').on('show.bs.modal', function() {\n    $(\"#choose-contenttype a.create-content:first\").click();\n  });\n\n</script>\n";
	window.angular.module('cms.starwipe.templates').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	angular.module('cms.starwipe.edit.metadata', [
	  'bulbsCmsApp.settings',
	  'campaignAutocomplete',
	  'content.edit.section',
	  'content.edit.tags',
	  'utils'
	])
	  .directive('editMetadata', [
	    'Utils',
	    function (Utils) {
	      return {
	        restrict: 'E',
	        scope: {
	          article: '='
	        },
	        templateUrl: Utils.path.join(
	          'components',
	          'edit-metadata',
	          'edit-metadata.html'
	        )
	      };
	    }
	  ]);


/***/ },
/* 6 */
/***/ function(module, exports) {

	var path = '/components/edit-metadata/edit-metadata.html';
	var html = "<div class=\"metadata container-fluid\">\n  <div class=\"row\">\n    <featuretype-field\n        article=\"article\"\n        class=\"pull-left col-sm-4\">\n    </featuretype-field>\n  </div>\n  <div class=\"row\">\n    <content-edit-section\n        ng-model=\"article.section\"\n        class=\"pull-left col-sm-4\">\n    </content-edit-section>\n    <content-edit-tags\n        article=\"article\"\n        class=\"pull-left col-sm-8\">\n    </content-edit-tags>\n  </div>\n  <div class=\"row\">\n    <campaign-autocomplete class=\"pull-left col-sm-4\"\n        ng-model=\"article.tunic_campaign_id\"\n        campaign-autocomplete-label=\"Sponsor Campaign\">\n    </campaign-autocomplete>\n  </div>\n</div>\n";
	window.angular.module('cms.starwipe.templates').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 7 */
/***/ function(module, exports) {

	var path = '/components/edit-pages/content/content.html';
	var html = "<edit-metadata article=\"article\"></edit-metadata>\n\n<content-edit-main-image article=\"article\"></content-edit-main-image>\n\n<content-edit-title\n    article=\"article\"\n    class=\"article-header\">\n</content-edit-title>\n\n<onion-editor\n    id=\"content-description\"\n    ng-model=\"article.description\"\n    role=\"singleline\"\n    placeholder=\"Description goes here\"\n    formatting=\"\">\n</onion-editor>\n\n<div>\n\n  <content-edit-authors\n      class=\"clearfix well row\"\n      article=\"article\">\n  </content-edit-authors>\n\n  <editor-item\n      article=\"article\"\n      class=\"pull-right\">\n  </editor-item>\n\n  <content-edit-body\n      article=\"article\"\n      link-domain=\"starwipe.com\"\n      search-handler=\"linkBrowser\" >\n  </content-edit-body>\n\n</div>\n\n<encode-status></encode-status>\n";
	window.angular.module('cms.starwipe.templates').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 8 */
/***/ function(module, exports) {

	angular.module('cms.starwipe.edit', [
	  'cms.starwipe.edit.metadata'
	]);


/***/ },
/* 9 */
/***/ function(module, exports) {

	var path = '/components/edit-pages/list/list.html';
	var html = "<edit-metadata article=\"article\"></edit-metadata>\n\n<content-edit-main-image article=\"article\"></content-edit-main-image>\n\n<content-edit-title article=\"article\" class=\"article-header\"></content-edit-title>\n\n<onion-editor id=\"content-description\"\n              ng-model=\"article.description\"\n              role=\"singleline\"\n              placeholder=\"Description goes here\"\n              formatting=\"\"></onion-editor>\n<div>\n\n  <editor-item article=\"article\" class=\"pull-right\"></editor-item>\n\n  <content-edit-body article=\"article\" link-domain=\"starwipe.com\" search-handler=\"linkBrowser\"></content-edit-body>\n</div>\n\n<section class=\"row post-cms-container\">\n  <label>\n    <input type=\"checkbox\" ng-model=\"article.is_numbered\">\n    Is numbered\n  </label>\n  <label ng-show=\"article.is_numbered\">\n    <input type=\"checkbox\" ng-model=\"article.is_countdown\">\n    Is countdown\n  </label>\n\n  <div class=\"clearfix\">\n    <post-image-groups article=\"article\"></post-image-groups>\n  </div>\n</section>\n\n\n<encode-status></encode-status>\n";
	window.angular.module('cms.starwipe.templates').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';
	
	angular.module('cms.editPages.postImageGroup', [
	  'cms.editPages.postImageGroups'
	])
	    .directive('postImageGroup', function () {
	      return {
	        replace: true,
	        restrict: 'E',
	        templateUrl: 'components/edit-pages/list/post-image-group.html',
	        scope: {
	          article: '=',
	          imageGroup: '='
	        }
	      };
	    });


/***/ },
/* 11 */
/***/ function(module, exports) {

	var path = '/components/edit-pages/list/post-image-group.html';
	var html = "<div class=\"post-image-group\">\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <div class=\"form-group\">\n        <label>Heading</label>\n        <onion-editor ng-model=\"imageGroup.heading\"\n                      role=\"singleline\"\n                      placeholder=\"Heading\"\n                      formatting=\"bold,italic,strike\"></onion-editor>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xs-4\">\n      <div class=\"form-group\">\n        <label>Image</label>\n\n        <div class=\"center-block\">\n          <betty-editable\n              image=\"imageGroup.image\"\n              ratio=\"1x1\"\n              add-styles=\"fa fa-camera-retro add-image-box p-img\">\n          </betty-editable>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xs-8\">\n      <div class=\"form-group\">\n        <label>Body</label>\n        <onion-editor ng-model=\"imageGroup.body\"\n                      role=\"multiline\"\n                      placeholder=\"Body\"></onion-editor>\n      </div>\n    </div>\n  </div>\n</div>\n";
	window.angular.module('cms.starwipe.templates').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';
	
	angular.module('cms.editPages.postImageGroups', [])
	    .directive('postImageGroups', function () {
	      return {
	        replace: true,
	        restrict: 'E',
	        templateUrl: 'components/edit-pages/list/post-image-groups.html',
	        scope: {
	          article: '='
	        },
	        controller: [
	          '$scope',
	          function ($scope) {
	            $scope.onAddImageGroup = function () {
	              var obj = {
	                heading: '',
	                body: '',
	                image: null
	              };
	              $scope.article.image_groups.push(obj);
	            };
	            $scope.onDeleteImageGroup = function (obj) {
	              var set = $scope.article.image_groups;
	              var idx = set.indexOf(obj);
	              if (idx >= 0) {
	                set.splice(idx, 1);
	              }
	            };
	            $scope.onMoveListObject = function (objList, startIndex, newIndex) {
	              if (startIndex >= 0 && newIndex >= 0 && newIndex < objList.length) {
	                var obj = objList[startIndex];
	                objList.splice(startIndex, 1);
	                objList.splice(newIndex, 0, obj);
	              }
	            };
	          }
	        ]
	      };
	    });


/***/ },
/* 13 */
/***/ function(module, exports) {

	var path = '/components/edit-pages/list/post-image-groups.html';
	var html = "<div class=\"post-image-groups\">\n  <div id=\"post-image-groups\"\n       class=\"post-image-groups\">\n    <div class=\"panel panel-default\"\n         ng-repeat=\"image_group in article.image_groups\">\n      <div class=\"panel-heading\">\n        <div class=\"pull-left panel-title h4\">\n          <span ng-hide=\"image_group.heading\"><strong>...</strong></span>\n          <span ng-bind-html=\"image_group.heading\"></span><span ng-show=\"image_group.heading\"></span>\n        </div>\n        <div class=\"pull-right btn-toolbar\">\n          <div class=\"btn-group\">\n            <button class=\"btn btn-link btn-xs\"\n                    ng-click=\"onMoveListObject(article.image_groups, $index, $index - 1)\"\n                    ng-disabled=\"$index == 0\">\n              <span class=\"fa fa-chevron-up\"></span>\n            </button>\n            <button class=\"btn btn-link btn-xs\"\n                    ng-click=\"onMoveListObject(article.image_groups, $index, $index + 1)\"\n                    ng-disabled=\"$last\">\n              <span class=\"fa fa-chevron-down\"></span>\n            </button>\n          </div>\n          <div class=\"btn-group\">\n            <button class=\"btn btn-link btn-xs\"\n                    ng-click=\"onDeleteImageGroup(image_group)\">\n              <span class=\"fa fa-times\"></span>\n            </button>\n          </div>\n        </div>\n      </div>\n      <div id=\"post-image-group-{{ $index }}\"\n           class=\"panel-body\">\n        <post-image-group article=\"article\"\n                          image-group=\"image_group\"></post-image-group>\n      </div>\n    </div>\n  </div>\n  <div class=\"row text-center post-cms-container\">\n    <button class=\"btn btn-success\"\n            ng-click=\"onAddImageGroup()\">\n      <span class=\"glyphicon glyphicon-plus\"></span> Add Image Group\n    </button>\n  </div>\n</div>\n";
	window.angular.module('cms.starwipe.templates').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 14 */
/***/ function(module, exports) {

	var path = '/components/edit-pages/quiz/quiz.html';
	var html = "<edit-metadata article=\"article\"></edit-metadata>\n\n<content-edit-main-image article=\"article\"></content-edit-main-image>\n\n<content-edit-title\n    article=\"article\"\n    class=\"article-header\">\n</content-edit-title>\n\n<onion-editor\n    id=\"content-description\"\n    ng-model=\"article.description\"\n    role=\"singleline\"\n    placeholder=\"Description goes here\"\n    formatting=\"\">\n</onion-editor>\n\n<content-edit-body\n    article=\"article\"\n    link-domain=\"starwipe.com\"\n    search-handler=\"linkBrowser\">\n</content-edit-body>\n\n<quiz-edit article=\"article\"></quiz-edit>\n";
	window.angular.module('cms.starwipe.templates').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 15 */
/***/ function(module, exports) {

	var path = '/components/edit-pages/slideshow/slideshow.html';
	var html = "<edit-metadata article=\"article\"></edit-metadata>\n\n<content-edit-main-image article=\"article\"></content-edit-main-image>\n\n<content-edit-title\n    article=\"article\"\n    class=\"article-header\">\n</content-edit-title>\n\n<onion-editor\n    id=\"content-description\"\n    ng-model=\"article.description\"\n    role=\"singleline\"\n    placeholder=\"Description goes here\"\n    formatting=\"\">\n</onion-editor>\n\n<onion-editor\n    id=\"content-body\"\n    ng-model=\"article.body\"\n    role=\"multiline\"\n    placeholder=\"<p>Write here</p>\"\n    link-domain=\"{{ linkDomain }}\"\n    link-search-handler=\"{{ searchHandler }}\">\n</onion-editor>\n\n<slideshow-edit article=\"article\"></slideshow-edit>\n";
	window.angular.module('cms.starwipe.templates').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 16 */
/***/ function(module, exports) {

	var path = '/components/edit-pages/video/video.html';
	var html = "<edit-metadata article=\"article\"></edit-metadata>\n\n<section class=\"main-image row\">\n  <div class=\"clearfix well\">\n    <video-search video=\"article.videohub_ref\"></video-search>\n  </div>\n</section>\n\n<content-edit-title\n    article=\"article\"\n    class=\"article-header\">\n</content-edit-title>\n\n<onion-editor id=\"content-description\" ng-model=\"article.description\" role=\"singleline\" placeholder=\"Description goes here\" formatting=\"\"></onion-editor>\n\n<editor-item article=\"article\" class=\"pull-right\" ></editor-item>\n<content-edit-body\n    article=\"article\"\n    link-domain=\"starwipe.com\"\n    search-handler=\"linkBrowser\">\n</content-edit-body>\n";
	window.angular.module('cms.starwipe.templates').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';
	
	angular.module('cms.starwipe.nav', []);


/***/ },
/* 18 */
/***/ function(module, exports) {

	var path = '/components/nav/nav.html';
	var html = "<nav\n    class=\"navbar navbar-default navbar-fixed-top\"\n    role=\"navigation\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button\n          type=\"button\"\n          class=\"navbar-toggle\"\n          data-toggle=\"collapse\"\n          data-target=\"#navbar-collapse\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a\n          id=\"logo\"\n          class=\"navbar-brand\"\n          href=\"/cms/app/list/\">\n        <img ng-src=\"{{ NAV_LOGO }}\">\n      </a>\n    </div>\n\n    <div\n        class=\"collapse navbar-collapse\"\n        id=\"navbar-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <active-nav\n            href=\"/cms/app/list/\"\n            label=\"Content\">\n        </active-nav>\n        <active-nav\n            href=\"/cms/app/promotion/\"\n            label=\"Promotion\"\n            hide-if-forbidden\n            options-url=\"pzone/\">\n        </active-nav>\n        <active-nav\n            ng-if=\"showManagementLinks\"\n            href=\"/cms/app/reporting/\"\n            label=\"Reporting\">\n        </active-nav>\n        <active-nav\n            href=\"/cms/app/notifications/\"\n            label=\"Notifications\">\n        </active-nav>\n        <active-nav\n            href=\"/cms/app/special-coverage/\"\n            label=\"Special Coverage\">\n        </active-nav>\n        <active-nav\n            href=\"/cms/app/section/\"\n            label=\"Sections\">\n        </active-nav>\n        <active-nav\n            href=\"/cms/app/polls/\"\n            label=\"Polls\">\n        </active-nav>\n      </ul>\n\n      <ul class=\"nav navbar-nav navbar-right\">\n        <logged-in-user></logged-in-user>\n      </ul>\n    </div>\n  </div>\n</nav>\n";
	window.angular.module('cms.starwipe.templates').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';
	
	angular.module('toolbar', [
	  'sendToEditor',
	  'sponsoredContentModal',
	  'backendApiHref'
	]);


/***/ },
/* 20 */
/***/ function(module, exports) {

	var path = '/components/toolbar/toolbar.html';
	var html = "<nav\n    ng-if=\"article\"\n    class=\"navbar navbar-default navbar-fixed-top\"\n    role=\"navigation\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a\n          id=\"logo\"\n          class=\"navbar-brand\"\n          href=\"/cms/app/list\">\n        <img ng-src=\"{{ NAV_LOGO }}\">\n      </a>\n      <button\n          type=\"button\"\n          class=\"navbar-toggle pull-right\"\n          data-toggle=\"collapse\"\n          data-target=\"#navbar-collapse\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a\n          class=\"navbar-save btn btn-success navbar-btn visible-xs-inline pull-right\"\n          ng-class=\"{'btn-clean': !articleIsDirty}\"\n          href=\"\"\n          ng-click=\"saveArticle();\">\n        <i class=\"fa fa-floppy-o\"></i>\n        <span>Save</span>\n      </a>\n    </div>\n\n    <div\n        class=\"collapse navbar-collapse\"\n        id=\"navbar-collapse\">\n      <ul class=\"nav navbar-nav edit-page-nav container-fluid\">\n        <li class=\"dropdown\">\n          <a\n              href=\"#\"\n              class=\"dropdown-toggle\"\n              data-toggle=\"dropdown\">\n            <span>Article Tools</span>\n            <b class=\"caret\"></b>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li>\n              <a\n                  href=\"\"\n                  role=\"button\"\n                  class=\"changelog-button\"\n                  ng-click=\"changelogModal(article);\">\n                <i class=\"fa fa-cog\"></i>\n                <span>View Changelog</span>\n              </a>\n            </li>\n            <li>\n              <a\n                  href=\"\"\n                  role=\"button\"\n                  class=\"version-browser-button\"\n                  ng-click=\"versionBrowserModal(article);\">\n                <i class=\"fa fa-th-list\"></i>\n                <span>Browse Versions</span>\n              </a>\n            </li>\n            <li>\n              <a\n                  href=\"\"\n                  role=\"button\"\n                  ng-click=\"thumbnailModal(article);\">\n                <i class=\"fa fa-camera\"></i>\n                <span>Edit Thumbnail</span>\n              </a>\n            </li>\n            <li>\n              <a\n                  href=\"\"\n                  role=\"button\"\n                  sponsored-content-modal-opener\n                  article=\"article\">\n                <i class=\"fa fa-briefcase\"></i>\n                <span>Edit Sponsor Info</span>\n              </a>\n            </li>\n            <li>\n              <a\n                  href=\"\"\n                  role=\"button\"\n                  ng-click=\"temporaryUrlModal(article)\">\n                <i class=\"fa fa-link\"></i>\n                <span>Temporary Link</span>\n              </a>\n            </li>\n            <li\n                role=\"presentation\"\n                class=\"divider\">\n            </li>\n            <li>\n              <a\n                  href=\"\"\n                  role=\"button\"\n                  ng-click=\"trashContentModal(article.id);\">\n                <i class=\"fa fa-trash-o\"></i>\n                <span>Delete Article</span>\n              </a>\n            </li>\n          </ul>\n        </li>\n      </ul>\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li\n              class=\"content-status\"\n              ng-show=\"activeUsers.length > 0\"\n              ng-init=\"showActiveUsers = false;\">\n            <a\n                href=\"\"\n                ng-mouseenter=\"showActiveUsers = true;\"\n                ng-mouseleave=\"showActiveUsers = false;\">\n              <i class=\"fa fa-eye\"></i>\n              <span class=\"active-users-btn-text\">Active Users ({{ activeUsers.length }})</span>\n            </a>\n            <div\n                class=\"active-users\"\n                ng-show=\"showActiveUsers\">\n              <ul>\n                <li ng-repeat=\"user in activeUsers\">\n                  <span>{{ user.displayName }}</span>\n                  <span ng-show=\"user.count > 1\">({{ user.count }})</span>\n                </li>\n              </ul>\n            </div>\n          </li>\n          <li\n              class=\"content-status\"\n              ng-show=\"getStatus(article) == 'unpublished'\">\n            <a\n                href=\"\"\n                send-to-editor-modal-opener\n                article=\"article\"\n                save-article=\"saveArticleIfDirty\"\n                publish-success-cbk=\"publishSuccessCbk\">\n              <i class=\"fa fa-paper-plane\"></i>\n              <span>Send to Editors...</span>\n            </a>\n          </li>\n          <li\n              class=\"content-status\"\n              ng-show=\"getStatus(article) == 'unpublished'\">\n            <a\n                href=\"\"\n                ng-click=\"saveArticle().then(pubTimeModal)\">\n              <i class=\"fa fa-globe\"></i>\n              <span>Publish...</span>\n            </a>\n          </li>\n          <li\n              class=\"content-status\"\n              ng-show=\"getStatus(article) == 'published'\">\n            <a\n                href=\"\"\n                class=\"changeable\"\n                ng-click=\"saveArticle().then(pubTimeModal);\">\n              <i class=\"fa fa-calendar\"></i>\n              <span>Published: {{article.published|tzDate:\"M/d/yy '@' h:mm a\" }}</span>\n            </a>\n          </li>\n          <li\n              class=\"content-status\"\n              ng-show=\"getStatus(article) == 'scheduled'\">\n            <a\n                href=\"\"\n                class=\"changeable\"\n                ng-click=\"saveArticle().then(pubTimeModal);\">\n              <i class=\"fa fa-calendar\"></i>\n              <span>Scheduled: {{article.published|tzDate:\"M/d/yy '@' h:mm a\" }}</span>\n            </a>\n          </li>\n          <li class=\"content-status\">\n            <a\n                target=\"_blank\"\n                backend-href=\"/r/{{article.id}}\">\n              <i class=\"fa fa-share\"></i>\n              <span>Preview</span>\n            </a>\n          </li>\n          <li class=\"hidden-xs\">\n            <button\n                id=\"save-article-btn\"\n                class=\"navbar-save btn btn-success btn-sm navbar-btn\"\n                ng-class=\"{'btn-clean': !articleIsDirty}\"\n                ng-click=\"saveArticle();\">\n              <i class=\"fa fa-floppy-o\"></i>\n              <span>Save</span>\n            </button>\n          </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n";
	window.angular.module('cms.starwipe.templates').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAYdJREFUeNrkV0FOwzAQNKjinB8QjpySByDRH0B/QF9QeAHwAugLCi9of0CQuOMbxzo/yJkTs9JGWlkktbdJjcRKK1uRoxnPrndtYyLt6+I7MwPaseKfMjUB8+8JTJEHZWoFspQELkmFoQhMNCGAN0kUQOxveHqNeX5QAlyA7sWnp4MRYPA3uNw1qbDal8DRDmACJNkXPZlv4cvzj5MXNQEATXl37Q4Lnsee9wru4LUg50DORinAOye/Iqk96btUeOXRArAZJASC0G1H0hHQDIDVqEkIgGcM81/Az/rAQ0p28DHkJJOJdhcgdTZoIYI98uh2ZX1ooYoiAFDHibYJWJ6H9AxNMyIC74E3p2IMAnVgM1qE9AwNgTYMffFfidqx7rvIatqx87NfFK6Sd557ofjEmiVVSr8qTswexuc8E/eEoqNq5kyswD+yTFcaAo04FdbrA60aa9FHaP0cazfqUqx8vGxZnVkX+KgGEg/w7Rh3wpjWfJrsYcJNqk79MmpSE7B/nsCPAAMAmZyCE75WwIkAAAAASUVORK5CYII="

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = "data:image/gif;base64,bW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArICJsb2FkaW5nLTExMTE5ZTJlZjc3NjJhNWI2MWMyMTI1MjhkNWVjN2JlLmdpZiI7"

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,bW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArICJxdWl6LWNvc21vZGUtZDc4M2RhMjk5ZmQ1N2Y1ZmExOTc4NTVhYmQ4ZWU3YzQucG5nIjs="

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,bW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArICJxdWl6LW9uZS1xdWVzdGlvbi01NzM1OWU4NWQ0MzM3MDI2OTkyZWUwMTkzOTU3MDE2Zi5wbmciOw=="

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,bW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArICJxdWl6LW9wZW4tZW5kZWQtNmI3ZDE1YzY2NjIzY2EyNjNjZTk3YjEwYjNiZjViNDYucG5nIjs="

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,bW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArICJxdWl6LXNjb3JlZC10ZXN0LTQyNTViODllYTRkMGEzZjZmNjNmMmY2M2E2OGRhZmNjLnBuZyI7"

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,bW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArICJzdGFyd2lwZS1sb2dvLTQ4YmNiMWMwNmVlNzYyMDQ5YjllNmIzMTdjZjY4NmE1LnBuZyI7"

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = {
		"image": {
			"size": [
				"big",
				"medium",
				"small"
			],
			"crop": [
				"original",
				"16x9",
				"1x1",
				"3x1"
			],
			"defaults": {
				"size": "big",
				"crop": "original",
				"image_id": 0,
				"caption": "",
				"url": ""
			},
			"template": "<div data-type='image' contenteditable='false' class='onion-image image inline size-{{size}} crop-{{crop}}' data-image-id='{{image_id}}' data-size='{{size}}' data-crop='{{crop}}' data-format='{{format}}'> <div></div><span class='caption'>{{caption}}</span></div>"
		},
		"onion-video": {
			"size": [
				"big",
				"small"
			],
			"crop": [
				"16x9",
				"4x3"
			],
			"defaults": {
				"size": "big",
				"crop": "16x9"
			},
			"template": "<div data-type='onion-video' contenteditable='false' class='onion-video video inline size-{{size}} crop-{{crop}}' data-video-id='{{video_id}}' data-size='{{size}}' data-crop='{{crop}}'><div><iframe src='{{embed_url}}{{video_id}}'></iframe></div></div>"
		},
		"embed": {
			"size": [
				"big",
				"small",
				"original"
			],
			"crop": [
				"original",
				"16x9",
				"4x3"
			],
			"defaults": {
				"size": "big",
				"crop": "original"
			},
			"template": "<div data-type='embed' contenteditable='false' data-crop='{{crop}}' data-size='{{size}}' class='inline embed size-{{size}} crop-{{crop}}' data-code='{{escaped_code}}' data-source='{{source}}'><div>{{code}}</div><span class='caption'>{{caption}}</span></div>"
		},
		"embed-instagram": {
			"size": [
				"original"
			],
			"crop": [
				"original"
			],
			"defaults": {
				"size": "original",
				"crop": "original"
			},
			"template": "<div data-type=\"embed-instagram\" class=\"inline embed embed-instagram crop-1x1\"><div class=\"embed-container\" instagram-embed-html-unsanitized=\"{{html}}\"><div class=\"unrendered\"><i class=\"fa fa-instagram\"></i><span>Instagram Embed</span></div></div><span class=\"caption\">{{caption}}</span></div>"
		},
		"youtube": {
			"size": [
				"big",
				"small"
			],
			"crop": [
				"16x9",
				"4x3"
			],
			"defaults": {
				"size": "big",
				"crop": "16x9",
				"youtube_id": "foMQX9ZExsE",
				"caption": ""
			},
			"template": "<div data-type='youtube' contenteditable='false' class='youtube inline size-{{size}} crop-{{crop}}' data-youtube-id='{{youtube_id}}' data-size='{{size}}' data-crop='{{crop}}'><div><img src='//img.youtube.com/vi/{{youtube_id}}/hqdefault.jpg'></div><span class='caption'>{{caption}}</span></div>"
		},
		"hr": {
			"template": "<div class='hr inline' contenteditable='false'><hr></div>"
		}
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	!(function () {
	  'use strict';
	
	  window.ExternalAssetLoader.addAsset({
	    url: '//assets3.onionstatic.com/onionstatic/starwipe/static/css/shared.css',
	    type: window.ExternalAssetLoader.TYPES.STYLE,
	    cacheBust: true
	  });
	})();


/***/ },
/* 30 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);
//# sourceMappingURL=cms.js.map