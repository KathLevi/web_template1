var app = angular.module('webApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "partials/home.htm",
        controller : 'main as ctrl'
    })
    .when("/page1", {
        templateUrl : "partials/page1.htm",
        controller : 'main as ctrl'
    })
    .when("/page2", {
        templateUrl : "partials/page2.htm",
        controller : 'main as crtl'
    })
	.when("/drop1", {
        templateUrl : "partials/drop1.htm",
        controller : 'main as crtl'
    })
	.when("/drop2", {
        templateUrl : "partials/drop2.htm",
        controller : 'main as crtl'
    })
})