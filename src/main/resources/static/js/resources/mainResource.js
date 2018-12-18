// Tutaj pukamy (wyciągamy) dane z backendu
(function () {
    "use strict";

    var mainResource = angular.module('mainResource', ['ngResource']);

    var getByNameUrl = '/api/users/getUsers';

    mainResource.service('mainResource', ['$resource', function ($resource) {
        return $resource(getByNameUrl, {},
            {
                getByName: {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                }
            });
    }])
})();