angular.module('cms.starwipe.templates', []);

var context = require.context('./app', true);
context.keys().map(context);
