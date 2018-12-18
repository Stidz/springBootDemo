// To w sumie uznałbym za taki punkt w krtórym mozemy wywolac wiele resource, i jakos obrobic wyniki zanim zwrócimy
// je do controllera
(function() {
    "use strict";

    angular.module('testStidzApp').service('mainService', mainService);

    mainService.$inject = ['mainResource'];

    function mainService(mainResource){
       var service = {};

       service.getUser = function(request,success,error){
            mainResource.getByName({}, success, error);
       }

       return service;
    }
})();