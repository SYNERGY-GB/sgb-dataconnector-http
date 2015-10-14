'use strict';

angular.module('sgb-dataconnector-http', ['megazord'])
    .factory('sgb-dataconnector-http', ['$http', function ($http) {
        return {
            getData: function (params, event) {
                //Params must have the same syntax as the $http config object
                if (!params.data && event && event.params) {
                    params.data = event.params;
                }
                return $http(params);
            }
        } ;
    }]);
