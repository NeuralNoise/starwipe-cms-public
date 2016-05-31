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
