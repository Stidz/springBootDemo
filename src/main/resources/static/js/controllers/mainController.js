// Controller odpowiada za to co sie wyświetla na frontendzie,
// pobiera dane przez service i resource z backendu
(function() {
    "use strict";

    angular.module('testStidzApp').controller('mainController', mainController);

    mainController.$inject = ['$scope','mainService'];

    function mainController($scope, mainService){
//        $scope.hello = 'hello word';
        mainService.getUser('',function(success){
            $scope.hello = success;

        }, function(error){
            $scope.error = error;
        })
    }
})();