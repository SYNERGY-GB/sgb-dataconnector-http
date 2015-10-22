'use strict';

angular.module('sgb-dataconnector-http', ['megazord'])
    .factory('sgb-dataconnector-http', ['$http','lodash', function ($http,_) {
        return {
            getData: function (params, event) {
                var httpParams = _.cloneDeep(params);
                //Params must have the same syntax as the $http config object
                if (!params.url) {
                    console.error('url is not defined'); 
                    return; 
                }
                var url = _.template(params.url); 
                if (!httpParams.data && event && event.params) {
                    httpParams.url = url(event.params); 
                    httpParams.data = event.params;
                }
                return $http(httpParams);
            }
        } ;
    }]);
