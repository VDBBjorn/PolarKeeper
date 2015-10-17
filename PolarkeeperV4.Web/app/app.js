
var app = angular.module('AngularAuthApp', ['ngRoute', 'LocalStorageModule', 'angular-loading-bar', 'ngAnimate', 'angulartics', 'angulartics.google.analytics']);

app.config(function ($routeProvider) {

    $routeProvider.when("/home", {
        controller: "homeController",
        templateUrl: "/app/views/home.html"
    });

    $routeProvider.when("/login", {
        controller: "loginController",
        templateUrl: "/app/views/login.html"
    });

    $routeProvider.when("/associate", {
        controller: "associateController",
        templateUrl: "/app/views/associate.html"
    });

    $routeProvider.when("/sync", {
        controller: "syncController",
        templateUrl: "/app/views/sync.html"
    });

    $routeProvider.when("/about", {
        templateUrl: "/app/views/about.html"
    });

    $routeProvider.otherwise({ redirectTo: "/home" });

});

app.config(function ($analyticsProvider) {
    $analyticsProvider.firstPageview(true); /* Records pages that don't use $state or $route */
    $analyticsProvider.withAutoBase(true);  /* Records full path */
});

var serviceBase = 'http://localhost:26264/';

app.constant('ngAuthSettings', {
    apiServiceBaseUri: serviceBase,
    clientId: 'ngAuthApp'
});

app.config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptorService');
});

app.run(['authService', function (authService) {
    authService.fillAuthData();
}]);

app.filter('format_time_polar', function () {
    return function (item) {
        return item.replace(/\..*/g, '');
    }
});
