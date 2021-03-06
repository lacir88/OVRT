/**
 * Created by DLaci on 2015.10.19..
 */
'use strict';

angular.module('myApp.view4', ['ngRoute'])

    .controller('View4Ctrl', ['$scope', '$routeParams', 'ComponentsService', 'Page',
        function($scope, $routeParams, ComponentsService, Page) {
            Page.setTitle('Pay the ride');
            Page.setCurrentStep(4);
            Page.setProgressBarClass('progress-bar-warning');

            $scope.ids=$routeParams.ids.split(',');
            $scope.componentTypes=["engine","rims","tires","exhaust"];
            $scope.components = ComponentsService.query();
        }]);