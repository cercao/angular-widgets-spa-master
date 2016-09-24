angular.module('angular-widget-app')
  .controller('widget-ctrl', function($scope, widgetFactory) {
           
    // find widgets
    widgetFactory.getWidgets()
      .then(function (response) {
          $scope.widgets = response.data;
      }, function (error) {
          alert('Unable to load widget data: ' + error.message);
      }); 
       
  });