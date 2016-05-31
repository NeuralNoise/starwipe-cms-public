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
