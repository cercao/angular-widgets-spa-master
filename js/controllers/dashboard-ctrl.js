angular.module('angular-widget-app')
  .controller('dashboard-ctrl', function($scope, $http, userFactory, widgetFactory) {
    
    // find users
    userFactory.getUsers()
      .then(function (response) {
          $scope.users = response.data;
      }, function (error) {
          alert('Unable to load user data: ' + error.message);
      });      
      
    // find widgets
    widgetFactory.getWidgets()
      .then(function (response) {
          $scope.widgets = response.data;
      }, function (error) {
          alert('Unable to load widget data: ' + error.message);
      });    
        
            
  });