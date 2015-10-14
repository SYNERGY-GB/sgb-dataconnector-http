sgb-dataconnector-http (HTTP connector, can be used as data source or as a data connector)
=====================================================

# Overview

This data connector allows you to make any custom HTTP calls before a transition occurs (a data connector), or to
retrieve data for a screen (a data source).

# Usage
        
1. On your screens.ts file, add the data source to the screen of your choice.

        export var screens : Megazord.ContainerScreenList = {
            login: {
                type: 'sgb-screen-login',
                dataSource: {
                    type: 'sgb-dataconnector-http',                    
                    params: {
                        url: '...',
                        method: 'GET',
                    }
                }
            }
        }

# Parameters

The parameters must match the ones available for the angular $http service. You can check them [here](https://docs.angularjs.org/api/ng/service/$http).

# Result

The object returned by this data connector is the promise returned from $http. You are responsible from retrieving the data from it.