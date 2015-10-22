(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1]);
