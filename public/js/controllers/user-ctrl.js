angular.module('angular-widget-app')
  .controller('user-ctrl', function($scope, userFactory) {
                      
    // find users
    userFactory.getUsers()
      .then(function (response) {
          $scope.users = response.data;
      }, function (error) {
          error.message ? 
                alert('Unable to load user data: ' + error.message) : alert('Unable to load user data.')
      });      
      
    $scope.view = function(id){
        
         // call detail 
         userFactory.getUser(id)
            .then(function (response) {
                $scope.detail = true;
                $scope.user = response.data;                
            }, function (error) {
                error.message ? 
                    alert('Unable to get user data: ' + error.message) : alert('Unable to get user data.')
            });   
    };
    
    $scope.close = function(){
        $scope.detail = false;
    };
       
  });