'use strict';
app.controller('syncController', ['$scope', '$location', 'syncService', function ($scope, $location, syncService) {

    $scope.exercises = [];
    $scope.isBusy = true;
    $scope.error = "";

    syncService.getActivities(0, 20)
        .then(function (results) {

            $scope.exercises = results.data;

        }, function (error) {
        $scope.error = error.data.message;
    }).then(function () {
            // always
            $scope.isBusy = false;
        });

    $scope.addActivity = function (index) {
        syncService.addActivity($scope.exercises[index])
            .then(function (results) {
                $scope.exercises[index].uploaded = true;
            }, function (error) {
                $scope.error = error.data.message;
        }).then(function () {
            });
    }

}]);