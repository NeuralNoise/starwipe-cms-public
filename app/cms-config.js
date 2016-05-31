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
