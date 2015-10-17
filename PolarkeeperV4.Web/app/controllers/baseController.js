'use strict';
app.controller('baseController', ['$scope', '$location', 'authService', function ($scope, $location, authService) {
    $scope.authentication = authService.authentication;
    $scope.logOut = function () {
        authService.logOut();
        $location.path('/home');
    }
    $scope.pageClass = 'page-home';
    $scope.date = new Date();
}]);
