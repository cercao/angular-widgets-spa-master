angular.module('angular-widget-app')
.factory('widgetFactory', ['$http', function($http) {

    var urlBase = 'http://spa.tglrw.com:4000/widgets';
    var dataFactory = {};

    dataFactory.getWidgets = function () {
        return $http.get(urlBase);
    };

    dataFactory.getWidget = function (id) {
        return $http.get(urlBase + '/' + id);
    };

    dataFactory.insertWidget = function (cust) {
        return $http.post(urlBase, cust);
    };

    dataFactory.updateWidget = function (cust) {
        return $http.put(urlBase + '/' + cust.ID, cust)
    };    

    return dataFactory;
}]);