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
