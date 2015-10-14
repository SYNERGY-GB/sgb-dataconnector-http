'use strict';

angular.module('sgb-dataconnector-http', ['megazord'])
    .factory('sgb-dataconnector-http', ['$http', function ($http) {
        return {
            getData: function (params) {
                //Params must have the same syntax as the $http config object
                return $http(params);
            }
        } ;
    }]);
