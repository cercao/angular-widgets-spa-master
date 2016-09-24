angular.module('angular-widget-app')
  .controller('user-ctrl', function($scope, userFactory) {
           
    // find users
    userFactory.getUsers()
      .then(function (response) {
          $scope.users = response.data;
      }, function (error) {
          alert('Unable to load user data: ' + error.message);
      });      
       
  });