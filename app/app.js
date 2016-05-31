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
