'use strict';

var app = angular.module("app", [
  'ngRoute',
  'controllers',
  'directives',
  'filters'
]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/manage', {
          templateUrl: 'partials/manage.html',
          controller: 'ManageController'
      }).
      when('/submit', {
          templateUrl: 'partials/submit.html',
          controller: 'SubmitController'
      }).
      when('/item/:item', {
          templateUrl: 'partials/item.html',
          controller: 'ItemController'
      }).
      when('/update/:item', {
          templateUrl: 'partials/update.html',
          controller: 'UpdateController'
      }).
      when ('/', {
          redirectTo: '/manage'
      }).
      otherwise({
          redirectTo: '/manage'
      });
}]);
