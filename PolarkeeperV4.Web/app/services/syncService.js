'use strict';
app.factory('syncService', ['$http', 'ngAuthSettings', function ($http, ngAuthSettings) {

    var serviceBase = ngAuthSettings.apiServiceBaseUri;

    var syncServiceFactory = {};

    var getActivities = function (offset, limit) {

        return $http.get(serviceBase + 'api/polar/exercises?limit=' + limit + '&offset=+' + offset)
            .then(function (results) {
                return results;
        });
    };

    var addActivity = function(activity) {
        return $http.post(serviceBase + '/api/runkeeper/addactivity', activity).
          success(function (data, status, headers, config) {
            }).
          error(function (data, status, headers, config) {

        });
    }

    syncServiceFactory.getActivities = getActivities;
    syncServiceFactory.addActivity = addActivity;

    return syncServiceFactory;

}]);