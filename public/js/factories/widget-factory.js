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

    dataFactory.insertWidget = function (widget) {
        return $http.post(urlBase, widget);
    };

    dataFactory.updateWidget = function (widget) {
        return $http.put(urlBase + '/' + widget.id, widget)
    };    

    return dataFactory;
}]);