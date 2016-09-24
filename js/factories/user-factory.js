angular.module('angular-widget-app')
.factory('userFactory', ['$http', function($http) {

    var urlBase = 'http://spa.tglrw.com:4000/users';
    var dataFactory = {};

    dataFactory.getUsers = function () {
        return $http.get(urlBase);
    };

    dataFactory.getUser = function (id) {
        return $http.get(urlBase + '/' + id);
    };   

    return dataFactory;
}]);